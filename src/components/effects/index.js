// Screen effects a character can trigger (see `effect` in src/data/characters.js).
// An effect gets `origin` ({ x, y } in viewport pixels, the clicked button), the
// `character` config and its `accent` colour. The About section unmounts it when the
// sound ends, so it can use exit animations. Keep effects decorative: no strobing,
// nothing that takes clicks, and honour prefers-reduced-motion.
import WebShot from "./WebShot";
import KaChow from "./KaChow";
import SupermanFlight from "./SupermanFlight";
import BladeSlash from "./BladeSlash";
import FlashBolts from "./FlashBolts";

export const EFFECTS = {
  web: WebShot,
  kachow: KaChow,
  flight: SupermanFlight,
  slash: BladeSlash,
  bolt: FlashBolts,
};
