// Minimal strict Gherkin parser for the Squad Surge BDD suite.
// Supports: Feature, Background, Scenario, Scenario Outline + Examples tables,
// Given/When/Then/And/But steps, tags (@tag) and # comments. Anything else is
// a hard parse error so malformed features can never silently skip steps.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type StepKeyword = "Given" | "When" | "Then";

export interface Step {
  keyword: StepKeyword;
  text: string;
  line: number;
}

export interface Scenario {
  name: string;
  tags: string[];
  steps: Step[];
  line: number;
}

export interface Feature {
  name: string;
  file: string;
  tags: string[];
  scenarios: Scenario[];
}

interface OutlineDraft {
  name: string;
  tags: string[];
  steps: Step[];
  line: number;
  header: string[] | null;
  rows: string[][];
}

const STEP_RE = /^(Given|When|Then|And|But)\s+(.+)$/;

function parseRow(line: string): string[] {
  return line
    .slice(1, line.lastIndexOf("|"))
    .split("|")
    .map((cell) => cell.trim());
}

export function parseFeature(source: string, file: string): Feature {
  const lines = source.split(/\r?\n/);
  let feature: Feature | null = null;
  let pendingTags: string[] = [];
  let background: Step[] = [];
  let current: OutlineDraft | null = null;
  let isOutline = false;
  let inExamples = false;
  let inBackground = false;
  let inDescription = false;
  let lastKeyword: StepKeyword | null = null;

  const fail = (index: number, message: string): never => {
    throw new Error(`${file}:${index + 1}: ${message}`);
  };

  const flush = (): void => {
    if (!current || !feature) return;
    const draft: OutlineDraft = current;
    const tags = [...feature.tags, ...draft.tags];
    const steps = [...background, ...draft.steps];
    if (!isOutline) {
      feature.scenarios.push({ name: draft.name, tags, steps, line: draft.line });
    } else {
      if (!draft.header || draft.rows.length === 0) {
        throw new Error(
          `${file}:${draft.line}: Scenario Outline "${draft.name}" has no Examples rows`,
        );
      }
      const header = draft.header;
      for (const row of draft.rows) {
        const bind = (text: string): string =>
          text.replace(/<([^>]+)>/g, (match, key: string) => {
            const column = header.indexOf(key);
            if (column < 0)
              throw new Error(`${file}:${draft.line}: unknown outline parameter <${key}>`);
            return row[column] ?? match;
          });
        const label = header.map((key, i) => `${key}=${row[i] ?? ""}`).join(", ");
        feature.scenarios.push({
          name: `${bind(draft.name)} [${label}]`,
          tags,
          steps: steps.map((step) => ({ ...step, text: bind(step.text) })),
          line: draft.line,
        });
      }
    }
    current = null;
  };

  lines.forEach((raw, index) => {
    const line = raw.trim();
    if (line === "" || line.startsWith("#")) return;
    if (line.startsWith("@")) {
      pendingTags.push(...line.split(/\s+/).map((tag) => tag.slice(1)));
      return;
    }
    if (line.startsWith("Feature:")) {
      if (feature) fail(index, "only one Feature per file");
      feature = { name: line.slice(8).trim(), file, tags: pendingTags, scenarios: [] };
      pendingTags = [];
      inDescription = true;
      return;
    }
    if (!feature) return fail(index, "content before Feature:");
    const activeFeature: Feature = feature;
    if (line.startsWith("Background:")) {
      flush();
      inBackground = true;
      inDescription = false;
      lastKeyword = null;
      return;
    }
    const scenarioMatch = /^(Scenario Outline|Scenario):\s*(.+)$/.exec(line);
    if (scenarioMatch) {
      flush();
      inBackground = false;
      inDescription = false;
      inExamples = false;
      isOutline = scenarioMatch[1] === "Scenario Outline";
      current = {
        name: scenarioMatch[2] ?? "",
        tags: pendingTags,
        steps: [],
        line: index + 1,
        header: null,
        rows: [],
      };
      pendingTags = [];
      lastKeyword = null;
      return;
    }
    if (line.startsWith("Examples:")) {
      if (!current || !isOutline) fail(index, "Examples outside a Scenario Outline");
      inExamples = true;
      return;
    }
    if (line.startsWith("|")) {
      if (!inExamples || !current) return fail(index, "table row outside Examples");
      const draft: OutlineDraft = current;
      const cells = parseRow(line);
      if (!draft.header) draft.header = cells;
      else draft.rows.push(cells);
      return;
    }
    const stepMatch = STEP_RE.exec(line);
    if (stepMatch) {
      if (inExamples) fail(index, "step after Examples");
      const word = stepMatch[1] ?? "";
      let keyword: StepKeyword;
      if (word === "And" || word === "But") {
        if (!lastKeyword) return fail(index, `${word} without a preceding Given/When/Then`);
        keyword = lastKeyword;
      } else {
        keyword = word as StepKeyword;
      }
      lastKeyword = keyword;
      const step: Step = { keyword, text: stepMatch[2] ?? "", line: index + 1 };
      if (inBackground) {
        if (keyword !== "Given") fail(index, "Background may only contain Given steps");
        background.push(step);
      } else if (current) {
        const draft: OutlineDraft = current;
        draft.steps.push(step);
      } else {
        fail(index, "step outside a Scenario");
      }
      return;
    }
    if (inDescription) return; // free-text feature description
    fail(index, `unrecognised line: ${line}`);
    void activeFeature;
  });
  flush();
  if (!feature) throw new Error(`${file}: missing Feature:`);
  const parsed: Feature = feature;
  if (parsed.scenarios.length === 0) throw new Error(`${file}: no scenarios`);
  background = [];
  return parsed;
}

export function loadFeatures(directory: string): Feature[] {
  return readdirSync(directory)
    .filter((name) => name.endsWith(".feature"))
    .sort()
    .map((name) => parseFeature(readFileSync(join(directory, name), "utf8"), name));
}
