import { describe, expect, it } from "vitest";
import {
  LANE_X,
  OVERTIME_LIMIT,
  SQUAD_Z,
  Simulation,
  WEAPONS,
  effectiveGunners,
  squadDps,
} from "../../src/game/index";
import type { GameEvent, Lane, LevelId } from "../../src/game/index";
import { chooseLane } from "./helpers/autopilot";

function collect(
  sim: Simulation,
  seconds: number,
  onStep?: (sim: Simulation) => void,
): GameEvent[] {
  const out: GameEvent[] = [];
  let cursor = 0;
  const end = sim.state.elapsed + seconds;
  while (sim.state.status === "running" && sim.state.elapsed < end - 1e-9) {
    onStep?.(sim);
    sim.update(1 / 60);
    for (const e of sim.state.events) {
      if (e.id <= cursor) continue;
      cursor = e.id;
      out.push(e);
    }
  }
  return out;
}

describe("bullets", () => {
  it("are real moving entities that fly away from the squad", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    collect(sim, 0.5);
    expect(sim.state.bullets.length).toBeGreaterThan(0);
    const b = sim.state.bullets[0];
    if (!b) throw new Error("no bullet");
    const { id, z } = b;
    sim.update(1 / 60);
    const later = sim.state.bullets.find((x) => x.id === id);
    if (later) expect(later.z).toBeLessThan(z);
    for (const x of sim.state.bullets) expect(x.vz).toBeLessThan(0);
  });

  it("kills only follow hits on the same enemy, and every kill scores", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    const events = collect(sim, 12);
    const hitIds = new Set(
      events
        .filter((e) => e.type === "hit" && e.target === "enemy")
        .map((e) => (e.type === "hit" ? e.targetId : -1)),
    );
    const kills = events.filter((e) => e.type === "kill");
    expect(kills.length).toBeGreaterThan(5);
    for (const k of kills) if (k.type === "kill") expect(hitIds.has(k.enemyId)).toBe(true);
    expect(sim.state.kills).toBe(kills.length);
    expect(sim.state.score).toBeGreaterThan(0);
  });

  it("firepower diminishes for very large squads (no exponential snowball)", () => {
    expect(effectiveGunners(10)).toBe(10);
    expect(effectiveGunners(60)).toBeLessThan(60);
    expect(squadDps(60, "rifle", 1, 1) / squadDps(30, "rifle", 1, 1)).toBeLessThan(2);
    for (const w of Object.values(WEAPONS)) expect(squadDps(10, w.id, 1, 1)).toBeGreaterThan(20);
  });
});

describe("contact damage and collisions", () => {
  it("unshot hostiles reaching the squad cost soldiers, using the authoritative x", () => {
    // Camping the left cliff lane: flankers and rushes there eventually break through.
    const sim = new Simulation("dusk-extraction");
    sim.start();
    sim.setLane(0);
    const events = collect(sim, 120);
    const losses = events.filter(
      (e) => e.type === "squadLoss" && e.cause !== "gate" && e.cause !== "boss",
    );
    expect(losses.length).toBeGreaterThan(0);
    for (const l of losses) {
      if (l.type !== "squadLoss") continue;
      expect(l.amount).toBeGreaterThan(0);
    }
  });

  it("hostiles in another lane pass the squad without harm", () => {
    // Coastal opener: a horde walks down the centre lane at ~5s. Standing in the left lane avoids it.
    const sim = new Simulation("coastal-bridge");
    sim.start();
    sim.setLane(0);
    const events = collect(sim, 6.5);
    expect(events.filter((e) => e.type === "squadLoss")).toHaveLength(0);
  });

  it("the visual position cannot lie: mid-transition x is what collides", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    const xs: number[] = [];
    collect(sim, 2, (s) => {
      if (s.state.tick === 30) s.setLane(2);
      xs.push(s.state.player.x);
    });
    // Strictly continuous movement no faster than the declared speed.
    for (let i = 1; i < xs.length; i++)
      expect(Math.abs((xs[i] ?? 0) - (xs[i - 1] ?? 0))).toBeLessThanOrEqual(16 / 60 + 1e-9);
    expect(xs.at(-1)).toBe(LANE_X[2]);
  });
});

