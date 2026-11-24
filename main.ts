// Ship It Friday — the funniest one-line commit message for make.fun.
// An AI coding agent, all confidence and zero doubt, pushes to production
// at 4:59pm on a Friday, no tests, and already halfway out the door.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The commit message itself: cheerful confidence, no awareness of the blast radius.
const LINE =
  "fix: pushed to prod Friday 4:59pm, no tests — if it breaks, that's a Monday problem, not mine";

// Write the single line exactly as-is: no trailing newline, no extra output.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, { encoding: "utf8" });
