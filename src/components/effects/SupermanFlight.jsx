import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../lib/motion";
import FxLayer from "./FxLayer";
import { clamp, n, viewport } from "./helpers";

// Superman: his shield rises from the icon to the middle of the screen, a sonic ring rolls
// out, then it takes off toward the top-right corner leaving a streak behind.
// The shield is the character's own icon, painted with the Superman colours.

const SIZE = 120;
const FLIGHT = 1.8; // seconds, whole shield journey
const TIMES = [0, 0.3, 0.7, 1]; // arrive, hover, dash

const SupermanFlight = ({ origin, character, accent }) => {
  const reduce = useReducedMotion();

  const scene = useMemo(() => {
    const { w, h } = viewport();
    const cx = w / 2;
    const cy = h * 0.42;
    return { w, h, cx, cy, tx: w * 1.12, ty: -h * 0.18, ring: clamp(Math.min(w, h) * 0.42, 160, 380) };
  }, []);

  const mask = `url("${process.env.PUBLIC_URL}${character.icon}")`;
  const { w, h, cx, cy, tx, ty, ring } = scene;

  return (
    <FxLayer>
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} style={{ "--fx-accent": accent }}>
        <defs>
          <linearGradient id="fx-trail" gradientUnits="userSpaceOnUse" x1={cx} y1={cy} x2={tx} y2={ty}>
            <stop offset="0" stopColor="#1e6bff" stopOpacity="0" />
            <stop offset="0.7" stopColor="#7fb2ff" stopOpacity="0.9" />
            <stop offset="1" style={{ stopColor: "var(--fx-trail-end)" }} stopOpacity="1" />
          </linearGradient>
        </defs>

        {[0, 0.14].map((extra) => (
          <motion.circle
            key={extra}
            className="fx-ring"
            cx={cx}
            cy={cy}
            initial={reduce ? { r: ring * 0.5, opacity: 0.45 } : { r: 12, opacity: 0.85 }}
            animate={reduce ? { r: ring * 0.5, opacity: 0.45 } : { r: ring, opacity: 0 }}
            transition={{ duration: 0.8, delay: FLIGHT * TIMES[1] + extra, ease: EASE_OUT }}
          />
        ))}

        {!reduce && (
          <motion.path
            className="fx-trail"
            d={`M${n(cx)} ${n(cy)}L${n(tx)} ${n(ty)}`}
            stroke="url(#fx-trail)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0, 1], opacity: [0, 1, 0.9, 0] }}
            transition={{ duration: 0.75, delay: FLIGHT * TIMES[2], times: [0, 0.01, 1], ease: "easeIn" }}
          />
        )}
      </svg>

      <motion.div
        className="fx-shield-glow"
        style={{ width: SIZE, height: SIZE, marginLeft: -SIZE / 2, marginTop: -SIZE / 2 }}
        initial={reduce ? { x: cx, y: cy, scale: 1, opacity: 1 } : { x: origin.x, y: origin.y, scale: 0.3, opacity: 0 }}
        animate={
          reduce
            ? { x: cx, y: cy, scale: 1, opacity: 1 }
            : {
                x: [origin.x, cx, cx, tx],
                y: [origin.y, cy, cy - 10, ty],
                scale: [0.3, 1, 1.04, 0.55],
                opacity: [0, 1, 1, 1],
              }
        }
        transition={{ duration: FLIGHT, times: TIMES, ease: [EASE_OUT, "linear", [0.5, 0, 1, 0.6]] }}
      >
        <div className="fx-shield" style={{ WebkitMaskImage: mask, maskImage: mask }} />
      </motion.div>
    </FxLayer>
  );
};

export default SupermanFlight;
