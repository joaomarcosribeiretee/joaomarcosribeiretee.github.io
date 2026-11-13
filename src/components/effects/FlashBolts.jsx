import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FxLayer from "./FxLayer";
import { n, rand, viewport } from "./helpers";

// The Flash: zigzag lightning bolts and speed streaks racing across the screen, in a few
// waves for as long as the sound plays. Bolts appear and fade, they never blink, so there
// is no strobing.

const WAVES = [0, 0.95, 1.9];
const BOLTS_PER_WAVE = 4;
const STREAKS_PER_WAVE = 6;

// a jagged line across the whole width; `ltr` picks the direction it is drawn in
const boltPath = (w, y, amp, ltr) => {
  const pts = [];
  let x = -40;
  while (x < w + 40) {
    pts.push([x, y + (pts.length ? rand(-amp, amp) : 0)]);
    x += rand(22, 52);
  }
  pts.push([w + 40, y]);
  if (!ltr) pts.reverse();
  return `M${pts.map(([px, py]) => `${n(px)} ${n(py)}`).join("L")}`;
};

const FlashBolts = ({ accent }) => {
  const reduce = useReducedMotion();

  const scene = useMemo(() => {
    const { w, h } = viewport();
    const waves = (reduce ? WAVES.slice(0, 1) : WAVES).map((delay, wi) => {
      const ltr = wi % 2 === 0;
      // spread the bolts over the height so they do not stack on one another
      const bolts = Array.from({ length: BOLTS_PER_WAVE }, (_, i) => {
        const band = (h * 0.8) / BOLTS_PER_WAVE;
        const y = h * 0.1 + band * i + rand(0.15, 0.85) * band;
        return { d: boltPath(w, y, rand(26, 50), ltr), delay: delay + i * 0.06 };
      });
      const streaks = Array.from({ length: STREAKS_PER_WAVE }, () => ({
        y: rand(0.06, 0.94) * h,
        len: rand(160, 360),
        delay: delay + rand(0, 0.3),
      }));
      return { ltr, bolts, streaks };
    });
    return { w, h, waves };
  }, [reduce]);

  return (
    <FxLayer>
      <svg viewBox={`0 0 ${scene.w} ${scene.h}`} width={scene.w} height={scene.h} style={{ "--fx-accent": accent }}>
        {scene.waves.map(({ ltr, bolts, streaks }, wi) => (
          <g key={wi}>
            {!reduce &&
              streaks.map((s, i) => (
                <motion.path
                  key={`s${i}`}
                  className="fx-streak"
                  d={`M0 ${n(s.y)}H${n(s.len)}`}
                  initial={{ x: ltr ? -s.len : scene.w, opacity: 0 }}
                  animate={{ x: ltr ? scene.w : -s.len, opacity: [0, 0.7, 0] }}
                  transition={{ duration: 0.5, delay: s.delay, ease: "easeIn", opacity: { times: [0, 0.2, 1] } }}
                />
              ))}
            {bolts.map((b, i) => (
              <g key={`b${i}`}>
                {["fx-bolt fx-bolt--glow", "fx-bolt", "fx-bolt fx-bolt--core"].map((cls) => (
                  <motion.path
                    key={cls}
                    className={cls}
                    d={b.d}
                    initial={reduce ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
                    animate={reduce ? { pathLength: 1, opacity: 0.9 } : { pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
                    transition={
                      reduce
                        ? undefined
                        : { duration: 0.75, delay: b.delay, times: [0, 0.22, 1], ease: "easeOut" }
                    }
                  />
                ))}
              </g>
            ))}
          </g>
        ))}
      </svg>
    </FxLayer>
  );
};

export default FlashBolts;
