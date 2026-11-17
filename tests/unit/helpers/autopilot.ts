import { LANE_X, SQUAD_Z, Simulation, WEAPONS, squadDps } from "../../../src/game/index";
import type { GameState, GateEffect, Lane, LevelId } from "../../../src/game/index";

/**
 * A real player policy: reads only the public GameState and issues only
 * public inputs (setLane). Used to prove missions are winnable by sensible
 * play and to record replayable lane schedules. Not a mock — it drives the
 * real engine through the same API the UI uses.
 */

const LANES: readonly Lane[] = [0, 1, 2];

function power(squad: number, weapon: GameState["weapon"]["id"], fr: number, dm: number): number {
  // Short-reach weapons spend part of each fight out of range of big targets.
  return squadDps(Math.max(0, squad), weapon, fr, dm) * Math.min(1, WEAPONS[weapon].range / 36);
}

function gateGain(state: GameState, e: GateEffect, route?: "bodies" | "guns"): number {
  const w = state.weapon;
  const before = power(state.squad, w.id, w.fireRateMultiplier, w.damageMultiplier);
  const squad = Math.max(
    0,
    Math.min(state.squadCap, Math.round(state.squad * e.squadMultiply) + e.squadAdd),
  );
  const after = power(
    squad,
    e.weapon ?? w.id,
    w.fireRateMultiplier * e.fireRateMultiplier,
    w.damageMultiplier * e.damageMultiplier,
  );
  // Bodies are also a buffer against contact damage.
  const base = (after - before) / Math.max(1, before) + (squad - state.squad) * 0.025;
  if (!route) return base;
  const bodies = e.kind === "recruit" || e.kind === "multiply";
  const guns = e.kind === "fireRate" || e.kind === "damage" || e.kind === "weapon";
  if (route === "bodies" && bodies) return base + 0.5;
  if (route === "guns" && guns) return base + 0.5;
  return base;
}

function laneOf(x: number): Lane {
  return x < -1.6 ? 0 : x > 1.6 ? 2 : 1;
}

export interface PolicyOptions {
  /** Ignore gates entirely (pure dodger). */
  readonly ignoreGates?: boolean;
  /** Route bias: "bodies" favours recruits/multipliers, "guns" favours cadence/damage/weapons. */
  readonly route?: "bodies" | "guns";
  /** Explicit route: lane to take at the k-th gate row (by order of appearance). Overrides gate valuation. */
  readonly plan?: readonly Lane[];
  /** Deliberately take the least valuable gate in every row (a careless player). */
  readonly worstGates?: boolean;
}

/** Choose a lane from the current state. */
export function chooseLane(state: GameState, opts: PolicyOptions = {}, rowsCrossed = 0): Lane {
  const score = [0, 0, 0];
  /** Contact danger in the next ~0.5 s per lane: crossing a lane in that window means touching it. */
  const imminent = [0, 0, 0];
  const dps = Math.max(1, state.weapon.dps);
  for (const e of state.enemies) {
    if (e.z < -30) continue;
    const speed = Math.max(1, e.vz);
    const eta = Math.max(0.05, (SQUAD_Z - e.z) / speed);
    if (eta > 3.2) continue;
    const futureX =
      e.vx !== 0 ? Math.max(-3.4, Math.min(3.4, e.x + e.vx * Math.min(eta, 0.8))) : e.x;
    const lane = laneOf(futureX);
    if (eta < 0.5) imminent[laneOf(e.x)] = (imminent[laneOf(e.x)] ?? 0) + e.contactDamage;
    // Threat: hp we cannot burn before it arrives, weighted by contact damage.
    const threat = (e.hp / dps) * e.contactDamage * (1 / eta);
    score[lane] = (score[lane] ?? 0) - threat * 3 - (eta < 1.2 ? e.contactDamage * 0.6 : 0);
  }
  for (const t of state.telegraphs) {
    if (t.kind === "slam") score[t.lane] = (score[t.lane] ?? 0) - 1000;
    else score[t.lane] = (score[t.lane] ?? 0) - 1.5;
  }
  if (!opts.ignoreGates) {
    const rows = new Map<number, GameState["gates"][number][]>();
    for (const g of state.gates) {
      const list = rows.get(g.rowId) ?? [];
      list.push(g);
      rows.set(g.rowId, list);
    }
    let nearest: GameState["gates"][number][] | null = null;
    let nearestZ = -Infinity;
    for (const row of rows.values()) {
      const z = row[0]?.z ?? -Infinity;
      if (z > nearestZ) {
        nearestZ = z;
        nearest = row;
      }
    }
    if (opts.plan) {
      if (nearest && nearestZ > -15) {
        const want = opts.plan[rowsCrossed];
        if (want !== undefined) score[want] = (score[want] ?? 0) + 8;
      }
    } else if (nearest && nearestZ > -24) {
      for (const g of nearest) {
        const eff = g.shootable
          ? { ...g.effect, squadAdd: Math.min(g.growthMax, g.effect.squadAdd + 6) }
          : g.effect;
        score[g.lane] =
          (score[g.lane] ?? 0) + gateGain(state, eff, opts.route) * (opts.worstGates ? -30 : 30);
      }
    }
  }
  const boss = state.boss;
  if (boss && boss.phase !== "dead") score[1] = (score[1] ?? 0) + 0.3;
  const current = state.player.targetLane;
  // Moving two lanes passes through the middle: penalise touching what is there.
  if (Math.abs(current - 1) === 1 && state.player.lane !== 1) {
    const far: Lane = current === 0 ? 2 : 0;
    score[far] = (score[far] ?? 0) - (imminent[1] ?? 0) * 10;
  }
  score[current] = (score[current] ?? 0) + 0.4; // hysteresis
  let best: Lane = current;
  for (const l of LANES) if ((score[l] ?? 0) > (score[best] ?? 0)) best = l;
  return best;
}

