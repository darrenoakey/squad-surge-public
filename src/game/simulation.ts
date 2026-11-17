import { applySquad, describeGate, normalizeGate, withSquadAdd } from "./gates";
import {
  BARREL_BLAST,
  ENEMY_STATS,
  FLANK,
  RUSH,
  getLevel,
  getLevelDefinition,
  travelTime,
} from "./levels";
import type { BossSpec, GateSpec, LevelDefinition } from "./levels";
import { createRng } from "./rng";
import {
  BULLET_FAR_Z,
  DESPAWN_Z,
  EVENT_BUFFER_MAX,
  EVENT_RETENTION,
  FIXED_STEP,
  GATE_HALF_WIDTH,
  LANE_SWITCH_SPEED,
  LANE_X,
  MAX_FRAME_DELTA,
  OVERTIME_LIMIT,
  SCROLL_SPEED,
  SPAWN_Z,
  SQUAD_CAP,
  SQUAD_Z,
} from "./types";
import type {
  BossSnapshot,
  BulletSnapshot,
  EnemyKind,
  EnemySnapshot,
  GameEvent,
  GameState,
  GameStatus,
  GateSnapshot,
  Lane,
  LevelId,
  LevelSummary,
  Outcome,
  OutcomeReason,
  PlayerSnapshot,
  TelegraphKind,
  TelegraphSnapshot,
  WaveInfo,
  WeaponId,
  WeaponState,
} from "./types";
import { WEAPONS, effectiveGunners, squadDps } from "./weapons";

type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type EventPayload = DistributiveOmit<GameEvent, "id" | "runId" | "tick" | "time">;

/**
 * Process-wide identity counters. runId and event ids are unique across every
 * Simulation instance (new mission or restart), so consumers can key effects
 * and event cursors on them without per-instance collisions. They carry no
 * gameplay meaning, so determinism of the simulation itself is unaffected.
 */
let globalRunCounter = 0;
let globalEventCounter = 0;

/** z of the squad's front rank: contacts and gate crossings resolve here. */
export const SQUAD_FRONT_Z = SQUAD_Z - 0.5;
/** Hostiles further than this behind the front rank can no longer touch the squad. */
const SQUAD_BACK_Z = SQUAD_Z + 1.5;
const BULLET_RADIUS = 0.12;
const COMBO_WINDOW = 2.5;
const BOSS_DEPTH = 1.6;
const SURVIVOR_BONUS = 50;
const BOSS_POINTS = 2500;

interface EnemyEntity extends Mutable<EnemySnapshot> {
  /** Flankers: x where they merge into their lane (null once merged / for others). */
  targetX: number | null;
  mergeSpeed: number;
}

interface BulletEntity extends Mutable<BulletSnapshot> {
  travelled: number;
  range: number;
  pierceLeft: number;
  splash: number;
}

interface GateEntity extends Mutable<GateSnapshot> {
  growthValue: number;
}

interface TelegraphEntity extends Mutable<TelegraphSnapshot> {
  slam: boolean;
}

interface BossEntity extends Mutable<BossSnapshot> {
  spec: BossSpec;
  siegeTime: number;
  slamCooldown: number;
}

type InternalState = Mutable<
  Omit<GameState, "player" | "enemies" | "bullets" | "gates" | "telegraphs" | "boss" | "events">
> & {
  player: Mutable<PlayerSnapshot>;
  enemies: EnemyEntity[];
  bullets: BulletEntity[];
  gates: GateEntity[];
  telegraphs: TelegraphEntity[];
  boss: BossEntity | null;
  events: GameEvent[];
};

type Primitive =
  | {
      readonly t: number;
      readonly type: "enemy";
      readonly kind: EnemyKind;
      readonly x: number;
      readonly z: number;
      readonly vx: number;
      readonly vz: number;
      readonly targetX: number | null;
      readonly mergeSpeed: number;
      readonly hp: number;
    }
  | { readonly t: number; readonly type: "gateRow"; readonly gates: readonly GateSpec[] }
  | {
      readonly t: number;
      readonly type: "telegraph";
      readonly kind: TelegraphKind;
      readonly lane: Lane;
      readonly side: -1 | 0 | 1;
      readonly x: number;
      readonly z: number;
      readonly duration: number;
    }
  | { readonly t: number; readonly type: "boss" }
  | { readonly t: number; readonly type: "wave"; readonly index: number; readonly name: string };

