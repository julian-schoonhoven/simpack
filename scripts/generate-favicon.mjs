/**
 * Generates public/favicon.ico from favicon-16.svg and favicon-32.svg
 * Run: node scripts/generate-favicon.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import ico from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

async function svgToPng(svgPath, size) {
  const svg = readFileSync(svgPath);
  return sharp(svg).resize(size, size).png().toBuffer();
}

async function main() {
  const png16 = await svgToPng(join(publicDir, "favicon-16.svg"), 16);
  const png32 = await svgToPng(join(publicDir, "favicon-32.svg"), 32);
  const buf = await ico([png16, png32]);
  writeFileSync(join(publicDir, "favicon.ico"), buf);
  console.log("✓ public/favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
