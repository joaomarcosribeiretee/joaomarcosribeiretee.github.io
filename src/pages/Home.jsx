import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useT } from "../contexts/LanguageContext";
import { scrollToSection } from "../components/Header";
import { cvHref } from "../lib/cv";
import { EASE_OUT, itemEnter, pressable } from "../lib/motion";
import "../styles/Home.css";

// Spotlight that follows the pointer (mouse only; touch keeps the resting glow).
const useSpotlight = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
    };
  }, [ref]);
};

const Home = () => {
  const t = useT("home");
  const contact = useT("contact");
  const meta = useT("meta");
  const heroRef = useRef(null);
  useSpotlight(heroRef);

  const words = t.name.split(" ");
  // the role only wraps at its "·" separators, never inside a term
  const roleParts = t.role.split(" · ");
  // running letter count, so the stagger flows across words
  const offsets = words.map((_, w) => words.slice(0, w).join("").length);

  return (
    <section id="home" className="home" ref={heroRef}>
      <div className="home-bg" aria-hidden="true">
        <div className="home-grid" />
        <div className="home-glow home-glow--a" />
        <div className="home-glow home-glow--b" />
        <div className="home-spot" />
        <svg className="home-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,245.3C672,213,768,139,864,133.3C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="home-content container">
        <motion.p
          className="home-greeting"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: itemEnter(0) }}
        >
          {t.greeting}
        </motion.p>

        <h1 className="home-title" aria-label={t.name}>
          {words.map((word, w) => (
            <span className="home-word" key={`${word}-${w}`} aria-hidden="true">
              {Array.from(word).map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  className="home-letter"
                  initial={{ opacity: 0, y: "0.4em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 + (offsets[w] + i) * 0.035 }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="home-role"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: itemEnter(5, 0.08, 0.6) }}
        >
          {roleParts.map((part, i) => (
            <React.Fragment key={part}>
              {i > 0 && " · "}
              <span className="home-role-part">{part}</span>
            </React.Fragment>
          ))}
        </motion.p>

        <motion.p
          className="home-description"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: itemEnter(6, 0.08, 0.7) }}
          dangerouslySetInnerHTML={{ __html: t.description }}
        />

        <motion.div
          className="home-ctas"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: itemEnter(7, 0.08, 0.8) }}
        >
          <motion.button className="btn btn-primary" onClick={() => scrollToSection("projects")} {...pressable}>
            {t.ctaProjects} <FiArrowRight aria-hidden="true" className="btn-arrow" />
          </motion.button>
          <motion.a
            className="btn btn-ghost"
            href={cvHref(meta)}
            download={meta.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            {...pressable}
          >
            <FiDownload aria-hidden="true" /> {contact.downloadCV}
          </motion.a>
        </motion.div>

        <motion.dl
          className="home-facts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: itemEnter(9, 0.08, 1) }}
        >
          {t.facts.map((f) => (
            <div className="home-fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <button className="home-scroll" onClick={() => scrollToSection("about")} aria-label={t.scroll}>
        <span className="home-scroll-mouse" aria-hidden="true">
          <span className="home-scroll-dot" />
        </span>
      </button>
    </section>
  );
};

export default Home;
