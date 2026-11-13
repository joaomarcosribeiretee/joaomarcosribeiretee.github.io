/**
 * Clickable characters in the About section.
 * Adding one = adding an item here (icon + audio files go in /public).
 *
 * @typedef {Object} Character
 * @property {string} id
 * @property {{ pt: string, en: string }} name  Tooltip and aria-label.
 * @property {React.ComponentType | string} icon
 *   A React icon component (painted with currentColor), or a path under /public.
 *   Path icons are drawn as a single-colour silhouette (CSS mask), so any
 *   transparent PNG/SVG matches the rest of the set.
 * @property {string} audio  Path under /public.
 * @property {string} accentColor  Hover/playing glow.
 * @property {string} [effect]  Optional screen effect while the sound plays
 *   (a key of EFFECTS in src/components/effects).
 */

/** @type {Character[]} */
export const CHARACTERS = [
  {
    id: "spider",
    name: { pt: "Homem-Aranha", en: "Spider-Man" },
    icon: "/icons/spider.png",
    audio: "/audio/spider.MP3",
    accentColor: "#e62429",
    effect: "web",
  },
  {
    id: "mcqueen",
    name: { pt: "Relâmpago McQueen", en: "Lightning McQueen" },
    icon: "/icons/95.png",
    audio: "/audio/katchau.mp3",
    accentColor: "#ff7a1a",
    effect: "kachow",
  },
  {
    id: "superman",
    name: { pt: "Superman", en: "Superman" },
    icon: "/icons/characters/superman.svg",
    // TODO: audio file not added yet; until it exists the click just doesn't play.
    audio: "/audio/characters/superman.mp3",
    accentColor: "#1e6bff",
    effect: "flight",
  },
  {
    id: "thorfinn",
    name: { pt: "Thorfinn", en: "Thorfinn" },
    icon: "/icons/thorfin.png",
    audio: "/audio/thorfin.MP3",
    accentColor: "#9fb7cc",
    effect: "slash",
  },
  {
    id: "flash",
    name: { pt: "Flash", en: "Flash" },
    icon: "/icons/flash.png",
    audio: "/audio/flash.MP3",
    accentColor: "#ffd23f",
    effect: "bolt",
  },
];
