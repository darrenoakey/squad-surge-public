// External anonymous verification of the live public pilot.
// Mirrors local/pages-build/verify-pages.mjs (same checks/selecters) but runs
// against the real HTTPS origin from a GitHub-hosted runner (outside the home
// network). No physical phones. Usage: node scripts/external-smoke.mjs
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium, webkit } from "playwright";

const BASE = "https://darrenoakey.github.io/squad-surge-public/";
const OUT = process.env.SMOKE_OUT ?? "smoke-out"; mkdirSync(OUT, { recursive: true });
const FILES = [
  ["index.html", 826, "text/html"],
  ["assets/index-Dy8xYNN9.js", 661033, "javascript"],
  ["assets/index-bIbkL0Jh.css", 21613, "text/css"],
  ["favicon.svg", 507, "svg"],
  ["THIRD-PARTY-NOTICES.txt", 12315, "text/plain"],
  ["LICENSE", 1069, "text/plain"],
  ["art/key-art-menu.jpg", 486222, "jpeg"],
  ["assets/inter-latin-400-normal-C38fXH4l.woff2", 23664, "font"],
  ["assets/inter-latin-600-normal-LgqL8muc.woff2", 24452, "font"],
  ["assets/barlow-condensed-latin-700-normal-v1xN8_Wq.woff2", 22444, "font"],
  ["assets/barlow-condensed-latin-800-italic-Cnej2eWp.woff2", 23780, "font"],
  ["assets/barlow-condensed-latin-800-normal-BKzMuPgK.woff2", 22464, "font"],
];
const EXPECT_SHA = {
  "assets/index-Dy8xYNN9.js": null, "assets/index-bIbkL0Jh.css": null,
  "art/key-art-menu.jpg": "c11518cd52568344351436151afa6f4fb2a5440894dba5adef7e4a5c43ef2fa1",
  "favicon.svg": "a865fc82ed917c575311c619b16c57adfc9d05932002b2c5da264bb9c63e3e1c",
  "THIRD-PARTY-NOTICES.txt": "255551902391d793a361bf0086fa7c2d0b9e6dc81dbef9727023773c80f5331c",
  "assets/inter-latin-400-normal-C38fXH4l.woff2": "8909904ab6c872eb994093482a88a28eca2cd95912d7a6fecd72103b0dc07edc",
  "assets/inter-latin-600-normal-LgqL8muc.woff2": "f9a06e79cd3a2a20951c0f0e28f66dd0e6d3fda73911d640a2125c8fcb78f21f",
  "assets/barlow-condensed-latin-700-normal-v1xN8_Wq.woff2": "3787a5a419171630e6890cfa47c4da067474d005cd0ff8dc11ec090fdc3ee2b8",
  "assets/barlow-condensed-latin-800-italic-Cnej2eWp.woff2": "59b48100622b2dea510bbf9e98d02eecf20ea8ae000821877f2d470ec16ee55",
  "assets/barlow-condensed-latin-800-normal-BKzMuPgK.woff2": "2515494e8cc2ca07c86ea78766cfa1047b796aa6ed5d66821c01d51dbb0b52bce",
};
const results = { base: BASE, startedAt: new Date().toISOString(), item1_files: [], passes: {}, verdict: {} };
let ok1 = true;
for (const [f, bytes, type] of FILES) {
  const r = await fetch(BASE + f, { redirect: "manual" });
  const body = Buffer.from(await r.arrayBuffer());
  const sha = createHash("sha256").update(body).digest("hex");
  const e = { file: f, status: r.status, bytes: body.length, type: r.headers.get("content-type") ?? "" };
  e.bytesOk = bytes === null || body.length === bytes; e.typeOk = e.type.includes(type);
  e.shaOk = !EXPECT_SHA[f] || EXPECT_SHA[f] === sha; if (EXPECT_SHA[f]) e.sha = sha.slice(0, 16);
  if (r.status !== 200 || !e.bytesOk || !e.typeOk || !e.shaOk) ok1 = false;
  results.item1_files.push(e);
}
results.verdict.item1_allFiles200BytesTypesSha = ok1;

