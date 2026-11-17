/**
 * Squad Surge — authoritative simulation contract.
 *
 * Units: world units (≈ metres). Ground plane y = 0. The road runs along z:
 * hostiles, gates and hazards spawn near SPAWN_Z (far, negative z) and travel
 * toward +z; the squad stands at SQUAD_Z. Lanes are columns at LANE_X.
 * All times are seconds of simulation time (pause does not advance them).
 *
 * Consumers (renderer, UI, audio) treat every value here as read-only. The
 * simulation mutates its snapshot in place between `update()` calls; never
 * keep entity object references across frames — key by `id` instead.
 */

// ---------------------------------------------------------------- world ----

export type Lane = 0 | 1 | 2;
export const LANES: readonly Lane[] = [0, 1, 2];
/** Lane centre x for lane 0 (left), 1 (centre), 2 (right). */
export const LANE_X: readonly [number, number, number] = [-3.2, 0, 3.2];
/** Each gate tile spans ±GATE_HALF_WIDTH around its lane centre; tiles abut. */
export const GATE_HALF_WIDTH = 1.6;
/** Road half width (edges of the outer lanes). Flankers enter from beyond it. */
export const ROAD_HALF_WIDTH = 4.8;
export const SQUAD_Z = 7;
export const SPAWN_Z = -42;
/** Anything with z beyond this (behind the squad) is removed. */
export const DESPAWN_Z = 12;
/** Bullets beyond this (far away) are removed. */
export const BULLET_FAR_Z = -46;
export const GROUND_Y = 0;

/** Simulation fixed step and catch-up bound. */
export const FIXED_STEP = 1 / 60;
/** update(delta) clamps delta to this; excess wall time is dropped, never queued. */
export const MAX_FRAME_DELTA = 0.25;
/** Forward scroll speed: gates, barrels and debris approach at this speed. */
export const SCROLL_SPEED = 6;
/** Lateral squad speed (units/s). One lane hop (3.2) takes ≈ 0.2 s. */
export const LANE_SWITCH_SPEED = 16;
/** Hard ceiling on squad size. Gates that would exceed it are clamped. */
export const SQUAD_CAP = 60;

// --------------------------------------------------------------- status ----

export type GameStatus = "ready" | "running" | "paused" | "won" | "lost";

/**
 * Terminal reasons.
 *  - cleared: every scheduled spawn has appeared, boss (if any) is dead and no
 *    hostile remains on the road → won.
 *  - wiped: squad count reached 0 → lost. Takes precedence over `cleared` if
 *    both happen in the same step.
 *  - overrun: the boss reached the squad line (after its enrage) → lost.
 *  - timeout: safety net; elapsed exceeded duration + OVERTIME_LIMIT → lost.
 *    It cannot normally trigger because the boss enrage resolves first.
 */
export type OutcomeReason = "cleared" | "wiped" | "overrun" | "timeout";
export const OVERTIME_LIMIT = 45;

export interface Outcome {
  readonly status: "won" | "lost";
  readonly reason: OutcomeReason;
  /** Squad remaining at the end. */
  readonly survivors: number;
  /** Final score including survivor bonus (won only). */
  readonly score: number;
  readonly elapsed: number;
}

// --------------------------------------------------------------- levels ----

export type LevelId = "coastal-bridge" | "industrial-port" | "dusk-extraction";
export type BiomeId = "coastal" | "industrial" | "dusk";
export type Difficulty = 1 | 2 | 3;

export interface LevelSummary {
  readonly id: LevelId;
  readonly index: number; // 0-based order
  readonly name: string;
  readonly subtitle: string;
  readonly difficulty: Difficulty;
  readonly difficultyLabel: string; // "Recruit" | "Veteran" | "Elite"
  /** Nominal mission length in seconds (schedule end, incl. boss spawn). */
  readonly duration: number;
  readonly biome: BiomeId;
  /** CSS hex colour, e.g. "#ffb547". */
  readonly accent: string;
  /** One-line tradeoff teaser for mission cards. */
  readonly tradeoff: string;
  /** Short bullet points for mission cards. */
  readonly briefing: readonly string[];
  readonly startingSquad: number;
  readonly startingWeapon: WeaponId;
  readonly bossName: string | null;
}

// -------------------------------------------------------------- weapons ----

export type WeaponId = "rifle" | "smg" | "shotgun" | "lancer" | "rocket";

