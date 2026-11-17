// Records scenario durations and in-browser metrics.
// Always writes test-results/bdd-perf.json (gitignored) for the current run.
// Only when BDD_RECORD=1 (explicit evidence run) does it merge into the
// committed tests/bdd/perf.json (10-run history) and copy screenshots to
// artifacts/*.png — so gate runs never leave tracked files dirty.
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { format, resolveConfig } from "prettier";
import type { FullResult, Reporter, TestCase, TestResult } from "@playwright/test/reporter";
import { readBuildRecord, ROOT, sourceFingerprint } from "./provenance";

const COMMITTED = join(ROOT, "tests", "bdd", "perf.json");
const RUN_FILE = join(ROOT, "test-results", "bdd-perf.json");
const ARTIFACTS = join(ROOT, "artifacts");
const HISTORY = 10;

interface Series {
  duration_ms?: number;
  value?: number;
  history: number[];
}

interface PerfFile {
  last_run: string;
  source_hash: string;
  total_duration_ms: number;
  passed: number;
  failed: number;
  scenarios: Record<string, Series>;
  metrics: Record<string, Series>;
}

export default class PerfReporter implements Reporter {
  private readonly durations = new Map<string, number>();
  private readonly metrics = new Map<string, number>();
  private readonly screenshots = new Map<string, string>();
  private passed = 0;
  private failed = 0;

  onTestEnd(test: TestCase, result: TestResult): void {
    const key = `${test.location.file.split("/").pop() ?? ""}::${test.titlePath().slice(2).join(" › ")}`;
    if (result.status === "passed") this.passed += 1;
    else if (result.status !== "skipped") this.failed += 1;
    if (result.status !== "passed") return;
    this.durations.set(key, result.duration);
    for (const attachment of result.attachments) {
      if (attachment.name === "bdd-metrics" && attachment.body) {
        const values = JSON.parse(attachment.body.toString("utf8")) as Record<string, number>;
        for (const [name, value] of Object.entries(values)) this.metrics.set(name, value);
      }
      if (attachment.name.startsWith("screenshot:") && attachment.path) {
        this.screenshots.set(attachment.name.slice("screenshot:".length), attachment.path);
      }
    }
  }

  async onEnd(result: FullResult): Promise<void> {
    if (this.passed + this.failed === 0) return; // --list or empty selection: keep the last real run
    const build = readBuildRecord();
    const run: PerfFile = {
      last_run: new Date().toISOString(),
      source_hash: build?.source.hash ?? "unknown",
      total_duration_ms: Math.round(result.duration),
      passed: this.passed,
      failed: this.failed,
      scenarios: Object.fromEntries(
        [...this.durations].map(([k, v]) => [k, { duration_ms: v, history: [v] }]),
      ),
      metrics: Object.fromEntries(
        [...this.metrics].map(([k, v]) => [k, { value: v, history: [v] }]),
      ),
    };
    mkdirSync(join(ROOT, "test-results"), { recursive: true });
    writeFileSync(RUN_FILE, `${JSON.stringify(run, null, 2)}\n`);
    if (process.env.BDD_RECORD !== "1") return;
    if (result.status !== "passed") {
      console.log(
        "BDD_RECORD=1 ignored: suite did not pass, committed perf.json and artifacts left unchanged",
      );
      return;
    }
    const sourceNow = sourceFingerprint().hash;
    if (build?.source.hash !== sourceNow) {
      console.log(
        `BDD_RECORD=1 ignored: tested snapshot ${build?.source.hash ?? "unknown"} != current source ${sourceNow}; rerun on a frozen tree`,
      );
      return;
    }
    const previous = existsSync(COMMITTED)
      ? (JSON.parse(readFileSync(COMMITTED, "utf8")) as PerfFile)
      : null;
    const merge = (
      old: Record<string, Series> | undefined,
      next: Record<string, Series>,
      field: "duration_ms" | "value",
    ) =>
      Object.fromEntries(
        Object.entries(next).map(([key, series]) => {
          const current = series[field] ?? 0;
          const history = [...(old?.[key]?.history ?? []), current].slice(-HISTORY);
          return [key, { [field]: current, history }];
        }),
      );
    const merged: PerfFile = {
      ...run,
      scenarios: merge(previous?.scenarios, run.scenarios, "duration_ms"),
      metrics: merge(previous?.metrics, run.metrics, "value"),
    };
    // Committed file is written already prettier-formatted so format:check stays green.
    const config = (await resolveConfig(COMMITTED)) ?? {};
    writeFileSync(
      COMMITTED,
      await format(JSON.stringify(merged, null, 2), {
        ...config,
        parser: "json",
        filepath: COMMITTED,
      }),
    );
    mkdirSync(ARTIFACTS, { recursive: true });
    for (const [name, path] of this.screenshots) copyFileSync(path, join(ARTIFACTS, `${name}.png`));
    console.log(
      `BDD_RECORD=1: updated tests/bdd/perf.json and ${this.screenshots.size} artifacts/*.png`,
    );
  }
}
