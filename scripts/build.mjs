import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
await rm(`${root}/dist`, { recursive: true, force: true });
await mkdir(`${root}/dist`, { recursive: true });
for (const file of [
  "index.html",
  "styles.css",
  "assets",
  "404.html",
  "robots.txt",
  "sitemap.xml",
]) {
  await cp(`${root}/${file}`, `${root}/dist/${file}`, { recursive: true });
}
console.log("Static site built in dist/. No runtime dependencies.");
