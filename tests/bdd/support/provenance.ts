// Build provenance for the BDD test server: a content fingerprint of every
// input that ends up in the bundle, so each run proves exactly which source
// snapshot it exercised, and a run whose source changed mid-way is flagged.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

export const ROOT = join(import.meta.dirname, "..", "..", "..");
export const BUILD_RECORD = join(ROOT, "test-results", "bdd-build.json");

const INPUTS = ["index.html", "src", "public", "vite.config.ts", "package-lock.json"];

function files(path: string): string[] {
  const stat = statSync(path, { throwIfNoEntry: false });
  if (!stat) return [];
  if (stat.isFile()) return [path];
  return readdirSync(path)
    .filter((name) => name !== ".DS_Store")
    .flatMap((name) => files(join(path, name)));
}

export interface Fingerprint {
  hash: string;
  files: number;
  newestFile: string;
  newestMtime: string;
}

export function sourceFingerprint(): Fingerprint {
  const hash = createHash("sha256");
  let newest = { path: "", mtime: 0 };
  const all = INPUTS.flatMap((input) => files(join(ROOT, input))).sort();
  for (const path of all) {
    const rel = relative(ROOT, path);
    hash.update(rel).update("\0").update(readFileSync(path)).update("\0");
    const mtime = statSync(path).mtimeMs;
    if (mtime > newest.mtime) newest = { path: rel, mtime };
  }
  return {
    hash: hash.digest("hex").slice(0, 16),
    files: all.length,
    newestFile: newest.path,
    newestMtime: new Date(newest.mtime).toISOString(),
  };
}

export interface BuildRecord {
  builtAt: string;
  outDir: string;
  baseUrl: string;
  source: Fingerprint;
  bundle: string[];
  sourceAtEnd?: Fingerprint;
  stale?: boolean;
}

export function readBuildRecord(): BuildRecord | null {
  try {
    return JSON.parse(readFileSync(BUILD_RECORD, "utf8")) as BuildRecord;
  } catch {
    return null;
  }
}
