// Shared bits for the character effects.

export const TAU = Math.PI * 2;

export const rand = (min, max) => min + Math.random() * (max - min);
export const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
// one decimal is plenty for SVG path data
export const n = (v) => Math.round(v * 10) / 10;

export const viewport = () => ({ w: window.innerWidth, h: window.innerHeight });
