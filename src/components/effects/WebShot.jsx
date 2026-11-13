import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../lib/motion";
import FxLayer from "./FxLayer";
import { TAU, clamp, n, rand, viewport } from "./helpers";

// Spider-Man web shot: strands fly from `origin` (viewport coordinates) to points around
// the screen, each ending in a small spider web. Purely decorative and non-interactive.
// The parent keeps it mounted while the sound plays and unmounts it to fade it out.

const SPOKES = 8;
const RING_STEPS = [0.34, 0.62, 1];
// targets as fractions of the viewport: top row plus both sides
const TARGETS = [
  [0.1, 0.16],
  [0.5, 0.07],
  [0.9, 0.18],
  [0.05, 0.55],
  [0.95, 0.5],
];

// a gently bowed strand, so it reads as a thread and not a laser
const strandPath = (ox, oy, tx, ty) => {
  const dx = tx - ox;
  const dy = ty - oy;
  const len = Math.hypot(dx, dy) || 1;
  const bow = len * rand(0.05, 0.1) * (Math.random() < 0.5 ? -1 : 1);
  const cx = (ox + tx) / 2 + (-dy / len) * bow;
  const cy = (oy + ty) / 2 + (dx / len) * bow;
  return `M${n(ox)} ${n(oy)}Q${n(cx)} ${n(cy)} ${n(tx)} ${n(ty)}`;
};

// radial spokes + concentric rings whose sides bow inward, like a real web
const webPaths = (cx, cy, radius) => {
  const rot = rand(0, TAU / SPOKES);
  const angles = Array.from({ length: SPOKES }, (_, i) => rot + (i / SPOKES) * TAU + rand(-0.1, 0.1));
  const at = (a, r) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];

  const spokes = angles
    .map((a) => {
      const [x, y] = at(a, radius);
      return `M${n(cx)} ${n(cy)}L${n(x)} ${n(y)}`;
    })
    .join("");

  const rings = RING_STEPS.map((k) => {
    const r = radius * k;
    let d = "";
    angles.forEach((a, i) => {
      const next = angles[(i + 1) % SPOKES] + (i === SPOKES - 1 ? TAU : 0);
      const [x0, y0] = at(a, r);
      const [x1, y1] = at(next, r);
      const [qx, qy] = at((a + next) / 2, r * 0.8);
      d += `${i === 0 ? `M${n(x0)} ${n(y0)}` : ""}Q${n(qx)} ${n(qy)} ${n(x1)} ${n(y1)}`;
    });
    return d;
  }).join("");

  return { spokes, rings };
};

const WebShot = ({ origin }) => {
  const reduce = useReducedMotion();

  const scene = useMemo(() => {
    const { w, h } = viewport();
    const radius = clamp(Math.min(w, h) * 0.05, 22, 46);
    const shots = TARGETS.map(([fx, fy]) => {
      const tx = clamp(fx * w + rand(-0.04, 0.04) * w, 14, w - 14);
      const ty = clamp(fy * h + rand(-0.05, 0.05) * h, 14, h - 14);
      return { strand: strandPath(origin.x, origin.y, tx, ty), web: webPaths(tx, ty, radius * rand(0.8, 1.15)) };
    });
    return { w, h, shots };
  }, [origin]);

  // reduced motion: the finished web appears at once, no drawing or movement
  const draw = (delay, duration) =>
    reduce
      ? { initial: false, animate: { pathLength: 1, opacity: 1 } }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { pathLength: { duration, delay, ease: EASE_OUT }, opacity: { duration: 0.01, delay } },
        };

  return (
    <FxLayer>
      <svg viewBox={`0 0 ${scene.w} ${scene.h}`} width={scene.w} height={scene.h}>
        {scene.shots.map(({ strand, web }, i) => {
          const hit = i * 0.06 + 0.24;
          return (
            <g key={i}>
              <motion.path className="fx-strand fx-strand--glow" d={strand} {...draw(i * 0.06, 0.26)} />
              <motion.path className="fx-strand" d={strand} {...draw(i * 0.06, 0.26)} />
              <motion.path className="fx-web fx-web--spokes" d={web.spokes} {...draw(hit, 0.16)} />
              <motion.path className="fx-web fx-web--rings" d={web.rings} {...draw(hit + 0.08, 0.32)} />
            </g>
          );
        })}
      </svg>
    </FxLayer>
  );
};

export default WebShot;
