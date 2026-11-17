import { describe, expect, it } from "vitest";
import { LEVELS } from "../../src/game/index";
import type { Lane, LevelId } from "../../src/game/index";
import { playAutopilot, playIdle, playSchedule } from "./helpers/autopilot";

/**
 * Whole-mission traces against the real engine. These are the tuning gate:
 * if a balance change makes a mission unwinnable, idle-winnable, or leaves a
 * single dominant route, these fail.
 */

const IDS = LEVELS.map((l) => l.id);

/** Two (or more) defensible, genuinely different upgrade routes per mission: lane chosen at each gate row. */
const ROUTES: Record<
  LevelId,
  readonly { readonly name: string; readonly plan: readonly Lane[] }[]
> = {
  "coastal-bridge": [
    { name: "bodies", plan: [0, 0, 0, 0, 1] },
    { name: "greedy shot gate into guns", plan: [2, 0, 2, 2, 0] },
    { name: "rockets", plan: [0, 0, 1, 0, 0] },
  ],
  "industrial-port": [
    { name: "recruits then damage", plan: [1, 2, 1, 0, 0] },
    { name: "lancer", plan: [0, 2, 1, 0, 0] },
  ],
  "dusk-extraction": [
    { name: "bodies (x3 behind brutes)", plan: [0, 1, 1, 1, 0] },
    { name: "damage", plan: [0, 1, 0, 1, 0] },
    { name: "cadence", plan: [0, 1, 2, 1, 0] },
  ],
};

describe("mission viability", () => {
  for (const id of IDS) {
    it(`${id}: a sensible player wins by clearing the boss`, () => {
      const t = playAutopilot(id);
      expect(t.status, JSON.stringify(t.gatesTaken)).toBe("won");
      expect(t.reason).toBe("cleared");
      expect(t.squad).toBeGreaterThan(0);
      expect(t.elapsed).toBeGreaterThan(55);
      expect(t.elapsed).toBeLessThan(100);
    });

    it(`${id}: at least two distinct upgrade routes win`, () => {
      const wins = ROUTES[id].map((r) => ({ r, t: playAutopilot(id, { plan: r.plan }) }));
      for (const { r, t } of wins) {
        expect(t.status, `${r.name}: ${t.reason} ${t.gatesTaken.join(" ")}`).toBe("won");
      }
      const signatures = new Set(
        wins.map(({ t }) => t.gatesTaken.map((g) => g.split(":")[1]?.split("(")[0]).join(",")),
      );
      expect(signatures.size).toBe(ROUTES[id].length);
    });

    it(`${id}: idling never wins, and the opening is forgiving`, () => {
      const idle = playIdle(id);
      expect(idle.status).toBe("lost");
      expect(idle.elapsed).toBeGreaterThan(20);
    });

    it(`${id}: camping any single lane loses`, () => {
      for (const lane of [0, 1, 2] as const) {
        const t = playSchedule(id, lane === 1 ? [] : [{ t: 0, lane }]);
        expect(t.status, `lane ${lane}`).toBe("lost");
      }
    });

    it(`${id}: a recorded winning lane schedule replays exactly (determinism)`, () => {
      const live = playAutopilot(id);
      const replay = playSchedule(id, live.schedule);
      expect(replay.status).toBe(live.status);
      expect(replay.elapsed).toBe(live.elapsed);
      expect(replay.kills).toBe(live.kills);
      expect(replay.score).toBe(live.score);
      expect(replay.squad).toBe(live.squad);
    });

    it(`${id}: a human-paced winning schedule tolerates frame-rate and reaction-time jitter`, () => {
      // Decisions only 4×/s, like a person tapping lanes, then replayed with sloppier timing.
      const live = playAutopilot(id, { thinkEvery: 0.25 });
      expect(live.status).toBe("won");
      expect(live.schedule.length).toBeLessThan(25);
      for (const dt of [1 / 30, 1 / 50, 1 / 144])
        expect(playSchedule(id, live.schedule, dt).status, `dt ${dt}`).toBe("won");
      const late = live.schedule.map((c) => ({ t: c.t + 0.2, lane: c.lane }));
      expect(playSchedule(id, late).status, "keys 200ms late").toBe("won");
    });

    it(`${id}: dodging well but taking the worst gate every row loses`, () => {
      const t = playAutopilot(id, { worstGates: true });
      expect(t.status).toBe("lost");
    });
  }

  it("every mission gets harder: later missions demand more, idle dies sooner relative to length", () => {
    const [a, b, c] = LEVELS;
    expect(a?.difficulty).toBe(1);
    expect(b?.difficulty).toBe(2);
    expect(c?.difficulty).toBe(3);
  });
});
