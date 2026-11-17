import { LANE_X, SCROLL_SPEED, SPAWN_Z, SQUAD_Z } from "./types";
import type { EnemyKind, GateKind, Lane, LevelId, LevelSummary, WeaponId } from "./types";

// ------------------------------------------------------------ authoring ----

export interface EnemyStats {
  readonly hp: number;
  readonly radius: number;
  /** Forward speed toward the squad (includes scroll). */
  readonly speed: number;
  readonly contactDamage: number;
  readonly points: number;
}

export const ENEMY_STATS: Readonly<Record<EnemyKind, EnemyStats>> = {
  walker: { hp: 4, radius: 0.45, speed: 7, contactDamage: 1, points: 10 },
  runner: { hp: 2, radius: 0.4, speed: 12, contactDamage: 1, points: 15 },
  brute: { hp: 110, radius: 0.95, speed: 4.5, contactDamage: 6, points: 120 },
  flanker: { hp: 6, radius: 0.5, speed: 9, contactDamage: 2, points: 30 },
  barrel: { hp: 8, radius: 0.7, speed: SCROLL_SPEED, contactDamage: 3, points: 5 },
};

/** Barrel blast when shot: damage and radius against hostiles (never the squad). */
export const BARREL_BLAST = { damage: 16, radius: 2.8 } as const;
/** Flankers: lateral entry speed and starting distance from road centre. */
export const FLANK = { lateralSpeed: 9, startX: 9, leadTime: 2.8, telegraph: 1.6 } as const;
export const RUSH = { telegraph: 1.5 } as const;

export interface GateSpec {
  readonly lane: Lane;
  readonly kind: GateKind;
  readonly squadAdd?: number;
  readonly squadMultiply?: number;
  readonly fireRate?: number;
  readonly damage?: number;
  readonly weapon?: WeaponId;
  /** Shootable: each bullet hit adds perHit to squadAdd, up to max. */
  readonly grow?: { readonly perHit: number; readonly max: number };
}

/** `arrive`: seconds after start when the (lead) item reaches the squad line if unimpeded. */
export type SpawnSpec =
  | {
      readonly type: "horde";
      readonly arrive: number;
      readonly lane: Lane;
      readonly kind: "walker" | "runner" | "brute";
      readonly count: number;
      /** Bodies per rank (default 3 walkers / 2 runners / 1 brute). */
      readonly perRow?: number;
    }
  | { readonly type: "gates"; readonly arrive: number; readonly gates: readonly GateSpec[] }
  | {
      readonly type: "flank";
      readonly arrive: number;
      readonly lane: Lane;
      readonly side: -1 | 1;
      readonly count: number;
    }
  | { readonly type: "rush"; readonly arrive: number; readonly lane: Lane; readonly count: number }
  | { readonly type: "barrel"; readonly arrive: number; readonly lane: Lane }
  | { readonly type: "boss"; readonly at: number }
  | { readonly type: "wave"; readonly at: number; readonly name: string };

export interface BossSpec {
  readonly name: string;
  readonly hp: number;
  readonly radius: number;
  readonly advanceSpeed: number;
  /** z where the boss halts and starts slamming. */
  readonly siegeZ: number;
  readonly slamInterval: number;
  readonly slamTelegraph: number;
  /** Fraction of the squad lost when a slam lands on it (min slamMin). */
  readonly slamFraction: number;
  readonly slamMin: number;
  /** Seconds of siege before the enrage charge (which overruns the squad). */
  readonly enrageAfter: number;
  readonly enrageSpeed: number;
}

export interface LevelDefinition extends LevelSummary {
  readonly seed: number;
  /** Multiplier on walker/runner/flanker hp. */
  readonly hpScale: number;
  readonly boss: BossSpec | null;
  readonly spawns: readonly SpawnSpec[];
}

/** Travel time from SPAWN_Z to the squad line for a straight-moving item. */
export function travelTime(speed: number): number {
  return (SQUAD_Z - SPAWN_Z) / speed;
}

export function laneX(lane: Lane): number {
  return LANE_X[lane];
}

// ------------------------------------------------------------- helpers -----

const horde = (
  arrive: number,
  lane: Lane,
  kind: "walker" | "runner" | "brute",
  count: number,
  perRow?: number,
): SpawnSpec =>
  perRow === undefined
    ? { type: "horde", arrive, lane, kind, count }
    : { type: "horde", arrive, lane, kind, count, perRow };
