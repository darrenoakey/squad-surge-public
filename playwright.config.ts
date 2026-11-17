import { defineConfig } from "@playwright/test";

// UI-only BDD suite (tests/bdd). globalSetup builds the production bundle into
// a temp dir and serves it on an OS-assigned port (never the dev or prod port).
// Evidence: test-results/bdd-perf.json every run; BDD_RECORD=1 additionally
// updates the committed tests/bdd/perf.json and artifacts/*.png screenshots.
export default defineConfig({
  testDir: "tests/bdd",
  testMatch: "bdd.spec.ts",
  outputDir: "test-results/bdd",
  globalSetup: "./tests/bdd/support/global-setup.ts",
  // The timing/fps qualifiers (@perf) run first in their own serial project
  // with no other browser active; everything else depends on it and runs
  // 8-wide. The simulation advances by wall-clock time, so mission scenarios
  // take the same time at any width; the floor is the longest full mission
  // (~95 s), which bdd.spec.ts dispatches first. Measured full suite: 2
  // workers 354 s, 5 workers 167 s, 8 workers 109 s, same assertions.
  // Fresh browser context per scenario.
  fullyParallel: true,
  workers: 8,
  projects: [
    // Timing/fps qualifiers run HEADED: headless Chromium on this host paces
    // frames far below the display (blank WebGL 11-19 fps) while the same app
    // renders at ~60 fps in a real window.
    // Assertions are unchanged; the Metal backend is still asserted.
    { name: "qualify", grep: /@perf/, fullyParallel: false, use: { headless: false } },
    { name: "bdd", grepInvert: /@perf/, dependencies: ["qualify"] },
  ],
  retries: 0,
  forbidOnly: true,
  timeout: 90_000,
  expect: { timeout: 10_000 },
  reporter: [["list"], ["./tests/bdd/support/perf-reporter.ts"]],
  use: {
    browserName: "chromium",
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    // New headless Chromium on the host GPU via ANGLE Metal on macOS;
    // explicit SwiftShader on other platforms. No fallback: the launch and
    // performance scenarios assert the WebGL renderer string matches.
    // Measured here under load: SwiftShader ~2 fps vs Metal ~10 fps.
    channel: "chromium",
    launchOptions: {
      args:
        process.platform === "darwin"
          ? ["--use-angle=metal", "--ignore-gpu-blocklist"]
          : ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
    },
  },
});