/** Expand authored specs into a time-sorted list of concrete spawns. Pure and seeded. */
export function buildTimeline(def: LevelDefinition): readonly Primitive[] {
  const rng = createRng(def.seed);
  const out: Primitive[] = [];
  let waveIndex = 0;
  const hpFor = (kind: EnemyKind): number =>
    kind === "brute" || kind === "barrel"
      ? ENEMY_STATS[kind].hp * Math.max(1, def.hpScale * 0.9)
      : ENEMY_STATS[kind].hp * def.hpScale;
  for (const spec of def.spawns) {
    switch (spec.type) {
      case "horde": {
        const stats = ENEMY_STATS[spec.kind];
        const perRow = spec.perRow ?? (spec.kind === "walker" ? 3 : spec.kind === "runner" ? 2 : 1);
        const rowGap = spec.kind === "brute" ? 2.6 : 1.15;
        const start = spec.arrive - travelTime(stats.speed);
        const baseX = LANE_X[spec.lane];
        for (let i = 0; i < spec.count; i++) {
          const row = Math.floor(i / perRow);
          const col = i % perRow;
          const slot = perRow === 1 ? 0 : (col / (perRow - 1)) * 1.6 - 0.8;
          const x = baseX + slot + rng.range(-0.18, 0.18);
          const t = start + (row * rowGap + rng.range(0, 0.25)) / stats.speed;
          out.push({
            t,
            type: "enemy",
            kind: spec.kind,
            x,
            z: SPAWN_Z,
            vx: 0,
            vz: stats.speed,
            targetX: null,
            mergeSpeed: stats.speed,
            hp: hpFor(spec.kind),
          });
        }
        break;
      }
      case "rush": {
        const stats = ENEMY_STATS.runner;
        const start = spec.arrive - travelTime(stats.speed);
        const laneX = LANE_X[spec.lane];
        out.push({
          t: start - RUSH.telegraph,
          type: "telegraph",
          kind: "rush",
          lane: spec.lane,
          side: 0,
          x: laneX,
          z: SPAWN_Z + 12,
          duration: RUSH.telegraph,
        });
        for (let i = 0; i < spec.count; i++) {
          const row = Math.floor(i / 2);
          const x = laneX + (i % 2 === 0 ? -0.45 : 0.45) + rng.range(-0.15, 0.15);
          out.push({
            t: start + (row * 0.9) / stats.speed,
            type: "enemy",
            kind: "runner",
            x,
            z: SPAWN_Z,
            vx: 0,
            vz: stats.speed,
            targetX: null,
            mergeSpeed: stats.speed,
            hp: hpFor("runner"),
          });
        }
        break;
      }
      case "flank": {
        const stats = ENEMY_STATS.flanker;
        const laneX = LANE_X[spec.lane];
        const startX = spec.side * FLANK.startX;
        const lateral = Math.abs(laneX - startX) / FLANK.lateralSpeed;
        const forwardAfter = Math.max(0, FLANK.leadTime - lateral);
        const entryZ = SQUAD_FRONT_Z - stats.speed * forwardAfter - SCROLL_SPEED * lateral;
        const spawnT = spec.arrive - FLANK.leadTime;
        out.push({
          t: spawnT - FLANK.telegraph,
          type: "telegraph",
          kind: "flank",
          lane: spec.lane,
          side: spec.side,
          x: laneX,
          z: entryZ + SCROLL_SPEED * lateral,
          duration: FLANK.telegraph,
        });
        for (let i = 0; i < spec.count; i++) {
          const x = startX + spec.side * (i % 2) * 0.7;
          out.push({
            t: spawnT + i * 0.3 + rng.range(0, 0.05),
            type: "enemy",
            kind: "flanker",
            x,
            z: entryZ - (i % 2) * 0.6,
            vx: -spec.side * FLANK.lateralSpeed,
            vz: SCROLL_SPEED,
            targetX: laneX + rng.range(-0.5, 0.5),
            mergeSpeed: stats.speed,
            hp: hpFor("flanker"),
          });
        }
        break;
      }
      case "barrel":
        out.push({
          t: spec.arrive - travelTime(SCROLL_SPEED),
          type: "enemy",
          kind: "barrel",
          x: LANE_X[spec.lane],
          z: SPAWN_Z,
          vx: 0,
          vz: SCROLL_SPEED,
          targetX: null,
          mergeSpeed: SCROLL_SPEED,
          hp: hpFor("barrel"),
        });
        break;
      case "gates":
        out.push({ t: spec.arrive - travelTime(SCROLL_SPEED), type: "gateRow", gates: spec.gates });
        break;
      case "boss":
        out.push({ t: spec.at, type: "boss" });
        break;
      case "wave":
        out.push({ t: spec.at, type: "wave", index: waveIndex++, name: spec.name });
        break;
    }
  }
  // Stable sort by time keeps authored order for ties.
  return out
    .map((p, i) => ({ p, i }))
    .sort((a, b) => a.p.t - b.p.t || a.i - b.i)
    .map((e) => e.p);
}

