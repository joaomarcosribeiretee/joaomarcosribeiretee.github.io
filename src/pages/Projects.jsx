import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiImage, FiPlay, FiX } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { scrollToSection } from "../components/Header";
import { useLanguage, useT } from "../contexts/LanguageContext";
import { projects, PROJECT_FILTERS } from "../data/projects";
import { FILTER_EVENT } from "../lib/projectsFilter";
import { DUR, EASE_DRAWER, EASE_OUT, itemEnter, pressable, transitions } from "../lib/motion";
import "../styles/Projects.css";

const INITIAL_COUNT = 6;
const CHIP_COUNT = 3;

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// True while the element's content overflows to the right (drives the filter fade).
const useHasMoreToRight = (ref, deps) => {
  const [more, setMore] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => setMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return more;
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
};

const ProjectCard = ({ project, copy, openLabel, onOpen, index }) => {
  const extra = project.stack.length - CHIP_COUNT;
  return (
    <motion.li
      layout
      className="project-card-item"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: itemEnter(index, 0.05, 0.3) }}
      exit={{ opacity: 0, scale: 0.96, transition: transitions.fast }}
      transition={transitions.layout}
    >
      <button className="project-card" onClick={(e) => onOpen(project, e.currentTarget)}>
        <div className="project-cover">
          <img src={project.cover} alt="" loading="lazy" width="1600" height="1000" />
          <span className="project-open" aria-hidden="true">
            {openLabel} <FiArrowUpRight />
          </span>
        </div>
        <div className="project-body">
          <p className="project-meta">
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{copy.meta ?? copy.context}</span>
          </p>
          <h3 className="project-title">{copy.title}</h3>
          <p className="project-desc">{copy.shortDesc}</p>
          <ul className="project-chips" aria-label="Stack">
            {project.stack.slice(0, CHIP_COUNT).map((s) => (
              <li key={s}>{s}</li>
            ))}
            {extra > 0 && <li className="chip-more">+{extra}</li>}
          </ul>
        </div>
      </button>
    </motion.li>
  );
};

