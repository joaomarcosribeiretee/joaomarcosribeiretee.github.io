import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Dark is the default. The choice is saved in localStorage and applied as
// <html data-theme="dark|light">; public/index.html applies it before first paint.
const STORAGE_KEY = "portfolio-theme";
const META_COLOR = { dark: "#09090b", light: "#f6f7f9" };

const ThemeContext = createContext();

const readSaved = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readSaved);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", META_COLOR[theme]);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage blocked: the theme just won't persist
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // a short-lived class lets colours ease between themes (see App.css)
    const root = document.documentElement;
    root.classList.add("theme-switching");
    setTimeout(() => root.classList.remove("theme-switching"), 400);
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
