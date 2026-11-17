// Entry point: turns every Gherkin scenario into a Playwright test and
// validates the Given-reachability tree rooted at "/".
import { join } from "node:path";
import { expect, test } from "@playwright/test";
import { loadFeatures, type Feature } from "./support/gherkin";
import { findStep } from "./support/registry";
import { World } from "./support/world";
import "./steps/app.steps";
import "./steps/layout.steps";

const features = loadFeatures(join(import.meta.dirname, "features"));

const ROOT_GIVEN = "the app is running";
const ARRANGED_GIVEN = "I am using a "; // device setup, arranged by the framework

/** Every scenario must be reachable from "/" through other scenarios' Then steps. */
function unreachableScenarios(all: readonly Feature[]): string[] {
  const scenarios = all.flatMap((feature) =>
    feature.scenarios.map((scenario) => ({ feature, scenario })),
  );
  const reachable = new Set<string>([ROOT_GIVEN]);
  const done = new Set<number>();
  let progressed = true;
  while (progressed) {
    progressed = false;
    scenarios.forEach(({ scenario }, index) => {
      if (done.has(index)) return;
      const givens = scenario.steps.filter(
        (step) => step.keyword === "Given" && !step.text.startsWith(ARRANGED_GIVEN),
      );
      if (!givens.every((step) => reachable.has(step.text))) return;
      done.add(index);
      progressed = true;
      for (const step of scenario.steps) if (step.keyword === "Then") reachable.add(step.text);
    });
  }
  return scenarios
    .filter((_, index) => !done.has(index))
    .map(({ feature, scenario }) => {
      const missing = scenario.steps
        .filter(
          (step) =>
            step.keyword === "Given" &&
            !step.text.startsWith(ARRANGED_GIVEN) &&
            !reachable.has(step.text),
        )
        .map((step) => step.text);
      return `${feature.file}: "${scenario.name}" — unreachable Given: ${missing.join("; ")}`;
    });
}

test.describe("BDD suite integrity", () => {
  test("every Given chains back to the landing page", () => {
    expect(unreachableScenarios(features)).toEqual([]);
  });

  test("every step is bound to exactly one primitive", () => {
    const problems: string[] = [];
    for (const feature of features) {
      for (const scenario of feature.scenarios) {
        for (const step of scenario.steps) {
          try {
            findStep(step.text);
          } catch (error) {
            problems.push(`${feature.file}:${step.line} ${(error as Error).message}`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
  });
});

// Longest-first dispatch: Playwright hands tests to workers in declaration
// order, so @long scenarios (full missions, 40-90 s each) are declared before
// short ones and never start last on an otherwise idle pool.
const isLong = (scenario: Feature["scenarios"][number]) => scenario.tags.includes("long");
for (const long of [true, false])
  for (const feature of features) {
    const scenarios = feature.scenarios.filter((scenario) => isLong(scenario) === long);
    if (scenarios.length === 0) continue;
    test.describe(feature.name, () => {
      for (const scenario of scenarios) {
        test(
          scenario.name,
          { tag: scenario.tags.map((tag) => `@${tag}`) },
          async ({ browser }, testInfo) => {
            if (scenario.tags.includes("long")) test.setTimeout(420_000);
            const world = new World(browser, testInfo, scenario.tags);
            try {
              for (const step of scenario.steps) {
                const { handler, args } = findStep(step.text);
                await test.step(`${step.keyword} ${step.text}`, async () => {
                  await handler(world, ...args);
                  world.failOnBrowserErrors();
                });
              }
              await test.step("no browser, WebGL or network errors", () =>
                world.assertNoBrowserErrors());
            } catch (error) {
              // Root-cause evidence in the error itself (error-context.md + log) and as an attachment.
              const snapshot = await world.diagnostics();
              await testInfo.attach("failure-diagnostics", {
                body: snapshot,
                contentType: "application/json",
              });
              const html = await world.pageHtml();
              if (html)
                await testInfo.attach("failure-dom.html", { body: html, contentType: "text/html" });
              if (error instanceof Error)
                error.message = `${error.message}\n\n--- app diagnostics ---\n${snapshot}`;
              throw error;
            } finally {
              await world.close();
            }
          },
        );
      }
    });
  }