function nearestLane(x: number): Lane {
  if (x < -1.6) return 0;
  if (x > 1.6) return 2;
  return 1;
}

function formationHalfWidth(squad: number): number {
  return Math.min(1.35, 0.35 + 0.14 * Math.sqrt(Math.max(1, squad)));
}

/**
 * Deterministic, renderer-independent mission simulation.
 * Only `update()` advances time, in fixed FIXED_STEP increments.
 */
export class Simulation {
  readonly levelId: LevelId;
  private readonly def: LevelDefinition;
  private readonly timeline: readonly Primitive[];
  private readonly preplaced: ReadonlySet<number>;
  private readonly waveCount: number;
  private accumulator = 0;
  private cursor = 0;
  private fireCooldown = 0;
  private combo = 0;
  private lastKillAt = -Infinity;
  private nextEntityId = 1;
  private s!: InternalState;
  private weaponId: WeaponId = "rifle";
  private fireRateMul = 1;
  private damageMul = 1;

  constructor(levelId: string) {
    this.def = getLevelDefinition(levelId);
    this.levelId = this.def.id;
    this.timeline = buildTimeline(this.def);
    const pre = new Set<number>();
    this.timeline.forEach((p, i) => {
      if (p.t <= 0 && (p.type === "enemy" || p.type === "gateRow")) pre.add(i);
    });
    this.preplaced = pre;
    this.waveCount = this.def.spawns.filter((s) => s.type === "wave").length;
    this.resetRun("ready");
  }

  /** Read-only live snapshot. Mutated in place by update(); do not retain entity objects. */
  get state(): GameState {
    return this.s;
  }

  get level(): LevelSummary {
    return getLevel(this.def.id);
  }

  /** ready → running. No-op otherwise. */
  start(): void {
    if (this.s.status !== "ready") return;
    this.s.status = "running";
    this.emit({ type: "start" });
  }

  move(direction: -1 | 1): void {
    if (this.s.status !== "running") return;
    const lane = Math.max(0, Math.min(2, this.s.player.targetLane + direction)) as Lane;
    this.setLane(lane);
  }

  setLane(lane: Lane): void {
    if (this.s.status !== "running") return;
    if (lane !== 0 && lane !== 1 && lane !== 2) return;
    if (this.s.player.targetLane === lane) return;
    this.s.player.targetLane = lane;
    this.s.lane = lane;
    this.emit({ type: "laneChange", lane });
  }

  pause(): void {
    if (this.s.status !== "running") return;
    this.s.status = "paused";
    this.accumulator = 0;
  }

  resume(): void {
    if (this.s.status !== "paused") return;
    this.s.status = "running";
  }

  /** Fresh run of the same mission, immediately running. */
  restart(): void {
    this.resetRun("ready");
    this.start();
  }

  /** Fresh run of the same mission, waiting in ready. */
  reset(): void {
    this.resetRun("ready");
  }

  /** Advance by wall-clock seconds; clamped to MAX_FRAME_DELTA; only while running. */
  update(deltaSeconds: number): void {
    if (this.s.status !== "running") return;
    if (!Number.isFinite(deltaSeconds) || deltaSeconds <= 0) return;
    this.accumulator += Math.min(deltaSeconds, MAX_FRAME_DELTA);
    while (this.accumulator >= FIXED_STEP - 1e-9) {
      this.accumulator -= FIXED_STEP;
      this.step();
      if (this.s.status !== "running") {
        this.accumulator = 0;
        break;
      }
    }
  }

  // ------------------------------------------------------------------ run --

