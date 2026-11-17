// Chunky vinyl-toy character rigs (art bible "Tin-Toy Tidewatch"): cobalt troopers,
// sea-green "Soggies", rolling hazard drums and three level bosses. Every rig is a few
// articulated parts (body / legs / arms) so each part renders as one InstancedMesh.
import type { EnemyKind, WeaponId } from "../game/types";
import type { RigPartDef } from "./crowd";
import { Kit } from "./kit";
import { SOGGY, SQUAD, type BiomeId } from "./themes";

const HALF_PI = Math.PI / 2;

/** Trooper is modelled ~1.48 tall and drawn at this root scale → 1.3 units (bible). */
/** ~1.5 units tall on screen: readability boost over the 1.3 bible target (sim halfWidth still bounds the formation). */
export const SOLDIER_SCALE = 1.15;
/** Arms/gun pivot (root space). Guns point along -z. */
export const SOLDIER_ARMS_PIVOT: [number, number, number] = [0, 0.95, 0];
/** Muzzle tip per weapon relative to the arms pivot. */
export const MUZZLE_LOCAL: Record<WeaponId, [number, number, number]> = {
  rifle: [0.1, -0.12, -1.0],
  smg: [0.1, -0.12, -0.86],
  shotgun: [0.1, -0.12, -0.98],
  lancer: [0.1, -0.12, -1.3],
  rocket: [0.26, 0.2, -0.86],
};
export const WEAPON_IDS: readonly WeaponId[] = ["rifle", "smg", "shotgun", "lancer", "rocket"];

function gunKit(id: WeaponId): Kit {
  const k = new Kit();
  const B = SQUAD.blaster;
  switch (id) {
    case "rifle":
      k.box(0.15, 0.17, 0.62, B, { x: 0.1, y: -0.11, z: -0.44 }, 0.04)
        .box(0.09, 0.2, 0.1, B, { x: 0.1, y: -0.25, z: -0.32, rx: -0.3 }, 0.03)
        .box(0.1, 0.07, 0.2, SQUAD.scarf, { x: 0.1, y: 0.0, z: -0.5 }, 0.025)
        .cyl(0.055, 0.055, 0.22, B, { x: 0.1, y: -0.12, z: -0.83, rx: HALF_PI }, 10)
        .cyl(0.075, 0.075, 0.09, SQUAD.tip, { x: 0.1, y: -0.12, z: -0.96, rx: HALF_PI }, 12);
      break;
    case "smg":
      k.box(0.2, 0.17, 0.44, B, { x: 0.1, y: -0.11, z: -0.4 }, 0.05)
        .box(0.09, 0.26, 0.1, SQUAD.scarf, { x: 0.1, y: -0.3, z: -0.42 }, 0.03)
        .cyl(0.045, 0.045, 0.24, B, { x: 0.05, y: -0.1, z: -0.7, rx: HALF_PI }, 8)
        .cyl(0.045, 0.045, 0.24, B, { x: 0.15, y: -0.1, z: -0.7, rx: HALF_PI }, 8)
        .box(0.24, 0.07, 0.07, SQUAD.tip, { x: 0.1, y: -0.1, z: -0.83 }, 0.03);
      break;
    case "shotgun":
      k.box(0.17, 0.18, 0.55, B, { x: 0.1, y: -0.11, z: -0.42 }, 0.05)
        .box(0.13, 0.1, 0.3, 0xb9824f, { x: 0.1, y: -0.2, z: -0.5 }, 0.04)
        .cyl(0.16, 0.07, 0.26, SQUAD.tip, { x: 0.1, y: -0.11, z: -0.84, rx: -HALF_PI }, 12);
      break;
    case "lancer":
      k.box(0.13, 0.15, 1.0, B, { x: 0.1, y: -0.11, z: -0.62 }, 0.04)
        .box(0.03, 0.26, 0.36, 0x2ea8ff, { x: 0.1, y: 0.02, z: -0.5 }, 0.012)
        .box(0.3, 0.03, 0.3, 0x2ea8ff, { x: 0.1, y: -0.11, z: -0.85 }, 0.012)
        .cyl(0.07, 0.07, 0.1, 0xdff4ff, { x: 0.1, y: -0.12, z: -1.17, rx: HALF_PI }, 12);
      break;
    case "rocket":
      k.cyl(0.14, 0.14, 1.1, SQUAD.legs, { x: 0.26, y: 0.2, z: -0.3, rx: HALF_PI }, 14)
        .cyl(0.17, 0.17, 0.1, SQUAD.scarf, { x: 0.26, y: 0.2, z: -0.82, rx: HALF_PI }, 14)
        .cyl(0.17, 0.17, 0.1, SQUAD.scarf, { x: 0.26, y: 0.2, z: 0.22, rx: HALF_PI }, 14)
        .box(0.08, 0.18, 0.08, B, { x: 0.2, y: 0.02, z: -0.42 }, 0.03)
        .sphere(0.1, SQUAD.tip, { x: 0.26, y: 0.2, z: -0.82, sz: 0.6 }, 10);
      break;
  }
  return k;
}

