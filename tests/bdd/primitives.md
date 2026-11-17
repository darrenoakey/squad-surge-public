# Squad Surge BDD primitives

Custom minimal Gherkin runner (`support/gherkin.ts` + `support/registry.ts`);
step definitions in `steps/*.steps.ts` are the source of truth. Every scenario
becomes one Playwright test (`bdd.spec.ts`), which also enforces:

- **Reachability tree** — every `Given` equals a `Then` of another reachable
  scenario, rooted at `Given the app is running` / `When I browse to "/"`.
  `Given I am using a …` device steps are framework-arranged.
- **Binding** — each step matches exactly one primitive.
- **No browser errors** — console errors, page errors, failed requests, HTTP
  ≥400 and the `fatal-error` panel fail every scenario.

## Rules

- UI only: clicks, taps, key presses. `page.evaluate` is used solely for
  read-only metrics (navigation timing, layout boxes, focus styles, rAF/long-task
  observation). No engine imports, no route fulfilment, no storage seeding.
- `@clock` scenarios install Playwright's clock (fake Date/performance.now/
  timers/requestAnimationFrame) — time control only, never state seeding.
- Idempotent "ensure" Givens: with no page open they drive the UI from `/` to
  the state; with a page open they assert it (`support/flows.ts`).

## Primitives

| Step                                                                                                                                                                            | Purpose                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `the app is running`                                                                                                                                                            | isolated test server answers `/` (root)                   |
| `I browse to "{path}"`                                                                                                                                                          | open a fresh context/page                                 |
| `I am using a {w}x{h} touch phone` / `desktop`                                                                                                                                  | device profile before the page opens                      |
| `the landing page is visible`                                                                                                                                                   | ensure briefing; records mission ids + initial sound pref |
| `{n} missions are offered`                                                                                                                                                      | cards with name + tradeoff                                |
| `the "{control}" control is visible`                                                                                                                                            | visible + enabled                                         |
| `I click "{control}"` / `I tap "{control}"`                                                                                                                                     | control-name → `data-testid` map in `support/world.ts`    |
| `I press "{key}"` / `I press "{key}" {n} times`                                                                                                                                 | keyboard                                                  |
| `I select mission {n}` / `mission {n} is selected` / `exactly one mission is selected`                                                                                          | briefing selection                                        |
| `a run is active` / `a run is active on mission {n}` / `no run is active`                                                                                                       | run status                                                |
| `the squad is in the {left/center/right} lane`                                                                                                                                  | `game-root[data-lane]`                                    |
| `elapsed time advances` / `continues from where it paused` / `has restarted`                                                                                                    | `game-root[data-elapsed]`                                 |
| `the run is paused` / `the pause overlay is visible` / `elapsed time and squad size are unchanged since pausing`                                                                | pause invariance                                          |
| `I wait {n} seconds`                                                                                                                                                            | wall time, or browser clock under `@clock`                |
| `I reload the page` / `the sound preference is flipped / still flipped / unchanged`                                                                                             | persisted preference                                      |
| `the squad holds the center lane until the run ends`                                                                                                                            | idle play to the end                                      |
| `I steer the winning route for mission {n} with the keyboard`                                                                                                                   | replays `routes/<levelId>.json` with Arrow/A-D presses    |
| `the defeat screen is shown` / `the victory screen is shown for mission {n}`                                                                                                    | end screen outcome                                        |
| `the page has no horizontal overflow` / `every visible control is at least {n} px`                                                                                              | responsive                                                |
| `I tab through the page` / `focus reached every mission, "{a}" and "{b}"` / `every focused control showed a visible focus indicator` / `I tab to "{control}" and press "{key}"` | keyboard a11y                                             |
| `the 3D battlefield is rendering`                                                                                                                                               | canvas size, non-blank PNG, animates                      |
| `I capture the screenshot "{name}"` (`after {n} seconds of play`)                                                                                                               | evidence                                                  |
| `I measure rendering for {n} seconds` / `the frame rate is at least {n} fps` / `no main-thread task blocked for more than {n} ms`                                               | runtime perf                                              |
| `the landing page became interactive within {n} ms`                                                                                                                             | navigation timing                                         |

## Routes

`routes/<levelId>.json`: `{ "levelId", "source", "waypoints": [{ "at": seconds, "lane": 0|1|2 }] }`.
Lane schedules are authored from the deterministic unit-test
traces; the browser test replays them only through keyboard input.

## Running

- `npm run test:bdd` — builds into a temp dir, serves `vite preview` on a free
  port, runs headless Chromium (SwiftShader WebGL). Writes
  `test-results/bdd-perf.json` (gitignored).
- `BDD_RECORD=1 npm run test:bdd` — on a fully green run, also updates the
  committed `tests/bdd/perf.json` (10-run history) and `artifacts/*.png`.
  Gate runs omit it so they leave no tracked changes.