const ProjectModal = ({ project, copy, t, onClose }) => {
  const isMobile = useMediaQuery("(max-width: 720px)");
  const { language } = useLanguage();
  const [media, setMedia] = useState("cover");
  const closeRef = useRef(null);
  const panelRef = useRef(null);
  const quality = project.quality?.[language] ?? [];

  useEffect(() => {
    // The focus ring on this first focus only shows if the modal was opened with the
    // keyboard (see src/lib/inputModality.js and the focus rules in App.css).
    closeRef.current?.focus({ preventScroll: true });
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      // focus trap: Tab and Shift+Tab cycle inside the dialog
      const panel = panelRef.current;
      if (!panel) return;
      const items = [...panel.querySelectorAll(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (!panel.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const goToContact = () => {
    onClose();
    // wait for the sheet to leave before scrolling the page behind it
    setTimeout(() => scrollToSection("contact"), DUR.slow * 1000);
  };

  const panelMotion = isMobile
    ? {
        initial: { y: "100%" },
        animate: { y: 0, transition: { duration: 0.45, ease: EASE_DRAWER } },
        exit: { y: "100%", transition: { duration: DUR.slow, ease: EASE_DRAWER } },
      }
    : {
        initial: { opacity: 0, scale: 0.96, y: 12 },
        animate: { opacity: 1, scale: 1, y: 0, transition: { duration: DUR.slow, ease: EASE_OUT } },
        exit: { opacity: 0, scale: 0.97, transition: { duration: DUR.base, ease: EASE_OUT } },
      };

  const solo = project.team.length === 1;

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transitions.base }}
      exit={{ opacity: 0, transition: transitions.base }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        {...panelMotion}
      >
        <div className="modal-topbar">
          {project.video ? (
            <div className="media-tabs" role="tablist">
              {[
                { id: "cover", label: t.cover, Icon: FiImage },
                { id: "video", label: t.video, Icon: FiPlay },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={media === id}
                  className={`media-tab ${media === id ? "is-active" : ""}`}
                  onClick={() => setMedia(id)}
                >
                  {media === id && (
                    <motion.span className="media-tab-pill" layoutId="media-pill" transition={transitions.layout} />
                  )}
                  <Icon aria-hidden="true" /> <span>{label}</span>
                </button>
              ))}
            </div>
          ) : (
            <span />
          )}
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label={t.close}>
            <FiX aria-hidden="true" />
          </button>
        </div>

        <div className="modal-scroll">
          <div className="modal-media">
            {media === "video" && project.video ? (
              <iframe
                src={`${project.video}?autoplay=1&rel=0`}
                title={copy.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={project.cover} alt={copy.title} />
            )}
          </div>

          <div className="modal-content">
            <header className="modal-header">
              <h2 id="project-modal-title" className="modal-title">{copy.title}</h2>
              <dl className="modal-meta">
                <div>
                  <dt>{t.year}</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt>{t.context}</dt>
                  <dd>{copy.context}</dd>
                </div>
                <div>
                  <dt>{t.role}</dt>
                  <dd>{copy.role}</dd>
                </div>
              </dl>
            </header>

            <div className="modal-columns">
              <div className="modal-main">
                <h3 className="modal-label">{t.overview}</h3>
                <p className="modal-overview" dangerouslySetInnerHTML={{ __html: copy.longDesc }} />

                <h3 className="modal-label">{t.highlights}</h3>
                <div className="modal-details" dangerouslySetInnerHTML={{ __html: copy.fullDetails }} />

                {quality.length > 0 && (
                  <div className="modal-details modal-quality">
                    <h3>{t.quality}</h3>
                    <ul>
                      {quality.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <aside className="modal-side">
                <div className="modal-block">
                  <h3 className="modal-label">{t.stack}</h3>
                  <ul className="modal-stack">
                    {project.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-block">
                  <h3 className="modal-label">{solo ? t.solo : t.team}</h3>
                  {!solo && (
                    <ul className="modal-team">
                      {project.team.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <motion.a className="btn btn-primary btn-block" href={project.repo} target="_blank" rel="noopener noreferrer" {...pressable}>
                  <FaGithub aria-hidden="true" /> {t.github}
                </motion.a>

                <p className="modal-cta">
                  {t.footer}{" "}
                  <button className="link-button" onClick={goToContact}>
                    {t.footerLink}
                  </button>
                </p>
              </aside>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const t = useT("projects");
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const triggerRef = useRef(null);
  const filtersRef = useRef(null);
  const filtersHaveMore = useHasMoreToRight(filtersRef, [t]);

  // other sections (e.g. the FIAP card in Experience) can choose the filter
  useEffect(() => {
    const onFilter = (e) => {
      if (!PROJECT_FILTERS.includes(e.detail)) return;
      setFilter(e.detail);
      setExpanded(false);
    };
    window.addEventListener(FILTER_EVENT, onFilter);
    return () => window.removeEventListener(FILTER_EVENT, onFilter);
  }, []);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));
  const canCollapse = filtered.length > INITIAL_COUNT;
  const visible = canCollapse && !expanded ? filtered.slice(0, INITIAL_COUNT) : filtered;

  const open = (project, trigger) => {
    triggerRef.current = trigger;
    setSelected(project);
  };

  const close = React.useCallback(() => setSelected(null), []);

  const toggleExpanded = () => {
    if (expanded) scrollToSection("projects");
    setExpanded((e) => !e);
  };

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader id="projects-title" title={t.title} subtitle={t.subtitle} />

        <Reveal className="project-filters" index={1}>
          <div className="segmented-wrap" data-fade={filtersHaveMore}>
          <div className="segmented" role="group" aria-label={t.title} ref={filtersRef}>
            {PROJECT_FILTERS.map((f) => {
              const count = f === "all" ? projects.length : projects.filter((p) => p.tags.includes(f)).length;
              return (
                <button
                  key={f}
                  className={`segmented-option ${filter === f ? "is-active" : ""}`}
                  aria-pressed={filter === f}
                  onClick={(e) => {
                    setFilter(f);
                    setExpanded(false);
                    // keep the chosen filter inside the scrollable row on small screens
                    e.currentTarget.scrollIntoView({
                      inline: "nearest",
                      block: "nearest",
                      behavior: prefersReducedMotion() ? "auto" : "smooth",
                    });
                  }}
                >
                  {filter === f && (
                    <motion.span className="segmented-pill" layoutId="filter-pill" transition={transitions.layout} />
                  )}
                  <span className="segmented-label">
                    {t.filters[f]} <span className="segmented-count">{count}</span>
                  </span>
                </button>
              );
            })}
          </div>
          </div>
        </Reveal>

        <motion.ul
          className="projects-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0, transition: transitions.reveal }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                copy={t.items[project.id]}
                openLabel={t.open}
                onOpen={open}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.ul>

        {canCollapse && (
          <div className="projects-more">
            <motion.button className="btn btn-ghost" onClick={toggleExpanded} {...pressable}>
              {expanded ? t.showLess : `${t.showAll} (${filtered.length})`}
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence onExitComplete={() => triggerRef.current?.focus({ preventScroll: true })}>
        {selected && (
          <ProjectModal
            key={selected.id}
            project={selected}
            copy={t.items[selected.id]}
            t={t}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
