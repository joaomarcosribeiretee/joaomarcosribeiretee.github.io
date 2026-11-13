import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";
import { useT } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { transitions } from "../lib/motion";
import "../styles/ThemeToggle.css";

// The icon shows where a click goes: the sun in dark mode, the moon in light mode.
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useT("header");
  const toLight = theme === "dark";
  const label = toLight ? t.themeToLight : t.themeToDark;

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
          transition={transitions.fast}
        >
          {toLight ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
