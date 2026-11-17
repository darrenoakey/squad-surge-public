// Launch, navigation, mission selection, run state, movement, pause, sound and outcomes.
import { expect } from "@playwright/test";
import { defineStep } from "../support/registry";
import { baseUrl, LANE_NAMES, type LaneName, type World } from "../support/world";
import {
  deploy,
  ensureDefeat,
  ensureLanding,
  ensurePaused,
  ensureRunActive,
  ensureVictory,
  expectEndScreen,
  expectRunning,
  missionId,
  playUntilEnd,
  selectMission,
  steerRoute,
} from "../support/flows";

// ---------------------------------------------------------------- launch ----

defineStep(/the app is running/, async () => {
  const response = await fetch(baseUrl());
  expect(response.status, "isolated test server answers /").toBe(200);
});

defineStep(/I browse to "([^"]+)"/, async (world, path = "/") => {
  const started = Date.now();
  await world.open(path);
  await expect(world.control("Deploy")).toBeEnabled({ timeout: 15_000 });
  world.metrics.landing_to_deploy_ready_ms = Date.now() - started;
});

defineStep(/the landing page is visible/, async (world) => {
  await ensureLanding(world);
});

defineStep(/(\d+) missions are offered/, async (world, count = "0") => {
  const cards = world.byTestId("mission-card");
  await expect(cards).toHaveCount(Number(count));
  for (const card of await cards.all()) {
    await expect(card.getByTestId("mission-name")).not.toBeEmpty();
    await expect(card.getByTestId("mission-tradeoff")).not.toBeEmpty();
  }
});

defineStep(/the "([^"]+)" control is visible/, async (world, name = "") => {
  await expect(world.control(name)).toBeVisible();
  await expect(world.control(name)).toBeEnabled();
});

defineStep(/the controls instructions are visible/, async (world) => {
  await expect(world.byTestId("instructions")).toBeVisible();
  await expect(world.byTestId("instructions")).not.toBeEmpty();
});

defineStep(/the landing page became interactive within (\d+) ms/, async (world, budget = "0") => {
  // Read-only navigation timing from the browser's own performance timeline.
  const timing = await world.page.evaluate(() => {
    const [nav] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const paints = performance
      .getEntriesByType("paint")
      .map((entry) => [entry.name, entry.startTime] as const);
    return {
      domInteractive: nav?.domInteractive ?? -1,
      domContentLoaded: nav?.domContentLoadedEventEnd ?? -1,
      load: nav?.loadEventEnd ?? -1,
      transferKb: (nav?.transferSize ?? 0) / 1024,
      firstContentfulPaint: paints.find(([name]) => name === "first-contentful-paint")?.[1] ?? -1,
    };
  });
  world.metrics.landing_dom_interactive_ms = Math.round(timing.domInteractive);
  world.metrics.landing_dom_content_loaded_ms = Math.round(timing.domContentLoaded);
  world.metrics.landing_load_ms = Math.round(timing.load);
  world.metrics.landing_first_contentful_paint_ms = Math.round(timing.firstContentfulPaint);
  expect(timing.domContentLoaded, "DOMContentLoaded").toBeGreaterThan(0);
  expect(timing.domContentLoaded).toBeLessThan(Number(budget));
  expect(world.metrics.landing_to_deploy_ready_ms, "browse → Deploy usable").toBeLessThan(
    Number(budget),
  );
});

/** Backend the suite requires per platform; no fallback is accepted. */
const EXPECTED_WEBGL = process.platform === "darwin" ? /ANGLE Metal Renderer/ : /SwiftShader/;

defineStep(/WebGL runs on the expected GPU backend/, async (world) => {
  // Read-only: query the browser's WebGL2 renderer string on a detached canvas.
  const info = await world.page.evaluate(() => {
    const gl = document.createElement("canvas").getContext("webgl2");
    if (!gl) return { webgl2: false, vendor: "", renderer: "" };
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    return {
      webgl2: true,
      vendor: ext ? String(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)) : "",
      renderer: ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "",
    };
  });
  await world.testInfo.attach("webgl-backend", {
    body: JSON.stringify(info),
    contentType: "application/json",
  });
  expect(info.webgl2, "WebGL2 context available").toBe(true);
  expect(info.renderer, `WebGL renderer on ${process.platform}`).toMatch(EXPECTED_WEBGL);
});

defineStep(/the 3D battlefield is rendering/, async (world) => {
  const canvas = world.byTestId("game-canvas");
  await expect(canvas).toBeVisible();
  const box = await canvas.boundingBox();
  expect(box?.width ?? 0, "canvas width").toBeGreaterThan(200);
  expect(box?.height ?? 0, "canvas height").toBeGreaterThan(200);
  const first = await canvas.screenshot();
  await world.passTime(700);
  const second = await canvas.screenshot();
  // A blank or uniform WebGL canvas compresses to a tiny PNG; a live scene does not.
  expect(first.length, "rendered canvas PNG size (blank canvases are tiny)").toBeGreaterThan(
    20_000,
  );
  expect(first.equals(second), "live attract scene animates between frames").toBe(false);
});

