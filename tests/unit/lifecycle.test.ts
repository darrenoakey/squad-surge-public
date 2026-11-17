import { describe, expect, it } from "vitest";
import {
  FIXED_STEP,
  LANE_X,
  LEVELS,
  MAX_FRAME_DELTA,
  SPAWN_Z,
  SQUAD_Z,
  Simulation,
} from "../../src/game/index";
import type { GameState } from "../../src/game/index";

function run(sim: Simulation, seconds: number, dt = 1 / 60): void {
  const steps = Math.round(seconds / dt);
  for (let i = 0; i < steps; i++) sim.update(dt);
}

/** Gameplay-relevant fingerprint (excludes globally unique ids). */
function fingerprint(s: GameState): string {
  return JSON.stringify({
    status: s.status,
    tick: s.tick,
    elapsed: s.elapsed,
    squad: s.squad,
    kills: s.kills,
    score: s.score,
    x: s.player.x,
    enemies: s.enemies.map((e) => [e.kind, e.x.toFixed(4), e.z.toFixed(4), e.hp.toFixed(4)]),
    bullets: s.bullets.length,
    gates: s.gates.map((g) => [g.label, g.z.toFixed(4)]),
    boss: s.boss ? [s.boss.hp, s.boss.z, s.boss.phase] : null,
  });
}

describe("construction and ready tableau", () => {
  it("rejects unknown levels", () => {
    expect(() => new Simulation("atlantis")).toThrow(/Unknown level/);
  });

  for (const level of LEVELS) {
    it(`${level.id}: ready state is a real, frozen opening tableau`, () => {
      const sim = new Simulation(level.id);
      const s = sim.state;
      expect(s.status).toBe("ready");
      expect(s.levelId).toBe(level.id);
      expect(s.elapsed).toBe(0);
      expect(s.squad).toBe(level.startingSquad);
      expect(s.lane).toBe(1);
      expect(s.player.x).toBe(LANE_X[1]);
      expect(s.player.z).toBe(SQUAD_Z);
      expect(s.duration).toBe(level.duration);
      expect(s.weapon.id).toBe(level.startingWeapon);
      // Representative hostiles and a gate row are already on the road.
      expect(s.enemies.length).toBeGreaterThan(3);
      expect(s.gates.length).toBe(3);
      for (const e of s.enemies) {
        expect(e.z).toBeGreaterThanOrEqual(SPAWN_Z - 1e-6);
        expect(e.z).toBeLessThan(SQUAD_Z);
      }
      const before = fingerprint(s);
      sim.update(1);
      sim.setLane(0);
      sim.move(1);
      expect(fingerprint(sim.state)).toBe(before);
      expect(s.events).toHaveLength(0);
    });
  }
});

describe("status transitions", () => {
  it("ready → running → paused → running, with guarded no-ops", () => {
    const sim = new Simulation("coastal-bridge");
    sim.pause();
    sim.resume();
    expect(sim.state.status).toBe("ready");
    sim.start();
    expect(sim.state.status).toBe("running");
    expect(sim.state.events.at(-1)?.type).toBe("start");
    sim.start();
    expect(sim.state.status).toBe("running");
    sim.pause();
    expect(sim.state.status).toBe("paused");
    sim.pause();
    expect(sim.state.status).toBe("paused");
    sim.resume();
    expect(sim.state.status).toBe("running");
  });

  it("restart returns to running with clocks, score and squad reset; reset returns to ready", () => {
    const sim = new Simulation("industrial-port");
    sim.start();
    run(sim, 20);
    expect(sim.state.elapsed).toBeGreaterThan(19);
    expect(sim.state.kills).toBeGreaterThan(0);
    const firstRun = sim.state.runId;
    sim.restart();
    expect(sim.state.status).toBe("running");
    expect(sim.state.runId).toBeGreaterThan(firstRun);
    expect(sim.state.elapsed).toBe(0);
    expect(sim.state.tick).toBe(0);
    expect(sim.state.kills).toBe(0);
    expect(sim.state.score).toBe(0);
    expect(sim.state.squad).toBe(LEVELS[1]?.startingSquad);
    expect(sim.state.outcome).toBeNull();
    expect(sim.state.events.map((e) => e.type)).toEqual(["start"]);
    sim.reset();
    expect(sim.state.status).toBe("ready");
  });

  it("restarted runs replay identically", () => {
    const sim = new Simulation("dusk-extraction");
    sim.start();
    run(sim, 30);
    const a = fingerprint(sim.state);
    sim.restart();
    run(sim, 30);
    expect(fingerprint(sim.state)).toBe(a);
    const other = new Simulation("dusk-extraction");
    other.start();
    run(other, 30);
    expect(fingerprint(other.state)).toBe(a);
  });

  it("runId and event ids are unique across instances and restarts", () => {
    const a = new Simulation("coastal-bridge");
    const b = new Simulation("coastal-bridge");
    expect(b.state.runId).not.toBe(a.state.runId);
    a.start();
    run(a, 3);
    b.start();
    run(b, 3);
    const lastA = a.state.events.at(-1)?.id ?? 0;
    const firstB = b.state.events[0]?.id ?? 0;
    expect(firstB).toBeGreaterThan(0);
    const ids = [...a.state.events, ...b.state.events].map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    a.restart();
    expect(a.state.events[0]?.id).toBeGreaterThan(Math.max(lastA, b.state.events.at(-1)?.id ?? 0));
    for (const e of a.state.events) expect(e.runId).toBe(a.state.runId);
  });
});

