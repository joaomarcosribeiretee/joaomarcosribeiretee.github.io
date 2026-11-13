import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../lib/motion";
import FxLayer from "./FxLayer";
import { n, rand, viewport } from "./helpers";

// Thorfinn: a cold vignette closes in, blade slashes cut across the screen one after the
// other, and snow drifts down for the length of the sound. Calm and heavy, not flashy.

const FLAKES = 22;

// a slash is a slightly curved line from one side of the screen to the other
const slashPath = (w, h, [x0, y0], [x1, y1]) => {
  const ax = x0 * w + rand(-0.03, 0.03) * w;
  const ay = y0 * h + rand(-0.04, 0.04) * h;
  const bx = x1 * w + rand(-0.03, 0.03) * w;
  const by = y1 * h + rand(-0.04, 0.04) * h;
  const len = Math.hypot(bx - ax, by - ay) || 1;
  const bow = len * rand(0.05, 0.11) * (Math.random() < 0.5 ? -1 : 1);
  const cx = (ax + bx) / 2 + (-(by - ay) / len) * bow;
  const cy = (ay + by) / 2 + ((bx - ax) / len) * bow;
  return `M${n(ax)} ${n(ay)}Q${n(cx)} ${n(cy)} ${n(bx)} ${n(by)}`;
};

const SLASHES = [
  { from: [0.1, 0.16], to: [0.9, 0.78], delay: 0.2 },
  { from: [0.92, 0.2], to: [0.16, 0.9], delay: 0.55 },
  { from: [0.04, 0.58], to: [0.96, 0.4], delay: 0.9 },
];

const BladeSlash = ({ accent }) => {
  const reduce = useReducedMotion();

  const scene = useMemo(() => {
    const { w, h } = viewport();
    return {
      w,
      h,
      slashes: SLASHES.map((s) => ({ d: slashPath(w, h, s.from, s.to), delay: s.delay })),
      flakes: Array.from({ length: FLAKES }, () => ({
        x: rand(0, w),
        drift: rand(-40, 40),
        r: rand(1, 2.4),
        duration: rand(2.8, 4.6),
        delay: rand(0, 1.4),
      })),
    };
  }, []);

  return (
    <FxLayer>
      <motion.div
        className="fx-vignette"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      />
      <svg viewBox={`0 0 ${scene.w} ${scene.h}`} width={scene.w} height={scene.h} style={{ "--fx-accent": accent }}>
        {!reduce &&
          scene.flakes.map((f, i) => (
            <motion.circle
              key={i}
              className="fx-flake"
              r={f.r}
              initial={{ cx: f.x, cy: -10, opacity: 0 }}
              animate={{ cx: [f.x, f.x + f.drift], cy: [-10, scene.h + 10], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: f.duration, delay: f.delay, ease: "linear", opacity: { times: [0, 0.1, 0.85, 1] } }}
            />
          ))}

        {scene.slashes.map((s, i) => (
          <g key={i}>
            {["fx-slash fx-slash--glow", "fx-slash"].map((cls) => (
              <motion.path
                key={cls}
                className={cls}
                d={s.d}
                initial={reduce ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 1 }}
                animate={reduce ? { pathLength: 1, opacity: 0.8 } : { pathLength: 1, opacity: [1, 1, 0] }}
                transition={
                  reduce
                    ? undefined
                    : {
                        pathLength: { duration: 0.13, delay: s.delay, ease: "easeOut" },
                        opacity: { duration: 1.5, delay: s.delay, times: [0, 0.3, 1] },
                      }
                }
              />
            ))}
          </g>
        ))}
      </svg>
    </FxLayer>
  );
};

export default BladeSlash;