export function soldierParts(): RigPartDef[] {
  const body = new Kit()
    .box(0.44, 0.18, 0.3, SQUAD.legs, { y: 0.56 }, 0.06)
    .capsule(0.25, 0.2, SQUAD.cobalt, { y: 0.84, sz: 0.74 }, 12)
    .box(0.09, 0.5, 0.42, SQUAD.webbing, { y: 0.84, rz: 0.55, sz: 0.9 }, 0.03)
    .box(0.54, 0.09, 0.4, SQUAD.webbing, { y: 0.63 }, 0.03)
    .box(0.13, 0.12, 0.08, SQUAD.helmet, { x: -0.16, y: 0.63, z: -0.2 }, 0.03)
    .box(0.13, 0.12, 0.08, SQUAD.helmet, { x: 0.16, y: 0.63, z: -0.2 }, 0.03)
    .torus(0.15, 0.07, SQUAD.scarf, { y: 1.06, rx: HALF_PI }, 14)
    .sphere(0.2, SQUAD.skin, { y: 1.22 }, 14)
    .sphere(0.27, SQUAD.helmet, { y: 1.3, sy: 0.78 }, 16)
    .cyl(0.29, 0.3, 0.06, SQUAD.helmet, { y: 1.25 }, 18)
    .box(0.12, 0.08, 0.12, SQUAD.scarf, { y: 1.5 }, 0.035)
    .box(0.42, 0.14, 0.1, SQUAD.visor, { y: 1.19, z: -0.19 }, 0.045)
    .torus(0.27, 0.035, SQUAD.scarf, { y: 1.29, rx: HALF_PI }, 20)
    .box(0.09, 0.05, 0.5, SQUAD.webbing, { y: 1.5, z: 0.02 }, 0.02)
    // rucksack: main bag, flap, bedroll, side pouches, aerial
    .box(0.42, 0.46, 0.25, SQUAD.webbing, { y: 0.86, z: 0.3 }, 0.09)
    .box(0.36, 0.16, 0.07, 0xe0d2b4, { y: 1.0, z: 0.43 }, 0.03)
    .cyl(0.09, 0.09, 0.48, SQUAD.legs, { y: 1.13, z: 0.3, rz: HALF_PI }, 10)
    .box(0.12, 0.2, 0.17, 0xe0d2b4, { x: -0.25, y: 0.8, z: 0.3 }, 0.04)
    .box(0.12, 0.2, 0.17, 0xe0d2b4, { x: 0.25, y: 0.8, z: 0.3 }, 0.04)
    .cyl(0.02, 0.02, 0.42, SQUAD.boots, { x: -0.15, y: 1.27, z: 0.36 }, 4)
    .sphere(0.06, SQUAD.tip, { x: -0.15, y: 1.49, z: 0.36 }, 6)
    .build();

  const leg = (): Kit =>
    new Kit()
      .box(0.2, 0.34, 0.22, SQUAD.legs, { y: -0.17 }, 0.08)
      .box(0.23, 0.16, 0.32, SQUAD.boots, { y: -0.42, z: -0.04 }, 0.06);

  const arms = new Kit()
    .limb([0.29, 0, 0.02], [0.14, -0.14, -0.34], 0.08, SQUAD.cobalt)
    .limb([-0.29, 0, 0.02], [0.03, -0.08, -0.6], 0.08, SQUAD.cobalt)
    .sphere(0.09, SQUAD.boots, { x: 0.14, y: -0.15, z: -0.36 }, 8)
    .sphere(0.09, SQUAD.boots, { x: 0.04, y: -0.09, z: -0.6 }, 8)
    .sphere(0.11, SQUAD.cobalt, { x: 0.3, y: 0.01, z: 0.02 }, 10)
    .sphere(0.11, SQUAD.cobalt, { x: -0.3, y: 0.01, z: 0.02 }, 10)
    .build();

  const parts: RigPartDef[] = [
    { name: "body", geometry: body, pivot: [0, 0, 0] },
    { name: "legL", geometry: leg().build(), pivot: [-0.12, 0.5, 0] },
    { name: "legR", geometry: leg().build(), pivot: [0.12, 0.5, 0] },
    { name: "arms", geometry: arms, pivot: SOLDIER_ARMS_PIVOT },
  ];
  for (const id of WEAPON_IDS)
    parts.push({ name: `gun_${id}`, geometry: gunKit(id).build(), pivot: SOLDIER_ARMS_PIVOT });
  return parts;
}

