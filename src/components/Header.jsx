import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import SocialIcons from "./SocialIcons";
import { useT } from "../contexts/LanguageContext";
import { itemEnter, transitions } from "../lib/motion";
import { cvHref } from "../lib/cv";
import "../styles/Header.css";

export const SECTIONS = ["home", "about", "skills", "projects", "experience", "contact"];

export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const useActiveSection = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
};

const Header = () => {
  const t = useT("header");
  const contact = useT("contact");
  const meta = useT("meta");
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("keydown", onKey);
    // keyboard users land on the first link; the ring only shows after a key press
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus({ preventScroll: true }));
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    // let the menu start closing before the page scrolls under it
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <>
      <header className={`header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
        <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />

        <div className="header-inner">
          <button className="brand" onClick={() => go("home")} aria-label={t.home}>
            JM<span className="brand-dot">.</span>
          </button>

          <nav className="nav-desktop" aria-label={t.mainNav}>
            {SECTIONS.map((id) => (
              <button
                key={id}
                className={`nav-link ${active === id ? "is-active" : ""}`}
                onClick={() => go(id)}
                aria-current={active === id ? "true" : undefined}
              >
                {active === id && (
                  <motion.span className="nav-pill" layoutId="nav-pill" transition={transitions.layout} />
                )}
                <span className="nav-label">{t[id]}</span>
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <LanguageToggle />
            <button
              ref={toggleRef}
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="site-menu"
            className="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: transitions.fast }}
            transition={transitions.base}
          >
            <div className="site-menu-inner">
              <nav className="site-menu-nav" aria-label={t.mainNav}>
                {SECTIONS.map((id, i) => (
                  <motion.button
                    key={id}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={`site-link ${active === id ? "is-active" : ""}`}
                    onClick={() => go(id)}
                    aria-current={active === id ? "true" : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0, transition: itemEnter(i, 0.04) }}
                  >
                    <span className="site-link-index">{String(i + 1).padStart(2, "0")}</span>
                    {t[id]}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="site-menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: itemEnter(SECTIONS.length, 0.04) }}
              >
                <a className="btn btn-ghost" href={cvHref(meta)} download={meta.cvFile} target="_blank" rel="noopener noreferrer">
                  <FiDownload aria-hidden="true" /> {contact.downloadCV}
                </a>
                <SocialIcons variant="inline" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
