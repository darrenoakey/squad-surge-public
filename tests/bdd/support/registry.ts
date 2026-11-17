// Step registry: every primitive is a regular expression bound to an async
// function. Given/When/Then share one pool; a step text must match exactly one
// primitive or the scenario fails (no silent skips, no ambiguity).
import type { World } from "./world";

export type StepHandler = (world: World, ...args: string[]) => Promise<void> | void;

interface StepDefinition {
  pattern: RegExp;
  handler: StepHandler;
}

const definitions: StepDefinition[] = [];

export function defineStep(pattern: RegExp, handler: StepHandler): void {
  definitions.push({ pattern: new RegExp(`^${pattern.source}$`), handler });
}

export function findStep(text: string): { handler: StepHandler; args: string[] } {
  const matches = definitions
    .map((definition) => ({ definition, match: definition.pattern.exec(text) }))
    .filter((candidate) => candidate.match !== null);
  if (matches.length === 0) throw new Error(`Undefined step: "${text}"`);
  if (matches.length > 1) {
    throw new Error(
      `Ambiguous step "${text}" matches ${matches.map((m) => m.definition.pattern.source).join(" | ")}`,
    );
  }
  const [only] = matches;
  if (!only?.match) throw new Error(`Undefined step: "${text}"`);
  return { handler: only.definition.handler, args: only.match.slice(1).map((value) => value) };
}
