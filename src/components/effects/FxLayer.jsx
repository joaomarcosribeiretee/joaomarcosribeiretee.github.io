import React from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import "../../styles/Effects.css";

// Full-screen, decorative, click-through layer every effect renders into. It lives in
// <body> (not inside the section) so no transformed ancestor can offset it, and it fades
// out when the About section unmounts the effect.
const FxLayer = ({ children }) => {
  const reduce = useReducedMotion();
  return createPortal(
    <motion.div
      className="fx-layer"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduce ? 0.2 : 0.45 } }}
    >
      {children}
    </motion.div>,
    document.body
  );
};

export default FxLayer;