  private resetRun(status: GameStatus): void {
    globalRunCounter += 1;
    this.accumulator = 0;
    this.cursor = 0;
    this.fireCooldown = 0.35;
    this.combo = 0;
    this.lastKillAt = -Infinity;
    this.nextEntityId = 1;
    this.weaponId = this.def.startingWeapon;
    this.fireRateMul = 1;
    this.damageMul = 1;
    const squad = this.def.startingSquad;
    this.s = {
      runId: globalRunCounter,
      status,
      levelId: this.def.id,
      tick: 0,
      elapsed: 0,
      duration: this.def.duration,
      progress: 0,
      lane: 1,
      squad,
      squadCap: SQUAD_CAP,
      player: {
        x: LANE_X[1],
        z: SQUAD_Z,
        targetLane: 1,
        lane: 1,
        vx: 0,
        halfWidth: formationHalfWidth(squad),
        lastHurtAt: -1,
      },
      weapon: this.weaponState(squad),
      kills: 0,
      score: 0,
      multiplier: 1,
      wave: { index: -1, total: this.waveCount, name: "" },
      enemies: [],
      bullets: [],
      gates: [],
      telegraphs: [],
      boss: null,
      events: [],
      outcome: null,
    };
    // Opening tableau: anything scheduled at or before t=0 is already on the road.
    this.timeline.forEach((p, i) => {
      if (!this.preplaced.has(i)) return;
      if (p.type === "enemy") this.spawnEnemy(p, -p.t);
      else if (p.type === "gateRow") this.spawnGateRow(p.gates, -p.t * SCROLL_SPEED);
    });
  }

  private weaponState(squad: number): WeaponState {
    const spec = WEAPONS[this.weaponId];
    return {
      id: spec.id,
      name: spec.name,
      fireRateMultiplier: this.fireRateMul,
      damageMultiplier: this.damageMul,
      fireRate: spec.fireRate * this.fireRateMul,
      dps: squadDps(squad, this.weaponId, this.fireRateMul, this.damageMul),
    };
  }

  private emit(payload: EventPayload): void {
    const event = {
      ...payload,
      id: ++globalEventCounter,
      runId: this.s.runId,
      tick: this.s.tick,
      time: this.s.elapsed,
    } as GameEvent;
    this.s.events.push(event);
  }

  private newId(): number {
    return this.nextEntityId++;
  }

  // -------------------------------------------------------------- spawning --

  private spawnEnemy(p: Extract<Primitive, { type: "enemy" }>, age: number): void {
    const stats = ENEMY_STATS[p.kind];
    this.s.enemies.push({
      id: this.newId(),
      kind: p.kind,
      x: p.x,
      z: p.z + p.vz * age,
      vx: p.vx,
      vz: p.vz,
      lane: nearestLane(p.x),
      hp: p.hp,
      maxHp: p.hp,
      radius: stats.radius,
      contactDamage: stats.contactDamage,
      lastHitAt: -1,
      spawnedAt: this.s.elapsed,
      targetX: p.targetX,
      mergeSpeed: p.mergeSpeed,
    });
  }

  private spawnGateRow(specs: readonly GateSpec[], advance: number): void {
    const rowId = this.newId();
    for (const spec of specs) {
      const effect = normalizeGate(spec);
      const text = describeGate(effect);
      this.s.gates.push({
        id: this.newId(),
        rowId,
        lane: spec.lane,
        x: LANE_X[spec.lane],
        z: SPAWN_Z + advance,
        halfWidth: GATE_HALF_WIDTH,
        effect,
        label: text.label,
        detail: text.detail,
        tone: text.tone,
        shootable: spec.grow !== undefined,
        growthPerHit: spec.grow?.perHit ?? 0,
        growthMax: spec.grow?.max ?? effect.squadAdd,
        lastHitAt: -1,
        growthValue: effect.squadAdd,
      });
    }
  }

  private spawnBoss(): void {
    const spec = this.def.boss;
    if (!spec) return;
    const boss: BossEntity = {
      id: this.newId(),
      name: spec.name,
      x: 0,
      z: SPAWN_Z,
      hp: spec.hp,
      maxHp: spec.hp,
      radius: spec.radius,
      phase: "advancing",
      enrageIn: 0,
      lastHitAt: -1,
      spec,
      siegeTime: 0,
      slamCooldown: spec.slamInterval * 0.5,
    };
    this.s.boss = boss;
    this.emit({ type: "bossSpawn", bossId: boss.id, name: boss.name });
  }

  private processTimeline(now: number): void {
    while (this.cursor < this.timeline.length) {
      const index = this.cursor;
      const p = this.timeline[index];
      if (!p || p.t > now + 1e-9) break;
      this.cursor += 1;
      if (this.preplaced.has(index)) continue;
      switch (p.type) {
        case "enemy":
          this.spawnEnemy(p, Math.max(0, now - p.t));
          break;
        case "gateRow":
          this.spawnGateRow(p.gates, Math.max(0, now - p.t) * SCROLL_SPEED);
          break;
        case "telegraph": {
          const tg: TelegraphEntity = {
            id: this.newId(),
            kind: p.kind,
            lane: p.lane,
            side: p.side,
            x: p.x,
            z: p.z,
            duration: p.duration,
            remaining: p.duration,
            slam: false,
          };
          this.s.telegraphs.push(tg);
          this.emit({
            type: "telegraph",
            telegraphId: tg.id,
            kind: tg.kind,
            lane: tg.lane,
            side: tg.side,
          });
          break;
        }
        case "boss":
          this.spawnBoss();
          break;
        case "wave":
          this.s.wave = { index: p.index, total: this.waveCount, name: p.name } satisfies WaveInfo;
          this.emit({ type: "wave", index: p.index, name: p.name });
          break;
      }
    }
  }

