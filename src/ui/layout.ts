/**
 * Static page skeleton for Squad Surge. Built once; the App fills values in.
 * Desktop ≥1100px: dossier rail | 3:5 live viewport | live-readings rail.
 * Narrow: the rails dissolve (display: contents) and their sections reflow
 * around a full-width viewport so the 3D scene always leads.
 */

const LOGO_MARK = `
<svg class="mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  <circle cx="32" cy="32" r="30" fill="#2EA8FF" stroke="#14233F" stroke-width="4"/>
  <path d="M8 40c8-4 16 4 24 0s16-4 24 0v6a26 26 0 0 1-48 0z" fill="#1B8FB3"/>
  <path d="M19 30c0-8 6-14 13-14s13 6 13 14z" fill="#FFFBF2" stroke="#14233F" stroke-width="3.5" stroke-linejoin="round"/>
  <rect x="15" y="29" width="34" height="6" rx="3" fill="#FFC93C" stroke="#14233F" stroke-width="3.5"/>
  <circle cx="32" cy="23" r="3" fill="#FF5247"/>
</svg>`;

export const TEMPLATE = /* html */ `
<div class="page" data-screen="menu">
  <div class="page__art" aria-hidden="true"></div>
  <main class="app" data-testid="game-root" data-status="ready" data-lane="1" data-elapsed="0.0" data-squad="0">
    <section class="rail rail--left" aria-label="Mission dossier">
      <header class="brand">
        <div class="brand__lockup" data-testid="brand">
          ${LOGO_MARK}
          <span class="brand__text">
            <span class="brand__kicker">Tin-Toy Tidewatch · Field Manual</span>
            <h1 class="brand__title">Squad <span>Surge</span></h1>
          </span>
        </div>
        <button class="icon-btn sound" type="button" data-testid="sound-toggle" aria-pressed="true" aria-label="Sound on">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path class="sound__cone" d="M4 9h4l5-4v14l-5-4H4z"/><path class="sound__waves" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/><path class="sound__mute" d="M16 9l6 6M22 9l-6 6"/></svg>
          <span class="sound__label">Sound</span>
        </button>
      </header>

      <section class="card landing" data-testid="landing" aria-labelledby="dossier-name">
        <div class="dossier">
          <p class="eyebrow"><span data-ref="dossierNumber">Mission 01</span> · <span data-ref="dossierDifficulty">Recruit</span></p>
          <h2 class="dossier__name" id="dossier-name" data-ref="dossierName">—</h2>
          <p class="dossier__brief" data-ref="dossierBrief"></p>
          <p class="dossier__tradeoff"><span class="tag tag--amber">Tradeoff</span> <span data-ref="dossierTradeoff"></span></p>
          <ul class="dossier__intel" data-ref="dossierIntel"></ul>
        </div>
        <div class="missions" role="group" aria-label="Choose a mission" data-ref="missions"></div>
        <button class="deploy" type="button" data-testid="deploy-button">
          <span>Deploy squad</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h12M12 6l6 6-6 6"/></svg>
        </button>
        <p class="instructions" data-testid="instructions">
          <kbd>A</kbd><kbd>D</kbd> or <kbd>←</kbd><kbd>→</kbd> switch lanes · drag or tap the field · <kbd>Space</kbd> pause
        </p>
      </section>

      <section class="card run-dossier" aria-label="Mission log">
        <p class="eyebrow"><span data-ref="runNumber">Mission 01</span> · <span data-ref="runDifficulty">Recruit</span></p>
        <h2 class="dossier__name" data-ref="runName">—</h2>
        <p class="dossier__brief" data-ref="runSubtitle"></p>
        <ol class="log" data-testid="event-log" data-ref="eventLog" aria-label="Field log"></ol>
      </section>
    </section>

    <section class="viewport-col" aria-label="Battlefield">
      <div class="viewport" data-testid="game-stage" data-ref="stage" tabindex="-1">
        <canvas class="viewport__canvas" data-testid="game-canvas" aria-label="Live 3D battlefield"></canvas>
        <div class="lane-guides" aria-hidden="true"><i></i><i></i><i></i></div>

        <div class="vhud" data-ref="vhud">
          <div class="track" aria-hidden="true">
            <div class="track__line"><div class="track__fill" data-ref="trackFill"></div></div>
            <div class="track__ticks" data-ref="trackTicks"></div>
            <span class="track__boss" data-ref="trackBoss" title="Boss"></span>
          </div>
          <div class="vhud__row">
            <div class="hudcard hudcard--score">
              <span class="hudcard__label">Score</span>
              <span class="hudcard__value num" data-testid="stage-score" data-ref="stageScore">0</span>
              <span class="mult num" data-ref="stageMult">×1</span>
            </div>
            <div class="hudcard hudcard--squad">
              <span class="hudcard__label">Squad</span>
              <span class="hudcard__value num" data-testid="stage-squad" data-ref="stageSquad">0</span>
              <span class="hudcard__sub" data-ref="stageWeapon"></span>
            </div>
            <button class="icon-btn pause-btn" type="button" data-testid="pause-button" aria-pressed="false" aria-label="Pause">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path class="i-pause" d="M8 5v14M16 5v14"/><path class="i-play" d="M7 5l12 7-12 7z"/></svg>
            </button>
          </div>
          <p class="wave-banner" data-ref="waveBanner" aria-hidden="true"></p>
          <div class="telegraphs" data-ref="telegraphs" aria-hidden="true"></div>
        </div>

        <div class="boss-bar" data-ref="bossBar" hidden>
          <span class="boss-bar__name" data-ref="bossName"></span>
          <div class="boss-bar__track"><div class="boss-bar__fill" data-ref="bossFill"></div></div>
        </div>

        <div class="overlay pause-overlay" data-testid="pause-overlay" hidden role="dialog" aria-modal="false" aria-labelledby="pause-title">
          <div class="sheet">
            <p class="eyebrow">Field halt</p>
            <h2 id="pause-title" class="sheet__title">Paused</h2>
            <p class="sheet__sub" data-ref="pauseSub"></p>
            <div class="sheet__actions">
              <button class="btn btn--primary" type="button" data-testid="resume-button">Resume</button>
              <button class="btn" type="button" data-testid="restart-button">Restart mission</button>
              <button class="btn btn--ghost" type="button" data-testid="menu-button">Mission select</button>
            </div>
          </div>
        </div>

        <div class="overlay end-screen" data-testid="end-screen" hidden role="dialog" aria-modal="false" aria-labelledby="end-title">
          <div class="sheet">
            <p class="eyebrow" data-ref="endEyebrow"></p>
            <h2 id="end-title" class="sheet__title" data-ref="endTitle"></h2>
            <p class="sheet__sub" data-ref="endSub"></p>
            <dl class="stats">
              <div><dt>Score</dt><dd class="num" data-testid="end-score" data-ref="endScore"></dd></div>
              <div><dt>Kills</dt><dd class="num" data-testid="end-kills" data-ref="endKills"></dd></div>
              <div><dt>Survivors</dt><dd class="num" data-testid="end-squad" data-ref="endSquad"></dd></div>
              <div><dt>Time</dt><dd class="num" data-testid="end-time" data-ref="endTime"></dd></div>
            </dl>
            <p class="best" data-testid="end-best" data-ref="endBest"></p>
            <div class="sheet__actions">
              <button class="btn btn--primary" type="button" data-testid="next-mission-button" data-ref="nextBtn">Next mission</button>
              <button class="btn" type="button" data-testid="replay-button">Replay</button>
              <button class="btn btn--ghost" type="button" data-testid="end-menu-button">Mission select</button>
            </div>
          </div>
        </div>

        <div class="overlay storage-block" data-testid="storage-error" role="alert" hidden>
          <div class="sheet">
            <p class="eyebrow">Saved data locked</p>
            <h2 class="sheet__title">Field notes unreadable</h2>
            <p class="sheet__sub" data-ref="storageMessage"></p>
            <p class="sheet__sub">
              Squad Surge will not deploy on guessed settings or scores. Resetting erases this
              browser's Squad Surge preferences and best scores, then starts a fresh record.
            </p>
            <div class="sheet__actions">
              <button class="btn btn--primary" type="button" data-testid="storage-reset-button" data-ref="storageReset">
                Reset saved data
              </button>
            </div>
          </div>
        </div>

        <div class="overlay fatal" data-testid="fatal-error" role="alert" hidden>
          <div class="sheet">
            <p class="eyebrow">Cannot start</p>
            <h2 class="sheet__title">Battlefield offline</h2>
            <p class="sheet__sub" data-ref="fatalMessage"></p>
          </div>
        </div>
      </div>
    </section>

    <aside class="rail rail--right" aria-label="Live readings and controls">
      <section class="card hud" data-testid="hud" aria-label="Live readings">
        <div class="hud__squad">
          <span class="eyebrow">Squad strength</span>
          <span class="hud__squadnum num" data-testid="hud-squad" data-ref="hudSquad">0</span>
          <span class="hud__cap num" data-ref="hudCap">/ 60</span>
        </div>
        <div class="weapon">
          <span class="eyebrow">Loadout</span>
          <strong class="weapon__name" data-testid="hud-weapon" data-ref="hudWeapon">—</strong>
          <span class="weapon__meta num" data-ref="hudWeaponMeta"></span>
        </div>
        <dl class="readings">
          <div><dt>Kills</dt><dd class="num" data-testid="hud-kills" data-ref="hudKills">0</dd></div>
          <div><dt>Score</dt><dd class="num" data-testid="hud-score" data-ref="hudScore">0</dd></div>
          <div><dt>Combo</dt><dd class="num" data-testid="hud-multiplier" data-ref="hudMult">×1</dd></div>
          <div><dt>Lane</dt><dd data-testid="hud-lane" data-ref="hudLane">Centre</dd></div>
        </dl>
        <div class="progress">
          <div class="progress__head">
            <span class="eyebrow" data-testid="hud-status" data-ref="hudStatus">Standing by</span>
            <span class="num"><span data-testid="hud-elapsed" data-ref="hudElapsed">0.0s</span> · <span data-testid="hud-progress" data-ref="hudProgress">0%</span></span>
          </div>
          <div class="progress__bar"><div class="progress__fill" data-ref="progressFill"></div></div>
          <p class="progress__wave" data-ref="hudWave"></p>
        </div>
        <div class="gates">
          <span class="eyebrow">Next gate row</span>
          <ul class="gates__list" data-testid="hud-gates" data-ref="hudGates"></ul>
        </div>
        <p class="sr-only" role="status" aria-live="polite" data-ref="liveRegion"></p>
      </section>

      <section class="card lanepad" aria-label="Lane controls">
        <button class="lanepad__arrow" type="button" data-testid="move-left" aria-label="Move left">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
        </button>
        <div class="lanepad__lanes" role="group" aria-label="Choose lane">
          <button class="lanepad__lane" type="button" data-testid="lane-button-0" data-lane="0" aria-pressed="false">Left</button>
          <button class="lanepad__lane" type="button" data-testid="lane-button-1" data-lane="1" aria-pressed="true">Centre</button>
          <button class="lanepad__lane" type="button" data-testid="lane-button-2" data-lane="2" aria-pressed="false">Right</button>
        </div>
        <button class="lanepad__arrow" type="button" data-testid="move-right" aria-label="Move right">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </section>

      <section class="card legend" aria-label="Controls">
        <span class="eyebrow">Field controls</span>
        <ul>
          <li><span><kbd>A</kbd><kbd>←</kbd></span> Lane left</li>
          <li><span><kbd>D</kbd><kbd>→</kbd></span> Lane right</li>
          <li><span><kbd>Space</kbd><kbd>P</kbd></span> Pause / resume</li>
          <li><span><kbd>Drag</kbd><kbd>Tap</kbd></span> Steer on the field</li>
        </ul>
        <p class="legend__note">Your squad fires on its own. Pick gates, dodge flankers, break the boss.</p>
      </section>
    </aside>
  </main>
</div>
`;