async function pass(name, browserType, ctxOpts) {
  const browser = await browserType.launch({ headless: true });
  const p = { console: [], pageErrors: [], outside: [], steps: {} };
  try {
    const ctx = await browser.newContext(ctxOpts);
    const page = await ctx.newPage();
    page.on("console", (m) => { if (m.type() === "error") p.console.push(m.text()); });
    page.on("pageerror", (e) => p.pageErrors.push(String(e)));
    page.on("request", (r) => { const u = new URL(r.url()); if (u.origin !== new URL(BASE).origin) p.outside.push(r.url()); });
    const shot = async (n) => { const f = `${name}-${n}.png`; await page.screenshot({ path: join(OUT, f) }); return f; };
    await page.goto(BASE, { waitUntil: "load", timeout: 45000 });
    const art = await page.evaluate(() => { const el = document.querySelector(".page__art"); const bg = getComputedStyle(el).backgroundImage; return { hasArt: el.classList.contains("has-art"), bg }; });
    p.steps.keyArt = { ...art, ok: art.hasArt && art.bg.includes("/squad-surge-public/art/key-art-menu.jpg") };
    p.steps.faviconHref = await page.evaluate(() => document.querySelector('link[rel="icon"]')?.href ?? null);
    p.steps.screenshotLanding = await shot("1-landing");
    const tap = async (loc) => (ctxOpts.hasTouch ? loc.tap() : loc.click());
    const card1 = page.getByTestId("mission-card").first();
    await tap(card1);
    p.steps.mission1 = { id: await card1.getAttribute("data-mission-id"), pressed: await card1.getAttribute("aria-pressed") };
    const deploy = page.getByTestId("deploy-button");
    await deploy.waitFor({ state: "visible", timeout: 15000 });
    await page.waitForFunction(() => !document.querySelector('[data-testid="deploy-button"]')?.disabled, null, { timeout: 20000 });
    await tap(deploy);
    const root = page.getByTestId("game-root");
    await page.waitForFunction(() => document.querySelector('[data-testid="game-root"]')?.dataset.status === "running", null, { timeout: 20000 });
    p.steps.levelId = await root.getAttribute("data-level-id");
    await page.waitForTimeout(1500);
    p.steps.screenshotRunning = await shot("2-running");
    const lanes = [];
    for (const [id, want] of [["lane-button-0", "0"], ["lane-button-2", "2"], ["move-left", "1"], ["move-left", "0"], ["move-right", "1"]]) {
      await tap(page.getByTestId(id));
      await page.waitForFunction((w) => document.querySelector('[data-testid="game-root"]')?.dataset.lane === w, want, { timeout: 5000 }).catch(() => {});
      lanes.push({ control: id, want, got: await root.getAttribute("data-lane") });
    }
    p.steps.lanes = lanes; p.steps.lanesAllMatch = lanes.every((l) => l.want === l.got);
    p.steps.statusAfterLanes = await root.getAttribute("data-status");
    await shot("3-after-lanes");
    p.verdict = { keyArt: !!p.steps.keyArt.ok, missionStarted: p.steps.statusAfterLanes === "running", lanesAllMatch: !!p.steps.lanesAllMatch, noConsoleErrors: p.console.length === 0, noPageErrors: p.pageErrors.length === 0, noOutsideRequests: p.outside.length === 0 };
    await ctx.close();
  } catch (e) { p.driverError = String(e); p.verdict = { keyArt: false, missionStarted: false, lanesAllMatch: false, noConsoleErrors: false, noPageErrors: false, noOutsideRequests: false, driverError: true }; }
  finally { await browser.close(); }
  results.passes[name] = p;
}
await pass("desktop-chromium", chromium, { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const iphone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" };
await pass("iphone-chromium", chromium, iphone);
await pass("iphone-webkit", webkit, iphone);
results.finishedAt = new Date().toISOString();
results.verdict.allPass = ok1 && Object.values(results.passes).every((p) => p.verdict && Object.entries(p.verdict).filter(([k]) => k !== "driverError").every(([, v]) => v === true));
writeFileSync(join(OUT, "results.json"), JSON.stringify(results, null, 2));
console.log(JSON.stringify({ allPass: results.verdict.allPass, item1: results.verdict.item1_allFiles200BytesTypesSha, passes: Object.fromEntries(Object.entries(results.passes).map(([k, p]) => [k, p.verdict])) }));
process.exit(results.verdict.allPass ? 0 : 1);