/** Pennant carried by the front-centre trooper so the squad centre is always findable. */
export function pennantGeometry(): Kit {
  return new Kit()
    .cyl(0.03, 0.03, 1.3, SQUAD.boots, { y: 0.65 }, 6)
    .box(0.04, 0.3, 0.5, SQUAD.scarf, { y: 1.12, z: 0.25 }, 0.02)
    .sphere(0.06, SQUAD.scarf, { y: 1.32 }, 8);
}

// ---------------------------------------------------------------- Soggies --

export type SoggyVariant =
  "walkerRing" | "walkerSnorkel" | "walkerHat" | "runner" | "brute" | "flanker";

function eyes(k: Kit, y: number, z: number, s = 1): void {
  k.sphere(0.13 * s, SOGGY.white, { x: -0.14 * s, y, z, sz: 0.6 }, 12)
    .sphere(0.115 * s, SOGGY.white, { x: 0.15 * s, y: y + 0.02 * s, z, sz: 0.6 }, 12)
    .sphere(0.06 * s, SOGGY.pupil, { x: -0.12 * s, y: y - 0.01 * s, z: z - 0.07 * s }, 8)
    .sphere(0.055 * s, SOGGY.pupil, { x: 0.16 * s, y: y + 0.02 * s, z: z - 0.06 * s }, 8);
}

function pearBody(k: Kit, h: number, slim = 1): void {
  k.sphere(0.45, SOGGY.body, { y: 0.55 * h, sx: slim, sy: 1.1 * h, sz: 0.95 }, 18)
    .sphere(0.32, SOGGY.body, { y: 0.98 * h, sx: slim }, 16)
    .sphere(0.3, SOGGY.belly, { y: 0.5 * h, z: -0.2, sx: slim, sz: 0.6 }, 14)
    .sphere(0.08, SOGGY.shade, { x: 0.22, y: 1.0 * h, z: 0.2 }, 8)
    .sphere(0.06, SOGGY.shade, { x: -0.26, y: 0.6 * h, z: 0.28 }, 8)
    .sphere(0.09, SOGGY.shade, { y: 0.84 * h, z: -0.31, sx: 1.5, sy: 0.55, sz: 0.5 }, 10)
    .box(0.07, 0.06, 0.04, SOGGY.white, { x: 0.04, y: 0.87 * h, z: -0.35 }, 0.015);
  eyes(k, 1.04 * h, -0.27);
}