const gates = (arrive: number, ...specs: GateSpec[]): SpawnSpec => ({
  type: "gates",
  arrive,
  gates: specs,
});
const flank = (arrive: number, lane: Lane, side: -1 | 1, count: number): SpawnSpec => ({
  type: "flank",
  arrive,
  lane,
  side,
  count,
});
const rush = (arrive: number, lane: Lane, count: number): SpawnSpec => ({
  type: "rush",
  arrive,
  lane,
  count,
});
const barrel = (arrive: number, lane: Lane): SpawnSpec => ({ type: "barrel", arrive, lane });
const wave = (at: number, name: string): SpawnSpec => ({ type: "wave", at, name });

const recruit = (lane: Lane, n: number, grow?: { perHit: number; max: number }): GateSpec =>
  grow
    ? { lane, kind: n < 0 ? "ambush" : "recruit", squadAdd: n, grow }
    : { lane, kind: n < 0 ? "ambush" : "recruit", squadAdd: n };
const multiply = (lane: Lane, factor: number, squadAdd = 0): GateSpec => ({
  lane,
  kind: "multiply",
  squadMultiply: factor,
  squadAdd,
});
const cadence = (lane: Lane, fireRate: number, squadAdd = 0, damage = 1): GateSpec => ({
  lane,
  kind: "fireRate",
  fireRate,
  squadAdd,
  damage,
});
const power = (lane: Lane, damage: number, fireRate = 1, squadAdd = 0): GateSpec => ({
  lane,
  kind: "damage",
  damage,
  fireRate,
  squadAdd,
});
const arm = (lane: Lane, weapon: WeaponId, squadAdd = 0): GateSpec => ({
  lane,
  kind: "weapon",
  weapon,
  squadAdd,
});

// -------------------------------------------------------------- levels -----

const COASTAL: LevelDefinition = {
  id: "coastal-bridge",
  index: 0,
  name: "Coastal Bridge",
  subtitle: "Hold the causeway at low tide",
  difficulty: 1,
  difficultyLabel: "Recruit",
  duration: 72,
  biome: "coastal",
  accent: "#ffb547",
  tradeoff:
    "Bodies or bullets: grow the squad on the flanks, or tune the guns in the hot centre lane.",
  briefing: [
    "Shoot the −8 gate up to +12, or take a sure +5.",
    "Crabwalk flankers from the dunes on both sides.",
    "Tidebreaker boss: dodge its slams, out-gun its enrage.",
  ],
  startingSquad: 6,
  startingWeapon: "rifle",
  bossName: "Tidebreaker",
  seed: 0x5eaf00d,
  hpScale: 1.4,
  boss: {
    name: "Tidebreaker",
    hp: 3000,
    radius: 4.6,
    advanceSpeed: 3,
    siegeZ: -12,
    slamInterval: 3.4,
    slamTelegraph: 1.3,
    slamFraction: 0.25,
    slamMin: 3,
    enrageAfter: 20,
    enrageSpeed: 6,
  },
  spawns: [
    wave(0, "Low tide"),
    horde(5, 1, "walker", 6),
    gates(7, recruit(0, 5), cadence(1, 1.25), recruit(2, -8, { perHit: 1, max: 12 })),
    horde(10, 0, "walker", 9),
    horde(11.5, 2, "walker", 9),
    horde(13, 1, "walker", 12),
    gates(16, multiply(0, 2), power(1, 1.4, 0.85), recruit(2, 7)),
    wave(17, "Dune crawlers"),
    flank(20, 0, -1, 3),
    horde(20, 1, "walker", 15),
    flank(23, 2, 1, 3),
    barrel(23.5, 1),
    horde(24.5, 1, "walker", 12),
    horde(26, 0, "walker", 12),
    horde(26, 2, "walker", 12),
    gates(29, arm(0, "smg"), arm(1, "rocket", -4), cadence(2, 1.35, -3)),
    horde(31, 1, "brute", 1),
    horde(32, 0, "walker", 15),
    horde(32, 2, "walker", 15),
    wave(34, "Breakwater"),
    rush(36, 1, 8),
    horde(37, 0, "walker", 18),
    flank(38, 2, 1, 4),
    horde(38.5, 1, "brute", 1),
    gates(40, recruit(0, 10), multiply(1, 2, -4), power(2, 1.5, 1, -6)),
    horde(43, 1, "walker", 21),
    horde(44, 2, "walker", 15),
    horde(45, 0, "brute", 1),
    barrel(46, 0),
    flank(47, 0, -1, 4),
    gates(49, cadence(0, 1.3), recruit(1, 8), arm(2, "lancer", -4)),
    wave(50, "Tidebreaker"),
    { type: "boss", at: 50 },
    rush(54, 2, 10),
    horde(56, 0, "walker", 12),
    horde(58, 2, "brute", 1),
    horde(60, 2, "walker", 12),
    horde(64, 1, "runner", 10),
  ],
};

