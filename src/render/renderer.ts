// Squad Surge Three.js renderer: "Tin-Toy Tidewatch" seaside toy diorama.
// Pure view of GameState — never mutates simulation state. Animation clocks are
// renderer-owned; gameplay animation freezes while paused, ambience keeps breathing.
import * as THREE from "three";
import {
  LANE_X,
  SCROLL_SPEED,
  SQUAD_Z,
  type EnemyKind,
  type EnemySnapshot,
  type GameEvent,
  type GameState,
  type WeaponId,
} from "../game/types";
import {
  barrelParts,
  bossParts,
  KIND_HEIGHT,
  MUZZLE_LOCAL,
  pennantGeometry,
  SOLDIER_ARMS_PIVOT,
  SOLDIER_SCALE,
  soggyParts,
  soldierParts,
  WEAPON_IDS,
  type SoggyVariant,
} from "./characters";
import { InstancedRig, rootMatrix, type PartPose } from "./crowd";
import {
  chevronGeometry,
  FxLayer,
  makeCubePool,
  makeHelmetPool,
  PopupPool,
  starGeometry,
} from "./effects";
import { Environment } from "./environment";
import { GATE_TONE, GateLayer } from "./gates";
import { disposeToonRamp, toonMaterial } from "./kit";
import { biomeFor, SOGGY, SQUAD, THEMES, type BiomeId, type Theme } from "./themes";

export interface RendererOptions {
  reducedMotion?: boolean;
  /** Max device pixel ratio (default 1.75). */
  maxPixelRatio?: number;
}

export interface SquadRenderer {
  render(state: GameState, delta: number): void;
  resize(width: number, height: number): void;
  setLevel(levelId: string): void;
  setReducedMotion(reduced: boolean): void;
  /** Read-only diagnostics for QA (draw calls, triangles, live instances). */
  stats(): {
    calls: number;
    triangles: number;
    geometries: number;
    textures: number;
    level: BiomeId;
  };
  dispose(): void;
}

// --------------------------------------------------------------- constants --

const CAM_POS = new THREE.Vector3(0, 14, 29.5);
const CAM_LOOK = new THREE.Vector3(0, 0, -11.8);
const BASE_FOV = 44;
const RENDER_SQUAD_CAP = 40;
/** Enemies drawn slightly larger than modelled for 390px readability (contact radius unchanged). */
const ENEMY_VIS_SCALE = 1.15;
const ROW_DZ = 0.7;
const COL_DX = 0.62;
const MAX_ROW_Z = 11.5;
const RUN_HZ = 3.2;
const BANK = (14 * Math.PI) / 180;
const DEG = Math.PI / 180;

const TRACER: Record<WeaponId, { color: number; len: number; width: number }> = {
  rifle: { color: 0xffe066, len: 0.5, width: 0.09 },
  smg: { color: 0xfff09a, len: 0.42, width: 0.06 },
  shotgun: { color: 0xffd04a, len: 0.24, width: 0.13 },
  lancer: { color: 0xbfe9ff, len: 1.4, width: 0.1 },
  rocket: { color: 0xff8a3d, len: 0.55, width: 0.18 },
};

const KILL_COLORS: Record<EnemyKind, readonly number[]> = {
  walker: [SOGGY.body, SOGGY.body, SOGGY.belly, SOGGY.coral],
  runner: [SOGGY.body, SOGGY.belly, SQUAD.scarf],
  brute: [SOGGY.body, SOGGY.body, SOGGY.coral, SOGGY.white],
  flanker: [SOGGY.body, SQUAD.tip, SOGGY.belly],
  barrel: [SQUAD.tip, SQUAD.tip, 0xf4e9d0, 0xffe066],
};

function hash(n: number): number {
  let x = (n * 2654435761) >>> 0;
  x ^= x >>> 15;
  x = Math.imul(x, 2246822519) >>> 0;
  return (x >>> 0) / 4294967296;
}

function walkerVariant(id: number): SoggyVariant {
  const v = Math.floor(hash(id) * 3);
  return v === 0 ? "walkerRing" : v === 1 ? "walkerSnorkel" : "walkerHat";
}

function variantFor(e: { kind: EnemyKind; id: number }): SoggyVariant | "barrel" {
  switch (e.kind) {
    case "walker":
      return walkerVariant(e.id);
    case "runner":
      return "runner";
    case "brute":
      return "brute";
    case "flanker":
      return "flanker";
    case "barrel":
      return "barrel";
  }
}

const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);
const easeOutBack = (t: number): number => {
  const c = 1.7;
  const u = t - 1;
  return 1 + (c + 1) * u * u * u + c * u * u;
};

interface Dying {
  kind: EnemyKind;
  variant: SoggyVariant | "barrel";
  x: number;
  z: number;
  t0: number;
  burst: boolean;
}

interface Scheduled {
  at: number;
  fn: () => void;
}

// ---------------------------------------------------------------- factory --