  // ------------------------------------------------------------------ step --

  private step(): void {
    const dt = FIXED_STEP;
    const s = this.s;
    const now = s.tick * dt;
    this.processTimeline(now);
    this.updateTelegraphs(dt);
    this.movePlayer(dt);
    this.moveEnemies(dt);
    this.moveGates(dt);
    this.updateBoss(dt);
    this.fire(dt);
    this.moveBullets(dt);
    this.resolveContacts();
    this.resolveGateRows();
    if (s.elapsed - this.lastKillAt > COMBO_WINDOW) this.combo = 0;
    s.multiplier = Math.min(5, 1 + Math.floor(this.combo / 12));
    s.tick += 1;
    s.elapsed = s.tick * dt;
    s.progress = Math.min(1, s.elapsed / s.duration);
    s.player.halfWidth = formationHalfWidth(s.squad);
    s.weapon = this.weaponState(s.squad);
    this.checkTerminal();
    this.pruneEvents();
  }

  private updateTelegraphs(dt: number): void {
    const s = this.s;
    for (const tg of s.telegraphs) tg.remaining = Math.max(0, tg.remaining - dt);
    const expired = s.telegraphs.filter((t) => t.remaining <= 1e-9);
    if (expired.length === 0) return;
    s.telegraphs = s.telegraphs.filter((t) => t.remaining > 1e-9);
    for (const tg of expired) if (tg.slam) this.resolveSlam(tg);
  }

  private movePlayer(dt: number): void {
    const p = this.s.player;
    const target = LANE_X[p.targetLane];
    const diff = target - p.x;
    const stepX = LANE_SWITCH_SPEED * dt;
    if (Math.abs(diff) <= stepX) {
      p.vx = diff / dt;
      p.x = target;
    } else {
      p.vx = Math.sign(diff) * LANE_SWITCH_SPEED;
      p.x += Math.sign(diff) * stepX;
    }
    if (p.x === target) p.vx = 0;
    p.lane = nearestLane(p.x);
  }

  private moveEnemies(dt: number): void {
    for (const e of this.s.enemies) {
      if (e.targetX !== null) {
        const diff = e.targetX - e.x;
        const stepX = Math.abs(e.vx) * dt;
        if (Math.abs(diff) <= stepX) {
          e.x = e.targetX;
          e.targetX = null;
          e.vx = 0;
          e.vz = e.mergeSpeed;
        } else {
          e.x += Math.sign(diff) * stepX;
        }
      }
      e.z += e.vz * dt;
      e.lane = nearestLane(e.x);
    }
  }

  private moveGates(dt: number): void {
    for (const g of this.s.gates) g.z += SCROLL_SPEED * dt;
  }

  private updateBoss(dt: number): void {
    const boss = this.s.boss;
    if (!boss || boss.phase === "dead") return;
    const spec = boss.spec;
    if (boss.phase === "advancing") {
      boss.z = Math.min(spec.siegeZ, boss.z + spec.advanceSpeed * dt);
      if (boss.z >= spec.siegeZ) {
        boss.phase = "siege";
        boss.siegeTime = 0;
      }
      return;
    }
    if (boss.phase === "siege") {
      boss.siegeTime += dt;
      boss.enrageIn = Math.max(0, spec.enrageAfter - boss.siegeTime);
      boss.slamCooldown -= dt;
      const slamPending = this.s.telegraphs.some((t) => t.slam);
      if (boss.slamCooldown <= 0 && !slamPending) {
        const lane = this.s.player.lane;
        const tg: TelegraphEntity = {
          id: this.newId(),
          kind: "slam",
          lane,
          side: 0,
          x: LANE_X[lane],
          z: SQUAD_Z,
          duration: spec.slamTelegraph,
          remaining: spec.slamTelegraph,
          slam: true,
        };
        this.s.telegraphs.push(tg);
        this.emit({ type: "telegraph", telegraphId: tg.id, kind: "slam", lane, side: 0 });
        boss.slamCooldown = spec.slamInterval;
      }
      if (boss.siegeTime >= spec.enrageAfter) {
        boss.phase = "enraged";
        boss.enrageIn = 0;
        this.s.telegraphs = this.s.telegraphs.filter((t) => !t.slam);
        this.emit({ type: "bossEnrage", bossId: boss.id });
      }
      return;
    }
    boss.z += spec.enrageSpeed * dt;
  }

