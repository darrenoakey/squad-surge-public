# Squad Surge — Tin-Toy Tidewatch

A premium, instantly playable, genuinely 3D arcade **lane shooter** for the browser.
Command a multiplying toy squad on a coastal battlefield: three lanes, automatic
shooting, incoming enemies, lateral flankers, honest gate choices, weapon
upgrades, and a final boss. **Pure combat — no economy, no purchases, no farming,
no accounts, no external APIs, no energy countdowns.**

- **Three unlocked missions** from the start (nothing is gated behind grinding):
  - **Mission 01 · Recruit — Coastal Bridge**: hold the causeway at low tide.
    Bodies or bullets — grow the squad on the flanks, or tune the guns in the
    hot centre lane.
  - **Mission 02 — Industrial Port**: container yard under siege.
  - **Mission 03 — Dusk Extraction**: last chopper off the headland.
    Later missions add lateral attackers and a boss; each mission card shows its
    tradeoff teaser.
- Each run is ~60–100 seconds of structured waves with readable telegraphs and
  real gate arithmetic: riskier lanes pay off, no choice strictly dominates.

## Playing

- **Desktop**: `A`/`D` or arrow keys to change lane, `P` (or the on-screen
  pause button) to pause and resume. All controls are keyboard reachable with
  visible focus.
- **Touch / mobile**: drag or tap a lane to move; thumb-accessible targets are
  at least 44 px. Responsive from 390 px up to 1440 px.
- **Sound**: toggle in the header — real synthesized Web Audio (no audio
  assets); the preference persists in your browser profile.
- **Reduced motion**: enabling the OS/browser preference reduces screen shake
  and flourishes; the simulation itself is unchanged.

## Running locally

Requirements: Node 20+ (built and verified on Node 26 / npm 11), a WebGL2-capable
browser (any recent Chromium, Firefox, or Safari).

```bash
npm ci          # install exactly the locked dependencies
npm run dev     # Vite dev server with HMR
npm run build   # production bundle into dist/
```

### Production preview

```bash
npm run build     # production bundle into dist/
npm run preview   # serve dist/ locally with vite preview
```

There is no environment-variable configuration anywhere in this project.

### Portable offline single file

```bash
npm run build:portable   # → dist-portable/index.html
```

produces **one self-contained HTML file** (~1.6 MB): JavaScript, CSS, and the
bundled fonts are inlined; the favicon is embedded as a data URI; no sourcemap
or sibling assets are referenced. Double-click it — or open it via `file://` —
in any WebGL2-capable browser (verified in Chromium) and it plays completely
**offline**: zero network requests, zero console errors. The decorative menu
key art is served (not inlined) in the normal build and simply omitted in
portable mode.

### Source archive

To ship or inspect the source: `git archive` (or zip) of the repo, excluding
gitignored paths, plus `package-lock.json`. Recipients run `npm ci && npm run
build` — the lockfile guarantees the exact verified dependency graph.

## Checks

| Command                | What it proves                                                        |
| ---------------------- | --------------------------------------------------------------------- |
| `npm run typecheck`    | strict `tsc --noEmit` over all authored `src/`, `tests/`, and configs |
| `npm run lint`         | typed ESLint (typescript-eslint, type-checked rules)                  |
| `npm run format:check` | `prettier --check` over everything not generated                      |
| `npm run test:unit`    | vitest simulation suites (`tests/unit`, `src/**/*.test.ts`)           |
| `npm run build`        | real `vite build` into `dist/`                                        |
| `npm run test:bdd`     | Playwright browser suite against a real build                         |

`npm run check` runs typecheck + lint + format + unit tests.

## Project layout

```
src/game/    deterministic, renderer-independent simulation (types, levels, engine)
src/render/  Three.js renderer: procedural toy-soldier models, terrain, effects
src/ui/      app shell, HUD, input, synthesized audio, local preferences
index.html   entry (loads /src/main.ts)
tests/unit   vitest simulation contract tests
tests/bdd    Playwright browser suites
docs/        simulation API and art direction
```

## Provenance & originality

All code in this repository is original work authored for this project. The
decorative menu key art (`public/art/key-art-menu.jpg`) is a **generated** image
created for this project from an original text prompt. The 3D battlefield, toy
soldiers, water, and effects are **procedural Three.js geometry and shaders** —
there are no third-party game assets, and no existing game's assets,
likenesses, or code are used.
Bundled dependencies (Three.js, Vite, fontsource typefaces) are ordinary
open-source npm packages. Their full license texts ship with the game:

- `public/THIRD-PARTY-NOTICES.txt` — served with the production build at
  `/THIRD-PARTY-NOTICES.txt` (Three.js MIT; Barlow Condensed and Inter under
  the SIL Open Font License 1.1). Regenerate after dependency changes with
  `scripts/third-party-notices.sh`.
- The portable single-file HTML embeds the same notices as an HTML comment,
  because it ships completely alone.
- `LICENSE` — MIT, covering this repository's original code.