function soggyBody(v: SoggyVariant): Kit {
  const k = new Kit();
  switch (v) {
    case "walkerRing":
    case "walkerSnorkel":
    case "walkerHat": {
      pearBody(k, 1);
      if (v === "walkerRing") {
        k.torus(0.46, 0.14, SOGGY.coral, { y: 0.45, rx: HALF_PI }, 22);
        for (let i = 0; i < 4; i++) {
          const a = (i / 4) * Math.PI * 2 + 0.4;
          k.box(
            0.1,
            0.29,
            0.29,
            SOGGY.white,
            { x: Math.cos(a) * 0.46, y: 0.45, z: Math.sin(a) * 0.46, ry: -a },
            0.05,
          );
        }
      } else if (v === "walkerSnorkel") {
        k.box(0.52, 0.2, 0.12, SOGGY.mask, { y: 1.05, z: -0.34 }, 0.06)
          .torus(0.33, 0.035, SOGGY.coral, { y: 1.05, rx: HALF_PI, sz: 0.85 }, 18)
          .cyl(0.045, 0.045, 0.55, SOGGY.snorkel, { x: 0.33, y: 1.25, z: -0.1 }, 8)
          .sphere(0.07, SOGGY.coral, { x: 0.33, y: 1.53, z: -0.1 }, 8)
          .cyl(0.32, 0.36, 0.18, SOGGY.shorts, { y: 0.28 }, 16);
      } else {
        k.cyl(0.5, 0.5, 0.05, SOGGY.hat, { y: 1.27, rx: -0.12 }, 22)
          .cyl(0.23, 0.27, 0.22, SOGGY.hat, { y: 1.37, rx: -0.12 }, 16)
          .cyl(0.275, 0.275, 0.07, SOGGY.coral, { y: 1.31, rx: -0.12 }, 16)
          .cyl(0.32, 0.36, 0.18, SOGGY.coral, { y: 0.28 }, 16);
      }
      break;
    }
    case "runner":
      pearBody(k, 1.08, 0.82);
      k.cyl(0.29, 0.29, 0.1, SQUAD.scarf, { y: 1.2 }, 16)
        .box(0.06, 0.2, 0.12, SQUAD.scarf, { x: -0.06, y: 1.14, z: 0.3, rx: 0.6 }, 0.02)
        .cyl(0.3, 0.33, 0.2, SOGGY.shorts, { y: 0.3 }, 16);
      break;
    case "brute":
      // barrel-chested lump with tiny head and stacked life-ring armour, 2.1 tall
      k.sphere(0.85, SOGGY.body, { y: 1.05, sy: 0.95, sz: 0.85 }, 20)
        .sphere(0.6, SOGGY.belly, { y: 0.9, z: -0.42, sz: 0.5 }, 16)
        .sphere(0.27, SOGGY.body, { y: 1.85 }, 14)
        .cyl(0.62, 0.7, 0.36, SOGGY.coral, { y: 0.36 }, 18);
      eyes(k, 1.9, -0.2, 0.75);
      k.sphere(0.07, SOGGY.shade, { y: 1.74, z: -0.24, sx: 1.6, sy: 0.6 }, 8);
      for (const [y, r] of [
        [0.78, 0.86],
        [1.24, 0.8],
      ] as const) {
        k.torus(r, 0.16, SOGGY.coral, { y, rx: HALF_PI, sz: 0.9 }, 24);
        for (let i = 0; i < 4; i++) {
          const a = (i / 4) * Math.PI * 2 + 0.78;
          k.box(
            0.12,
            0.33,
            0.33,
            SOGGY.white,
            { x: Math.cos(a) * r, y, z: Math.sin(a) * r * 0.9, ry: -a },
            0.06,
          );
        }
      }
      k.box(0.5, 0.12, 0.12, SOGGY.coral, { y: 1.56, z: -0.62, rx: 0.4 }, 0.04);
      break;
    case "flanker":
      // low, wide crab-scuttler: 0.9 tall, 1.1 wide
      k.sphere(0.55, SOGGY.body, { y: 0.45, sy: 0.6, sz: 0.75 }, 18)
        .sphere(0.4, SOGGY.belly, { y: 0.36, z: -0.2, sy: 0.45, sz: 0.5 }, 14)
        .cyl(0.04, 0.05, 0.3, SOGGY.shade, { x: -0.2, y: 0.78, z: -0.18 }, 6)
        .cyl(0.04, 0.05, 0.3, SOGGY.shade, { x: 0.2, y: 0.78, z: -0.18 }, 6)
        .sphere(0.13, SOGGY.white, { x: -0.2, y: 0.95, z: -0.2 }, 10)
        .sphere(0.13, SOGGY.white, { x: 0.2, y: 0.95, z: -0.2 }, 10)
        .sphere(0.065, SOGGY.pupil, { x: -0.2, y: 0.95, z: -0.32 }, 8)
        .sphere(0.065, SOGGY.pupil, { x: 0.2, y: 0.95, z: -0.32 }, 8)
        .sphere(0.07, SOGGY.shade, { y: 0.42, z: -0.42, sx: 1.8, sy: 0.5, sz: 0.4 }, 8);
      break;
  }
  return k;
}

