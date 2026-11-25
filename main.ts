// One-Line Office Joke Laugh-Off — entry program.
//
// Writes a single original one-line office joke to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, on one line. The program is fully deterministic: no
// network, no randomness, no environment secrets. Everything it runs
// is in this repository.
//
// The joke: a raise request answered with office furniture. The setup
// is a relatable office moment, the twist is the standing desk, and
// the punchline lands on the last word ("upright") — a fresh turn on
// the raise/desk pairing rather than a recycled office cliche.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I asked for a raise and got a standing desk instead, so now I'm underpaid upright.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const MAX_CHARS = 200;

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.includes("  ")) {
    throw new Error("entry must not contain double spaces");
  }
  if (!/[.!?]$/.test(text)) {
    throw new Error("entry must end with terminal punctuation (one complete sentence)");
  }
}

function main(): void {
  validate(JOKE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
  const back = readFileSync(OUTPUT_PATH, "utf8");
  if (back !== JOKE) {
    throw new Error("round-trip check failed: entry.txt does not match the joke");
  }
  console.log(`Wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
  console.log(`(${JOKE.split(" ").length} words, one line, one sentence)`);
  console.log(JOKE);
}

main();
