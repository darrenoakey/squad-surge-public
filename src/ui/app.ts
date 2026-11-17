/**
 * Squad Surge app controller: owns the Simulation instance, the renderer, the
 * rAF loop and every DOM surface. All HUD numbers come straight from
 * `sim.state`; nothing is invented on the UI side.
 */

import {
  LEVELS,
  Simulation,
  getLevel,
  isLevelId,
  nextLevelId,
  SQUAD_Z,
  SCROLL_SPEED,
  type GameEvent,
  type GameState,
  type GameStatus,
  type Lane,
  type LevelId,
  type LevelSummary,
} from "../game/index";
import { createRenderer } from "../render/renderer";
import { SoundBoard } from "./audio";
import { bindKeyboard, bindStagePointer, type InputHandlers } from "./input";
import { mountLayout, type Refs } from "./layout";
import {
  StorageError,
  clearSavedData,
  loadBest,
  loadPrefs,
  recordBest,
  savePrefs,
  type BestScores,
  type Prefs,
} from "./storage";

type Renderer = ReturnType<typeof createRenderer>;

const LANE_NAMES = ["Left", "Centre", "Right"] as const;
const STATUS_TEXT: Record<GameStatus, string> = {
  ready: "Ready",
  running: "In action",
  paused: "Paused",
  won: "Mission complete",
  lost: "Squad lost",
};
const REASON_TEXT = {
  cleared: "Every hostile cleared and the road is yours.",
  wiped: "The last of the squad went down on the road.",
  overrun: "The boss broke through the squad line.",
  timeout: "The window closed before the road was clear.",
} as const;
const LOG_LIMIT = 6;
const LEVEL_IDS: readonly string[] = LEVELS.map((l) => l.id);

const pad2 = (n: number): string => String(n).padStart(2, "0");
const fmt = (n: number): string => Math.round(n).toLocaleString("en-US");

/** Writes text only when it changed, keeping per-frame DOM work tiny. */
function setText(el: HTMLElement, text: string): void {
  if (el.textContent !== text) el.textContent = text;
}

function setAttr(el: Element, name: string, value: string): void {
  if (el.getAttribute(name) !== value) el.setAttribute(name, value);
}

export class App {
  private readonly refs: Refs;
  private readonly sound: SoundBoard;
  private readonly reducedMotion: MediaQueryList;
  private renderer: Renderer | null = null;
  private sim: Simulation;
  private prefs: Prefs;
  private best: BestScores = {};
  /** Non-null while persisted data is unreadable/unwritable: every mutation is refused. */
  private storageBlock: string | null = null;
  private eventCursor = -1;
  private lastFrame = 0;
  private rafId = 0;
  private fatal = false;
  private lastStatus: GameStatus | null = null;
  private lastSquad = -1;
  private lastRunId = -1;
  private bannerTimer = 0;
  private bumpTimer = 0;
  private hitSoundAt = 0;
  private readonly missionButtons = new Map<LevelId, HTMLButtonElement>();
  private readonly laneButtons: HTMLButtonElement[];

  constructor(root: HTMLElement) {
    this.refs = mountLayout(root);
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const first = LEVELS[0];
    if (!first) throw new Error("No missions are defined.");

    // Only a genuinely absent record yields defaults (inside loadPrefs/loadBest).
    // Corrupt or unreachable storage blocks the app until the player resets it;
    // the preview below is unpersisted scenery, not a substitute saved state.
    let loadError: unknown = null;
    let prefs: Prefs | null = null;
    try {
      prefs = loadPrefs(LEVEL_IDS);
      this.best = loadBest(LEVEL_IDS);
    } catch (err) {
      loadError = err;
      prefs = null;
      this.best = {};
    }
    this.prefs = prefs ?? { muted: true, levelId: null };
    this.sound = new SoundBoard(this.prefs.muted);

    const saved = this.prefs.levelId;
    const startId: LevelId = saved !== null && isLevelId(saved) ? saved : first.id;
    this.sim = new Simulation(startId);

    this.laneButtons = [0, 1, 2].map(
      (i) => this.refs.byTestId(`lane-button-${i}`) as HTMLButtonElement,
    );
    this.buildMissionCards();
    this.bindControls();
    this.applySoundUi();
    this.applyArt();
    this.showLevel(this.sim.level);
    if (loadError !== null) this.blockStorage(loadError);
    this.startRenderer();
  }