export interface WeaponSpec {
  readonly id: WeaponId;
  readonly name: string;
  readonly blurb: string;
  /** Volleys per second before multipliers. */
  readonly fireRate: number;
  /** Damage per gunner per volley before multipliers. */
  readonly damagePerGunner: number;
  /** Max bullets per volley; gunners' damage is pooled into them. */
  readonly maxBullets: number;
  readonly bulletSpeed: number;
  /** Enemies a bullet can pass through (1 = stops at first). */
  readonly pierce: number;
  /** Lateral fan half-angle factor (vx = spread * offset). 0 = straight. */
  readonly spread: number;
  /** Bullets expire after this distance travelled. */
  readonly range: number;
  /** Area damage radius on impact (0 = none). */
  readonly splashRadius: number;
}

// ------------------------------------------------------------- entities ----

export type EnemyKind = "walker" | "runner" | "brute" | "flanker" | "barrel";

export interface EnemySnapshot {
  readonly id: number;
  readonly kind: EnemyKind;
  /** World x (flankers move laterally; walkers jitter inside their lane). */
  readonly x: number;
  readonly z: number;
  /** Velocity (units/s) for facing / run-cycle speed. */
  readonly vx: number;
  readonly vz: number;
  /** Nearest lane to x (for UI/labels only; collisions use x). */
  readonly lane: Lane;
  readonly hp: number;
  readonly maxHp: number;
  /** Collision radius. */
  readonly radius: number;
  /** Soldiers removed if it reaches the squad. Barrels: soldiers lost on touch. */
  readonly contactDamage: number;
  /** Sim time of last bullet hit (or -1). Use for hit flash. */
  readonly lastHitAt: number;
  readonly spawnedAt: number;
}

export interface BulletSnapshot {
  readonly id: number;
  readonly weapon: WeaponId;
  readonly x: number;
  readonly z: number;
  readonly vx: number;
  readonly vz: number;
  /** Remaining damage pool carried by the round. */
  readonly damage: number;
  readonly radius: number;
}

export type GateKind = "recruit" | "multiply" | "fireRate" | "damage" | "weapon" | "ambush";
export type GateTone = "good" | "bad" | "mixed";

/** Normalised gate effect. Applied once when the squad crosses the row. */
export interface GateEffect {
  readonly kind: GateKind;
  /** Soldiers added (negative = lost). Applied after multiply. */
  readonly squadAdd: number;
  /** Squad multiplier (1 = none). */
  readonly squadMultiply: number;
  /** Multiplies cadence (1 = none). */
  readonly fireRateMultiplier: number;
  /** Multiplies per-gunner damage (1 = none). */
  readonly damageMultiplier: number;
  /** Swaps weapon (null = keep). */
  readonly weapon: WeaponId | null;
}

export interface GateSnapshot {
  readonly id: number;
  /** All gates of one row share rowId; at most one per row is ever applied. */
  readonly rowId: number;
  readonly lane: Lane;
  readonly x: number;
  readonly z: number;
  readonly halfWidth: number;
  /** Current effect (shootable gates change squadAdd as they are shot). */
  readonly effect: GateEffect;
  /** Big label, e.g. "+6", "×2", "−8", "SMG", "FIRE +50%". */
  readonly label: string;
  /** Cost/side-effect line, e.g. "−20% damage" or "" when none. */
  readonly detail: string;
  readonly tone: GateTone;
  /** Shootable gates absorb bullets and grow by growthPerHit up to growthMax. */
  readonly shootable: boolean;
  readonly growthPerHit: number;
  readonly growthMax: number;
  readonly lastHitAt: number;
}

export type TelegraphKind = "flank" | "rush" | "slam";

/** Warning before a threat materialises. Shown for `duration`, counts down `remaining`. */
export interface TelegraphSnapshot {
  readonly id: number;
  readonly kind: TelegraphKind;
  readonly lane: Lane;
  /** -1 = from the left, 1 = from the right, 0 = straight down the lane. */
  readonly side: -1 | 0 | 1;
  /** Where the threat appears / lands. */
  readonly x: number;
  readonly z: number;
  readonly duration: number;
  readonly remaining: number;
}

export type BossPhase = "advancing" | "siege" | "enraged" | "dead";

export interface BossSnapshot {
  readonly id: number;
  readonly name: string;
  readonly x: number;
  readonly z: number;
  readonly hp: number;
  readonly maxHp: number;
  /** Hit radius on x (wide: covers most of the road). */
  readonly radius: number;
  readonly phase: BossPhase;
  /** Seconds until enrage charge while in siege (0 otherwise). */
  readonly enrageIn: number;
  readonly lastHitAt: number;
}

export interface PlayerSnapshot {
  /** Authoritative squad centre x used by every collision. Render this directly. */
  readonly x: number;
  readonly z: number;
  /** Target lane (input). */
  readonly targetLane: Lane;
  /** Lane nearest to x. */
  readonly lane: Lane;
  /** Lateral velocity for lean animation. */
  readonly vx: number;
  /** Half width of the formation on x (collision width). */
  readonly halfWidth: number;
  /** Sim time of last soldier loss (or -1), for hurt flash. */
  readonly lastHurtAt: number;
}

