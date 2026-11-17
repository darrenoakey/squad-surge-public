// Peak-density smoothness probe (QA evidence tool, not part of the gated suite).
// Real headed Chromium on native Metal, fresh production build on a free port.
// UI-only: clicks mission 3 + Deploy, steers the recorded keyboard route.
// No engine hooks, no clock control, no state seeding. Telemetry is read-only:
// rAF timestamps, and per-frame WebGL draw-call/triangle counts gathered by
// counting calls to the WebGL2 draw entry points (arguments passed through
// untouched). Usage: npx vite-node tests/bdd/tools/peak-probe.ts
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { chromium, type Page } from "@playwright/test";
import { build, preview } from "vite";
import { sourceFingerprint, ROOT } from "../support/provenance";

const LEVEL = "dusk-extraction";
const WINDOW_START_S = 42;
const WINDOW_END_S = 58;
/** Margin before the next keypress so sampling + screenshot never delay a route key. */
const KEY_MARGIN_S = 1.5;
const SAMPLE_MS = 3000;
const OUT = join(ROOT, "test-results", "peak-probe");

interface Route {
  waypoints: { at: number; lane: 0 | 1 | 2 }[];
}

const COUNTER = `
(() => {
  const proto = WebGL2RenderingContext.prototype;
  const stats = { calls: 0, triangles: 0 };
  window.__qaDraw = stats;
  const tri = (mode, count, instances) => (mode === 4 ? (count / 3) * instances : 0);
  const wrap = (name, fn) => {
    const original = proto[name];
    proto[name] = function (...args) {
      stats.calls += 1;
      stats.triangles += fn(args);
      return original.apply(this, args);
    };
  };
  wrap("drawArrays", (a) => tri(a[0], a[2], 1));
  wrap("drawElements", (a) => tri(a[0], a[1], 1));
  wrap("drawArraysInstanced", (a) => tri(a[0], a[2], a[3]));
  wrap("drawElementsInstanced", (a) => tri(a[0], a[1], a[4]));
  wrap("drawRangeElements", (a) => tri(a[0], a[3], 1));
})();`;

async function elapsed(page: Page): Promise<number> {
  return Number(await page.getByTestId("game-root").getAttribute("data-elapsed"));
}

async function waitElapsed(page: Page, at: number): Promise<void> {
  await page.waitForFunction(
    (t: number) => {
      const r = document.querySelector<HTMLElement>('[data-testid="game-root"]');
      return r?.dataset.status !== "running" || Number(r.dataset.elapsed) >= t;
    },
    at,
    { polling: "raf", timeout: 120_000 },
  );
}

interface Sample {
  fromS: number;
  toS: number;
  fps: number;
  p95FrameMs: number;
  worstFrameMs: number;
  drawCallsPerFrame: number;
  trianglesPerFrame: number;
  squad: number;
  hud: string;
}