describe("time stepping", () => {
  it("pause freezes everything; resuming continues exactly as an unpaused run", () => {
    const paused = new Simulation("coastal-bridge");
    const straight = new Simulation("coastal-bridge");
    paused.start();
    straight.start();
    run(paused, 12);
    run(straight, 12);
    paused.pause();
    const frozen = fingerprint(paused.state);
    run(paused, 5);
    expect(fingerprint(paused.state)).toBe(frozen);
    paused.resume();
    run(paused, 8);
    run(straight, 8);
    expect(fingerprint(paused.state)).toBe(fingerprint(straight.state));
  });

  it("uses a fixed step independent of frame rate", () => {
    const a = new Simulation("industrial-port");
    const b = new Simulation("industrial-port");
    a.start();
    b.start();
    run(a, 25, 1 / 60);
    run(b, 25, 1 / 30);
    expect(fingerprint(b.state)).toBe(fingerprint(a.state));
  });

  it("clamps huge deltas instead of catching up (tab switch safety)", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    sim.update(30);
    expect(sim.state.elapsed).toBeLessThanOrEqual(MAX_FRAME_DELTA + 1e-9);
    expect(sim.state.tick).toBe(Math.round(MAX_FRAME_DELTA / FIXED_STEP));
    sim.update(Number.NaN);
    sim.update(-1);
    sim.update(Number.POSITIVE_INFINITY);
    expect(sim.state.tick).toBe(Math.round(MAX_FRAME_DELTA / FIXED_STEP));
  });

  it("accumulates sub-step deltas", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    for (let i = 0; i < 10; i++) sim.update(FIXED_STEP / 4);
    expect(sim.state.tick).toBe(2);
  });

  it("prunes the event buffer but keeps ids ascending", () => {
    const sim = new Simulation("dusk-extraction");
    sim.start();
    run(sim, 40);
    const ev = sim.state.events;
    expect(ev.length).toBeGreaterThan(0);
    for (let i = 1; i < ev.length; i++)
      expect(ev[i]?.id).toBeGreaterThan(ev[i - 1]?.id ?? Infinity);
    expect(ev[0]?.time).toBeGreaterThanOrEqual(sim.state.elapsed - 2.01);
  });
});

describe("lanes", () => {
  it("move and setLane stay in bounds and the squad slides at bounded speed", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    sim.move(-1);
    sim.move(-1);
    sim.move(-1);
    expect(sim.state.lane).toBe(0);
    sim.update(FIXED_STEP);
    // One step can't teleport: x is between centre and left lane.
    expect(sim.state.player.x).toBeLessThan(0);
    expect(sim.state.player.x).toBeGreaterThan(LANE_X[0]);
    run(sim, 0.5);
    expect(sim.state.player.x).toBe(LANE_X[0]);
    expect(sim.state.player.vx).toBe(0);
    sim.move(1);
    sim.move(1);
    sim.move(1);
    expect(sim.state.lane).toBe(2);
    run(sim, 0.5);
    expect(sim.state.player.x).toBe(LANE_X[2]);
    sim.setLane(1);
    run(sim, 0.5);
    expect(sim.state.player.x).toBe(LANE_X[1]);
    // @ts-expect-error runtime guard against bad input from untyped callers
    sim.setLane(3);
    expect(sim.state.lane).toBe(1);
  });

  it("a full two-lane traverse takes ~0.4s", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    sim.setLane(0);
    run(sim, 0.2);
    sim.setLane(2);
    let t = 0;
    while (sim.state.player.x !== LANE_X[2]) {
      sim.update(FIXED_STEP);
      t += FIXED_STEP;
    }
    expect(t).toBeGreaterThan(0.35);
    expect(t).toBeLessThan(0.45);
  });
});
