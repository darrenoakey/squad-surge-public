import { SQUAD_CAP } from "./types";
import type { GateEffect, GateKind, GateTone } from "./types";
import type { GateSpec } from "./levels";
import { WEAPONS } from "./weapons";

const MINUS = "\u2212";

export function normalizeGate(spec: GateSpec): GateEffect {
  return {
    kind: spec.kind,
    squadAdd: spec.squadAdd ?? 0,
    squadMultiply: spec.squadMultiply ?? 1,
    fireRateMultiplier: spec.fireRate ?? 1,
    damageMultiplier: spec.damage ?? 1,
    weapon: spec.weapon ?? null,
  };
}

/** Recruit gates whose value is shot below zero/above zero switch kind accordingly. */
export function withSquadAdd(effect: GateEffect, squadAdd: number): GateEffect {
  let kind: GateKind = effect.kind;
  if (kind === "recruit" || kind === "ambush") kind = squadAdd < 0 ? "ambush" : "recruit";
  return { ...effect, kind, squadAdd };
}

function signed(n: number): string {
  return n < 0 ? `${MINUS}${Math.abs(n)}` : `+${n}`;
}

function pct(multiplier: number): string {
  const p = Math.round((multiplier - 1) * 100);
  return p < 0 ? `${MINUS}${Math.abs(p)}%` : `+${p}%`;
}

/** Squad size after applying a gate (multiply first, then add), clamped to [0, SQUAD_CAP]. */
export function applySquad(squad: number, effect: GateEffect): number {
  const n = Math.round(squad * effect.squadMultiply) + effect.squadAdd;
  return Math.max(0, Math.min(SQUAD_CAP, n));
}

export interface GateText {
  readonly label: string;
  readonly detail: string;
  readonly tone: GateTone;
}

/** Label/detail/tone derived from the exact effect that will be applied. */
export function describeGate(effect: GateEffect): GateText {
  const costs: string[] = [];
  const perks: string[] = [];
  let label: string;
  switch (effect.kind) {
    case "recruit":
    case "ambush":
      label = signed(effect.squadAdd);
      break;
    case "multiply":
      label = `\u00d7${effect.squadMultiply}`;
      break;
    case "fireRate":
      label = `FIRE ${pct(effect.fireRateMultiplier)}`;
      break;
    case "damage":
      label = `DMG ${pct(effect.damageMultiplier)}`;
      break;
    case "weapon":
      label = effect.weapon ? WEAPONS[effect.weapon].name.toUpperCase() : "WEAPON";
      break;
  }
  if (effect.kind !== "recruit" && effect.kind !== "ambush" && effect.squadAdd !== 0) {
    (effect.squadAdd < 0 ? costs : perks).push(`${signed(effect.squadAdd)} soldiers`);
  }
  if (effect.kind !== "fireRate" && effect.fireRateMultiplier !== 1) {
    (effect.fireRateMultiplier < 1 ? costs : perks).push(
      `${pct(effect.fireRateMultiplier)} fire rate`,
    );
  }
  if (effect.kind !== "damage" && effect.damageMultiplier !== 1) {
    (effect.damageMultiplier < 1 ? costs : perks).push(`${pct(effect.damageMultiplier)} damage`);
  }
  const primaryBad = effect.kind === "ambush" || effect.squadMultiply < 1;
  const tone: GateTone = primaryBad
    ? perks.length > 0
      ? "mixed"
      : "bad"
    : costs.length > 0
      ? "mixed"
      : "good";
  return { label, detail: [...perks, ...costs].join(" \u00b7 "), tone };
}
