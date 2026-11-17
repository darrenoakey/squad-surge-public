/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { readFileSync } from "node:fs";

// Build/dev configuration for Squad Surge.
// No environment-variable configuration exists anywhere.
//
// `npm run build`        — normal production bundle into dist/.
// `npm run build:portable` — mode "portable": one self-contained dist/index.html
//                           (JS, CSS and @fontsource woff2 inlined) that plays
//                           offline from file://. Deploys always use the normal
//                           build; the portable file is a delivery artifact.
export default defineConfig(({ mode }) => ({
  appType: "spa",
  plugins: [
    ...(mode === "portable"
      ? [
          {
            // Fully self-contained single file: inline the favicon as a data:
            // URI and drop the public/ directory so nothing sits beside it.
            name: "squad-surge-portable",
            config() {
              return { publicDir: false as const };
            },
            transformIndexHtml(html: string) {
              const svg = readFileSync(new URL("./public/favicon.svg", import.meta.url), "utf8");
              // The portable HTML ships alone, so the MIT/OFL license texts
              // travel inside it as an HTML comment (redistribution requires
              // the notices accompany the work).
              const notices = readFileSync("public/THIRD-PARTY-NOTICES.txt", "utf8");
              const noticeComment = `<!--\n${notices.replaceAll("-->", "--\u003e")}\n-->`;
              return html
                .replace(
                  /<link rel="icon"[^>]*>/,
                  `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}" />`,
                )
                .replace("</head>", `${noticeComment}\n</head>`);
            },
          },
          viteSingleFile(),
        ]
      : []),
  ],
  build: {
    target: "es2022",
    // Portable single-file must not reference an external .map over file://.
    sourcemap: mode !== "portable",
    outDir: mode === "portable" ? "dist-portable" : "dist",
    // Budget rationale, not blanket suppression: the game ships exactly one
    // application chunk (~660 KB / 179 KB gzipped) because it is an
    // instantly-playable Three.js experience served from local preview or
    // LAN — a single request is the fastest first paint there, and splitting
    // three.js would only add waterfall latency. The 1 MB limit documents
    // that accepted budget instead of hiding it.
    chunkSizeWarningLimit: 1024,
  },
  test: {
    // vitest unit suites (simulation contract). Browser BDD lives in
    // playwright.config.ts.
    environment: "node",
    include: ["src/**/*.test.ts", "tests/unit/**/*.test.ts"],
    exclude: ["tests/bdd/**", "**/node_modules/**", "**/dist/**"],
    passWithNoTests: false,
  },
}));