  private resolveSlam(tg: TelegraphEntity): void {
    const boss = this.s.boss;
    if (boss?.phase !== "siege") return;
    const p = this.s.player;
    const hit = Math.abs(p.x - LANE_X[tg.lane]) < GATE_HALF_WIDTH;
    this.emit({ type: "bossSlam", lane: tg.lane, x: LANE_X[tg.lane], z: SQUAD_Z, hitSquad: hit });
    if (hit) {
      const loss = Math.max(boss.spec.slamMin, Math.ceil(this.s.squad * boss.spec.slamFraction));
      this.loseSoldiers(loss, "boss", LANE_X[tg.lane], SQUAD_Z);
    }
  }

  private fire(dt: number): void {
    const s = this.s;
    this.fireCooldown -= dt;
    if (this.fireCooldown > 0 || s.squad <= 0) return;
    const spec = WEAPONS[this.weaponId];
    this.fireCooldown += 1 / (spec.fireRate * this.fireRateMul);
    if (this.fireCooldown < 0) this.fireCooldown = 0;
    const count = Math.max(1, Math.min(spec.maxBullets, s.squad));
    const total = effectiveGunners(s.squad) * spec.damagePerGunner * this.damageMul;
    const perBullet = total / count;
    const half = s.player.halfWidth;
    const originZ = SQUAD_FRONT_Z - 0.3;
    for (let i = 0; i < count; i++) {
      const frac = count === 1 ? 0 : (i / (count - 1)) * 2 - 1;
      // Deterministic stagger so consecutive volleys interleave across the formation.
      const wobble = ((s.tick * 7 + i * 13) % 10) / 10 - 0.45;
      const x = s.player.x + frac * half + wobble * (half / Math.max(1, count)) * 0.8;
      s.bullets.push({
        id: this.newId(),
        weapon: spec.id,
        x,
        z: originZ,
        vx: spec.spread * frac,
        vz: -spec.bulletSpeed,
        damage: perBullet,
        radius: BULLET_RADIUS,
        travelled: 0,
        range: spec.range,
        pierceLeft: spec.pierce,
        splash: spec.splashRadius,
      });
    }
    this.emit({ type: "volley", weapon: spec.id, x: s.player.x, z: originZ, bullets: count });
  }

  private moveBullets(dt: number): void {
    const s = this.s;
    const survivors: BulletEntity[] = [];
    for (const b of s.bullets) {
      const x0 = b.x;
      const z0 = b.z;
      const x1 = x0 + b.vx * dt;
      const z1 = z0 + b.vz * dt;
      b.x = x1;
      b.z = z1;
      b.travelled += Math.hypot(x1 - x0, z1 - z0);
      const alive = this.collideBullet(b, x0, z0, x1, z1);
      if (alive && b.travelled < b.range && b.z > BULLET_FAR_Z) survivors.push(b);
    }
    s.bullets = survivors;
    if (s.enemies.some((e) => e.hp <= 0)) s.enemies = s.enemies.filter((e) => e.hp > 0);
  }

