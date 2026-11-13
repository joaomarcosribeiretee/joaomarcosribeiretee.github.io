// Renders every scripts/covers/<id>.html to public/projects/<id>.webp (1600x1000)
// using a local Chrome/Edge over the DevTools protocol. No npm deps (Node >= 22).
//
//   node scripts/covers/render.mjs            # all covers
//   node scripts/covers/render.mjs nublar     # just one
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "../../public/projects");
const WIDTH = 1600;
const HEIGHT = 1000;
const PORT = 9333;

const browsers = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);
const browser = browsers.find((p) => existsSync(p));
if (!browser) throw new Error("Chrome/Edge not found. Set CHROME_PATH.");

const only = process.argv.slice(2);
const pages = readdirSync(here)
  .filter((f) => f.endsWith(".html"))
  .map((f) => basename(f, ".html"))
  .filter((id) => only.length === 0 || only.includes(id));

const proc = spawn(
  browser,
  [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${mkdtempSync(join(tmpdir(), "covers-"))}`,
    "--hide-scrollbars",
    "--force-color-profile=srgb",
    "about:blank",
  ],
  { stdio: "ignore" }
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const getJson = async (path, init) => {
  for (let i = 0; i < 50; i++) {
    try {
      return await (await fetch(`http://127.0.0.1:${PORT}${path}`, init)).json();
    } catch {
      await sleep(200);
    }
  }
  throw new Error("DevTools endpoint never came up");
};

const target = await getJson("/json/new?about:blank", { method: "PUT" });
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));

let seq = 0;
const pending = new Map();
const listeners = [];
ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method) {
    listeners.forEach((l) => l(msg));
  }
});
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const id = ++seq;
    pending.set(id, (m) => (m.error ? rej(new Error(`${method}: ${m.error.message}`)) : res(m.result)));
    ws.send(JSON.stringify({ id, method, params }));
  });
const once = (method) => new Promise((r) => listeners.push((m) => m.method === method && r(m)));

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false });

for (const id of pages) {
  const loaded = once("Page.loadEventFired");
  await send("Page.navigate", { url: pathToFileURL(join(here, `${id}.html`)).href });
  await loaded;
  await send("Runtime.evaluate", { expression: "document.fonts.ready.then(() => true)", awaitPromise: true });
  await sleep(250);
  const { data } = await send("Page.captureScreenshot", {
    format: "webp",
    quality: 86,
    clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 },
  });
  const file = join(outDir, `${id}.webp`);
  writeFileSync(file, Buffer.from(data, "base64"));
  console.log(`ok  ${id}.webp  ${(Buffer.byteLength(data, "base64") / 1024).toFixed(0)} KB`);
}

ws.close();
proc.kill();
