// Devices, responsive layout, screenshots, keyboard focus and rendering performance.
import { expect } from "@playwright/test";
import { defineStep } from "../support/registry";
import { CONTROLS, type World } from "../support/world";
import { expectRunning } from "../support/flows";

defineStep(/I am using a (\d+)x(\d+) touch phone/, (world, width = "390", height = "844") => {
  if (world.hasPage) throw new Error("device must be chosen before the page opens");
  world.device = {
    name: `phone-${width}`,
    viewport: { width: Number(width), height: Number(height) },
    hasTouch: true,
    isMobile: true,
  };
});

defineStep(/I am using a (\d+)x(\d+) desktop/, (world, width = "1440", height = "900") => {
  if (world.hasPage) throw new Error("device must be chosen before the page opens");
  world.device = {
    name: `desktop-${width}`,
    viewport: { width: Number(width), height: Number(height) },
    hasTouch: false,
    isMobile: false,
  };
});

defineStep(/the page has no horizontal overflow/, async (world) => {
  // Read-only layout metrics.
  const overflow = await world.page.evaluate(() => {
    const width = document.documentElement.clientWidth;
    const offenders: string[] = [];
    for (const element of Array.from(document.body.querySelectorAll<HTMLElement>("*"))) {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      if (rect.width === 0 || style.visibility === "hidden" || style.display === "none") continue;
      if (rect.right > width + 1 || rect.left < -1) {
        offenders.push(
          `${element.tagName.toLowerCase()}[${element.dataset.testid ?? element.className}] ${Math.round(rect.left)}..${Math.round(rect.right)}`,
        );
      }
    }
    return {
      scrollWidth: document.documentElement.scrollWidth,
      width,
      offenders: offenders.slice(0, 10),
    };
  });
  expect(
    overflow.scrollWidth,
    `document scrollWidth vs viewport; offenders: ${overflow.offenders.join(", ")}`,
  ).toBeLessThanOrEqual(overflow.width);
  expect(overflow.offenders, "elements extending past the viewport").toEqual([]);
});

defineStep(/every visible control is at least (\d+) px/, async (world, minimum = "44") => {
  const min = Number(minimum);
  const small: string[] = [];
  for (const control of await world.page
    .locator("button:visible, a[href]:visible, [role='button']:visible")
    .all()) {
    const box = await control.boundingBox();
    if (!box) continue;
    if (box.width < min || box.height < min) {
      const label =
        (await control.getAttribute("data-testid")) ?? (await control.innerText()).slice(0, 30);
      small.push(`${label} ${Math.round(box.width)}x${Math.round(box.height)}`);
    }
  }
  expect(small, `controls smaller than ${min}px`).toEqual([]);
});

async function captureScreenshot(world: World, name: string): Promise<void> {
  const path = world.testInfo.outputPath(`${name}.png`);
  await world.page.screenshot({ path, fullPage: false });
  await world.testInfo.attach(`screenshot:${name}`, { path, contentType: "image/png" });
}

defineStep(/I capture the screenshot "([^"]+)"/, async (world, name = "") => {
  await captureScreenshot(world, name);
});

defineStep(
  /I capture the screenshot "([^"]+)" after (\d+) seconds of play/,
  async (world, name = "", seconds = "0") => {
    await world.passTime(Number(seconds) * 1000);
    await expectRunning(world);
    await captureScreenshot(world, name);
  },
);

// ----------------------------------------------------------- keyboard a11y ----

interface FocusSample {
  testid: string;
  tag: string;
  indicator: boolean;
}

async function focusSample(world: World): Promise<FocusSample> {
  // Read-only: what is focused and does it paint a focus indicator.
  return world.page.evaluate(() => {
    const element = document.activeElement as HTMLElement | null;
    if (!element || element === document.body) return { testid: "", tag: "body", indicator: false };
    const style = getComputedStyle(element);
    const outline = style.outlineStyle !== "none" && parseFloat(style.outlineWidth) >= 1;
    const ring = style.boxShadow !== "none" && style.boxShadow !== "";
    return {
      testid: element.dataset.testid ?? "",
      tag: element.tagName.toLowerCase(),
      indicator: outline || ring,
    };
  });
}

defineStep(/I tab through the page/, async (world) => {
  const samples: FocusSample[] = [];
  for (let i = 0; i < 40; i += 1) {
    await world.page.keyboard.press("Tab");
    const sample = await focusSample(world);
    if (
      samples.length > 0 &&
      sample.testid !== "" &&
      sample.testid === samples[0]?.testid &&
      sample.tag === samples[0]?.tag
    )
      break;
    samples.push(sample);
  }
  world.vars.set("focus-samples", JSON.stringify(samples));
});

function samplesOf(world: World): FocusSample[] {
  return JSON.parse(world.vars.get("focus-samples") ?? "[]") as FocusSample[];
}

