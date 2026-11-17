// Per-scenario world: owns one browser context + page, the device profile,
// browser-error capture, scenario variables
// and performance metrics. All interaction goes through the real UI; the only
// page.evaluate calls in this suite are read-only DOM/performance metrics.
import type { Browser, BrowserContext, Locator, Page, Request, TestInfo } from "@playwright/test";
import { expect } from "@playwright/test";

export interface DeviceProfile {
  name: string;
  viewport: { width: number; height: number };
  hasTouch: boolean;
  isMobile: boolean;
}

export const DEFAULT_DEVICE: DeviceProfile = {
  name: "desktop-1280",
  viewport: { width: 1280, height: 800 },
  hasTouch: false,
  isMobile: false,
};

export const LANE_NAMES = ["left", "center", "right"] as const;
export type LaneName = (typeof LANE_NAMES)[number];

/** Human control names used in Gherkin → data-testid in the UI contract. */
export const CONTROLS: Readonly<Record<string, string>> = {
  Deploy: "deploy-button",
  Pause: "pause-button",
  Resume: "resume-button",
  Restart: "restart-button",
  Menu: "menu-button",
  Replay: "replay-button",
  "Next mission": "next-mission-button",
  "Return to briefing": "end-menu-button",
  Sound: "sound-toggle",
  "Move left": "move-left",
  "Move right": "move-right",
  "Left lane": "lane-button-0",
  "Center lane": "lane-button-1",
  "Right lane": "lane-button-2",
};

export function baseUrl(): string {
  const url = process.env.BDD_BASE_URL;
  if (!url)
    throw new Error("BDD_BASE_URL missing: globalSetup did not start the isolated test server");
  return url;
}

export class World {
  readonly browser: Browser;
  readonly testInfo: TestInfo;
  readonly long: boolean;
  device: DeviceProfile = DEFAULT_DEVICE;
  private context: BrowserContext | null = null;
  private currentPage: Page | null = null;
  readonly errors: string[] = [];
  /** Requests issued by the page that have neither finished nor failed. */
  private readonly inFlight = new Set<Request>();
  readonly metrics: Record<string, number> = {};
  readonly vars = new Map<string, string>();

  constructor(browser: Browser, testInfo: TestInfo, tags: readonly string[]) {
    this.browser = browser;
    this.testInfo = testInfo;
    this.long = tags.includes("long");
  }

  get page(): Page {
    if (!this.currentPage)
      throw new Error("No page open yet: a Given/When must browse to the app first");
    return this.currentPage;
  }

  get hasPage(): boolean {
    return this.currentPage !== null;
  }

