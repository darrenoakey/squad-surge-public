// Keyboard pause race probe (QA evidence tool, not part of the gated suite).
// Repeats the real user path N times in fresh contexts on a fresh production
// build: click Deploy, press Space ONCE immediately, and require the run to be
// paused (no key retries, no waits before the press). Each cycle then checks
// that Space still drives the focused VISIBLE control (Resume while paused,
// Sound while running) exactly once, without also toggling pause.
// Read-only DOM reads only; no engine hooks, clock control or state seeding.
// Usage: npx vite-node tests/bdd/tools/pause-race-probe.ts [cycles] [headed]
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { chromium, type Page } from "@playwright/test";
import { build, preview } from "vite";
import { ROOT, sourceFingerprint } from "../support/provenance";

const cycles = Number(process.argv[2] ?? 20);
const headed = process.argv[3] === "headed";
const SETTLE_MS = 1000; // max time for one key press to show in the DOM (a few frames)
const OUT = join(ROOT, "test-results", "pause-race-probe");

interface Cycle {
  cycle: number;
  focusAtPress: string;
  pausedBySpace: boolean;
  resumedBySpace: boolean;
  resumeButtonSpace: string;
  soundButtonSpace: string;
  errors: string[];
}

async function focused(page: Page): Promise<string> {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    if (!el || el === document.body) return "body";
    const visible = el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden";
    return `${el.dataset.testid ?? el.tagName.toLowerCase()}${visible ? "" : "(hidden)"}`;
  });
}

async function statusBecomes(page: Page, status: string): Promise<boolean> {
  try {
    await page.waitForFunction(
      (s: string) =>
        document.querySelector<HTMLElement>('[data-testid="game-root"]')?.dataset.status === s,
      status,
      { polling: "raf", timeout: SETTLE_MS },
    );
    return true;
  } catch {
    return false;
  }
}

async function statusOf(page: Page): Promise<string> {
  return (await page.getByTestId("game-root").getAttribute("data-status")) ?? "";
}

/** Tab (real key presses) until the given control has focus. */
async function tabTo(page: Page, testid: string): Promise<boolean> {
  for (let i = 0; i < 40; i += 1) {
    await page.keyboard.press("Tab");
    if ((await focused(page)) === testid) return true;
  }
  return false;
}

const source = sourceFingerprint();
const outDir = mkdtempSync(join(tmpdir(), "squad-surge-pause-"));
await build({ root: ROOT, logLevel: "warn", build: { outDir, emptyOutDir: true } });
const server = await preview({
  root: ROOT,
  logLevel: "warn",
  build: { outDir },
  preview: { host: "127.0.0.1", port: 0, strictPort: false, open: false },
});
const url = server.resolvedUrls?.local[0];
if (!url) throw new Error("preview server has no local URL");
const browser = await chromium.launch({
  headless: !headed,
  channel: "chromium",
  args: ["--use-angle=metal", "--ignore-gpu-blocklist"],
});
const results: Cycle[] = [];
try {
  for (let cycle = 1; cycle <= cycles; cycle += 1) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(`console.error: ${m.text()}`);
    });
    await page.goto(url);
    await page.getByTestId("deploy-button").waitFor({ state: "visible" });
    await page.waitForFunction(
      () =>
        document.querySelector<HTMLButtonElement>('[data-testid="deploy-button"]')?.disabled ===
        false,
    );
    await page.getByTestId("deploy-button").click();
    if (!(await statusBecomes(page, "running"))) errors.push("Deploy did not start the run");
    const focusAtPress = await focused(page);
    await page.keyboard.press("Space");
    const pausedBySpace = await statusBecomes(page, "paused");

    // While paused: Space on the focused, visible Resume button resumes exactly once.
    let resumeButtonSpace = "skipped";
    let resumedBySpace = false;
    if (pausedBySpace) {
      const atResume = await focused(page);
      if (atResume === "resume-button" || (await tabTo(page, "resume-button"))) {
        await page.keyboard.press("Space");
        resumedBySpace = await statusBecomes(page, "running");
        await page.waitForTimeout(300); // would expose a double toggle back to paused
        resumeButtonSpace =
          resumedBySpace && (await statusOf(page)) === "running"
            ? "ok"
            : `status ${await statusOf(page)}`;
      } else {
        resumeButtonSpace = "resume-button unreachable by Tab";
      }
    }

    // While running: Space on the focused, visible Sound toggle flips it and does not pause.
    let soundButtonSpace = "skipped";
    if ((await statusOf(page)) === "running") {
      if (await tabTo(page, "sound-toggle")) {
        const before = await page.getByTestId("sound-toggle").getAttribute("aria-pressed");
        await page.keyboard.press("Space");
        await page.waitForTimeout(300);
        const after = await page.getByTestId("sound-toggle").getAttribute("aria-pressed");
        const status = await statusOf(page);
        soundButtonSpace =
          after !== before && status === "running"
            ? "ok"
            : `aria ${before}->${after}, status ${status}`;
      } else {
        soundButtonSpace = "sound-toggle unreachable by Tab";
      }
    }
    const row: Cycle = {
      cycle,
      focusAtPress,
      pausedBySpace,
      resumedBySpace,
      resumeButtonSpace,
      soundButtonSpace,
      errors,
    };
    results.push(row);
    console.log(JSON.stringify(row));
    await page.goto("about:blank");
    await context.close();
  }
} finally {
  await browser.close();
  await server.close();
  rmSync(outDir, { recursive: true, force: true });
}
const failures = results.filter(
  (r) =>
    !r.pausedBySpace ||
    r.resumeButtonSpace !== "ok" ||
    r.soundButtonSpace !== "ok" ||
    r.errors.length > 0,
);
const report = {
  measuredAt: new Date().toISOString(),
  source: source.hash,
  sourceAtEnd: sourceFingerprint().hash,
  mode: headed ? "headed" : "headless",
  cycles,
  pausedBySpace: results.filter((r) => r.pausedBySpace).length,
  failures: failures.length,
  results,
};
mkdirSync(OUT, { recursive: true });
writeFileSync(
  join(OUT, `pause-race-${report.mode}-${source.hash}.json`),
  `${JSON.stringify(report, null, 2)}\n`,
);
console.log(JSON.stringify({ ...report, results: undefined }));
if (failures.length > 0) process.exitCode = 1;