defineStep(
  /focus reached every mission, "([^"]+)" and "([^"]+)"/,
  (world, first = "", second = "") => {
    const samples = samplesOf(world);
    const ids = samples.map((sample) => sample.testid);
    expect(
      samples.filter((sample) => sample.testid === "mission-card"),
      "mission cards reached by Tab",
    ).toHaveLength(3);
    for (const name of [first, second])
      expect(ids, `${name} reached by Tab`).toContain(CONTROLS[name]);
  },
);

defineStep(/every focused control showed a visible focus indicator/, (world) => {
  const missing = samplesOf(world)
    .filter((sample) => sample.tag !== "body" && !sample.indicator)
    .map((sample) => `${sample.tag}[${sample.testid}]`);
  expect(missing, "focused controls without a visible outline/ring").toEqual([]);
});

defineStep(/I tab to "([^"]+)" and press "([^"]+)"/, async (world, name = "", key = "") => {
  const target = CONTROLS[name];
  for (let i = 0; i < 40; i += 1) {
    await world.page.keyboard.press("Tab");
    if ((await focusSample(world)).testid === target) {
      await world.page.keyboard.press(key);
      return;
    }
  }
  throw new Error(`${name} never received keyboard focus`);
});

// ------------------------------------------------------------ performance ----

interface FrameStats {
  fps: number;
  worstFrameMs: number;
  longTasks: number;
  longestTaskMs: number;
  heapMb: number;
}

// Read-only observation: counts animation frames and long tasks; never touches app state.
async function measureFrames(page: World["page"], durationMs: number): Promise<FrameStats> {
  return page.evaluate(async (duration: number) => {
    let longest = 0;
    let longTasks = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        longTasks += 1;
        longest = Math.max(longest, entry.duration);
      }
    });
    observer.observe({ type: "longtask", buffered: false });
    const frames: number[] = [];
    await new Promise<void>((resolve) => {
      const start = performance.now();
      const tick = (now: number): void => {
        frames.push(now);
        if (now - start < duration) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });
    observer.disconnect();
    const gaps = frames.slice(1).map((time, index) => time - (frames[index] ?? time));
    const span = (frames.at(-1) ?? 0) - (frames[0] ?? 0);
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
    return {
      fps: span > 0 ? ((frames.length - 1) * 1000) / span : 0,
      worstFrameMs: Math.max(0, ...gaps),
      longTasks,
      longestTaskMs: longest,
      heapMb: memory ? memory.usedJSHeapSize / 1048576 : -1,
    };
  }, durationMs);
}

/** Same-browser, same-moment baseline: a page that only clears a full-size WebGL canvas each frame. */
async function measureBaseline(world: World, durationMs: number): Promise<number> {
  const page = await world.page.context().newPage();
  try {
    const { width, height } = world.device.viewport;
    await page.setContent(
      `<canvas id="c" width="${width}" height="${height}" style="width:100vw;height:100vh;display:block"></canvas>
       <script>const gl=document.getElementById("c").getContext("webgl2");
       (function f(t){gl.clearColor((t%1000)/1000,0.2,0.3,1);gl.clear(gl.COLOR_BUFFER_BIT);requestAnimationFrame(f);})(0);</script>`,
    );
    return (await measureFrames(page, durationMs)).fps;
  } finally {
    await page.close();
  }
}

defineStep(/I measure rendering for (\d+) seconds/, async (world, seconds = "3") => {
  const durationMs = Number(seconds) * 1000;
  world.metrics.baseline_fps = Math.round((await measureBaseline(world, durationMs)) * 10) / 10;
  await world.page.bringToFront();
  const result = await measureFrames(world.page, durationMs);
  world.metrics.run_fps = Math.round(result.fps * 10) / 10;
  world.metrics.run_worst_frame_ms = Math.round(result.worstFrameMs);
  world.metrics.run_long_tasks = result.longTasks;
  world.metrics.run_longest_task_ms = Math.round(result.longestTaskMs);
  world.metrics.run_js_heap_mb = Math.round(result.heapMb * 10) / 10;
  await expectRunning(world);
});

defineStep(/the frame rate is at least (\d+) fps/, (world, fps = "0") => {
  expect(
    world.metrics.run_fps ?? 0,
    `app fps (baseline ${world.metrics.baseline_fps ?? "?"})`,
  ).toBeGreaterThanOrEqual(Number(fps));
});

defineStep(
  /the frame rate is at least (\d+) percent of the browser baseline/,
  (world, percent = "0") => {
    const baseline = world.metrics.baseline_fps ?? 0;
    expect(baseline, "empty-page baseline fps").toBeGreaterThan(0);
    expect(world.metrics.run_fps ?? 0, `app fps vs baseline ${baseline}`).toBeGreaterThanOrEqual(
      (baseline * Number(percent)) / 100,
    );
  },
);

defineStep(/no main-thread task blocked for more than (\d+) ms/, (world, budget = "0") => {
  expect(world.metrics.run_longest_task_ms ?? 0).toBeLessThanOrEqual(Number(budget));
});