const PORT: LevelDefinition = {
  id: "industrial-port",
  index: 1,
  name: "Industrial Port",
  subtitle: "Container yard under siege",
  difficulty: 2,
  difficultyLabel: "Veteran",
  duration: 80,
  biome: "industrial",
  accent: "#3fd0c9",
  tradeoff:
    "Armoured brutes reward piercing Lancers; swarms reward SMG cadence. You cannot have both.",
  briefing: [
    "Brutes shield the hordes behind them.",
    "Explosive drums: shoot them inside a pack.",
    "Gantry Hulk boss enrages after 18 s of siege.",
  ],
  startingSquad: 8,
  startingWeapon: "rifle",
  bossName: "Gantry Hulk",
  seed: 0xd0c4a2,
  hpScale: 1.7,
  boss: {
    name: "Gantry Hulk",
    hp: 4000,
    radius: 4.6,
    advanceSpeed: 3,
    siegeZ: -13,
    slamInterval: 3,
    slamTelegraph: 1.2,
    slamFraction: 0.28,
    slamMin: 3,
    enrageAfter: 18,
    enrageSpeed: 6.5,
  },
  spawns: [
    wave(0, "Yard gates"),
    horde(5, 1, "walker", 6),
    barrel(6, 0),
    gates(8, arm(0, "lancer"), recruit(1, 4), arm(2, "smg")),
    horde(11, 0, "walker", 12),
    horde(11, 2, "walker", 12),
    horde(13, 1, "brute", 1),
    horde(14.5, 1, "walker", 12),
    gates(17, recruit(0, -6, { perHit: 1, max: 14 }), power(1, 1.5, 0.8), multiply(2, 2)),
    wave(18, "Crane line"),
    horde(20, 2, "brute", 1),
    horde(21, 2, "walker", 15),
    flank(22, 0, -1, 4),
    barrel(23, 1),
    horde(24, 1, "walker", 18),
    rush(26, 0, 8),
    horde(27, 2, "walker", 15),
    gates(30, cadence(0, 1.4, -4), recruit(1, 9), power(2, 1.45)),
    horde(33, 0, "brute", 1),
    horde(33.5, 0, "walker", 15),
    horde(34, 1, "walker", 18),
    flank(35, 2, 1, 5),
    horde(36, 2, "walker", 18),
    wave(38, "Container maze"),
    gates(41, multiply(0, 2, -6), recruit(1, -6, { perHit: 1, max: 12 }), arm(2, "rocket")),
    horde(44, 1, "brute", 2),
    horde(45, 0, "walker", 21),
    rush(46, 2, 10),
    barrel(47, 1),
    horde(48, 1, "walker", 21),
    flank(49, 0, -1, 5),
    horde(50, 2, "walker", 18),
    gates(53, power(0, 1.5, 1, -5), cadence(1, 1.35), recruit(2, 12)),
    wave(55, "Gantry Hulk"),
    { type: "boss", at: 56 },
    rush(58, 0, 12),
    horde(60, 0, "walker", 15),
    horde(62, 0, "brute", 1),
    horde(63, 2, "walker", 15),
    flank(66, 1, 1, 5),
    horde(70, 1, "runner", 12),
  ],
};

