/**
 * Versioned local persistence for player preferences and best scores.
 * Every failure is surfaced as a typed StorageError — there is no silent
 * fallback to defaults when stored data is unreadable or the store refuses
 * writes. A missing record (first visit) is the only case that yields defaults.
 */

export const STORAGE_VERSION = 1;
export const PREFS_KEY = "squad-surge:prefs";
export const BEST_KEY = "squad-surge:best";

export interface Prefs {
  muted: boolean;
  levelId: string | null;
}

export interface BestRecord {
  score: number;
  kills: number;
  squad: number;
  won: boolean;
}

export type BestScores = Record<string, BestRecord>;

export class StorageError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "StorageError";
  }
}

function getStore(): Storage {
  try {
    const store = window.localStorage;
    if (!store) throw new Error("localStorage is unavailable");
    return store;
  } catch (cause) {
    throw new StorageError("Local storage is unavailable in this browser profile.", { cause });
  }
}

function readEnvelope(key: string): unknown {
  let raw: string | null;
  try {
    raw = getStore().getItem(key);
  } catch (cause) {
    if (cause instanceof StorageError) throw cause;
    throw new StorageError(`Could not read saved data "${key}".`, { cause });
  }
  if (raw === null) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (cause) {
    throw new StorageError(`Saved data "${key}" is corrupt (invalid JSON).`, { cause });
  }
  if (typeof parsed !== "object" || parsed === null) {
    throw new StorageError(`Saved data "${key}" has an unexpected shape.`);
  }
  const env = parsed as { version?: unknown; data?: unknown };
  if (env.version !== STORAGE_VERSION) {
    throw new StorageError(
      `Saved data "${key}" has version ${String(env.version)}; expected ${STORAGE_VERSION}.`,
    );
  }
  return env.data;
}

function writeEnvelope(key: string, data: unknown): void {
  try {
    getStore().setItem(key, JSON.stringify({ version: STORAGE_VERSION, data }));
  } catch (cause) {
    if (cause instanceof StorageError) throw cause;
    throw new StorageError(`Could not save "${key}" — the browser refused the write.`, { cause });
  }
}

export function loadPrefs(validIds: readonly string[]): Prefs {
  const data = readEnvelope(PREFS_KEY);
  if (data === null) return { muted: false, levelId: null };
  if (typeof data !== "object" || data === null) {
    throw new StorageError("Saved preferences are malformed.");
  }
  const d = data as { muted?: unknown; levelId?: unknown };
  if (typeof d.muted !== "boolean") throw new StorageError("Saved sound preference is malformed.");
  if (d.levelId !== null && typeof d.levelId !== "string") {
    throw new StorageError("Saved mission preference is malformed.");
  }
  const levelId = d.levelId ?? null;
  if (levelId !== null && !validIds.includes(levelId)) {
    throw new StorageError(`Saved mission "${levelId}" does not exist.`);
  }
  return { muted: d.muted, levelId };
}

export function savePrefs(prefs: Prefs): void {
  writeEnvelope(PREFS_KEY, prefs);
}

function isBestRecord(v: unknown): v is BestRecord {
  if (typeof v !== "object" || v === null) return false;
  const r = v as Record<string, unknown>;
  return (
    typeof r.score === "number" &&
    Number.isFinite(r.score) &&
    typeof r.kills === "number" &&
    typeof r.squad === "number" &&
    typeof r.won === "boolean"
  );
}

export function loadBest(validIds: readonly string[]): BestScores {
  const data = readEnvelope(BEST_KEY);
  if (data === null) return {};
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new StorageError("Saved best scores are malformed.");
  }
  const out: BestScores = {};
  for (const [id, rec] of Object.entries(data as Record<string, unknown>)) {
    if (!validIds.includes(id))
      throw new StorageError(`Saved best score names unknown mission "${id}".`);
    if (!isBestRecord(rec)) throw new StorageError(`Saved best score for "${id}" is malformed.`);
    out[id] = rec;
  }
  return out;
}

/**
 * Records a result. Returns the new table when it is a personal best (already
 * durably written), or null when nothing changed. The input is never mutated,
 * so a failed write leaves memory and storage in agreement.
 */
export function recordBest(best: BestScores, levelId: string, rec: BestRecord): BestScores | null {
  if (!isBestRecord(rec)) throw new StorageError("Refusing to save a malformed result.");
  const prev = best[levelId];
  const better = !prev || rec.score > prev.score || (rec.won && !prev.won);
  if (!better) return null;
  const next: BestScores = {
    ...best,
    [levelId]: {
      score: Math.max(rec.score, prev?.score ?? 0),
      kills: rec.kills,
      squad: rec.squad,
      won: rec.won || (prev?.won ?? false),
    },
  };
  writeEnvelope(BEST_KEY, next);
  return next;
}

/** Explicit, user-initiated reset of corrupt saved data. */
export function clearSavedData(): void {
  const store = getStore();
  try {
    store.removeItem(PREFS_KEY);
    store.removeItem(BEST_KEY);
  } catch (cause) {
    throw new StorageError("Could not clear saved data.", { cause });
  }
}
