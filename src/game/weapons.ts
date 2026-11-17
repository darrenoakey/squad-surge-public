import type { WeaponId, WeaponSpec } from "./types";

/**
 * Weapon table. Sustained damage is roughly comparable per gunner; the
 * weapons differ in *how* it lands (overkill, pierce, reach, splash, spread),
 * which is what makes a weapon gate a real choice rather than a pure upgrade.
 */
export const WEAPONS: Readonly<Record<WeaponId, WeaponSpec>> = {
  rifle: {
    id: "rifle",
    name: "Rifle",
    blurb: "Reliable all-rounder with long reach.",
    fireRate: 3,
    damagePerGunner: 1,
    maxBullets: 8,
    bulletSpeed: 52,
    pierce: 1,
    spread: 0,
    range: 40,
    splashRadius: 0,
  },
  smg: {
    id: "smg",
    name: "SMG",
    blurb: "Hose of light rounds: shreds swarms, struggles with armour.",
    fireRate: 7,
    damagePerGunner: 0.52,
    maxBullets: 10,
    bulletSpeed: 56,
    pierce: 1,
    spread: 0.6,
    range: 32,
    splashRadius: 0,
  },
  shotgun: {
    id: "shotgun",
    name: "Scattergun",
    blurb: "Wide fan covers neighbouring lanes, short reach.",
    fireRate: 1.6,
    damagePerGunner: 2.4,
    maxBullets: 12,
    bulletSpeed: 44,
    pierce: 1,
    spread: 5,
    range: 21,
    splashRadius: 0,
  },
  lancer: {
    id: "lancer",
    name: "Lancer",
    blurb: "Slow piercing bolts that punch through whole columns.",
    fireRate: 1.2,
    damagePerGunner: 3.2,
    maxBullets: 3,
    bulletSpeed: 70,
    pierce: 6,
    spread: 0,
    range: 46,
    splashRadius: 0,
  },
  rocket: {
    id: "rocket",
    name: "Rockets",
    blurb: "Heavy splash rounds; devastating on packs, slow cadence.",
    fireRate: 0.9,
    damagePerGunner: 4,
    maxBullets: 2,
    bulletSpeed: 34,
    pierce: 1,
    spread: 0,
    range: 42,
    splashRadius: 2.4,
  },
};

/** Gunners actually contributing fire. Linear to 20, 60% rate beyond: keeps multipliers from snowballing. */
export function effectiveGunners(squad: number): number {
  if (squad <= 20) return Math.max(0, squad);
  return 20 + (squad - 20) * 0.6;
}

/** Sustained squad DPS for given loadout (ignores misses/overkill). */
export function squadDps(
  squad: number,
  weapon: WeaponId,
  fireRateMultiplier: number,
  damageMultiplier: number,
): number {
  const spec = WEAPONS[weapon];
  return (
    effectiveGunners(squad) *
    spec.damagePerGunner *
    damageMultiplier *
    spec.fireRate *
    fireRateMultiplier
  );
}