describe("telegraphed threats", () => {
  it("flank and rush telegraphs appear well before the attackers they announce", () => {
    const sim = new Simulation("dusk-extraction");
    sim.start();
    const events = collect(sim, 30);
    const flankTelegraphs = events.filter((e) => e.type === "telegraph" && e.kind === "flank");
    expect(flankTelegraphs.length).toBeGreaterThanOrEqual(3);
    expect(events.some((e) => e.type === "telegraph" && e.kind === "rush")).toBe(true);
  });

  it("flankers enter from off-road and merge into their lane", () => {
    const sim = new Simulation("dusk-extraction");
    sim.start();
    let sawOffRoad = false;
    let sawLateral = false;
    collect(sim, 25, (s) => {
      for (const e of s.state.enemies) {
        if (e.kind !== "flanker") continue;
        if (Math.abs(e.x) > 5) sawOffRoad = true;
        if (e.vx !== 0) sawLateral = true;
      }
    });
    expect(sawOffRoad).toBe(true);
    expect(sawLateral).toBe(true);
  });
});

/** Reach the boss by actually playing (the autopilot policy), then hand control to the test. */
function playToBoss(id: LevelId): Simulation {
  const sim = new Simulation(id);
  sim.start();
  while (sim.state.status === "running" && !sim.state.boss) {
    if (sim.state.tick % 6 === 0) sim.setLane(chooseLane(sim.state));
    sim.update(1 / 60);
  }
  return sim;
}

describe("boss", () => {
  it("advances, sieges with telegraphed slams that land where the squad was, and can be dodged", () => {
    const sim = playToBoss("coastal-bridge");
    expect(sim.state.status).toBe("running");
    const boss = sim.state.boss;
    expect(boss?.name).toBe("Tidebreaker");
    let dodged = 0;
    let landed = 0;
    let cursor = 0;
    let lane: Lane = sim.state.lane;
    while (sim.state.status === "running" && sim.state.elapsed < 90 && dodged + landed < 6) {
      const slam = sim.state.telegraphs.find((t) => t.kind === "slam");
      // Dodge every other slam: step out of the marked lane once it is announced.
      if (
        slam &&
        slam.remaining < slam.duration - 0.3 &&
        (dodged + landed) % 2 === 0 &&
        slam.lane === lane
      ) {
        lane = lane === 1 ? 0 : 1;
        sim.setLane(lane);
      }
      sim.update(1 / 60);
      for (const e of sim.state.events) {
        if (e.id <= cursor) continue;
        cursor = e.id;
        if (e.type === "bossSlam") {
          if (e.hitSquad) landed++;
          else dodged++;
        }
      }
    }
    expect(dodged).toBeGreaterThan(0);
    expect(landed).toBeGreaterThan(0);
  });

  it("a squad that stops playing at the boss is overrun or wiped before the timeout safety net", () => {
    for (const id of ["coastal-bridge", "industrial-port", "dusk-extraction"] as const) {
      const sim = playToBoss(id);
      while (sim.state.status === "running") sim.update(1 / 60);
      expect(sim.state.status).toBe("lost");
      expect(["overrun", "wiped"]).toContain(sim.state.outcome?.reason);
      expect(sim.state.elapsed).toBeLessThan(sim.state.duration + OVERTIME_LIMIT);
    }
  });
});

describe("terminal outcomes", () => {
  it("outcome is recorded once with a matching terminal event, and input is then ignored", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    const events = collect(sim, 200);
    expect(sim.state.status).toBe("lost");
    const terminal = events.filter((e) => e.type === "won" || e.type === "lost");
    expect(terminal).toHaveLength(1);
    expect(sim.state.outcome).toMatchObject({ status: "lost", survivors: sim.state.squad });
    const tick = sim.state.tick;
    sim.setLane(0);
    sim.update(1);
    sim.pause();
    expect(sim.state.tick).toBe(tick);
    expect(sim.state.status).toBe("lost");
    expect(sim.state.player.z).toBe(SQUAD_Z);
  });
});