// -------------------------------------------------------------- missions ----

defineStep(/I select mission (\d)/, async (world, number = "1") => {
  await selectMission(world, Number(number));
});

defineStep(/mission (\d) is selected/, async (world, number = "1") => {
  await expect(world.byTestId("mission-card").nth(Number(number) - 1)).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});

defineStep(/exactly one mission is selected/, async (world) => {
  await expect(world.page.locator('[data-testid="mission-card"][aria-pressed="true"]')).toHaveCount(
    1,
  );
});

defineStep(/no run is active/, async (world) => {
  await expect(world.root()).toHaveAttribute("data-status", "ready");
  await expect(world.byTestId("pause-overlay")).toBeHidden();
  await expect(world.byTestId("landing")).toBeVisible();
});

// ------------------------------------------------------------- run state ----

defineStep(/I click "([^"]+)"/, async (world, name = "") => {
  await world.control(name).click();
});

defineStep(/I tap "([^"]+)"/, async (world, name = "") => {
  if (name === "Deploy") {
    await deploy(world);
    return;
  }
  await world.control(name).tap();
});

defineStep(/a run is active/, async (world) => {
  await ensureRunActive(world);
});

defineStep(/a run is active on mission (\d)/, async (world, number = "1") => {
  await expectRunning(world);
  await expect(world.root()).toHaveAttribute("data-level-id", missionId(world, Number(number)));
});

defineStep(/the HUD shows squad, weapon, kills, score and progress/, async (world) => {
  for (const id of ["hud-squad", "hud-weapon", "hud-kills", "hud-score", "hud-progress"]) {
    await expect(world.byTestId(id), id).toBeVisible();
    await expect(world.byTestId(id), id).not.toBeEmpty();
  }
  await expect(world.byTestId("hud-squad")).toContainText(String(await world.squad()));
  expect(await world.squad(), "starting squad").toBeGreaterThan(0);
});

defineStep(/elapsed time advances/, async (world) => {
  const before = await world.elapsed();
  const wallStart = Date.now();
  await world.waitForElapsed(before + 1, 15_000);
  const wallSeconds = (Date.now() - wallStart) / 1000;
  await expectRunning(world);
  // Simulation time never outruns real time (clamped frame deltas may slow it).
  expect(await world.elapsed()).toBeLessThanOrEqual(before + wallSeconds + 0.3);
});

// -------------------------------------------------------------- movement ----

function laneIndex(name: string): number {
  const index = LANE_NAMES.indexOf(name as LaneName);
  if (index < 0) throw new Error(`unknown lane "${name}"`);
  return index;
}

defineStep(/the squad is in the (left|center|right) lane/, async (world, lane = "") => {
  await expect(world.root()).toHaveAttribute("data-lane", String(laneIndex(lane)));
});

defineStep(/I press "([^"]+)"/, async (world, key = "") => {
  await world.page.keyboard.press(key);
});

defineStep(/I press "([^"]+)" (\d+) times/, async (world, key = "", times = "1") => {
  for (let i = 0; i < Number(times); i += 1) await world.page.keyboard.press(key);
});

// ----------------------------------------------------------------- pause ----

defineStep(/the run is paused/, async (world) => {
  await ensurePaused(world);
});

defineStep(/the pause overlay is visible/, async (world) => {
  await expect(world.byTestId("pause-overlay")).toBeVisible();
  await expect(world.control("Resume")).toBeVisible();
});

defineStep(/I wait (\d+) seconds/, async (world, seconds = "0") => {
  await world.passTime(Number(seconds) * 1000);
});

defineStep(/elapsed time and squad size are unchanged since pausing/, async (world) => {
  expect(await world.elapsed()).toBe(Number(world.vars.get("paused-elapsed")));
  expect(await world.squad()).toBe(Number(world.vars.get("paused-squad")));
  await expect(world.root()).toHaveAttribute("data-status", "paused");
});

defineStep(/elapsed time continues from where it paused/, async (world) => {
  const paused = Number(world.vars.get("paused-elapsed"));
  const resumedAt = await world.elapsed();
  expect(resumedAt, "elapsed is not reset by resuming").toBeGreaterThanOrEqual(paused);
  expect(resumedAt - paused, "no time jump across the pause").toBeLessThan(1);
  await world.waitForElapsed(resumedAt + 0.5, 15_000);
  await expectRunning(world);
});

defineStep(/elapsed time has restarted/, async (world) => {
  await expectRunning(world);
  const elapsed = await world.elapsed();
  expect(elapsed, "elapsed restarts near zero").toBeLessThan(1.5);
  const previous = world.vars.get("end-elapsed") ?? world.vars.get("paused-elapsed");
  if (previous !== undefined) expect(elapsed).toBeLessThan(Number(previous));
});

