// Prints cv/cv.html to public/docs/JoaoMarcos_CV.pdf (pt) and JoaoMarcos_CV_EN.pdf (en).
//   node cv/render.mjs
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/docs");
const browser = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean).find((p) => existsSync(p));
if (!browser) throw new Error("Chrome/Edge not found. Set CHROME_PATH.");

for (const [lang, file] of [["pt", "JoaoMarcos_CV.pdf"], ["en", "JoaoMarcos_CV_EN.pdf"]]) {
  const url = `${pathToFileURL(join(here, "cv.html")).href}?lang=${lang}`;
  const res = spawnSync(browser, [
    "--headless=new",
    "--no-pdf-header-footer",
    "--virtual-time-budget=2000",
    `--print-to-pdf=${join(out, file)}`,
    url,
  ], { stdio: "inherit" });
  if (res.status !== 0) throw new Error(`print failed for ${lang}`);
  console.log(`ok  ${file}`);
}