  async open(path = "/"): Promise<Page> {
    this.context ??= await this.browser.newContext({
      viewport: this.device.viewport,
      hasTouch: this.device.hasTouch,
      isMobile: this.device.isMobile,
      deviceScaleFactor: this.device.isMobile ? 2 : 1,
    });
    const page = await this.context.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") this.errors.push(`console.error: ${message.text()}`);
    });
    page.on("pageerror", (error) => this.errors.push(`pageerror: ${error.message}`));
    page.on("crash", () => this.errors.push("page crashed"));
    page.on("request", (request) => this.inFlight.add(request));
    page.on("requestfinished", (request) => this.inFlight.delete(request));
    page.on("requestfailed", (request) => {
      this.inFlight.delete(request);
      this.errors.push(`request failed: ${request.url()} ${request.failure()?.errorText ?? ""}`);
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        this.errors.push(`HTTP ${response.status()}: ${response.url()}`);
    });
    this.currentPage = page;
    await page.goto(new URL(path, baseUrl()).toString());
    return page;
  }

  /**
   * Reload the way a person does: after the page has finished loading. A
   * harness-initiated navigation must not abort the page's own in-flight
   * requests (e.g. the lazily fetched favicon under load) and then report that
   * abort as an app error. Every request still counts: one that never settles
   * fails here, and one that fails is a browser error.
   */
  async reload(): Promise<void> {
    await expect
      .poll(() => [...this.inFlight].map((request) => request.url()), {
        message: "page requests still in flight before reload",
        timeout: 15_000,
      })
      .toEqual([]);
    await this.page.reload();
  }

  byTestId(id: string): Locator {
    return this.page.getByTestId(id);
  }

  control(name: string): Locator {
    const id = CONTROLS[name];
    if (!id)
      throw new Error(`Unknown control "${name}"; known: ${Object.keys(CONTROLS).join(", ")}`);
    return this.byTestId(id);
  }

  root(): Locator {
    return this.byTestId("game-root");
  }

  async status(): Promise<string> {
    return (await this.root().getAttribute("data-status")) ?? "";
  }

  async elapsed(): Promise<number> {
    const raw = await this.root().getAttribute("data-elapsed");
    const value = Number(raw);
    if (raw === null || !Number.isFinite(value))
      throw new Error(`game-root data-elapsed is not numeric: ${String(raw)}`);
    return value;
  }

  async squad(): Promise<number> {
    const raw = await this.root().getAttribute("data-squad");
    const value = Number(raw);
    if (raw === null || !Number.isFinite(value))
      throw new Error(`game-root data-squad is not numeric: ${String(raw)}`);
    return value;
  }

  async lane(): Promise<number> {
    return Number(await this.root().getAttribute("data-lane"));
  }

  /** Real wall-clock time passing while the game runs. */
  async passTime(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  /**
   * Wait (read-only, polled each animation frame in the page) until the
   * mirrored simulation clock reaches `seconds` or the run stops running.
   */
  async waitForElapsed(seconds: number, timeoutMs: number): Promise<void> {
    await this.page.waitForFunction(
      (target: number) => {
        const root = document.querySelector<HTMLElement>('[data-testid="game-root"]');
        if (!root) return false;
        return root.dataset.status !== "running" || Number(root.dataset.elapsed) >= target;
      },
      seconds,
      { polling: "raf", timeout: timeoutMs },
    );
  }

  /** Wait (read-only) until the run leaves the given status. */
  async waitForStatusNot(status: string, timeoutMs: number): Promise<void> {
    await this.page.waitForFunction(
      (current: string) =>
        document.querySelector<HTMLElement>('[data-testid="game-root"]')?.dataset.status !==
        current,
      status,
      { polling: 500, timeout: timeoutMs },
    );
  }

  /**
   * Read-only failure snapshot: game-root attributes, fatal/storage panel
   * visibility and text, disabled primary controls, and every browser error.
   */
  async diagnostics(): Promise<string> {
    if (!this.currentPage || this.currentPage.isClosed())
      return `no page open; errors=${JSON.stringify(this.errors)}`;
    const dom = await this.currentPage
      .evaluate(() => {
        const q = (id: string): HTMLElement | null =>
          document.querySelector<HTMLElement>(`[data-testid="${id}"]`);
        const root = q("game-root");
        const panel = (id: string) => {
          const el = q(id);
          return el
            ? {
                hidden: el.hidden || getComputedStyle(el).display === "none",
                text: el.innerText.trim().slice(0, 400),
              }
            : null;
        };
        const controls = [
          "deploy-button",
          "pause-button",
          "resume-button",
          "replay-button",
          "next-mission-button",
          "sound-toggle",
        ].map((id) => {
          const el = q(id) as HTMLButtonElement | null;
          return el
            ? `${id}:${el.disabled ? "disabled" : "enabled"}${el.offsetParent ? "" : ",not-rendered"}`
            : `${id}:missing`;
        });
        return {
          url: location.href,
          rootAttributes: root
            ? Object.fromEntries([...root.attributes].map((a) => [a.name, a.value]))
            : null,
          fatalError: panel("fatal-error"),
          storageError: panel("storage-error"),
          controls,
          activeElement:
            document.activeElement?.getAttribute("data-testid") ??
            document.activeElement?.tagName ??
            null,
        };
      })
      .catch((error: unknown) => ({ evaluateFailed: String(error) }));
    return JSON.stringify({ device: this.device.name, dom, browserErrors: this.errors }, null, 2);
  }

  /** Full live DOM at the moment of failure (read-only), or null without a page. */
  async pageHtml(): Promise<string | null> {
    if (!this.currentPage || this.currentPage.isClosed()) return null;
    return this.currentPage.content().catch(() => null);
  }

  /** Why the app refuses to play, if it does (fatal or blocked storage), for failure messages. */
  async blockers(): Promise<string> {
    return this.diagnostics();
  }

  /** Fail at the first step after which the browser reported an error. */
  failOnBrowserErrors(): void {
    if (this.errors.length > 0) throw new Error(`Browser errors:\n${this.errors.join("\n")}`);
  }

  async assertNoBrowserErrors(): Promise<void> {
    expect(this.errors, "browser console/page/network errors").toEqual([]);
    if (this.currentPage) {
      await expect(this.byTestId("fatal-error"), "fatal error panel").toBeHidden();
    }
  }

  async close(): Promise<void> {
    if (Object.keys(this.metrics).length > 0) {
      await this.testInfo.attach("bdd-metrics", {
        body: JSON.stringify(this.metrics),
        contentType: "application/json",
      });
    }
    // Mandatory: navigate every page to about:blank before closing the context.
    // A live Web Audio context (after the Sound toggle / first gesture) can make
    // context.close() hang ~30 s otherwise. Browser errors were already asserted
    // by the scenario before teardown; errors raised while unloading are
    // recorded here (never silently dropped) but are not app gameplay errors.
    if (this.context) {
      for (const page of this.context.pages()) {
        if (page.isClosed()) continue;
        try {
          await page.goto("about:blank", { timeout: 10_000 });
        } catch (error) {
          console.log(`[bdd teardown] about:blank navigation failed: ${String(error)}`);
        }
      }
      await this.context.close();
      this.context = null;
      this.currentPage = null;
    }
  }
}
