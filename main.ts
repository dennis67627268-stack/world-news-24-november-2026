// Copy the bundled news image to the grader output path.
// Standard library only, no network, and each run writes the same bytes.
// The grader reads /output/entry.png when MAKEFUN_OUTPUT_DIR is unset.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const bundledImagePath = join(scriptDirectory, "entry.png");
const graderOutputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const graderImagePath = join(graderOutputDir, "entry.png");

mkdirSync(graderOutputDir, { recursive: true });
copyFileSync(bundledImagePath, graderImagePath);