export interface LaneChange {
  readonly t: number;
  readonly lane: Lane;
}

export interface Trace {
  readonly status: GameState["status"];
  readonly reason: string | null;
  readonly elapsed: number;
  readonly squad: number;
  readonly kills: number;
  readonly score: number;
  readonly schedule: readonly LaneChange[];
  readonly minSquad: number;
  readonly gatesTaken: readonly string[];
}

function summarize(sim: Simulation, schedule: LaneChange[], minSquad: number): Trace {
  const s = sim.state;
  return {
    status: s.status,
    reason: s.outcome?.reason ?? null,
    elapsed: Math.round(s.elapsed * 100) / 100,
    squad: s.squad,
    kills: s.kills,
    score: s.score,
    schedule,
    minSquad,
    gatesTaken: [],
  };
}

/** Run a level with the autopilot; decisions every `thinkEvery` seconds. */
export function playAutopilot(
  levelId: LevelId,
  opts: PolicyOptions & { dt?: number; thinkEvery?: number; maxSeconds?: number } = {},
): Trace & { bossSpawnAt: number; bossDeadAt: number; dpsAtBoss: number; squadAtBoss: number } {
  const sim = new Simulation(levelId);
  sim.start();
  let rowsCrossed = 0;
  const dt = opts.dt ?? 1 / 60;
  const thinkEvery = opts.thinkEvery ?? 0.1;
  const schedule: LaneChange[] = [];
  const gatesTaken: string[] = [];
  let lastThink = -Infinity;
  let minSquad = sim.state.squad;
  let cursor = 0;
  let bossSpawnAt = -1;
  let bossDeadAt = -1;
  let dpsAtBoss = 0;
  let squadAtBoss = 0;
  const max = opts.maxSeconds ?? 300;
  while (sim.state.status === "running" && sim.state.elapsed < max) {
    if (sim.state.elapsed - lastThink >= thinkEvery - 1e-9) {
      lastThink = sim.state.elapsed;
      const lane = chooseLane(sim.state, opts, rowsCrossed);
      if (lane !== sim.state.lane) {
        sim.setLane(lane);
        schedule.push({ t: Math.round(sim.state.elapsed * 100) / 100, lane });
      }
    }
    sim.update(dt);
    minSquad = Math.min(minSquad, sim.state.squad);
    for (const e of sim.state.events) {
      if (e.id <= cursor) continue;
      cursor = e.id;
      if (e.type === "bossSpawn") {
        bossSpawnAt = e.time;
        dpsAtBoss = Math.round(sim.state.weapon.dps);
        squadAtBoss = sim.state.squad;
      }
      if (e.type === "bossDefeated") bossDeadAt = e.time;
      if (e.type === "gate") rowsCrossed++;
      if (e.type === "gate")
        gatesTaken.push(`${e.time.toFixed(1)}:${e.label}(${e.before}->${e.after})`);
    }
  }
  return {
    ...summarize(sim, schedule, minSquad),
    gatesTaken,
    bossSpawnAt,
    bossDeadAt,
    dpsAtBoss,
    squadAtBoss,
  };
}

/** Replay a fixed lane schedule (as a human pressing keys at times) with a given frame delta. */
export function playSchedule(
  levelId: LevelId,
  schedule: readonly LaneChange[],
  dt = 1 / 60,
  maxSeconds = 300,
): Trace {
  const sim = new Simulation(levelId);
  sim.start();
  let i = 0;
  let minSquad = sim.state.squad;
  while (sim.state.status === "running" && sim.state.elapsed < maxSeconds) {
    while (i < schedule.length && (schedule[i]?.t ?? Infinity) <= sim.state.elapsed + 1e-9) {
      const c = schedule[i];
      if (c) sim.setLane(c.lane);
      i++;
    }
    sim.update(dt);
    minSquad = Math.min(minSquad, sim.state.squad);
  }
  return summarize(sim, [...schedule], minSquad);
}

/** Never touch the controls. */
export function playIdle(levelId: LevelId, dt = 1 / 60): Trace {
  return playSchedule(levelId, [], dt);
}

export { LANE_X };