// ----------------------------------------------------------------- sound ----

async function soundPressed(world: World): Promise<string> {
  const value = await world.control("Sound").getAttribute("aria-pressed");
  if (value !== "true" && value !== "false")
    throw new Error(`sound-toggle aria-pressed is ${String(value)}`);
  return value;
}

function flipped(value: string | undefined): string {
  return value === "true" ? "false" : "true";
}

defineStep(/I reload the page/, async (world) => {
  await world.reload();
  await expect(world.control("Sound")).toBeVisible();
});

defineStep(/the sound preference is flipped/, async (world) => {
  expect(await soundPressed(world)).toBe(flipped(world.vars.get("sound-initial")));
});

defineStep(/the sound preference is still flipped/, async (world) => {
  await expect(world.control("Sound")).toHaveAttribute(
    "aria-pressed",
    flipped(world.vars.get("sound-initial")),
  );
});

defineStep(/the sound preference is unchanged/, async (world) => {
  await expect(world.control("Sound")).toHaveAttribute(
    "aria-pressed",
    world.vars.get("sound-initial") ?? "",
  );
});

// -------------------------------------------------------------- outcomes ----

defineStep(/the squad holds the center lane until the run ends/, async (world) => {
  await expect(world.root()).toHaveAttribute("data-lane", "1");
  await playUntilEnd(world);
});

defineStep(/the defeat screen is shown for mission (\d)/, async (world, number = "1") => {
  await ensureDefeat(world, Number(number));
});

defineStep(/the defeat happened after the opening (\d+) seconds/, (world, seconds = "0") => {
  expect(Number(world.vars.get("end-elapsed"))).toBeGreaterThan(Number(seconds));
});

defineStep(/"([^"]+)" and "([^"]+)" are offered/, async (world, first = "", second = "") => {
  for (const name of [first, second]) {
    await expect(world.control(name)).toBeVisible();
    await expect(world.control(name)).toBeEnabled();
  }
});

defineStep(
  /I steer the winning route for mission (\d) with the keyboard/,
  async (world, number = "1") => {
    await steerRoute(world, missionId(world, Number(number)));
  },
);

defineStep(/the victory screen is shown for mission (\d)/, async (world, number = "1") => {
  await ensureVictory(world, Number(number));
  await expectEndScreen(world, "won");
});

// -------------------------------------------------------- personal bests ----

function missionBest(world: World, number: number) {
  return world
    .byTestId("mission-card")
    .nth(number - 1)
    .getByTestId("mission-best");
}

defineStep(/every mission shows "([^"]+)"/, async (world, text = "") => {
  for (let number = 1; number <= 3; number += 1)
    await expect(missionBest(world, number)).toHaveText(text);
});

defineStep(/mission (\d) shows "([^"]+)"/, async (world, number = "1", text = "") => {
  await expect(missionBest(world, Number(number))).toHaveText(text);
});

defineStep(/no storage error is shown/, async (world) => {
  await expect(world.byTestId("storage-error")).toBeHidden();
  await expect(world.root()).not.toHaveAttribute("data-storage", "blocked");
  await expect(world.control("Deploy")).toBeEnabled();
});

defineStep(/the end screen reports a new personal best/, async (world) => {
  const best = world.byTestId("end-best");
  await expect(best).toContainText("New personal best");
  const score = (await world.byTestId("end-score").innerText()).trim();
  expect(score, "end-score").toMatch(/\d/);
  world.vars.set("best-score", score);
  await expect(best).toContainText(score);
});

defineStep(/mission (\d) shows the recorded personal best/, async (world, number = "1") => {
  const score = world.vars.get("best-score");
  if (!score) throw new Error("no personal best was recorded earlier in this scenario");
  await expect(missionBest(world, Number(number))).toContainText(`Best ${score}`);
});

// ------------------------------------------------------------- lifecycle ----

defineStep(/the field log starts fresh/, async (world) => {
  // Every entry is stamped with run time; nothing may predate this run's clock.
  const elapsed = await world.elapsed();
  const stamps = await world.byTestId("event-log").locator("li time").allInnerTexts();
  for (const stamp of stamps)
    expect(Number.parseInt(stamp, 10), `log entry ${stamp}`).toBeLessThanOrEqual(
      Math.ceil(elapsed) + 1,
    );
});

defineStep(/the squad scores kills and takes a gate/, async (world) => {
  await expect(world.byTestId("hud-kills"), "kills register in the HUD").not.toHaveText(
    /^\D*0\D*$/,
    {
      timeout: 45_000,
    },
  );
  await expect(world.byTestId("event-log"), "a gate is taken (field log)").toContainText("Took", {
    timeout: 45_000,
  });
  await expectRunning(world);
});
