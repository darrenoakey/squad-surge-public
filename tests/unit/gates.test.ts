import { describe, expect, it } from "vitest";
import { applySquad, describeGate, normalizeGate } from "../../src/game/gates";
import { LEVEL_DEFINITIONS } from "../../src/game/levels";
import { LANE_X, SQUAD_CAP, Simulation } from "../../src/game/index";
import type { GameEvent, GateEffect, Lane } from "../../src/game/index";

const effect = (over: Partial<GateEffect>): GateEffect => ({
  kind: "recruit",
  squadAdd: 0,
  squadMultiply: 1,
  fireRateMultiplier: 1,
  damageMultiplier: 1,
  weapon: null,
  ...over,
});

describe("gate arithmetic", () => {
  it("multiplies first, then adds, clamped to [0, cap]", () => {
    expect(applySquad(10, effect({ squadAdd: 5 }))).toBe(15);
    expect(applySquad(10, effect({ kind: "multiply", squadMultiply: 2, squadAdd: -4 }))).toBe(16);
    expect(applySquad(7, effect({ kind: "multiply", squadMultiply: 3 }))).toBe(21);
    expect(applySquad(5, effect({ kind: "ambush", squadAdd: -8 }))).toBe(0);
    expect(applySquad(40, effect({ kind: "multiply", squadMultiply: 3 }))).toBe(SQUAD_CAP);
  });

  it("labels and costs are derived from the effect that will apply", () => {
    expect(describeGate(effect({ squadAdd: 6 }))).toEqual({
      label: "+6",
      detail: "",
      tone: "good",
    });
    expect(describeGate(effect({ kind: "ambush", squadAdd: -8 }))).toMatchObject({
      label: "\u22128",
      tone: "bad",
    });
    expect(describeGate(effect({ kind: "multiply", squadMultiply: 3, squadAdd: -4 }))).toEqual({
      label: "\u00d73",
      detail: "\u22124 soldiers",
      tone: "mixed",
    });
    expect(
      describeGate(effect({ kind: "damage", damageMultiplier: 1.6, fireRateMultiplier: 0.85 })),
    ).toEqual({
      label: "DMG +60%",
      detail: "\u221215% fire rate",
      tone: "mixed",
    });
    expect(describeGate(effect({ kind: "weapon", weapon: "lancer", squadAdd: -2 })).label).toBe(
      "LANCER",
    );
  });

  it("every authored gate row offers three lanes and is not all-upside", () => {
    for (const def of LEVEL_DEFINITIONS) {
      const rows = def.spawns.filter((s) => s.type === "gates");
      expect(rows.length).toBeGreaterThanOrEqual(5);
      let rowsWithCostOrRisk = 0;
      for (const row of rows) {
        if (row.type !== "gates") continue;
        expect(row.gates.map((g) => g.lane).sort()).toEqual([0, 1, 2]);
        const kinds = new Set(row.gates.map((g) => g.kind));
        expect(kinds.size).toBeGreaterThanOrEqual(2);
        if (row.gates.some((g) => describeGate(normalizeGate(g)).tone !== "good"))
          rowsWithCostOrRisk++;
      }
      expect(rowsWithCostOrRisk).toBeGreaterThanOrEqual(3);
    }
  });
});

/** Run until the first gate row crosses the squad line while holding `lane`. */
function crossFirstRow(lane: Lane): {
  sim: Simulation;
  gateEvents: Extract<GameEvent, { type: "gate" }>[];
} {
  const sim = new Simulation("dusk-extraction");
  sim.start();
  sim.setLane(lane);
  const gateEvents: Extract<GameEvent, { type: "gate" }>[] = [];
  let cursor = 0;
  while (sim.state.elapsed < 9) {
    sim.update(1 / 60);
    for (const e of sim.state.events) {
      if (e.id <= cursor) continue;
      cursor = e.id;
      if (e.type === "gate") gateEvents.push(e);
    }
  }
  return { sim, gateEvents };
}

describe("gates in the engine", () => {
  it("applies exactly one gate of a row, once, and removes the whole row", () => {
    const { sim, gateEvents } = crossFirstRow(0);
    expect(gateEvents).toHaveLength(1);
    const g = gateEvents[0];
    expect(g?.lane).toBe(0);
    expect(g?.label).toBe("+6");
    expect(g?.after).toBe((g?.before ?? 0) + 6);
    expect(sim.state.gates.some((x) => x.rowId === g?.rowId)).toBe(false);
  });

  it("cadence gate changes the live weapon state", () => {
    const { sim, gateEvents } = crossFirstRow(2);
    expect(gateEvents[0]?.label).toBe("FIRE +30%");
    expect(sim.state.weapon.fireRateMultiplier).toBeCloseTo(1.3);
    expect(sim.state.weapon.fireRate).toBeCloseTo(3 * 1.3);
  });

  it("shootable ambush gates grow as bullets hit them, and pay out what the label says", () => {
    const { gateEvents } = crossFirstRow(1);
    const g = gateEvents[0];
    // Dusk row 1 centre starts at −6 and grows with hits; the squad shot it on approach.
    expect(g?.effect.squadAdd).toBeGreaterThan(-6);
    expect(g?.effect.squadAdd).toBeLessThanOrEqual(14);
    expect(g?.after).toBe(Math.max(0, (g?.before ?? 0) + (g?.effect.squadAdd ?? 0)));
  });

  it("a squad straddling two gates takes only the nearer one", () => {
    const sim = new Simulation("coastal-bridge");
    sim.start();
    let cursor = 0;
    const taken: number[] = [];
    // Flip lanes repeatedly so the squad is often between lanes as the row arrives.
    let flip: Lane = 0;
    while (sim.state.elapsed < 8) {
      if (sim.state.tick % 9 === 0) {
        flip = flip === 0 ? 1 : 0;
        sim.setLane(flip);
      }
      sim.update(1 / 60);
      for (const e of sim.state.events) {
        if (e.id <= cursor) continue;
        cursor = e.id;
        if (e.type === "gate") {
          taken.push(e.rowId);
          expect(Math.abs(sim.state.player.x - LANE_X[e.lane])).toBeLessThanOrEqual(1.6 + 16 / 60);
        }
      }
    }
    expect(taken).toHaveLength(1);
  });
});