export function createRenderer(
  canvas: HTMLCanvasElement,
  options: RendererOptions = {},
): SquadRenderer {
  const gl = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  const maxDpr = options.maxPixelRatio ?? 1.75;
  gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
  gl.outputColorSpace = THREE.SRGBColorSpace;
  gl.toneMapping = THREE.ACESFilmicToneMapping;
  gl.toneMappingExposure = 1.05;
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFSoftShadowMap;
  gl.info.autoReset = true;

  let reducedMotion = options.reducedMotion ?? false;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(BASE_FOV, 0.6, 0.5, 450);
  camera.position.copy(CAM_POS);
  camera.lookAt(CAM_LOOK);

  // lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
  const sun = new THREE.DirectionalLight(0xffffff, 2.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  sun.shadow.radius = 3;
  const rim = new THREE.DirectionalLight(0xffffff, 0.6);
  scene.add(hemi, sun, sun.target, rim, rim.target);

  // shared character material
  const charMat = toonMaterial();

  // squad
  const squadRig = new InstancedRig(soldierParts(), charMat, RENDER_SQUAD_CAP);
  scene.add(squadRig.group);
  const pennant = new THREE.Mesh(pennantGeometry().build(), charMat);
  pennant.castShadow = true;
  scene.add(pennant);

  // enemies
  const enemyRigs = new Map<SoggyVariant | "barrel", InstancedRig>();
  const caps: Record<SoggyVariant | "barrel", number> = {
    walkerRing: 90,
    walkerSnorkel: 90,
    walkerHat: 90,
    runner: 80,
    brute: 30,
    flanker: 50,
    barrel: 40,
  };
  for (const v of Object.keys(caps) as (SoggyVariant | "barrel")[]) {
    const rig = new InstancedRig(v === "barrel" ? barrelParts() : soggyParts(v), charMat, caps[v]);
    enemyRigs.set(v, rig);
    scene.add(rig.group);
  }
  let bossRig: InstancedRig | null = null;

  // effects
  const cubes = makeCubePool(700);
  const helmets = makeHelmetPool(48);
  const blobs = new FxLayer(new THREE.PlaneGeometry(1, 1), 420, { radial: true, renderOrder: 1 });
  const rings = new FxLayer(new THREE.RingGeometry(0.82, 1, 40), 64, { renderOrder: 2 });
  const stars = new FxLayer(starGeometry(5), 96, { renderOrder: 6 });
  const chevrons = new FxLayer(chevronGeometry(), 160, { renderOrder: 2 });
  const stripes = new FxLayer(new THREE.PlaneGeometry(1, 1), 24, { renderOrder: 1 });
  const hpSegs = new FxLayer(new THREE.PlaneGeometry(1, 1), 30 * 12, {
    renderOrder: 7,
    depthTest: false,
  });
  const popups = new PopupPool(20);
  const tracerGeo = new THREE.CapsuleGeometry(0.5, 1, 2, 6);
  tracerGeo.rotateX(Math.PI / 2);
  const tracerMat = new THREE.MeshBasicMaterial({ toneMapped: false });
  const tracers = new THREE.InstancedMesh(tracerGeo, tracerMat, 500);
  tracers.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(500 * 3), 3);
  tracers.frustumCulled = false;
  tracers.count = 0;
  tracers.renderOrder = 5;
  scene.add(
    cubes.mesh,
    helmets.mesh,
    blobs.mesh,
    rings.mesh,
    stars.mesh,
    chevrons.mesh,
    stripes.mesh,
    hpSegs.mesh,
    popups.group,
    tracers,
  );

  const gates = new GateLayer();
  scene.add(gates.group);
  gates.onShatter = (x, y, z, color) => {
    cubes.burst({
      x,
      y,
      z,
      count: 26,
      color: [color, color, 0xffffff],
      speed: 5,
      up: 4,
      size: 0.34,
      flat: 0.25,
      life: 1.1,
      spread: 2.4,
      bias: [0, 0, 2],
    });
    ringFx.push({ x, z, t0: animTime, dur: 0.45, r0: 0.6, r1: 3.2, color });
  };

  // ---------------------------------------------------------------- state --
  let env: Environment | null = null;
  let theme: Theme = THEMES.coastal;
  let biome: BiomeId = "coastal";
  let animTime = 0;
  let ambientTime = 0;
  let lastRunKey = "";
  let lastStateRef: GameState | null = null;
  let eventCursor = 0;
  let frameNo = 0;
  let trauma = 0;
  let camX = 0;
  let width = 1;
  let height = 1;
  let lastVolleyAt = -10;
  let lastWeapon: WeaponId = "rifle";
  let lastSquadRendered = 0;
  const slotJoinAt: number[] = [];
  const xHistory: { t: number; x: number }[] = [];
  const dying: Dying[] = [];
  const scheduled: Scheduled[] = [];
  const ringFx: {
    x: number;
    z: number;
    t0: number;
    dur: number;
    r0: number;
    r1: number;
    color: number;
  }[] = [];
  const flashFx: { x: number; y: number; z: number; t0: number; s: number; color: number }[] = [];
  const slotPos: { x: number; z: number; row: number }[] = [];
  const m = new THREE.Matrix4();
  const camQuat = new THREE.Quaternion();
  const tmpV = new THREE.Vector3();
  const tmpC = new THREE.Color();

  // --------------------------------------------------------------- level --
  function fitShadow(): void {
    // Fit an orthographic shadow frustum to the gameplay road box (x ±9.5, z +14..-46).
    const target = new THREE.Vector3(0, 0, -16);
    sun.target.position.copy(target);
    sun.position
      .copy(target)
      .add(new THREE.Vector3(...theme.sunOffset).normalize().multiplyScalar(40));
    sun.updateMatrixWorld();
    sun.target.updateMatrixWorld();
    const view = new THREE.Matrix4().lookAt(sun.position, target, new THREE.Vector3(0, 1, 0));
    const inv = new THREE.Matrix4()
      .makeRotationFromQuaternion(new THREE.Quaternion().setFromRotationMatrix(view))
      .invert();
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (const x of [-9.5, 9.5])
      for (const y of [-0.5, 6])
        for (const z of [14, -46]) {
          tmpV.set(x, y, z).sub(sun.position).applyMatrix4(inv);
          minX = Math.min(minX, tmpV.x);
          maxX = Math.max(maxX, tmpV.x);
          minY = Math.min(minY, tmpV.y);
          maxY = Math.max(maxY, tmpV.y);
          minZ = Math.min(minZ, tmpV.z);
          maxZ = Math.max(maxZ, tmpV.z);
        }
    const cam = sun.shadow.camera;
    cam.left = minX;
    cam.right = maxX;
    cam.bottom = minY;
    cam.top = maxY;
    cam.near = Math.max(0.5, -maxZ - 2);
    cam.far = -minZ + 2;
    cam.updateProjectionMatrix();
  }

  function setLevel(levelId: string): void {
    const next = biomeFor(levelId);
    // Every level selection starts a new presentation session: drop stale FX and cursors.
    resetEffects();
    eventCursor = 0;
    lastRunKey = "";
    lastStateRef = null;
    if (env && next === biome) return;
    biome = next;
    theme = THEMES[biome];
    if (env) env.dispose();
    env = new Environment(theme);
    scene.add(env.group);
    scene.background = new THREE.Color(theme.skyHorizon);
    scene.fog = new THREE.Fog(theme.fog, theme.fogNear, theme.fogFar);
    hemi.color.setHex(theme.hemiSky);
    hemi.groundColor.setHex(theme.hemiGround);
    hemi.intensity = theme.hemiIntensity;
    sun.color.setHex(theme.sunColor);
    sun.intensity = theme.sunIntensity;
    rim.color.setHex(theme.rimColor);
    rim.intensity = theme.rimIntensity;
    rim.target.position.copy(CAM_LOOK);
    rim.position.copy(CAM_LOOK).add(new THREE.Vector3(...theme.rimOffset));
    gl.toneMappingExposure = theme.exposure;
    fitShadow();
    if (bossRig) bossRig.dispose();
    bossRig = new InstancedRig(bossParts(biome), charMat, 1);
    scene.add(bossRig.group);
  }

  function resetEffects(): void {
    cubes.clear();
    helmets.clear();
    popups.clear();
    dying.length = 0;
    scheduled.length = 0;
    ringFx.length = 0;
    flashFx.length = 0;
    gates.reset();
    slotJoinAt.length = 0;
    lastSquadRendered = 0;
    xHistory.length = 0;
    trauma = 0;
    lastVolleyAt = -10;
  }

  // ------------------------------------------------------------- formation --
  function layoutSquad(count: number, halfWidth: number): void {
    slotPos.length = 0;
    if (count <= 0) return;
    const maxRows = Math.floor((MAX_ROW_Z - SQUAD_Z) / ROW_DZ) + 1;
    let cols = clamp(Math.round((halfWidth * 2) / COL_DX) + 1, 1, 9);
    cols = Math.min(cols, count);
    if (Math.ceil(count / cols) > maxRows) cols = Math.ceil(count / maxRows);
    let placed = 0;
    let row = 0;
    while (placed < count) {
      const inRow = Math.min(cols, count - placed);
      const stagger = row % 2 ? COL_DX * 0.5 : 0;
      for (let c = 0; c < inRow; c++) {
        const ox =
          (c - (inRow - 1) / 2) * COL_DX +
          (inRow < cols ? 0 : stagger - (row % 2 ? COL_DX * 0.25 : 0));
        slotPos.push({ x: ox, z: row * ROW_DZ, row });
      }
      placed += inRow;
      row++;
    }
  }

  function historyX(t: number, fallback: number): number {
    for (let i = xHistory.length - 1; i >= 0; i--) {
      const h = xHistory[i];
      if (h && h.t <= t) return h.x;
    }
    return xHistory[0]?.x ?? fallback;
  }

  // --------------------------------------------------------------- events --
  function shake(amount: number): void {
    if (!reducedMotion) trauma = Math.min(1, trauma + amount);
  }

  function handleEvent(ev: GameEvent, state: GameState): void {
    switch (ev.type) {
      case "volley":
        lastVolleyAt = animTime;
        break;
      case "hit":
        if (ev.target === "enemy")
          cubes.burst({
            x: ev.x,
            y: 0.8,
            z: ev.z + 0.3,
            count: 3,
            color: [0xffe066, 0xffffff],
            speed: 2.5,
            up: 2.5,
            size: 0.1,
            life: 0.35,
            gravity: 10,
          });
        else if (ev.target === "boss")
          cubes.burst({
            x: ev.x,
            y: 2.2,
            z: ev.z + 1.5,
            count: 4,
            color: [0xffe066, 0xff8a3d, 0xffffff],
            speed: 3,
            up: 3,
            size: 0.14,
            life: 0.4,
          });
        else
          cubes.burst({
            x: ev.x,
            y: 1.5,
            z: ev.z + 0.1,
            count: 2,
            color: [0xbde6ff, 0xffffff],
            speed: 1.5,
            up: 1.5,
            size: 0.09,
            life: 0.3,
            gravity: 6,
          });
        break;
      case "kill": {
        dying.push({
          kind: ev.kind,
          variant: variantFor({ kind: ev.kind, id: ev.enemyId }),
          x: ev.x,
          z: ev.z,
          t0: animTime,
          burst: false,
        });
        if (ev.points > 0) popups.spawn(`+${ev.points}`, ev.x, KIND_HEIGHT[ev.kind] + 0.4, ev.z);
        break;
      }
      case "squadLoss": {
        const n = Math.min(ev.amount, 6);
        for (let i = 0; i < n; i++) {
          const s = slotPos[Math.min(slotPos.length - 1, Math.max(0, state.squad + i))] ?? {
            x: 0,
            z: 0,
          };
          const x = ev.x + s.x;
          const z = SQUAD_Z + s.z;
          cubes.burst({
            x,
            y: 0.7,
            z,
            count: 6,
            color: [SQUAD.cobalt, SQUAD.cobalt, SQUAD.legs, SQUAD.scarf],
            speed: 3.2,
            up: 4.5,
            size: 0.17,
            life: 0.9,
          });
          helmets.burst({
            x,
            y: 1.2,
            z,
            count: 1,
            color: SQUAD.helmet,
            speed: 2.5,
            up: 6.5,
            size: 0.24,
            life: 1.3,
            gravity: 14,
          });
        }
        shake(0.3);
        break;
      }
      case "gate": {
        gates.onGateChosen(ev.gateId, ev.rowId);
        const col = GATE_TONE[ev.tone];
        ringFx.push({
          x: state.player.x,
          z: SQUAD_Z + 1,
          t0: animTime,
          dur: 0.5,
          r0: 0.5,
          r1: 3.4,
          color: col,
        });
        popups.spawn(
          ev.label,
          state.player.x,
          2.6,
          SQUAD_Z,
          ev.tone === "bad" ? "#FF8A80" : ev.tone === "mixed" ? "#FFD27A" : "#9FD9FF",
        );
        break;
      }
      case "gateGrow":
        gates.onGrow(ev.gateId, animTime);
        break;
      case "explosion":
        cubes.burst({
          x: ev.x,
          y: 0.6,
          z: ev.z,
          count: 30,
          color: [SQUAD.tip, SQUAD.tip, 0xf4e9d0, 0xffe066],
          speed: 6,
          up: 6,
          size: 0.26,
          life: 1.0,
        });
        ringFx.push({
          x: ev.x,
          z: ev.z,
          t0: animTime,
          dur: 0.4,
          r0: 0.4,
          r1: Math.max(1.5, ev.radius),
          color: 0xffb020,
        });
        flashFx.push({ x: ev.x, y: 0.8, z: ev.z, t0: animTime, s: 2.6, color: 0xffe9a8 });
        shake(0.5);
        break;
      case "bossSlam":
        ringFx.push({
          x: ev.x,
          z: ev.z,
          t0: animTime,
          dur: 0.5,
          r0: 0.5,
          r1: 3.0,
          color: 0xff5247,
        });
        cubes.burst({
          x: ev.x,
          y: 0.3,
          z: ev.z,
          count: 16,
          color: [0xf4e9d0, theme.road],
          speed: 4.5,
          up: 3,
          size: 0.2,
          life: 0.8,
        });
        shake(0.6);
        break;
      case "bossEnrage":
        if (state.boss)
          cubes.burst({
            x: state.boss.x,
            y: 4.5,
            z: state.boss.z,
            count: 14,
            color: [0xffffff, 0xf4fffb],
            speed: 2,
            up: 5,
            size: 0.3,
            life: 1.0,
            gravity: -2,
          });
        break;
      case "bossDefeated": {
        const { x, z } = ev;
        for (let i = 0; i < 3; i++) {
          scheduled.push({
            at: animTime + i * 0.22,
            fn: () => {
              cubes.burst({
                x: x + (i - 1) * 2,
                y: 2.5,
                z,
                count: 18,
                color: [0xd9483b, 0xf28c6a, 0xffc93c],
                speed: 5,
                up: 5,
                size: 0.3,
                life: 1.1,
              });
              shake(0.4);
            },
          });
        }
        scheduled.push({
          at: animTime + 0.75,
          fn: () => {
            cubes.burst({
              x,
              y: 3,
              z,
              count: 70,
              color: [0xd9483b, 0xf28c6a, 0xffc93c, 0xffffff, SOGGY.body],
              speed: 8,
              up: 8,
              size: 0.36,
              life: 1.6,
              spread: 3,
            });
            ringFx.push({ x, z, t0: animTime, dur: 0.6, r0: 1, r1: 7, color: 0xffc93c });
            shake(0.7);
          },
        });
        break;
      }
      case "laneChange": {
        const dir = ev.lane > state.player.lane ? -1 : ev.lane < state.player.lane ? 1 : 0;
        for (const s of [-1, 1])
          cubes.burst({
            x: state.player.x + s * (state.player.halfWidth + 0.2),
            y: 0.15,
            z: SQUAD_Z + 0.4,
            count: 3,
            color: [0xf4e9d0, 0xe9dcc3],
            speed: 1.2,
            up: 1.6,
            size: 0.16,
            life: 0.45,
            gravity: 4,
            bias: [dir * 1.5, 0, 0.5],
          });
        break;
      }
      default:
        break;
    }
  }

  // --------------------------------------------------------------- render --
  const poses: Record<string, PartPose> = {};
  const legL: PartPose = {};
  const legR: PartPose = {};
  const armL: PartPose = {};
  const armR: PartPose = {};
  const arms: PartPose = {};
  const body: PartPose = {};

  function drawSquad(state: GameState, gameDt: number): void {
    const count = Math.min(state.squad, RENDER_SQUAD_CAP);
    layoutSquad(count, state.player.halfWidth);
    if (count > lastSquadRendered)
      for (let i = lastSquadRendered; i < count; i++) slotJoinAt[i] = animTime;
    if (count > lastSquadRendered && lastSquadRendered > 0) {
      for (let i = lastSquadRendered; i < count; i++) {
        const s = slotPos[i];
        if (s)
          ringFx.push({
            x: state.player.x + s.x,
            z: SQUAD_Z + s.z,
            t0: animTime,
            dur: 0.35,
            r0: 0.1,
            r1: 0.7,
            color: 0x2ea8ff,
          });
      }
    }
    lastSquadRendered = count;
    if (gameDt > 0 || xHistory.length === 0) {
      xHistory.push({ t: animTime, x: state.player.x });
      while (xHistory.length > 2 && (xHistory[0]?.t ?? 0) < animTime - 0.4) xHistory.shift();
    }

    if (state.weapon.id !== lastWeapon) lastWeapon = state.weapon.id;
    for (const id of WEAPON_IDS) squadRig.setPartEnabled(`gun_${id}`, id === lastWeapon);
    const gunKey = `gun_${lastWeapon}`;

    const running = state.status === "running" || state.status === "paused";
    const won = state.status === "won";
    const roll = -clamp(state.player.vx / 16, -1, 1) * BANK;
    const sinceVolley = animTime - lastVolleyAt;
    const hurt = state.player.lastHurtAt >= 0 && state.elapsed - state.player.lastHurtAt < 0.08;
    const muzzle = MUZZLE_LOCAL[lastWeapon];

    squadRig.begin();
    let pennantSet = false;
    slotPos.forEach((s, i) => {
      const ph = hash(i + 1) * Math.PI * 2;
      const t = animTime * RUN_HZ * Math.PI * 2 + ph;
      const rowX = historyX(animTime - s.row * 0.025, state.player.x);
      const x = rowX + s.x;
      const z = SQUAD_Z + s.z;
      // join: drop from y 2, scale 0 → 1.15 → 1 over 260 ms
      const jt = clamp((animTime - (slotJoinAt[i] ?? -10)) / 0.26, 0, 1);
      const joinScale = jt >= 1 ? 1 : easeOutBack(jt) * (1 + 0.05 * Math.sin(jt * Math.PI));
      const joinY = (1 - jt) * 2;
      const swing = running ? 35 * DEG : 22 * DEG;
      const bob = Math.abs(Math.sin(t)) * (running ? 0.06 : 0.04);
      let y = bob + joinY;
      let hop = 0;
      if (won) {
        hop = Math.max(0, Math.sin(animTime * 7 + ph)) * 0.45;
        y += hop;
      }
      const recoilT = sinceVolley - hash(i + 99) * 0.03;
      const recoil =
        recoilT >= 0 && recoilT < 0.06
          ? (Math.sin((recoilT / 0.06) * Math.PI) * 0.05) / SOLDIER_SCALE
          : 0;
      legL.rx = Math.sin(t) * swing;
      legR.rx = -Math.sin(t) * swing;
      arms.rx = (won ? -0.9 * Math.min(1, hop * 3) : Math.sin(t * 2) * 0.03) + recoil * 1.5;
      arms.tz = recoil;
      arms.tx = 0;
      body.rx = 0;
      poses.body = body;
      poses.legL = legL;
      poses.legR = legR;
      poses.arms = arms;
      poses[gunKey] = arms;
      const sq = joinScale * SOLDIER_SCALE;
      rootMatrix(m, x, y, z, 0, running ? -0.06 : 0, roll, sq, sq * (1 - bob * 0.6), sq);
      squadRig.push(m, poses, hurt ? 2.2 : 1);
      // muzzle flash star on volley
      if (recoilT >= 0 && recoilT < 0.07 && s.row < 2) {
        const mx = x + (SOLDIER_ARMS_PIVOT[0] + muzzle[0]) * sq;
        const my = y + (SOLDIER_ARMS_PIVOT[1] + muzzle[1]) * sq;
        const mz = z + (SOLDIER_ARMS_PIVOT[2] + muzzle[2] - recoil) * sq;
        const k = 1 - recoilT / 0.07;
        tmpV.set(mx, my, mz);
        m.compose(tmpV, camQuat, new THREE.Vector3(0.55 * k + 0.2, 0.55 * k + 0.2, 1));
        stars.push(m, 0xffe066, 1);
        m.compose(tmpV, camQuat, new THREE.Vector3(0.28 * k, 0.28 * k, 1));
        stars.push(m, 0xffffff, 1);
      }
      blobs.pushFlat(x, 0.02, z, 0.95 * sq, 0.95 * sq, 0, 0x14233f, 0.45 * joinScale);
      if (
        i ===
          Math.floor(
            Math.min(slotPos.length, Math.max(1, slotPos.filter((p) => p.row === 0).length)) / 2,
          ) &&
        !pennantSet
      ) {
        pennantSet = true;
        pennant.visible = true;
        pennant.position.set(x - 0.22, y + 0.6, z + 0.25);
        pennant.rotation.set(0, Math.sin(animTime * 4) * 0.25, roll);
        pennant.scale.setScalar(sq);
      }
    });
    if (!pennantSet) pennant.visible = false;
    squadRig.end();
  }

  function drawEnemies(state: GameState): void {
    for (const rig of enemyRigs.values()) rig.begin();
    for (const e of state.enemies) drawEnemy(e, state, ENEMY_VIS_SCALE);
    // dying: inflate to 1.25 for 60 ms then burst
    for (let i = dying.length - 1; i >= 0; i--) {
      const d = dying[i];
      if (!d) continue;
      const t = animTime - d.t0;
      if (t >= 0.06) {
        const h = KIND_HEIGHT[d.kind];
        const n = d.kind === "brute" ? 14 : d.kind === "barrel" ? 10 : 7;
        cubes.burst({
          x: d.x,
          y: h * 0.5,
          z: d.z,
          count: n,
          color: KILL_COLORS[d.kind],
          speed: 3.5,
          up: 5,
          size: d.kind === "brute" ? 0.3 : 0.2,
          life: 0.9,
          spread: h * 0.5,
        });
        dying.splice(i, 1);
        continue;
      }
      const s = 1 + (t / 0.06) * 0.25;
      const rig = enemyRigs.get(d.variant);
      if (!rig) continue;
      rootMatrix(m, d.x, 0, d.z, Math.PI, 0, 0, s, s, s);
      rig.push(m, {}, 2.4);
    }
    for (const rig of enemyRigs.values()) rig.end();
  }

  function drawEnemy(e: EnemySnapshot, state: GameState, scale: number): void {
    const v = variantFor(e);
    const rig = enemyRigs.get(v);
    if (!rig) return;
    const ph = hash(e.id) * Math.PI * 2;
    const age = animTime;
    const sinceHit = e.lastHitAt >= 0 ? state.elapsed - e.lastHitAt : 99;
    const flash = sinceHit < 0.06;
    const squash = flash ? 0.85 : 1;
    const spawnT = clamp((state.elapsed - e.spawnedAt) / 0.3, 0, 1);
    const pop = state.status === "ready" ? 1 : easeOutBack(spawnT);
    let tint = flash ? 2.3 : 1;
    let yaw = Math.PI;
    let pitch = 0;
    let rollZ = 0;
    let y = 0;
    let sx = scale * pop;
    let sy = scale * squash * pop;
    for (const k of Object.keys(poses)) delete poses[k];
    switch (e.kind) {
      case "walker": {
        const t = age * 1.6 * Math.PI * 2 + ph;
        legL.rx = Math.sin(t) * 0.5;
        legR.rx = -Math.sin(t) * 0.5;
        armL.rx = -0.25 + Math.sin(t + 1) * 0.25;
        armR.rx = -0.25 - Math.sin(t + 1) * 0.25;
        armL.rz = 0.1;
        armR.rz = -0.1;
        rollZ = Math.sin(t) * 0.12;
        y = Math.abs(Math.sin(t)) * 0.06;
        break;
      }
      case "runner": {
        const t = age * 3.4 * Math.PI * 2 + ph;
        legL.rx = Math.sin(t) * 0.8;
        legR.rx = -Math.sin(t) * 0.8;
        armL.rx = -Math.sin(t) * 0.9 + 0.3;
        armR.rx = Math.sin(t) * 0.9 + 0.3;
        armL.rz = 0;
        armR.rz = 0;
        pitch = -20 * DEG;
        y = Math.abs(Math.sin(t)) * 0.12;
        break;
      }
      case "brute": {
        const t = age * 1.0 * Math.PI * 2 + ph;
        legL.rx = Math.sin(t) * 0.35;
        legR.rx = -Math.sin(t) * 0.35;
        armL.rx = -0.4 + Math.sin(t) * 0.2;
        armR.rx = -0.4 - Math.sin(t) * 0.2;
        armL.rz = 0.25;
        armR.rz = -0.25;
        rollZ = Math.sin(t) * 0.08;
        y = Math.abs(Math.sin(t)) * 0.05;
        sy *= 1 - Math.abs(Math.cos(t)) * 0.04;
        break;
      }
      case "flanker": {
        const t = age * 5 * Math.PI * 2 + ph;
        legL.rz = Math.sin(t) * 0.35;
        legR.rz = Math.sin(t + Math.PI) * 0.35;
        legL.ry = Math.cos(t) * 0.2;
        legR.ry = -Math.cos(t) * 0.2;
        armL.rx = -0.3 + Math.sin(t * 0.5) * 0.4;
        armR.rx = -0.3 - Math.sin(t * 0.5) * 0.4;
        armL.rz = 0;
        armR.rz = 0;
        // faces the squad, scuttles sideways with a hint of turn into vx
        yaw = Math.PI - clamp(e.vx * 0.06, -0.5, 0.5);
        rollZ = Math.sin(t) * 0.06;
        y = Math.abs(Math.sin(t)) * 0.04;
        break;
      }
      case "barrel": {
        yaw = 0;
        body.rx = e.z / 0.46;
        poses.body = body;
        rollZ = Math.sin(age * 5 + ph) * 0.06;
        const near = clamp((e.z + 30) / 35, 0, 1);
        const blink = Math.sin(age * (4 + near * 18) * Math.PI) > 0.4;
        if (blink && near > 0.15) tint = Math.max(tint, 1.7);
        sx = scale * pop;
        sy = scale * pop;
        break;
      }
    }
    if (e.kind !== "barrel") {
      poses.legL = legL;
      poses.legR = legR;
      poses.armL = armL;
      poses.armR = armR;
    }
    if (state.status === "ready" && e.kind !== "barrel") {
      // idle preview: same cycle, gentler
      y *= 0.6;
    }
    rootMatrix(m, e.x, y, e.z, yaw, pitch, rollZ, sx, sy, sx);
    rig.push(m, poses, tint);
    blobs.pushFlat(e.x, 0.02, e.z, e.radius * 2.2 * pop, e.radius * 2.2 * pop, 0, 0x14233f, 0.42);
    if (e.kind === "brute" && e.maxHp > 0)
      drawHpRing(e.x, KIND_HEIGHT.brute + 0.55, e.z, e.hp / e.maxHp);
  }

  function drawHpRing(x: number, y: number, z: number, frac: number): void {
    const segs = 12;
    const filled = Math.ceil(clamp(frac, 0, 1) * segs);
    for (let i = 0; i < segs; i++) {
      const a = Math.PI / 2 - (i / segs) * Math.PI * 2;
      tmpV
        .set(Math.cos(a) * 0.42, Math.sin(a) * 0.42, 0)
        .applyQuaternion(camQuat)
        .add(new THREE.Vector3(x, y, z));
      const q = camQuat
        .clone()
        .multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), a));
      m.compose(tmpV, q, new THREE.Vector3(0.12, 0.17, 1));
      hpSegs.push(m, i < filled ? 0x6ee7a0 : 0x14233f, i < filled ? 1 : 0.55);
    }
  }

  function drawBoss(state: GameState): void {
    if (!bossRig) return;
    bossRig.begin();
    const b = state.boss;
    if (b && b.phase !== "dead") {
      const t = animTime * (b.phase === "enraged" ? 2.2 : 1.1) * Math.PI * 2;
      const planted = b.phase === "siege";
      legL.rz = Math.sin(t) * (planted ? 0.08 : 0.25);
      legR.rz = Math.sin(t + Math.PI) * (planted ? 0.08 : 0.25);
      legL.rx = legR.rx = 0;
      legL.ry = legR.ry = 0;
      const slam = planted ? Math.max(0, Math.sin(animTime * 2.4)) : 0;
      armL.rx = -0.2 - slam * 0.8 + Math.sin(t) * 0.15;
      armR.rx =
        -0.2 -
        Math.max(0, Math.sin(animTime * 2.4 + Math.PI)) * (planted ? 0.8 : 0) -
        Math.sin(t) * 0.15;
      armL.rz = armR.rz = 0;
      for (const k of Object.keys(poses)) delete poses[k];
      poses.legL = legL;
      poses.legR = legR;
      poses.armL = armL;
      poses.armR = armR;
      const sinceHit = b.lastHitAt >= 0 ? state.elapsed - b.lastHitAt : 99;
      let tint = sinceHit < 0.06 ? 1.6 : 1;
      if (b.phase === "enraged") tint *= 1 + 0.25 * (0.5 + 0.5 * Math.sin(animTime * 12));
      const waddle = Math.sin(t) * (planted ? 0.03 : 0.1);
      const s = sinceHit < 0.06 ? 0.95 : 1;
      rootMatrix(m, b.x, Math.abs(Math.sin(t)) * 0.12, b.z, Math.PI, 0, waddle, 1.2, 1.2 * s, 1.2);
      bossRig.push(m, poses, tint);
      blobs.pushFlat(b.x, 0.03, b.z, 7, 4.5, 0, 0x14233f, 0.35);
      if (b.phase === "enraged" && Math.floor(animTime * 8) % 3 === 0) {
        cubes.burst({
          x: b.x + (hash(Math.floor(animTime * 8)) - 0.5) * 3,
          y: 5.5,
          z: b.z,
          count: 1,
          color: 0xffffff,
          speed: 0.6,
          up: 2,
          size: 0.32,
          life: 0.8,
          gravity: -1.5,
        });
      }
    }
    bossRig.end();
  }

  function drawTracers(state: GameState): void {
    let n = 0;
    const q = new THREE.Quaternion();
    const fwd = new THREE.Vector3(0, 0, -1);
    const dir = new THREE.Vector3();
    const s = new THREE.Vector3();
    const muzzleY = (SOLDIER_ARMS_PIVOT[1] + MUZZLE_LOCAL.rifle[1]) * SOLDIER_SCALE;
    for (const b of state.bullets) {
      if (n >= 500) break;
      const spec = TRACER[b.weapon];
      dir.set(b.vx, 0, b.vz);
      if (dir.lengthSq() < 1e-6) dir.set(0, 0, -1);
      dir.normalize();
      q.setFromUnitVectors(fwd, dir);
      const w = spec.width;
      s.set(w, w, spec.len + w);
      tmpV.set(b.x, b.weapon === "rocket" ? 1.0 : muzzleY, b.z);
      m.compose(tmpV, q, s);
      tracers.setMatrixAt(n, m);
      tracers.setColorAt(n, tmpC.setHex(spec.color));
      n++;
      if (b.weapon === "lancer" || b.weapon === "rocket") {
        s.set(w * 0.45, w * 0.45, spec.len * 0.85);
        m.compose(tmpV, q, s);
        tracers.setMatrixAt(n, m);
        tracers.setColorAt(n, tmpC.setHex(0xffffff));
        n++;
      }
    }
    tracers.count = n;
    tracers.visible = n > 0;
    tracers.instanceMatrix.needsUpdate = true;
    if (tracers.instanceColor) tracers.instanceColor.needsUpdate = true;
    // rocket puff trail
    if (state.status === "running") {
      for (const b of state.bullets) {
        if (b.weapon === "rocket" && hash(b.id + Math.floor(animTime * 30)) < 0.35) {
          cubes.burst({
            x: b.x,
            y: 1.0,
            z: b.z + 0.4,
            count: 1,
            color: 0xf4e9d0,
            speed: 0.3,
            up: 0.6,
            size: 0.18,
            life: 0.4,
            gravity: 0,
          });
        }
      }
    }
  }

  function drawTelegraphs(state: GameState): void {
    for (const tg of state.telegraphs) {
      const k = tg.duration > 0 ? clamp(tg.remaining / tg.duration, 0, 1) : 0;
      const hz = 2 + (1 - k) * 4;
      const pulse = 0.55 + 0.45 * Math.sin(animTime * hz * Math.PI * 2);
      const laneX = LANE_X[tg.lane];
      if (tg.kind === "flank") {
        const side = tg.side === 0 ? 1 : tg.side;
        for (let i = 0; i < 4; i++) {
          const u = (animTime * 1.6 + i / 4) % 1;
          const x = side * (5.4 - u * 5.4) + laneX * u;
          chevrons.pushFlat(
            x,
            0.04,
            tg.z,
            1.1,
            0.9,
            side > 0 ? -Math.PI / 2 : Math.PI / 2,
            0xff5247,
            (0.35 + 0.65 * pulse) * Math.sin(u * Math.PI),
          );
        }
        // kerb edge arrow
        chevrons.pushFlat(
          side * 5.6,
          0.3,
          tg.z,
          1.4,
          1.2,
          side > 0 ? -Math.PI / 2 : Math.PI / 2,
          0xff5247,
          pulse,
        );
        stripes.pushFlat(
          (side * 4.8 + laneX) / 2,
          0.025,
          tg.z,
          Math.abs(side * 4.8 - laneX),
          1.2,
          0,
          0xfff6e0,
          0.35 * pulse,
        );
      } else if (tg.kind === "rush") {
        stripes.pushFlat(laneX, 0.025, -17, 2.6, 48, 0, 0xff5247, 0.16 + 0.14 * pulse);
        for (let i = 0; i < 8; i++) {
          const zz = -40 + ((animTime * 10 + i * 6) % 48);
          chevrons.pushFlat(laneX, 0.035, zz, 1.4, 1.1, Math.PI, 0xff5247, 0.5 * pulse);
        }
      } else {
        const r = 0.9 + k * 2.4;
        tmpV.set(tg.x, 0.04, tg.z);
        rings.pushFlat(tg.x, 0.04, tg.z, r, r, 0, 0xff5247, 0.4 + 0.6 * pulse);
        stripes.pushFlat(tg.x, 0.03, tg.z, 1.8, 1.8, Math.PI / 4, 0xfff6e0, 0.25 * pulse);
      }
    }
  }

  function drawTransient(): void {
    for (let i = ringFx.length - 1; i >= 0; i--) {
      const r = ringFx[i];
      if (!r) continue;
      const t = (animTime - r.t0) / r.dur;
      if (t >= 1) {
        ringFx.splice(i, 1);
        continue;
      }
      const rad = r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - t, 3));
      rings.pushFlat(r.x, 0.06, r.z, rad, rad, 0, r.color, 1 - t);
    }
    for (let i = flashFx.length - 1; i >= 0; i--) {
      const f = flashFx[i];
      if (!f) continue;
      const t = (animTime - f.t0) / 0.12;
      if (t >= 1) {
        flashFx.splice(i, 1);
        continue;
      }
      tmpV.set(f.x, f.y, f.z);
      const s = f.s * (0.6 + t * 0.6);
      m.compose(tmpV, camQuat, new THREE.Vector3(s, s, 1));
      stars.push(m, f.color, 1 - t);
    }
  }

  function updateCamera(state: GameState, realDt: number): void {
    const aspect = width / Math.max(1, height);
    // keep road edges at the squad row inside 6–94% of width on narrow screens
    let fov = BASE_FOV;
    for (let i = 0; i < 40; i++) {
      camera.fov = fov;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      camera.position.copy(CAM_POS);
      camera.lookAt(CAM_LOOK);
      camera.updateMatrixWorld();
      const p = tmpV.set(4.8 + 0.4, 0, SQUAD_Z).project(camera);
      if (p.x <= 0.88) break;
      fov += 1;
    }
    const target = state.player.x * 0.2;
    camX += (target - camX) * (1 - Math.exp(-realDt / 0.085));
    const lookAt = tmpV.set(camX, CAM_LOOK.y, CAM_LOOK.z);
    const pos = new THREE.Vector3(camX, CAM_POS.y, CAM_POS.z);
    if (state.status === "ready" && !reducedMotion) {
      const yaw = Math.sin((ambientTime / 14) * Math.PI * 2) * 4 * DEG;
      const off = pos
        .clone()
        .sub(lookAt)
        .applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      pos.copy(lookAt).add(off);
      pos.y += Math.sin((ambientTime / 9) * Math.PI * 2) * 0.3;
    }
    if (trauma > 0) {
      const amt = trauma * trauma * 0.18;
      pos.x += (Math.sin(ambientTime * 71) + Math.sin(ambientTime * 37)) * 0.5 * amt;
      pos.y += (Math.sin(ambientTime * 53 + 1) + Math.sin(ambientTime * 29)) * 0.5 * amt;
      trauma = Math.max(0, trauma - realDt / 0.4);
    }
    camera.position.copy(pos);
    camera.lookAt(lookAt);
    camera.updateMatrixWorld();
    camQuat.copy(camera.quaternion);
  }

  function render(state: GameState, delta: number): void {
    if (!env) setLevel(state.levelId);
    else if (biomeFor(state.levelId) !== biome) setLevel(state.levelId);
    const realDt = clamp(Number.isFinite(delta) ? delta : 0, 0, 0.1);
    const paused = state.status === "paused";
    const gameDt = paused ? 0 : realDt;
    ambientTime += realDt;
    animTime += gameDt;

    // A run is identified by level + runId + snapshot object identity. The sim now issues
    // globally unique runIds/event ids, but this stays correct even if a fresh Simulation
    // restarts its counters, and always clears stale FX on restart or mission change.
    const runKey = `${state.levelId}#${state.runId}`;
    if (runKey !== lastRunKey || state !== lastStateRef) {
      lastRunKey = runKey;
      lastStateRef = state;
      resetEffects();
      eventCursor = 0;
    }
    if (!paused) {
      for (const ev of state.events) {
        if (ev.runId !== state.runId || ev.id <= eventCursor) continue;
        eventCursor = ev.id;
        handleEvent(ev, state);
      }
      for (let i = scheduled.length - 1; i >= 0; i--) {
        const s = scheduled[i];
        if (s && s.at <= animTime) {
          scheduled.splice(i, 1);
          s.fn();
        }
      }
    }

    updateCamera(state, paused ? 0 : realDt);
    env?.update(ambientTime, state.elapsed * SCROLL_SPEED);

    blobs.begin();
    stars.begin();
    rings.begin();
    chevrons.begin();
    stripes.begin();
    hpSegs.begin();
    drawSquad(state, gameDt);
    drawEnemies(state);
    drawBoss(state);
    drawTracers(state);
    drawTelegraphs(state);
    drawTransient();
    gates.update(state, animTime, ambientTime);
    blobs.end();
    stars.end();
    rings.end();
    chevrons.end();
    stripes.end();
    hpSegs.end();
    cubes.update(gameDt);
    helmets.update(gameDt);
    popups.update(gameDt);

    gl.render(scene, camera);
    // Read-only diagnostics for QA/perf checks (no gameplay effect).
    if (++frameNo % 30 === 0) {
      const info = gl.info.render;
      canvas.dataset.drawCalls = String(info.calls);
      canvas.dataset.triangles = String(info.triangles);
      canvas.dataset.geometries = String(gl.info.memory.geometries);
      canvas.dataset.textures = String(gl.info.memory.textures);
      canvas.dataset.biome = biome;
      canvas.dataset.pixelRatio = gl.getPixelRatio().toFixed(2);
    }
  }

  function resize(w: number, h: number): void {
    width = Math.max(1, Math.floor(w));
    height = Math.max(1, Math.floor(h));
    gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
    gl.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function dispose(): void {
    squadRig.dispose();
    for (const rig of enemyRigs.values()) rig.dispose();
    enemyRigs.clear();
    bossRig?.dispose();
    pennant.geometry.dispose();
    charMat.dispose();
    cubes.dispose();
    (cubes.mesh.material as THREE.Material).dispose();
    helmets.dispose();
    (helmets.mesh.material as THREE.Material).dispose();
    blobs.dispose();
    rings.dispose();
    stars.dispose();
    chevrons.dispose();
    stripes.dispose();
    hpSegs.dispose();
    popups.dispose();
    tracerGeo.dispose();
    tracerMat.dispose();
    tracers.dispose();
    gates.dispose();
    env?.dispose();
    env = null;
    sun.shadow.map?.dispose();
    disposeToonRamp();
    scene.clear();
    gl.dispose();
  }

  resize(canvas.clientWidth || canvas.width || 600, canvas.clientHeight || canvas.height || 1000);

  return {
    render,
    resize,
    setLevel,
    setReducedMotion(reduced: boolean) {
      reducedMotion = reduced;
      if (reduced) trauma = 0;
    },
    stats() {
      return {
        calls: gl.info.render.calls,
        triangles: gl.info.render.triangles,
        geometries: gl.info.memory.geometries,
        textures: gl.info.memory.textures,
        level: biome,
      };
    },
    dispose,
  };
}
