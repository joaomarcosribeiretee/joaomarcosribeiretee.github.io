import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useT } from "../../contexts/LanguageContext";
import { EASE_OUT } from "../../lib/motion";
import FxLayer from "./FxLayer";
import { TAU, clamp, n, rand, viewport } from "./helpers";

// Lightning McQueen: a comic "KA-CHOW!" burst pops in, racing streaks shoot past and the
// signature wink-sparkle pings at the corner. Short on purpose: the sound is about a second.

const SPIKES = 14;

const burstPoints = (r, inner) =>
  Array.from({ length: SPIKES * 2 }, (_, i) => {
    const radius = (i % 2 ? inner : r) * (i % 2 ? 1 : rand(0.92, 1.05));
    const a = (i / (SPIKES * 2)) * TAU;
    return `${n(Math.cos(a) * radius)},${n(Math.sin(a) * radius)}`;
  }).join(" ");

// a four-point sparkle
const SPARKLE = "M0 -1L0.22 -0.22L1 0L0.22 0.22L0 1L-0.22 0.22L-1 0L-0.22 -0.22Z";

const KaChow = ({ accent }) => {
  const t = useT("about");
  const reduce = useReducedMotion();

  const scene = useMemo(() => {
    const { w, h } = viewport();
    const r = clamp(Math.min(w, h) * 0.3, 110, 230);
    return {
      w,
      h,
      r,
      outer: burstPoints(r, r * 0.66),
      inner: burstPoints(r * 0.82, r * 0.54),
      streaks: Array.from({ length: 8 }, () => ({
        y: rand(0.1, 0.9) * h,
        len: rand(200, 460),
        delay: rand(0, 0.28),
      })),
    };
  }, []);

  const pop = reduce
    ? { initial: false, animate: { scale: 1, rotate: -7 } }
    : {
        initial: { scale: 0.2, rotate: -26 },
        animate: { scale: 1, rotate: -7 },
        transition: { type: "spring", stiffness: 420, damping: 15, delay: 0.05 },
      };

  return (
    <FxLayer>
      {!reduce && (
        <svg className="fx-fill" viewBox={`0 0 ${scene.w} ${scene.h}`} width={scene.w} height={scene.h} style={{ "--fx-accent": accent }}>
          {scene.streaks.map((s, i) => (
            <motion.path
              key={i}
              className="fx-streak fx-streak--race"
              d={`M0 ${n(s.y)}H${n(s.len)}`}
              initial={{ x: -s.len, opacity: 0 }}
              animate={{ x: scene.w, opacity: [0, 0.85, 0] }}
              transition={{ duration: 0.42, delay: s.delay, ease: "easeIn", opacity: { times: [0, 0.2, 1] } }}
            />
          ))}
        </svg>
      )}

      <div className="fx-center">
        <motion.div className="fx-kachow" style={{ width: scene.r * 2.3, height: scene.r * 2.3, "--fx-accent": accent }} {...pop}>
          <svg viewBox={`${-scene.r * 1.15} ${-scene.r * 1.15} ${scene.r * 2.3} ${scene.r * 2.3}`}>
            <polygon className="fx-kachow-burst" points={scene.outer} />
            <polygon className="fx-kachow-burst fx-kachow-burst--inner" points={scene.inner} />
          </svg>
          <span className="fx-kachow-text" style={{ fontSize: scene.r * 0.36 }}>
            {t.effects.kachow}
          </span>
        </motion.div>

        <motion.svg
          className="fx-sparkle"
          viewBox="-1.2 -1.2 2.4 2.4"
          style={{ width: scene.r * 0.5, height: scene.r * 0.5, marginLeft: scene.r * 0.78, marginTop: -scene.r * 0.95 }}
          initial={reduce ? false : { scale: 0, rotate: -30, opacity: 0 }}
          animate={reduce ? { scale: 1, opacity: 1 } : { scale: [0, 1.25, 1], rotate: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE_OUT }}
        >
          <path d={SPARKLE} />
        </motion.svg>
      </div>
    </FxLayer>
  );
};

export default KaChow;