function soggyArm(v: SoggyVariant): Kit {
  if (v === "flanker") {
    // orange claw on a stubby arm
    return new Kit()
      .limb([0, 0, 0], [0.05, 0.05, -0.32], 0.08, SOGGY.shade)
      .sphere(0.2, SQUAD.tip, { x: 0.06, y: 0.08, z: -0.44, sy: 0.8 }, 12)
      .box(0.12, 0.08, 0.26, SQUAD.tip, { x: 0.06, y: 0.2, z: -0.56, rx: -0.4 }, 0.035)
      .box(0.12, 0.08, 0.22, SQUAD.tip, { x: 0.06, y: 0.0, z: -0.58, rx: 0.3 }, 0.035);
  }
  const s = v === "brute" ? 1.7 : 1;
  const k = new Kit()
    .limb([0, 0, 0], [0, 0.04 * s, -0.4 * s], 0.1 * s, SOGGY.body)
    .sphere(0.12 * s, SOGGY.body, { y: 0.05 * s, z: -0.45 * s }, 10);
  if (v === "brute") k.torus(0.2, 0.08, SOGGY.coral, { z: -0.2 }, 12);
  return k;
}

function soggyLeg(v: SoggyVariant): Kit {
  if (v === "flanker") {
    const k = new Kit();
    for (let i = -1; i <= 1; i++)
      k.limb([0, 0, i * 0.2], [0.32, -0.3, i * 0.26], 0.055, SOGGY.shade, 6);
    return k;
  }
  const s = v === "brute" ? 1.6 : 1;
  return new Kit()
    .capsule(0.11 * s, 0.12 * s, SOGGY.shade, { y: -0.12 * s })
    .box(
      0.24 * s,
      0.08 * s,
      0.36 * s,
      v === "walkerRing" || v === "walkerHat" ? SOGGY.coral : SOGGY.shade,
      { y: -0.27 * s, z: -0.08 * s },
      0.03,
    );
}

export function soggyParts(v: SoggyVariant): RigPartDef[] {
  const brute = v === "brute";
  const crab = v === "flanker";
  const armR = soggyArm(v);
  const armL = new Kit().kit(soggyArm(v), { sx: -1 });
  const legY = brute ? 0.48 : crab ? 0.38 : 0.3;
  const legX = brute ? 0.34 : crab ? 0.42 : 0.17;
  const armY = brute ? 1.3 : crab ? 0.5 : 0.8;
  const armX = brute ? 0.82 : crab ? 0.5 : 0.38;
  return [
    { name: "body", geometry: soggyBody(v).build(), pivot: [0, 0, 0] },
    {
      name: "legL",
      geometry: (crab ? new Kit().kit(soggyLeg(v), { sx: -1 }) : soggyLeg(v)).build(),
      pivot: [-legX, legY, 0],
    },
    { name: "legR", geometry: soggyLeg(v).build(), pivot: [legX, legY, 0] },
    { name: "armL", geometry: armL.build(), pivot: [-armX, armY, -0.05] },
    { name: "armR", geometry: armR.build(), pivot: [armX, armY, -0.05] },
  ];
}