const DUSK: LevelDefinition = {
  id: "dusk-extraction",
  index: 2,
  name: "Dusk Extraction",
  subtitle: "Last chopper off the headland",
  difficulty: 3,
  difficultyLabel: "Elite",
  duration: 88,
  biome: "dusk",
  accent: "#ff6b8b",
  tradeoff:
    "Every big multiplier sits behind a brute wall or a flank. Greed snowballs — or gets you wiped.",
  briefing: [
    "Flankers pour in from both cliffs.",
    "×3 gate guarded by twin brutes.",
    "Dread Colossus slams twice as often.",
  ],
  startingSquad: 8,
  startingWeapon: "rifle",
  bossName: "Dread Colossus",
  seed: 0xd05c,
  hpScale: 1.9,
  boss: {
    name: "Dread Colossus",
    hp: 4400,
    radius: 4.6,
    advanceSpeed: 3.2,
    siegeZ: -12,
    slamInterval: 2.4,
    slamTelegraph: 1.1,
    slamFraction: 0.3,
    slamMin: 4,
    enrageAfter: 18,
    enrageSpeed: 7,
  },
  spawns: [
    wave(0, "Headland"),
    horde(5, 1, "walker", 9),
    gates(7, recruit(0, 6), recruit(1, -6, { perHit: 1, max: 14 }), cadence(2, 1.3)),
    horde(10, 0, "walker", 12),
    horde(10, 2, "walker", 12),
    flank(12, 1, -1, 3),
    horde(13.5, 1, "walker", 15),
    gates(16, arm(0, "shotgun", 2), multiply(1, 2), arm(2, "lancer")),
    horde(17, 1, "brute", 1),
    wave(18, "Cliff runners"),
    flank(20, 0, -1, 4),
    flank(20.5, 2, 1, 4),
    horde(22, 1, "walker", 18),
    rush(24, 0, 10),
    horde(25, 2, "walker", 18),
    barrel(26, 1),
    gates(29, power(0, 1.6, 0.85), recruit(1, 10), cadence(2, 1.45, -4)),
    horde(31, 0, "walker", 21),
    horde(32, 1, "brute", 1),
    horde(32, 2, "walker", 21),
    flank(34, 1, 1, 5),
    wave(36, "Twin brutes"),
    horde(38, 0, "brute", 1),
    horde(38, 2, "brute", 1),
    gates(41, recruit(0, 8), multiply(1, 3, -4), recruit(2, 8)),
    horde(39.5, 1, "walker", 18),
    rush(44, 2, 12),
    horde(45, 1, "walker", 24),
    flank(46, 0, -1, 5),
    horde(47, 0, "walker", 21),
    barrel(48, 2),
    horde(49, 2, "walker", 21),
    gates(52, cadence(0, 1.35), power(1, 1.5, 1, -5), recruit(2, -8, { perHit: 1, max: 16 })),
    horde(55, 1, "walker", 24),
    flank(56, 2, 1, 6),
    wave(58, "Dread Colossus"),
    { type: "boss", at: 59 },
    horde(64, 0, "walker", 18),
    flank(67, 2, 1, 6),
    horde(70, 1, "runner", 14),
    flank(74, 0, -1, 6),
    horde(78, 2, "runner", 14),
  ],
};

export const LEVEL_DEFINITIONS: readonly LevelDefinition[] = [COASTAL, PORT, DUSK];

function summarize(def: LevelDefinition): LevelSummary {
  return {
    id: def.id,
    index: def.index,
    name: def.name,
    subtitle: def.subtitle,
    difficulty: def.difficulty,
    difficultyLabel: def.difficultyLabel,
    duration: def.duration,
    biome: def.biome,
    accent: def.accent,
    tradeoff: def.tradeoff,
    briefing: def.briefing,
    startingSquad: def.startingSquad,
    startingWeapon: def.startingWeapon,
    bossName: def.bossName,
  };
}

/** All missions, all unlocked, in order. */
export const LEVELS: readonly LevelSummary[] = LEVEL_DEFINITIONS.map(summarize);

export function isLevelId(value: string): value is LevelId {
  return LEVEL_DEFINITIONS.some((l) => l.id === value);
}

export function getLevelDefinition(id: string): LevelDefinition {
  const def = LEVEL_DEFINITIONS.find((l) => l.id === id);
  if (!def) throw new Error(`Unknown level id: ${id}`);
  return def;
}

export function getLevel(id: string): LevelSummary {
  return summarize(getLevelDefinition(id));
}

/** Next mission in order, or null after the last. */
export function nextLevelId(id: LevelId): LevelId | null {
  const def = getLevelDefinition(id);
  return LEVEL_DEFINITIONS[def.index + 1]?.id ?? null;
}