async function sample(page: Page): Promise<Sample> {
  const fromS = await elapsed(page);
  const r = await page.evaluate(async (ms: number) => {
    const w = window as unknown as { __qaDraw: { calls: number; triangles: number } };
    const frames: number[] = [];
    const calls: number[] = [];
    const tris: number[] = [];
    let lastCalls = w.__qaDraw.calls;
    let lastTris = w.__qaDraw.triangles;
    await new Promise<void>((resolve) => {
      const start = performance.now();
      const tick = (now: number): void => {
        frames.push(now);
        calls.push(w.__qaDraw.calls - lastCalls);
        tris.push(w.__qaDraw.triangles - lastTris);
        lastCalls = w.__qaDraw.calls;
        lastTris = w.__qaDraw.triangles;
        if (now - start < ms) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });
    const gaps = frames
      .slice(1)
      .map((t, i) => t - (frames[i] ?? t))
      .sort((a, b) => a - b);
    const span = (frames.at(-1) ?? 0) - (frames[0] ?? 0);
    const max = (xs: number[]): number => xs.slice(1).reduce((m, x) => Math.max(m, x), 0);
    return {
      fps: ((frames.length - 1) * 1000) / span,
      p95: gaps[Math.floor(gaps.length * 0.95)] ?? 0,
      worst: gaps.at(-1) ?? 0,
      calls: max(calls),
      tris: max(tris),
    };
  }, SAMPLE_MS);
  const root = page.getByTestId("game-root");
  return {
    fromS,
    toS: await elapsed(page),
    fps: Math.round(r.fps * 10) / 10,
    p95FrameMs: Math.round(r.p95 * 10) / 10,
    worstFrameMs: Math.round(r.worst),
    drawCallsPerFrame: r.calls,
    trianglesPerFrame: Math.round(r.tris),
    squad: Number(await root.getAttribute("data-squad")),
    hud: (await page.getByTestId("hud").innerText()).replace(/\s+/g, " ").slice(0, 200),
  };
}

const source = sourceFingerprint();
const outDir = mkdtempSync(join(tmpdir(), "squad-surge-peak-"));
await build({ root: ROOT, logLevel: "warn", build: { outDir, emptyOutDir: true } });
const server = await preview({
  root: ROOT,
  logLevel: "warn",
  build: { outDir },
  preview: { host: "127.0.0.1", port: 0, strictPort: false, open: false },
});
const url = server.resolvedUrls?.local[0];
if (!url) throw new Error("preview server has no local URL");
const browser = await chromium.launch({
  headless: false,
  channel: "chromium",
  args: ["--use-angle=metal", "--ignore-gpu-blocklist"],
});
const errors: string[] = [];
const samples: Sample[] = [];
let renderer = "";
let peakShot = "";
let finalStatus = "";
try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await context.addInitScript(COUNTER);
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`console.error: ${m.text()}`);
  });
  await page.goto(url);
  renderer = await page.evaluate(() => {
    const gl = document.createElement("canvas").getContext("webgl2");
    const ext = gl?.getExtension("WEBGL_debug_renderer_info");
    return ext && gl ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "none";
  });
  const card = page.locator(`[data-testid="mission-card"][data-mission-id="${LEVEL}"]`);
  await card.click();
  await page.getByTestId("deploy-button").click();
  const route = JSON.parse(
    readFileSync(join(ROOT, "tests", "bdd", "routes", `${LEVEL}.json`), "utf8"),
  ) as Route;
  const root = page.getByTestId("game-root");
  let arrows = true;
  let peak: Sample | null = null;
  for (const wp of route.waypoints) {
    // Sample whenever the next waypoint is far enough away inside the peak window.
    if (
      (await elapsed(page)) < WINDOW_START_S &&
      wp.at > WINDOW_START_S + SAMPLE_MS / 1000 + KEY_MARGIN_S
    ) {
      await waitElapsed(page, WINDOW_START_S);
    }
    while ((await root.getAttribute("data-status")) === "running") {
      const now = await elapsed(page);
      if (
        now < WINDOW_START_S ||
        now >= WINDOW_END_S ||
        wp.at + 0.1 - now < SAMPLE_MS / 1000 + KEY_MARGIN_S
      )
        break;
      const s = await sample(page);
      samples.push(s);
      console.log(JSON.stringify(s));
      if (!peak || s.trianglesPerFrame > peak.trianglesPerFrame) {
        peak = s;
        mkdirSync(OUT, { recursive: true });
        peakShot = join(OUT, "peak-density-mission3.png");
        await page.screenshot({ path: peakShot });
      }
    }
    await waitElapsed(page, wp.at + 0.1);
    if ((await root.getAttribute("data-status")) !== "running") break;
    const lane = Number(await root.getAttribute("data-lane"));
    const delta = wp.lane - lane;
    const key = delta < 0 ? (arrows ? "ArrowLeft" : "a") : arrows ? "ArrowRight" : "d";
    for (let i = 0; i < Math.abs(delta); i += 1) await page.keyboard.press(key);
    if (delta !== 0) arrows = !arrows;
    if ((await elapsed(page)) > WINDOW_END_S + 2) break;
  }
  finalStatus = `${String(await root.getAttribute("data-status"))} at ${await elapsed(page)}s squad ${String(await root.getAttribute("data-squad"))}`;
  await page.goto("about:blank");
  await context.close();
} finally {
  await browser.close();
  await server.close();
  rmSync(outDir, { recursive: true, force: true });
}
const report = {
  measuredAt: new Date().toISOString(),
  source: source.hash,
  sourceAtEnd: sourceFingerprint().hash,
  renderer,
  viewport: "1280x800 dpr1 headed",
  level: LEVEL,
  window: [WINDOW_START_S, WINDOW_END_S],
  samples,
  minFps: Math.min(...samples.map((s) => s.fps)),
  peakTriangles: Math.max(...samples.map((s) => s.trianglesPerFrame)),
  peakDrawCalls: Math.max(...samples.map((s) => s.drawCallsPerFrame)),
  peakScreenshot: peakShot,
  stateAfterProbe: finalStatus,
  browserErrors: errors,
};
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "peak-probe.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ ...report, samples: samples.length }, null, 2));
if (samples.length === 0 || report.minFps < 30 || errors.length > 0) process.exitCode = 1;