/** Rolling hazard drum: orange with white hazard band and ink chevrons. Root at ground, axis along x. */
export function barrelParts(): RigPartDef[] {
  const k = new Kit()
    .cyl(0.44, 0.44, 0.9, SQUAD.tip, { rz: HALF_PI }, 18)
    .cyl(0.46, 0.46, 0.22, SOGGY.white, { rz: HALF_PI }, 18)
    .cyl(0.47, 0.47, 0.07, 0xd96a24, { rz: HALF_PI, x: -0.4 }, 18)
    .cyl(0.47, 0.47, 0.07, 0xd96a24, { rz: HALF_PI, x: 0.4 }, 18)
    .box(0.24, 0.14, 0.14, SOGGY.pupil, { x: 0, y: 0.43, rz: 0 }, 0.03)
    .box(0.24, 0.14, 0.14, SOGGY.pupil, { x: 0, y: -0.43 }, 0.03)
    .box(0.24, 0.14, 0.14, SOGGY.pupil, { x: 0, z: 0.43 }, 0.03)
    .box(0.24, 0.14, 0.14, SOGGY.pupil, { x: 0, z: -0.43 }, 0.03)
    .cyl(0.1, 0.1, 0.1, SOGGY.pupil, { x: 0.47, rz: HALF_PI }, 10);
  return [{ name: "body", geometry: k.build(), pivot: [0, 0.46, 0] }];
}

export const KIND_HEIGHT: Record<EnemyKind, number> = {
  walker: 1.25,
  runner: 1.35,
  brute: 2.1,
  flanker: 0.95,
  barrel: 0.92,
};

// ------------------------------------------------------------------ bosses --

const BOSS_SHELL = 0xd9483b;
const BOSS_FLESH = 0xf28c6a;