  /** Swept collision along the bullet path; returns whether the bullet survives. */
  private collideBullet(b: BulletEntity, x0: number, z0: number, x1: number, z1: number): boolean {
    const s = this.s;
    type Hit =
      | { z: number; kind: "enemy"; e: EnemyEntity }
      | { z: number; kind: "gate"; g: GateEntity }
      | { z: number; kind: "boss"; boss: BossEntity };
    const hits: Hit[] = [];
    const xAt = (z: number): number => (z0 === z1 ? x1 : x0 + ((z - z0) / (z1 - z0)) * (x1 - x0));
    const zMin = Math.min(z0, z1);
    const zMax = Math.max(z0, z1);
    for (const e of s.enemies) {
      if (e.hp <= 0) continue;
      if (e.z + e.radius < zMin || e.z - e.radius > zMax) continue;
      const cz = Math.max(zMin, Math.min(zMax, e.z));
      if (Math.abs(xAt(cz) - e.x) <= e.radius + b.radius) hits.push({ z: e.z, kind: "enemy", e });
    }
    for (const g of s.gates) {
      if (!g.shootable) continue;
      if (g.z < zMin - 0.2 || g.z > zMax + 0.2) continue;
      if (Math.abs(xAt(Math.max(zMin, Math.min(zMax, g.z))) - g.x) <= g.halfWidth)
        hits.push({ z: g.z, kind: "gate", g });
    }
    const boss = s.boss;
    if (boss && boss.phase !== "dead") {
      const front = boss.z + BOSS_DEPTH;
      if (
        front >= zMin &&
        boss.z - BOSS_DEPTH <= zMax &&
        Math.abs(xAt(Math.max(zMin, Math.min(zMax, front))) - boss.x) <= boss.radius
      ) {
        hits.push({ z: front, kind: "boss", boss });
      }
    }
    if (hits.length === 0) return true;
    // Bullets travel toward -z: the first thing met has the largest z.
    hits.sort((a, b2) => b2.z - a.z);
    for (const h of hits) {
      if (h.kind === "gate") {
        this.hitGate(h.g, b);
        return false;
      }
      if (h.kind === "boss") {
        this.damageBoss(h.boss, b.damage, b.x);
        return false;
      }
      const e = h.e;
      if (e.hp <= 0) continue;
      if (b.splash > 0) {
        this.explode(e.x, e.z, b.splash, b.damage, true);
        return false;
      }
      const applied = Math.min(b.damage, e.hp);
      this.damageEnemy(e, applied);
      b.damage -= applied;
      b.pierceLeft -= 1;
      if (b.pierceLeft <= 0 || b.damage <= 1e-6) return false;
    }
    return true;
  }

  private hitGate(g: GateEntity, b: BulletEntity): void {
    g.lastHitAt = this.s.elapsed;
    this.emit({ type: "hit", target: "gate", targetId: g.id, x: b.x, z: g.z, damage: 0 });
    if (g.growthValue >= g.growthMax) return;
    g.growthValue = Math.min(g.growthMax, g.growthValue + g.growthPerHit);
    g.effect = withSquadAdd(g.effect, g.growthValue);
    const text = describeGate(g.effect);
    g.label = text.label;
    g.detail = text.detail;
    g.tone = text.tone;
    this.emit({ type: "gateGrow", gateId: g.id, label: g.label });
  }

  private damageEnemy(e: EnemyEntity, amount: number): void {
    const s = this.s;
    e.hp -= amount;
    e.lastHitAt = s.elapsed;
    this.emit({ type: "hit", target: "enemy", targetId: e.id, x: e.x, z: e.z, damage: amount });
    if (e.hp <= 1e-6) {
      e.hp = 0;
      this.combo += 1;
      this.lastKillAt = s.elapsed;
      const mult = Math.min(5, 1 + Math.floor(this.combo / 12));
      const points = ENEMY_STATS[e.kind].points * mult;
      s.kills += 1;
      s.score += points;
      this.emit({ type: "kill", enemyId: e.id, kind: e.kind, x: e.x, z: e.z, points });
      if (e.kind === "barrel")
        this.explode(e.x, e.z, BARREL_BLAST.radius, BARREL_BLAST.damage, false);
    }
  }

  private explode(
    x: number,
    z: number,
    radius: number,
    damage: number,
    includeBarrels: boolean,
  ): void {
    this.emit({ type: "explosion", x, z, radius });
    for (const e of this.s.enemies) {
      if (e.hp <= 0) continue;
      if (!includeBarrels && e.kind === "barrel") continue;
      if (Math.hypot(e.x - x, e.z - z) <= radius + e.radius)
        this.damageEnemy(e, Math.min(damage, e.hp));
    }
  }

  private damageBoss(boss: BossEntity, amount: number, x: number): void {
    const s = this.s;
    boss.hp = Math.max(0, boss.hp - amount);
    boss.lastHitAt = s.elapsed;
    this.emit({
      type: "hit",
      target: "boss",
      targetId: boss.id,
      x,
      z: boss.z + BOSS_DEPTH,
      damage: amount,
    });
    if (boss.hp <= 1e-6) {
      boss.hp = 0;
      boss.phase = "dead";
      boss.enrageIn = 0;
      s.telegraphs = s.telegraphs.filter((t) => !t.slam);
      s.kills += 1;
      s.score += BOSS_POINTS * s.multiplier;
      this.emit({ type: "bossDefeated", bossId: boss.id, x: boss.x, z: boss.z });
    }
  }

