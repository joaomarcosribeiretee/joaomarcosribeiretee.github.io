import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_IN_OUT, transitions } from "../lib/motion";
import "../styles/LoadingScreen.css";

const SEEN_KEY = "portfolio-intro-seen";

// The intro plays once per browser session; reloads go straight to the page.
export const shouldShowIntro = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) !== "1";
  } catch {
    return true;
  }
};

const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // storage blocked: the intro will just play again next time
  }
};

const LoadingScreen = ({ onLoadingComplete }) => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence
      onExitComplete={() => {
        markSeen();
        onLoadingComplete();
      }}
    >
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, transition: transitions.slow }}
        >
          <div className="loading-ring">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle className="loading-track" cx="60" cy="60" r="56" />
              <motion.circle
                className="loading-arc"
                cx="60"
                cy="60"
                r="56"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: EASE_IN_OUT }}
                onAnimationComplete={() => setVisible(false)}
              />
            </svg>
            <motion.img
              src={`${process.env.PUBLIC_URL}/icons/foto.png`}
              alt="João Marcos"
              className="loading-photo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transitions.slow}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