/** ~5 tall, ~7 wide crab boss whose shell varies per mission. */
export function bossParts(biome: BiomeId): RigPartDef[] {
  const body = new Kit()
    .sphere(1.5, BOSS_FLESH, { y: 1.6, sx: 1.25, sy: 0.75 }, 20)
    .sphere(1.0, 0xffc2a6, { y: 1.45, z: -0.8, sx: 1.2, sy: 0.6, sz: 0.6 }, 16)
    .cyl(0.12, 0.14, 0.8, BOSS_FLESH, { x: -0.55, y: 2.6, z: -0.7 }, 8)
    .cyl(0.12, 0.14, 0.8, BOSS_FLESH, { x: 0.55, y: 2.6, z: -0.7 }, 8)
    .sphere(0.36, SOGGY.white, { x: -0.55, y: 3.05, z: -0.75 }, 14)
    .sphere(0.36, SOGGY.white, { x: 0.55, y: 3.05, z: -0.75 }, 14)
    .sphere(0.17, SOGGY.pupil, { x: -0.5, y: 3.0, z: -1.06 }, 10)
    .sphere(0.17, SOGGY.pupil, { x: 0.6, y: 3.0, z: -1.06 }, 10)
    .box(0.9, 0.14, 0.2, SOGGY.pupil, { y: 1.75, z: -1.4, rx: 0.1 }, 0.06)
    .box(0.18, 0.14, 0.1, SOGGY.white, { x: -0.2, y: 1.67, z: -1.47 }, 0.03)
    .box(0.18, 0.14, 0.1, SOGGY.white, { x: 0.2, y: 1.67, z: -1.47 }, 0.03);
  if (biome === "coastal") {
    // rusty red channel buoy worn as a shell
    body
      .cyl(0.9, 1.4, 2.2, BOSS_SHELL, { y: 2.9, z: 0.6 }, 20)
      .cyl(1.0, 1.0, 0.35, SOGGY.white, { y: 3.2, z: 0.6 }, 20)
      .cone(0.9, 1.0, BOSS_SHELL, { y: 4.5, z: 0.6 }, 20)
      .cyl(0.06, 0.06, 0.8, SQUAD.boots, { y: 5.3, z: 0.6 }, 6)
      .sphere(0.22, SQUAD.scarf, { y: 5.75, z: 0.6 }, 10)
      .sphere(0.25, 0x9b5a3c, { x: 0.7, y: 2.3, z: 1.6 }, 8)
      .sphere(0.2, 0x9b5a3c, { x: -0.8, y: 3.7, z: 1.2 }, 8);
  } else if (biome === "port") {
    // dented shipping container shell
    body.box(3.4, 2.4, 2.6, BOSS_SHELL, { y: 3.4, z: 0.7, rz: 0.06 }, 0.18);
    for (let i = -3; i <= 3; i++)
      body.box(0.14, 2.2, 2.66, 0xb23a30, { x: i * 0.45, y: 3.4, z: 0.7, rz: 0.06 }, 0.04);
    body
      .box(3.5, 0.18, 0.18, SQUAD.scarf, { y: 4.65, z: -0.6, rz: 0.06 }, 0.05)
      .box(0.5, 0.5, 0.2, 0x39424e, { x: 1.0, y: 4.0, z: -0.62 }, 0.05)
      .cyl(0.1, 0.1, 1.4, 0x39424e, { x: -1.2, y: 5.2, z: 0.7 }, 6)
      .box(0.7, 0.3, 0.3, SQUAD.scarf, { x: -1.2, y: 5.9, z: 0.7 }, 0.06);
  } else {
    // jellyfish crown + lantern (Tide Mother)
    body
      .sphere(1.5, 0xc7a6ff, { y: 3.4, z: 0.3, sy: 0.75 }, 20)
      .sphere(1.2, 0xe6d4ff, { y: 3.55, z: 0.1, sy: 0.6 }, 16)
      .cyl(0.06, 0.06, 1.3, 0x5a3a26, { x: 1.5, y: 4.0, z: -0.2 }, 6)
      .box(0.5, 0.6, 0.5, 0x5a3a26, { x: 1.5, y: 4.9, z: -0.2 }, 0.08)
      .sphere(0.24, 0xffd27a, { x: 1.5, y: 4.9, z: -0.48 }, 10);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      body.capsule(
        0.12,
        0.8,
        0xb48cff,
        { x: Math.cos(a) * 1.2, y: 2.4, z: 0.3 + Math.sin(a) * 0.8 },
        8,
      );
    }
  }
  const claw = (): Kit =>
    new Kit()
      .limb([0, 0, 0], [0.6, -0.2, -0.9], 0.24, BOSS_FLESH)
      .sphere(0.75, BOSS_SHELL, { x: 0.8, y: -0.1, z: -1.5, sy: 0.75 }, 16)
      .box(0.5, 0.36, 1.1, BOSS_SHELL, { x: 0.8, y: 0.38, z: -2.1, rx: -0.4 }, 0.15)
      .box(0.5, 0.32, 0.9, 0xb23a30, { x: 0.8, y: -0.42, z: -2.05, rx: 0.35 }, 0.14);
  const legs = (): Kit => {
    const k = new Kit();
    for (let i = -1; i <= 1; i++)
      k.limb([0, 0, i * 0.6], [1.0, -1.2, i * 0.9], 0.16, BOSS_SHELL, 8).sphere(
        0.18,
        0xb23a30,
        { x: 1.0, y: -1.2, z: i * 0.9 },
        8,
      );
    return k;
  };
  return [
    { name: "body", geometry: body.build(), pivot: [0, 0, 0] },
    { name: "legL", geometry: new Kit().kit(legs(), { sx: -1 }).build(), pivot: [-1.5, 1.25, 0.3] },
    { name: "legR", geometry: legs().build(), pivot: [1.5, 1.25, 0.3] },
    { name: "armL", geometry: new Kit().kit(claw(), { sx: -1 }).build(), pivot: [-1.6, 1.8, -0.4] },
    { name: "armR", geometry: claw().build(), pivot: [1.6, 1.8, -0.4] },
  ];
}