export function mountLayout(root: HTMLElement): Refs {
  root.innerHTML = TEMPLATE;
  return collectRefs(root);
}

const REF_NAMES = [
  "dossierNumber",
  "dossierDifficulty",
  "dossierName",
  "dossierBrief",
  "dossierTradeoff",
  "dossierIntel",
  "missions",
  "stage",
  "vhud",
  "trackFill",
  "trackTicks",
  "trackBoss",
  "stageScore",
  "stageMult",
  "stageSquad",
  "stageWeapon",
  "runNumber",
  "runDifficulty",
  "runName",
  "runSubtitle",
  "eventLog",
  "waveBanner",
  "telegraphs",
  "bossBar",
  "bossName",
  "bossFill",
  "pauseSub",
  "endEyebrow",
  "endTitle",
  "endSub",
  "endScore",
  "endKills",
  "endSquad",
  "endTime",
  "endBest",
  "nextBtn",
  "fatalMessage",
  "hudSquad",
  "hudCap",
  "hudWeapon",
  "hudWeaponMeta",
  "hudKills",
  "hudScore",
  "hudMult",
  "hudLane",
  "hudStatus",
  "hudElapsed",
  "hudProgress",
  "progressFill",
  "hudWave",
  "hudGates",
  "liveRegion",
  "storageMessage",
  "storageReset",
] as const;

export type RefName = (typeof REF_NAMES)[number];
export type Refs = Record<RefName, HTMLElement> & {
  page: HTMLElement;
  app: HTMLElement;
  canvas: HTMLCanvasElement;
  byTestId(id: string): HTMLElement;
};

function collectRefs(root: HTMLElement): Refs {
  const out: Partial<Record<RefName, HTMLElement>> = {};
  for (const name of REF_NAMES) {
    const el = root.querySelector<HTMLElement>(`[data-ref="${name}"]`);
    if (!el) throw new Error(`Layout is missing required element "${name}"`);
    out[name] = el;
  }
  const byTestId = (id: string): HTMLElement => {
    const el = root.querySelector<HTMLElement>(`[data-testid="${id}"]`);
    if (!el) throw new Error(`Layout is missing required element [data-testid="${id}"]`);
    return el;
  };
  return {
    ...(out as Record<RefName, HTMLElement>),
    page: root.querySelector<HTMLElement>(".page")!,
    app: byTestId("game-root"),
    canvas: byTestId("game-canvas") as HTMLCanvasElement,
    byTestId,
  };
}