export interface WeaponState {
  readonly id: WeaponId;
  readonly name: string;
  readonly fireRateMultiplier: number;
  readonly damageMultiplier: number;
  /** Effective volleys/second. */
  readonly fireRate: number;
  /** Effective sustained damage per second of the whole squad. */
  readonly dps: number;
}

export interface WaveInfo {
  readonly index: number; // 0-based, -1 before first
  readonly total: number;
  readonly name: string;
}

// --------------------------------------------------------------- events ----

interface EventBase {
  /** Globally unique and strictly increasing across ALL Simulation instances and restarts (never reused in a page). */
  readonly id: number;
  readonly runId: number;
  readonly tick: number;
  readonly time: number;
}

export type GameEvent = EventBase &
  (
    | { readonly type: "start" }
    | {
        readonly type: "volley";
        readonly weapon: WeaponId;
        readonly x: number;
        readonly z: number;
        readonly bullets: number;
      }
    | {
        readonly type: "hit";
        readonly target: "enemy" | "boss" | "gate";
        readonly targetId: number;
        readonly x: number;
        readonly z: number;
        readonly damage: number;
      }
    | {
        readonly type: "kill";
        readonly enemyId: number;
        readonly kind: EnemyKind;
        readonly x: number;
        readonly z: number;
        readonly points: number;
      }
    | {
        readonly type: "squadLoss";
        readonly amount: number;
        readonly cause: EnemyKind | "boss" | "gate";
        readonly x: number;
        readonly z: number;
        readonly squad: number;
      }
    | {
        readonly type: "gate";
        readonly gateId: number;
        readonly rowId: number;
        readonly lane: Lane;
        readonly label: string;
        readonly tone: GateTone;
        readonly effect: GateEffect;
        readonly before: number;
        readonly after: number;
        readonly x: number;
        readonly z: number;
      }
    | { readonly type: "gateGrow"; readonly gateId: number; readonly label: string }
    | {
        readonly type: "telegraph";
        readonly telegraphId: number;
        readonly kind: TelegraphKind;
        readonly lane: Lane;
        readonly side: -1 | 0 | 1;
      }
    | {
        readonly type: "explosion";
        readonly x: number;
        readonly z: number;
        readonly radius: number;
      }
    | { readonly type: "wave"; readonly index: number; readonly name: string }
    | { readonly type: "bossSpawn"; readonly bossId: number; readonly name: string }
    | {
        readonly type: "bossSlam";
        readonly lane: Lane;
        readonly x: number;
        readonly z: number;
        readonly hitSquad: boolean;
      }
    | { readonly type: "bossEnrage"; readonly bossId: number }
    | {
        readonly type: "bossDefeated";
        readonly bossId: number;
        readonly x: number;
        readonly z: number;
      }
    | { readonly type: "laneChange"; readonly lane: Lane }
    | { readonly type: "won"; readonly reason: OutcomeReason }
    | { readonly type: "lost"; readonly reason: OutcomeReason }
  );

export type GameEventType = GameEvent["type"];
/** Events stay in `state.events` for this much sim time (and at most EVENT_BUFFER_MAX). */
export const EVENT_RETENTION = 2;
export const EVENT_BUFFER_MAX = 1024;

// ---------------------------------------------------------------- state ----

export interface GameState {
  /** Globally unique per run: changes on every new Simulation, restart() and reset(). Reset effects when it changes. */
  readonly runId: number;
  readonly status: GameStatus;
  readonly levelId: LevelId;
  readonly tick: number;
  /** Running sim time (s). 0 in ready. */
  readonly elapsed: number;
  /** Nominal mission length (s). */
  readonly duration: number;
  /** elapsed / duration clamped to [0, 1]. */
  readonly progress: number;
  /** Target lane (alias of player.targetLane). */
  readonly lane: Lane;
  readonly squad: number;
  readonly squadCap: number;
  readonly player: PlayerSnapshot;
  readonly weapon: WeaponState;
  readonly kills: number;
  readonly score: number;
  /** Combo multiplier 1..5; grows with rapid kills, decays after 2.5 s. */
  readonly multiplier: number;
  readonly wave: WaveInfo;
  readonly enemies: readonly EnemySnapshot[];
  readonly bullets: readonly BulletSnapshot[];
  readonly gates: readonly GateSnapshot[];
  readonly telegraphs: readonly TelegraphSnapshot[];
  readonly boss: BossSnapshot | null;
  /** Recent events, ascending id. Keep your own cursor; never mutate. */
  readonly events: readonly GameEvent[];
  readonly outcome: Outcome | null;
}
