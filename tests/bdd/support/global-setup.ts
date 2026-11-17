// Builds the real production bundle from the CURRENT working tree into a
// private temp directory and serves it with `vite preview` on an OS-assigned
// free port. Never touches the dev server, a running preview, or dist/. Records build provenance (source content
// fingerprint + bundle files) to test-results/bdd-build.json and rebuilds if
// the source changed while building, so every run exercises a known snapshot.
import { mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { build, preview } from "vite";
import { BUILD_RECORD, ROOT, sourceFingerprint, type BuildRecord } from "./provenance";

function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (address && typeof address === "object") resolve(address.port);
        else reject(new Error("could not obtain a free port"));
      });
    });
  });
}

export default async function globalSetup(): Promise<() => Promise<void>> {
  const outDir = mkdtempSync(join(tmpdir(), "squad-surge-bdd-"));
  let source = sourceFingerprint();
  for (let attempt = 1; ; attempt += 1) {
    await build({ root: ROOT, logLevel: "warn", build: { outDir, emptyOutDir: true } });
    const after = sourceFingerprint();
    if (after.hash === source.hash) break;
    if (attempt >= 3)
      throw new Error(
        "source kept changing during the BDD build; refusing to test an unknown snapshot",
      );
    source = after;
  }
  const port = await freePort();
  const server = await preview({
    root: ROOT,
    logLevel: "warn",
    build: { outDir },
    preview: { host: "127.0.0.1", port, strictPort: true, open: false },
  });
  const baseUrl = `http://127.0.0.1:${port}/`;
  // Test-harness variable consumed by tests/bdd/support/world.ts in workers.
  process.env.BDD_BASE_URL = baseUrl;
  const record: BuildRecord = {
    builtAt: new Date().toISOString(),
    outDir,
    baseUrl,
    source,
    bundle: readdirSync(join(outDir, "assets")).sort(),
  };
  mkdirSync(join(ROOT, "test-results"), { recursive: true });
  writeFileSync(BUILD_RECORD, `${JSON.stringify(record, null, 2)}\n`);
  console.log(
    `BDD build: source ${source.hash} (${source.files} files, newest ${source.newestFile} @ ${source.newestMtime}) → ${baseUrl} bundle ${record.bundle.filter((f) => f.endsWith(".js")).join(",")}`,
  );
  return async () => {
    const end = sourceFingerprint();
    const stale = end.hash !== source.hash;
    writeFileSync(
      BUILD_RECORD,
      `${JSON.stringify({ ...record, sourceAtEnd: end, stale }, null, 2)}\n`,
    );
    if (stale) {
      console.log(
        `BDD WARNING: source changed during the run (${source.hash} → ${end.hash}, newest ${end.newestFile}); results describe snapshot ${source.hash}, not the current tree.`,
      );
    }
    await server.close();
    rmSync(outDir, { recursive: true, force: true });
  };
}
