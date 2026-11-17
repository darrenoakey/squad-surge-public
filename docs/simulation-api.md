# Squad Surge — simulation API

Authoritative types: `src/game/types.ts`. Import everything from `src/game/index.ts`.
The simulation is pure TypeScript: no DOM, no timers, no randomness at runtime.

## Lifecycle

```ts
import { LEVELS, Simulation } from "./game/index";
const sim = new Simulation("coastal-bridge"); // throws on unknown id; status "ready"
sim.start(); // ready → running (no-op otherwise)
sim.move(-1); // or move(1): target lane ±1, clamped 0..2 (running only)
sim.setLane(2); // absolute target lane (running only)
sim.pause(); // running → paused
sim.resume(); // paused → running
sim.restart(); // fresh run of same mission, immediately running
sim.reset(); // fresh run of same mission, back to ready
sim.update(dt); // wall seconds; fixed 1/60 steps; dt clamped to 0.25; no-op unless running
sim.state; // GameState (read-only; mutated in place each update)
sim.level; // LevelSummary of this mission
```

To change missions, construct a new `Simulation`. Input is ignored outside `running`.

## Ready tableau

A new or reset simulation is already populated: the real starting squad, the opening horde,
and the first gate row sit at their t = 0 positions down the road. Nothing moves until
`start()`. Renderers can show it as the attract scene. The HUD should label this state "Ready".
The squad count shown is the true starting squad.

## World and units

World units ≈ metres, ground y = 0. Lanes x = −3.2 / 0 / 3.2 (`LANE_X`). Squad at z = 7 (`SQUAD_Z`).
Things spawn near z = −42 (`SPAWN_Z`) and move toward +z. Every entity carries `x`, `z`, and an `id`
that is stable for its lifetime. Key renderer objects by id. Never keep object references between frames.

- `player.x` is the authoritative squad centre and moves at 16 u/s (one lane ≈ 0.2 s). Every
  collision, gate and slam uses this x. Render it directly; extra easing would misrepresent hits.
- Enemies: `walker | runner | brute | flanker | barrel`, with `hp/maxHp/radius/vx/vz/lastHitAt`.
  Flankers start off-road (|x| ≈ 9) and slide into a lane after a `flank` telegraph.
- Bullets are real swept projectiles; `hit` events report impact positions.
- Gates come in rows of three (one per lane, ±1.6 wide). The row resolves once, when it reaches
  the squad front. Exactly one gate applies: the one whose lane contains `player.x` (nearest if
  ambiguous). Then the row is removed. `label`/`detail`/`tone` are generated from the exact
  effect that will apply. Shootable gates (`shootable: true`) increase their `squadAdd` by 1 per bullet hit, up to `growthMax`.
- Boss: advances, then holds the line (`siege`), telegraphing `slam` on the squad's lane. Moving out of
  the marked lane before `remaining` hits 0 dodges it. After `enrageIn` seconds it becomes `enraged`
  and charges. If it reaches the squad the run is lost (`overrun`).

## Outcomes and priority

Checked after every fixed step, in this order:

1. `squad ≤ 0` → lost `wiped` (beats any same-step victory)
2. enraged boss reaches squad → lost `overrun`
3. schedule exhausted, boss dead (if any), no hostiles or warnings → won `cleared`
4. `elapsed > duration + 45` → lost `timeout` (safety net only; enrage always resolves first)

`state.outcome` = `{status, reason, survivors, score, elapsed}`; a single `won`/`lost` event is emitted.
Winning adds a survivor bonus (50 per soldier).

## Events

`state.events` holds recent events (2 s of sim time, max 1024) in ascending `id` order. Ids and
`runId` are **globally unique and increasing across all Simulation instances and restarts**.
Consumers keep a cursor (`lastSeenId`) and handle `e.id > cursor`, and reset visual effects when
`state.runId` changes. The simulation never relies on consumers draining events.

Types: `start, volley, hit, kill, squadLoss, gate, gateGrow, telegraph, explosion, wave,
bossSpawn, bossSlam, bossEnrage, bossDefeated, laneChange, won, lost`.

## Determinism

Each mission's waves come from a fixed seed. The same mission plus the same inputs at the same ticks
gives an identical run, regardless of frame rate. Restart reseeds and resets all clocks.

## Balance levers

All in `src/game/levels.ts` (missions, enemies, boss) and `src/game/weapons.ts`. Firepower
scales linearly up to 20 soldiers and at 60% beyond that. The squad cap is 60. The tuning gate is
`tests/unit/missions.test.ts`. For every mission it requires: a sensible player wins; at least two
distinct upgrade routes win; idling or camping any single lane loses; taking the worst gate each
row loses; and recorded schedules replay exactly and tolerate jitter.
