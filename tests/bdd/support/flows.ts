// Reusable UI flows. Each "ensure" flow is idempotent: with no page open it
// drives the real UI from "/" to the requested state (making the Given chain
// executable); with a page open it asserts the state instead. This is what
// lets one phrase serve as a Then in one scenario and a Given in the next.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { expect } from "@playwright/test";
import type { World } from "./world";

const ROUTES_DIR = join(import.meta.dirname, "..", "routes");
const MAX_RUN_WALL_MS = 240_000;

export async function ensureLanding(world: World): Promise<void> {
  if (!world.hasPage) await world.open("/");
  await expect(world.byTestId("landing")).toBeVisible();
  if (await world.control("Deploy").isDisabled()) {
    await expect(world.control("Deploy"), `Deploy disabled: ${await world.blockers()}`).toBeEnabled(
      { timeout: 5000 },
    );
  }
  await expect(world.root()).toHaveAttribute("data-status", "ready");
  const cards = world.byTestId("mission-card");
  await expect(cards).toHaveCount(3);
  for (let index = 0; index < 3; index += 1) {
    const id = await cards.nth(index).getAttribute("data-mission-id");
    if (!id) throw new Error(`mission-card ${index + 1} has no data-mission-id`);
    world.vars.set(`mission-${index + 1}`, id);
  }
  if (!world.vars.has("sound-initial")) {
    world.vars.set(
      "sound-initial",
      (await world.control("Sound").getAttribute("aria-pressed")) ?? "",
    );
  }
}

export function missionId(world: World, number: number): string {
  const id = world.vars.get(`mission-${number}`);
  if (!id)
    throw new Error(
      `mission ${number} id unknown: the briefing was never observed in this scenario`,
    );
  return id;
}

export async function selectMission(world: World, number: number): Promise<void> {
  const card = world.byTestId("mission-card").nth(number - 1);
  await card.click();
  await expect(card).toHaveAttribute("aria-pressed", "true");
}

export async function expectRunning(world: World): Promise<void> {
  await expect(world.root()).toHaveAttribute("data-status", "running");
  await expect(world.byTestId("hud")).toBeVisible();
}

export async function ensureRunActive(world: World): Promise<void> {
  if (!world.hasPage) {
    await ensureLanding(world);
    await deploy(world);
  }
  await expectRunning(world);
}

export async function deploy(world: World): Promise<void> {
  if (world.device.hasTouch) await world.control("Deploy").tap();
  else await world.control("Deploy").click();
  await expectRunning(world);
}

export async function recordPauseSnapshot(world: World): Promise<void> {
  world.vars.set("paused-elapsed", String(await world.elapsed()));
  world.vars.set("paused-squad", String(await world.squad()));
}

export async function expectPaused(world: World): Promise<void> {
  await expect(world.root()).toHaveAttribute("data-status", "paused");
  await recordPauseSnapshot(world);
}

export async function ensurePaused(world: World): Promise<void> {
  if (!world.hasPage) {
    await ensureRunActive(world);
    await world.passTime(1500);
    await world.control("Pause").click();
  }
  await expectPaused(world);
}

/** Let the run play out in real time until it ends; returns the final status. */
export async function playUntilEnd(world: World): Promise<string> {
  await world.waitForStatusNot("running", MAX_RUN_WALL_MS);
  world.vars.set("end-elapsed", String(await world.elapsed()));
  return world.status();
}

export async function expectEndScreen(world: World, outcome: "won" | "lost"): Promise<void> {
  await expect(world.root()).toHaveAttribute("data-status", outcome);
  const screen = world.byTestId("end-screen");
  await expect(screen).toBeVisible();
  await expect(screen).toHaveAttribute("data-outcome", outcome);
}

/** Idle in the center lane on mission `number` until the run is lost. */
export async function ensureDefeat(world: World, number: number): Promise<void> {
  if (!world.hasPage) {
    await ensureLanding(world);
    await selectMission(world, number);
    await deploy(world);
    await expect(world.root()).toHaveAttribute("data-lane", "1");
    await playUntilEnd(world);
  }
  await expectEndScreen(world, "lost");
  await expect(world.root()).toHaveAttribute("data-level-id", missionId(world, number));
}

interface Waypoint {
  at: number;
  lane: 0 | 1 | 2;
}

interface Route {
  levelId: string;
  source: string;
  waypoints: Waypoint[];
}

export function loadRoute(levelId: string): Route {
  const route = JSON.parse(readFileSync(join(ROUTES_DIR, `${levelId}.json`), "utf8")) as Route;
  if (route.levelId !== levelId)
    throw new Error(`route file for ${levelId} declares ${route.levelId}`);
  return route;
}

/**
 * Replay a recorded lane schedule using only keyboard input. Arrow keys and
 * A/D alternate between waypoints so both bindings are exercised in play.
 */
export async function steerRoute(world: World, levelId: string): Promise<void> {
  const route = loadRoute(levelId);
  let useArrows = true;
  for (const waypoint of route.waypoints) {
    // data-elapsed has one decimal: wait past rounding so no press is early
    // (the routes are verified to tolerate presses up to 0.3 s late).
    await world.waitForElapsed(waypoint.at + 0.1, 60_000);
    if ((await world.status()) !== "running") break;
    const current = await world.lane();
    const delta = waypoint.lane - current;
    const key = delta < 0 ? (useArrows ? "ArrowLeft" : "a") : useArrows ? "ArrowRight" : "d";
    for (let i = 0; i < Math.abs(delta); i += 1) await world.page.keyboard.press(key);
    if (delta !== 0) {
      useArrows = !useArrows;
      await expect(world.root()).toHaveAttribute("data-lane", String(waypoint.lane));
    }
  }
  await playUntilEnd(world);
}

export async function ensureVictory(world: World, number: number): Promise<void> {
  if (!world.hasPage) {
    await ensureLanding(world);
    await selectMission(world, number);
    await deploy(world);
    await expect(world.root()).toHaveAttribute("data-level-id", missionId(world, number));
    await steerRoute(world, missionId(world, number));
  }
  await expectEndScreen(world, "won");
  await expect(world.root()).toHaveAttribute("data-level-id", missionId(world, number));
}