  // ---------------------------------------------------------------- setup --

  private startRenderer(): void {
    const canvas = this.refs.canvas;
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      this.fail("The graphics context was lost. Reload the page to redeploy.");
    });
    try {
      this.renderer = createRenderer(canvas, { reducedMotion: this.reducedMotion.matches });
      this.renderer.setLevel(this.sim.state.levelId);
    } catch (err) {
      this.fail(
        `WebGL could not start: ${err instanceof Error ? err.message : String(err)}. ` +
          "Squad Surge needs a browser with hardware-accelerated WebGL.",
      );
      return;
    }
    const resize = (): void => {
      const rect = this.refs.stage.getBoundingClientRect();
      const style = getComputedStyle(this.refs.stage);
      const bx = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      const by = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      this.renderer?.resize(Math.max(1, rect.width - bx), Math.max(1, rect.height - by));
    };
    new ResizeObserver(resize).observe(this.refs.stage);
    resize();
    this.rafId = requestAnimationFrame(this.frame);
  }

  private applyArt(): void {
    // The decorative menu art is a served asset; the single-file portable build
    // must stay self-contained, so it plays on plain paper there.
    if (import.meta.env.MODE === "portable") return;
    const art = this.refs.page.querySelector<HTMLElement>(".page__art");
    if (!art) return;
    const url = `${import.meta.env.BASE_URL}art/key-art-menu.jpg`;
    const probe = new Image();
    probe.onload = () => {
      art.style.backgroundImage = `url("${url}")`;
      art.classList.add("has-art");
    };
    probe.src = url;
  }

  private buildMissionCards(): void {
    const host = this.refs.missions;
    host.replaceChildren();
    for (const level of LEVELS) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mission";
      btn.dataset.testid = "mission-card";
      btn.dataset.missionId = level.id;
      btn.style.setProperty("--mission-accent", level.accent);
      btn.setAttribute("aria-pressed", "false");
      btn.innerHTML = `
        <span class="mission__no num" aria-hidden="true">${pad2(level.index + 1)}</span>
        <span class="mission__body">
          <span class="mission__name" data-testid="mission-name"></span>
          <span class="mission__tradeoff" data-testid="mission-tradeoff"></span>
        </span>
        <span class="mission__meta">
          <span class="pips" aria-hidden="true">${[1, 2, 3]
            .map((d) => `<i class="${d <= level.difficulty ? "on" : ""}"></i>`)
            .join("")}</span>
          <span class="mission__best" data-testid="mission-best" data-ref-best></span>
        </span>`;
      btn.querySelector<HTMLElement>(".mission__name")!.textContent = level.name;
      btn.querySelector<HTMLElement>(".mission__tradeoff")!.textContent = level.subtitle;
      btn.setAttribute(
        "aria-label",
        `Mission ${level.index + 1}: ${level.name}, ${level.difficultyLabel}. ${level.tradeoff}`,
      );
      btn.addEventListener("click", () => {
        this.sound.unlock();
        this.selectMission(level.id);
      });
      host.append(btn);
      this.missionButtons.set(level.id, btn);
    }
    this.refreshBestLabels();
  }

  private refreshBestLabels(): void {
    for (const [id, btn] of this.missionButtons) {
      const rec = this.best[id];
      const el = btn.querySelector<HTMLElement>("[data-ref-best]");
      if (!el) continue;
      if (this.storageBlock !== null) el.textContent = "Record locked";
      else el.textContent = rec ? `${rec.won ? "★ " : ""}Best ${fmt(rec.score)}` : "Unplayed";
    }
  }

  private bindControls(): void {
    const r = this.refs;
    const on = (testId: string, fn: () => void): void => {
      r.byTestId(testId).addEventListener("click", () => {
        this.sound.unlock();
        fn();
      });
    };
    on("deploy-button", () => this.deploy());
    on("pause-button", () => this.togglePause());
    on("resume-button", () => this.togglePause());
    on("restart-button", () => this.restart());
    on("menu-button", () => this.toMenu());
    on("replay-button", () => this.restart());
    on("next-mission-button", () => this.nextMission());
    on("end-menu-button", () => this.toMenu());
    on("sound-toggle", () => this.toggleSound());
    // Steering buttons act on pointerdown: instant response on touch screens
    // (no synthesized-click delay or lost taps). Keyboard/assistive activation
    // arrives as a click with detail 0 and is handled there instead.
    const steer = (el: HTMLElement, fn: () => void): void => {
      el.addEventListener("pointerdown", (e) => {
        if (!e.isPrimary || e.button !== 0) return;
        e.preventDefault();
        this.sound.unlock();
        fn();
      });
      el.addEventListener("click", (e) => {
        if (e.detail !== 0) return;
        this.sound.unlock();
        fn();
      });
    };
    steer(r.byTestId("move-left"), () => this.sim.move(-1));
    steer(r.byTestId("move-right"), () => this.sim.move(1));
    this.laneButtons.forEach((btn, i) => {
      steer(btn, () => this.sim.setLane(i as Lane));
    });
    r.storageReset.addEventListener("click", () => this.resetSavedData());

    const handlers: InputHandlers = {
      move: (d) => this.sim.move(d),
      setLane: (lane) => this.sim.setLane(lane),
      togglePause: () => this.togglePause(),
      confirm: () => {
        const s = this.sim.state.status;
        if (s === "ready") this.deploy();
        else if (s === "won" || s === "lost") this.restart();
      },
      canSteer: () => this.sim.state.status === "running",
      gesture: () => this.sound.unlock(),
    };
    bindKeyboard(handlers);
    bindStagePointer(r.stage, handlers);
    r.stage.addEventListener("pointerdown", (e) => {
      if (this.sim.state.status === "running" && e.target === r.canvas) {
        r.stage.classList.add("is-touching");
      }
    });
    const release = (): void => r.stage.classList.remove("is-touching");
    r.stage.addEventListener("pointerup", release);
    r.stage.addEventListener("pointercancel", release);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.sim.state.status === "running") {
        this.sim.pause();
        this.syncFrameUi(this.sim.state);
      }
    });
  }

  // -------------------------------------------------------------- actions --

  private selectMission(id: LevelId): void {
    const status = this.sim.state.status;
    if (this.storageBlock !== null || status === "running" || status === "paused") return;
    if (id === this.sim.state.levelId && this.prefs.levelId === id) return;
    // Durable write first; only a successful save changes what the app shows.
    if (!this.persistPrefs({ ...this.prefs, levelId: id })) return;
    if (id !== this.sim.state.levelId) {
      this.replaceSim(id);
      this.sound.play("ui");
    }
  }

  private replaceSim(id: LevelId): void {
    this.sim = new Simulation(id);
    this.eventCursor = -1;
    this.renderer?.setLevel(id);
    this.showLevel(this.sim.level);
  }

  /** Whether a new run may begin: never with a fatal error or locked saved data. */
  private canPlay(): boolean {
    return !this.fatal && this.storageBlock === null;
  }

  private deploy(): void {
    if (!this.canPlay() || this.sim.state.status !== "ready") return;
    this.sim.start();
    this.sound.play("ui");
    this.refs.stage.focus({ preventScroll: true });
    this.syncFrameUi(this.sim.state);
  }

  private togglePause(): void {
    const s = this.sim.state.status;
    if (s === "running") this.sim.pause();
    else if (s === "paused" && this.canPlay()) this.sim.resume();
    else return;
    this.syncFrameUi(this.sim.state);
    if (this.sim.state.status === "paused") {
      this.refs.byTestId("resume-button").focus({ preventScroll: true });
    } else {
      this.refs.stage.focus({ preventScroll: true });
    }
  }

  private restart(): void {
    if (!this.canPlay()) return;
    this.sim.restart();
    this.refs.stage.focus({ preventScroll: true });
    this.syncFrameUi(this.sim.state);
  }

  private toMenu(): void {
    this.sim.reset();
    this.syncFrameUi(this.sim.state);
    this.refs.byTestId("deploy-button").focus({ preventScroll: true });
  }

  private nextMission(): void {
    if (!this.canPlay()) return;
    const next = nextLevelId(this.sim.state.levelId);
    if (!next) {
      this.toMenu();
      return;
    }
    if (!this.persistPrefs({ ...this.prefs, levelId: next })) return;
    this.replaceSim(next);
    this.sim.start();
    this.refs.stage.focus({ preventScroll: true });
    this.syncFrameUi(this.sim.state);
  }

  private toggleSound(): void {
    if (this.storageBlock !== null) return;
    const muted = !this.prefs.muted;
    if (!this.persistPrefs({ ...this.prefs, muted })) return;
    this.sound.setMuted(muted);
    this.applySoundUi();
    if (!muted) this.sound.play("ui");
  }

  private applySoundUi(): void {
    const btn = this.refs.byTestId("sound-toggle") as HTMLButtonElement;
    const on = !this.sound.isMuted;
    setAttr(btn, "aria-pressed", String(on));
    setAttr(btn, "aria-label", on ? "Sound on — press to mute" : "Sound off — press to unmute");
    setAttr(this.refs.app, "data-muted", String(!on));
    btn.disabled = this.storageBlock !== null;
  }

  // -------------------------------------------------------------- storage --

  /**
   * Saves preferences durably, then commits them in memory. Returns false (and
   * locks the app) when the write fails; in-memory state is left untouched so
   * it never diverges from what the browser actually holds.
   */
  private persistPrefs(next: Prefs): boolean {
    if (this.storageBlock !== null) return false;
    try {
      savePrefs(next);
    } catch (err) {
      this.blockStorage(err);
      return false;
    }
    this.prefs = next;
    return true;
  }

  /** Fail closed: halt play, refuse mutations, and require an explicit reset. */
  private blockStorage(err: unknown): void {
    const msg =
      err instanceof StorageError
        ? err.message
        : `Unexpected storage failure: ${err instanceof Error ? err.message : String(err)}`;
    this.storageBlock = msg;
    console.error("[squad-surge] storage", err);
    if (this.sim.state.status === "running") this.sim.pause();
    setText(this.refs.storageMessage, msg);
    this.refs.byTestId("storage-error").hidden = false;
    setAttr(this.refs.app, "data-storage", "blocked");
    this.sound.setMuted(true);
    this.applySoundUi();
    this.refreshBestLabels();
    this.applyLockState();
    this.refs.storageReset.focus({ preventScroll: true });
  }

  /**
   * Explicit, user-initiated recovery: wipe Squad Surge's keys, write a fresh
   * default record, and read it back. Only a verified round-trip unlocks play.
   */
  private resetSavedData(): void {
    try {
      clearSavedData();
      const fresh: Prefs = { muted: false, levelId: this.sim.state.levelId };
      savePrefs(fresh);
      const verified = loadPrefs(LEVEL_IDS);
      const best = loadBest(LEVEL_IDS);
      if (verified.muted !== fresh.muted || verified.levelId !== fresh.levelId) {
        throw new StorageError("Saved preferences did not read back as written.");
      }
      this.prefs = verified;
      this.best = best;
    } catch (err) {
      this.storageBlock = null; // re-enter blocked state with the new message
      this.blockStorage(err);
      return;
    }
    this.storageBlock = null;
    this.refs.byTestId("storage-error").hidden = true;
    this.refs.app.removeAttribute("data-storage");
    this.sound.setMuted(this.prefs.muted);
    this.applySoundUi();
    this.refreshBestLabels();
    this.applyLockState();
    this.toMenu();
  }

  /** Enables/disables controls that would start play or write saved data. */
  private applyLockState(): void {
    const s = this.sim.state.status;
    const locked = !this.canPlay();
    for (const btn of this.missionButtons.values()) {
      btn.disabled = locked || s === "running" || s === "paused";
    }
    for (const id of [
      "deploy-button",
      "replay-button",
      "next-mission-button",
      "restart-button",
      "resume-button",
    ]) {
      (this.refs.byTestId(id) as HTMLButtonElement).disabled = locked;
    }
    const steering = !locked && s === "running";
    for (const btn of [
      ...this.laneButtons,
      this.refs.byTestId("move-left"),
      this.refs.byTestId("move-right"),
    ]) {
      (btn as HTMLButtonElement).disabled = !steering;
    }
  }

  // ----------------------------------------------------------------- loop --

  private readonly frame = (ts: number): void => {
    if (this.fatal) return;
    this.rafId = requestAnimationFrame(this.frame);
    const dt = this.lastFrame === 0 ? 0 : Math.min(0.25, Math.max(0, (ts - this.lastFrame) / 1000));
    this.lastFrame = ts;
    try {
      this.sim.update(dt);
      const state = this.sim.state;
      this.consumeEvents(state);
      this.renderer?.render(state, dt);
      this.syncFrameUi(state);
    } catch (err) {
      console.error("[squad-surge] frame", err);
      this.fail(`The battlefield crashed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  private fail(message: string): void {
    this.fatal = true;
    cancelAnimationFrame(this.rafId);
    setText(this.refs.fatalMessage, message);
    this.refs.byTestId("fatal-error").hidden = false;
    setAttr(this.refs.app, "data-fatal", "true");
    this.applyLockState();
    console.error("[squad-surge]", message);
  }

  private consumeEvents(state: GameState): void {
    for (const e of state.events) {
      if (e.id <= this.eventCursor) continue;
      this.eventCursor = e.id;
      this.onEvent(e, state);
    }
  }

  private onEvent(e: GameEvent, state: GameState): void {
    switch (e.type) {
      case "volley":
        this.sound.play("fire");
        break;
      case "hit":
        if (e.time - this.hitSoundAt > 0.07) {
          this.hitSoundAt = e.time;
          this.sound.play("hit");
        }
        break;
      case "kill":
        this.sound.play("kill");
        break;
      case "squadLoss":
        this.sound.play("hurt");
        if (e.amount >= 3)
          this.log(e.time, `Lost ${e.amount} to ${e.cause === "gate" ? "a gate" : `a ${e.cause}`}`);
        break;
      case "gate": {
        this.sound.play(e.tone === "bad" ? "gateBad" : "gateGood");
        const delta = e.after - e.before;
        const squadNote = delta === 0 ? "" : ` · squad ${delta > 0 ? "+" : "−"}${Math.abs(delta)}`;
        this.log(e.time, `Took ${e.label}${squadNote}`);
        this.announce(`Gate ${e.label}. Squad ${e.after}.`);
        break;
      }
      case "wave":
        this.banner(e.name, false);
        this.addTick(state.progress);
        this.log(e.time, e.name);
        break;
      case "bossSpawn":
        this.banner(`${e.name} inbound`, true);
        this.log(e.time, `${e.name} sighted`);
        this.announce(`Boss ${e.name} inbound.`);
        break;
      case "bossEnrage":
        this.banner("Boss enraged!", true);
        break;
      case "bossDefeated":
        this.sound.play("win");
        this.log(e.time, "Boss down");
        break;
      case "won":
        this.sound.play("win");
        break;
      case "lost":
        this.sound.play("lose");
        break;
      default:
        break;
    }
  }

  // ------------------------------------------------------------------ UI --

  private showLevel(level: LevelSummary): void {
    const r = this.refs;
    const num = `Mission ${pad2(level.index + 1)}`;
    setText(r.dossierNumber, num);
    setText(r.dossierDifficulty, level.difficultyLabel);
    setText(r.dossierName, level.name);
    setText(r.dossierBrief, level.subtitle);
    setText(r.dossierTradeoff, level.tradeoff);
    r.dossierIntel.replaceChildren(
      ...level.briefing.map((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        return li;
      }),
    );
    setText(r.runNumber, num);
    setText(r.runDifficulty, level.difficultyLabel);
    setText(r.runName, level.name);
    setText(r.runSubtitle, level.subtitle);
    r.app.style.setProperty("--accent", level.accent);
    r.trackBoss.classList.toggle("is-none", level.bossName === null);
    r.trackBoss.title = level.bossName ?? "Extraction";
    for (const [id, btn] of this.missionButtons) {
      setAttr(btn, "aria-pressed", String(id === level.id));
    }
    setText(r.hudCap, `/ ${this.sim.state.squadCap}`);
  }

  private onRunStart(): void {
    this.refs.eventLog.replaceChildren();
    this.refs.trackTicks.replaceChildren();
    this.refs.waveBanner.classList.remove("is-on");
  }

  private syncFrameUi(state: GameState): void {
    const r = this.refs;
    if (state.runId !== this.lastRunId) {
      this.lastRunId = state.runId;
      this.onRunStart();
    }
    const statusChanged = state.status !== this.lastStatus;
    if (statusChanged) this.onStatus(state);

    setAttr(r.app, "data-level-id", state.levelId);
    setAttr(r.app, "data-lane", String(state.lane));
    setAttr(r.app, "data-elapsed", state.elapsed.toFixed(1));
    setAttr(r.app, "data-squad", String(state.squad));

    // Squad: huge numeral + viewport chip, with a bump on change.
    const squadText = String(state.squad);
    setText(r.hudSquad, squadText);
    setText(r.stageSquad, squadText);
    if (this.lastSquad >= 0 && state.squad !== this.lastSquad && state.status === "running") {
      const up = state.squad > this.lastSquad;
      r.hudSquad.classList.toggle("bump-up", up);
      r.hudSquad.classList.toggle("bump-down", !up);
      window.clearTimeout(this.bumpTimer);
      this.bumpTimer = window.setTimeout(() => {
        r.hudSquad.classList.remove("bump-up", "bump-down");
      }, 220);
    }
    this.lastSquad = state.squad;

    setText(r.hudWeapon, state.weapon.name);
    setText(r.stageWeapon, state.weapon.name);
    setText(
      r.hudWeaponMeta,
      `${state.weapon.fireRate.toFixed(1)} volleys/s · ${fmt(state.weapon.dps)} dps`,
    );
    setText(r.hudKills, fmt(state.kills));
    const score = fmt(state.score);
    setText(r.hudScore, score);
    setText(r.stageScore, score);
    const mult = `×${state.multiplier}`;
    setText(r.hudMult, mult);
    setText(r.stageMult, mult);
    r.stageMult.classList.toggle("is-on", state.multiplier > 1);
    setText(r.hudLane, LANE_NAMES[state.lane]);
    setText(r.hudElapsed, `${state.elapsed.toFixed(1)}s / ${Math.round(state.duration)}s`);
    const pct = `${Math.round(state.progress * 100)}%`;
    setText(r.hudProgress, pct);
    const width = `${(state.progress * 100).toFixed(2)}%`;
    if (r.progressFill.style.width !== width) {
      r.progressFill.style.width = width;
      r.trackFill.style.width = width;
    }
    const waveText =
      state.wave.index >= 0
        ? `Wave ${state.wave.index + 1} of ${state.wave.total} · ${state.wave.name}`
        : `${state.wave.total} waves on the road`;
    setText(r.hudWave, waveText);

    this.laneButtons.forEach((btn, i) => {
      setAttr(btn, "aria-pressed", String(i === state.lane));
    });

    this.syncGates(state);
    this.syncTelegraphs(state);
    this.syncBoss(state);
  }

  private onStatus(state: GameState): void {
    const r = this.refs;
    const prev = this.lastStatus;
    this.lastStatus = state.status;
    const s = state.status;
    setAttr(r.app, "data-status", s);
    setAttr(r.page, "data-screen", s === "ready" ? "menu" : "play");
    setText(r.hudStatus, STATUS_TEXT[s]);

    const pauseBtn = r.byTestId("pause-button");
    setAttr(pauseBtn, "aria-pressed", String(s === "paused"));
    setAttr(pauseBtn, "aria-label", s === "paused" ? "Resume" : "Pause");
    r.byTestId("pause-overlay").hidden = s !== "paused";
    if (s === "paused") {
      setText(
        r.pauseSub,
        `${this.sim.level.name} · ${state.elapsed.toFixed(1)}s in · squad ${state.squad}. Nothing moves until you resume.`,
      );
    }

    this.applyLockState();

    const ended = s === "won" || s === "lost";
    const end = r.byTestId("end-screen");
    end.hidden = !ended;
    if (ended) this.showEnd(state);
    else end.removeAttribute("data-outcome");

    if (prev !== null) this.announce(STATUS_TEXT[s]);
  }

  private showEnd(state: GameState): void {
    const r = this.refs;
    const outcome = state.outcome;
    const won = state.status === "won";
    const level = this.sim.level;
    const score = outcome?.score ?? state.score;
    const survivors = outcome?.survivors ?? state.squad;
    const elapsed = outcome?.elapsed ?? state.elapsed;
    setAttr(r.byTestId("end-screen"), "data-outcome", won ? "won" : "lost");
    setText(r.endEyebrow, `Mission ${pad2(level.index + 1)} · ${level.name}`);
    setText(r.endTitle, won ? "Coast held" : "Squad lost");
    setText(r.endSub, outcome ? REASON_TEXT[outcome.reason] : "");
    setText(r.endScore, fmt(score));
    setText(r.endKills, fmt(state.kills));
    setText(r.endSquad, String(survivors));
    setText(r.endTime, `${elapsed.toFixed(1)}s`);

    let bestText: string;
    let isNew = false;
    if (this.storageBlock !== null) {
      bestText = "Best score not saved — saved data is locked";
    } else {
      try {
        const next = recordBest(this.best, level.id, {
          score: Math.max(0, Math.round(score)),
          kills: state.kills,
          squad: survivors,
          won,
        });
        if (next) {
          this.best = next;
          isNew = true;
        }
        const rec = this.best[level.id];
        bestText = isNew
          ? `New personal best · ${fmt(score)}`
          : `Personal best · ${fmt(rec?.score ?? 0)}`;
      } catch (err) {
        this.blockStorage(err);
        bestText = "Best score not saved — saved data is locked";
      }
    }
    setText(r.endBest, bestText);
    r.endBest.classList.toggle("is-new", isNew);
    this.refreshBestLabels();

    const next = nextLevelId(level.id);
    setText(r.nextBtn, next ? `Next · ${getLevel(next).name}` : "Mission select");
    // Primary action: advance after a win, retry after a loss.
    const primary = won ? r.nextBtn : r.byTestId("replay-button");
    r.nextBtn.classList.toggle("btn--primary", won);
    r.byTestId("replay-button").classList.toggle("btn--primary", !won);
    primary.focus({ preventScroll: true });
  }

  private syncGates(state: GameState): void {
    const list = this.refs.hudGates;
    let nearestRow = -1;
    let nearestZ = -Infinity;
    for (const g of state.gates) {
      if (g.z < SQUAD_Z && g.z > nearestZ) {
        nearestZ = g.z;
        nearestRow = g.rowId;
      }
    }
    const key =
      nearestRow < 0
        ? "none"
        : `${nearestRow}|${state.lane}|${state.gates
            .filter((g) => g.rowId === nearestRow)
            .map((g) => `${g.lane}:${g.label}:${g.tone}`)
            .join(",")}`;
    if (list.dataset.key !== key) {
      list.dataset.key = key;
      if (nearestRow < 0) {
        const li = document.createElement("li");
        li.className = "gates__empty";
        li.textContent =
          state.status === "running" ? "No gates on the road" : "Gates appear once deployed";
        list.replaceChildren(li);
      } else {
        const row = state.gates
          .filter((g) => g.rowId === nearestRow)
          .sort((a, b) => a.lane - b.lane);
        list.replaceChildren(
          ...row.map((g) => {
            const li = document.createElement("li");
            li.className = `gate-chip gate-chip--${g.tone}${g.lane === state.lane ? " is-mine" : ""}`;
            li.dataset.testid = "gate-choice";
            li.dataset.lane = String(g.lane);
            const strong = document.createElement("strong");
            strong.textContent = g.label;
            const small = document.createElement("small");
            small.textContent = g.detail || LANE_NAMES[g.lane];
            li.append(strong, small);
            li.setAttribute(
              "aria-label",
              `${LANE_NAMES[g.lane]} lane gate ${g.label}${g.detail ? `, ${g.detail}` : ""}`,
            );
            return li;
          }),
        );
      }
    }
    const eta =
      nearestRow < 0 ? "" : `${Math.max(0, (SQUAD_Z - nearestZ) / SCROLL_SPEED).toFixed(1)}s`;
    setAttr(list, "data-eta", eta);
  }

  private syncTelegraphs(state: GameState): void {
    const host = this.refs.telegraphs;
    const key = state.telegraphs.map((t) => t.id).join(",");
    if (host.dataset.key === key) return;
    host.dataset.key = key;
    host.replaceChildren(
      ...state.telegraphs.slice(0, 3).map((t) => {
        const el = document.createElement("span");
        const dir = t.side !== 0 ? t.side : t.lane - 1;
        const side = dir < 0 ? "left" : dir > 0 ? "right" : "center";
        el.className = `warn warn--${side}`;
        const what = t.kind === "flank" ? "Flank" : t.kind === "rush" ? "Rush" : "Slam";
        el.textContent =
          t.kind === "flank"
            ? `${t.side < 0 ? "◀ " : ""}${what}${t.side > 0 ? " ▶" : ""}`
            : `${what} · ${LANE_NAMES[t.lane]}`;
        return el;
      }),
    );
  }

  private syncBoss(state: GameState): void {
    const r = this.refs;
    const boss = state.boss;
    const show =
      boss !== null &&
      boss.phase !== "dead" &&
      (state.status === "running" || state.status === "paused");
    if (r.bossBar.hidden === show) r.bossBar.hidden = !show;
    if (!boss || !show) return;
    setText(r.bossName, boss.name);
    const w = `${Math.max(0, (boss.hp / boss.maxHp) * 100).toFixed(1)}%`;
    if (r.bossFill.style.width !== w) r.bossFill.style.width = w;
    r.bossBar.classList.toggle("is-enraged", boss.phase === "enraged");
  }

  private banner(text: string, boss: boolean): void {
    const el = this.refs.waveBanner;
    el.textContent = text;
    el.classList.toggle("is-boss", boss);
    el.classList.add("is-on");
    window.clearTimeout(this.bannerTimer);
    this.bannerTimer = window.setTimeout(() => el.classList.remove("is-on"), 2200);
  }

  private addTick(progress: number): void {
    if (progress <= 0.01) return;
    const i = document.createElement("i");
    i.style.left = `${(progress * 100).toFixed(2)}%`;
    this.refs.trackTicks.append(i);
  }

  private log(time: number, text: string): void {
    const li = document.createElement("li");
    const t = document.createElement("time");
    t.textContent = `${time.toFixed(0)}s`;
    const span = document.createElement("span");
    span.textContent = text;
    li.append(t, span);
    const list = this.refs.eventLog;
    list.prepend(li);
    while (list.children.length > LOG_LIMIT) list.lastElementChild?.remove();
  }

  private announce(text: string): void {
    setText(this.refs.liveRegion, text);
  }
}