  private loseSoldiers(
    amount: number,
    cause: EnemyKind | "boss" | "gate",
    x: number,
    z: number,
  ): void {
    const s = this.s;
    const lost = Math.min(s.squad, amount);
    if (lost <= 0) return;
    s.squad -= lost;
    s.player.lastHurtAt = s.elapsed;
    this.emit({ type: "squadLoss", amount: lost, cause, x, z, squad: s.squad });
  }

  private resolveContacts(): void {
    const s = this.s;
    const p = s.player;
    let changed = false;
    for (const e of s.enemies) {
      if (e.hp <= 0) continue;
      const front = e.z + e.radius;
      if (
        front >= SQUAD_FRONT_Z &&
        e.z - e.radius <= SQUAD_BACK_Z &&
        Math.abs(e.x - p.x) < p.halfWidth + e.radius
      ) {
        e.hp = 0;
        changed = true;
        if (e.kind === "barrel")
          this.emit({ type: "explosion", x: e.x, z: e.z, radius: BARREL_BLAST.radius });
        this.loseSoldiers(e.contactDamage, e.kind, e.x, e.z);
      } else if (e.z - e.radius > DESPAWN_Z) {
        e.hp = 0;
        changed = true;
      }
    }
    if (changed) s.enemies = s.enemies.filter((e) => e.hp > 0);
  }

  private resolveGateRows(): void {
    const s = this.s;
    const crossing = s.gates.filter((g) => g.z >= SQUAD_FRONT_Z);
    if (crossing.length === 0) return;
    const rows = new Set(crossing.map((g) => g.rowId));
    for (const rowId of rows) {
      const row = s.gates.filter((g) => g.rowId === rowId);
      let chosen: GateEntity | null = null;
      let best = Infinity;
      for (const g of row) {
        const d = Math.abs(s.player.x - g.x);
        if (d <= g.halfWidth && d < best) {
          best = d;
          chosen = g;
        }
      }
      s.gates = s.gates.filter((g) => g.rowId !== rowId);
      if (chosen) this.applyGate(chosen);
    }
  }

  private applyGate(g: GateEntity): void {
    const s = this.s;
    const before = s.squad;
    const after = applySquad(before, g.effect);
    s.squad = after;
    this.fireRateMul *= g.effect.fireRateMultiplier;
    this.damageMul *= g.effect.damageMultiplier;
    if (g.effect.weapon) this.weaponId = g.effect.weapon;
    if (after < before) s.player.lastHurtAt = s.elapsed;
    s.score += Math.max(0, after - before) * 5;
    this.emit({
      type: "gate",
      gateId: g.id,
      rowId: g.rowId,
      lane: g.lane,
      label: g.label,
      tone: g.tone,
      effect: g.effect,
      before,
      after,
      x: g.x,
      z: g.z,
    });
    if (after < before)
      this.emit({
        type: "squadLoss",
        amount: before - after,
        cause: "gate",
        x: g.x,
        z: g.z,
        squad: after,
      });
  }

  private checkTerminal(): void {
    const s = this.s;
    if (s.squad <= 0) return this.finish("lost", "wiped");
    const boss = s.boss;
    if (boss?.phase === "enraged" && boss.z + BOSS_DEPTH >= SQUAD_FRONT_Z)
      return this.finish("lost", "overrun");
    const scheduleDone = this.cursor >= this.timeline.length;
    const bossDone = this.def.boss === null || (boss !== null && boss.phase === "dead");
    const hostiles = s.enemies.some((e) => e.kind !== "barrel");
    const warnings = s.telegraphs.length > 0;
    if (scheduleDone && bossDone && !hostiles && !warnings) return this.finish("won", "cleared");
    if (s.elapsed > s.duration + OVERTIME_LIMIT) this.finish("lost", "timeout");
  }

  private finish(status: "won" | "lost", reason: OutcomeReason): void {
    const s = this.s;
    if (status === "won") s.score += s.squad * SURVIVOR_BONUS;
    s.status = status;
    s.telegraphs = [];
    s.outcome = {
      status,
      reason,
      survivors: s.squad,
      score: s.score,
      elapsed: s.elapsed,
    } satisfies Outcome;
    this.emit(status === "won" ? { type: "won", reason } : { type: "lost", reason });
  }

  private pruneEvents(): void {
    const s = this.s;
    const cutoff = s.elapsed - EVENT_RETENTION;
    let drop = 0;
    while (drop < s.events.length && (s.events[drop]?.time ?? 0) < cutoff) drop++;
    const over = s.events.length - drop - EVENT_BUFFER_MAX;
    if (over > 0) drop += over;
    if (drop > 0) s.events.splice(0, drop);
  }
}
