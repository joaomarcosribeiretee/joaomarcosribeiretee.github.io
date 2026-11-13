import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useT } from "../contexts/LanguageContext";
import { scrollToSection } from "../components/Header";
import { requestProjectsFilter } from "../lib/projectsFilter";
import "../styles/Experience.css";

// A vertical timeline whose line fills as the user scrolls through it.
const Timeline = ({ label, Icon, items, copy, offset = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <div className="timeline-col">
      <Reveal className="timeline-label" index={offset}>
        <Icon aria-hidden="true" /> {label}
      </Reveal>

      <ol className="timeline" ref={ref}>
        <span className="timeline-track" aria-hidden="true">
          <motion.span className="timeline-fill" style={{ scaleY: scrollYProgress }} />
        </span>

        {items.map((item, i) => (
          <Reveal as="li" key={`${item.company}-${item.role}`} index={offset + i + 1} className="timeline-item">
            <span className={`timeline-dot ${item.current ? "is-current" : ""}`} aria-hidden="true" />
            <div className="timeline-card">
              <p className="timeline-period">{item.period}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.description}</p>

              {item.chips?.length > 0 && (
                <ul className="timeline-chips" aria-label={copy.techLabel}>
                  {item.chips.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>
              )}

              {item.filterLink && (
                <a
                  className="timeline-link"
                  href="#projects"
                  aria-label={copy.projectsLinkLabel}
                  onClick={(e) => {
                    e.preventDefault();
                    requestProjectsFilter(item.filterLink);
                    scrollToSection("projects");
                  }}
                >
                  {copy.projectsLink}
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
};

const Experience = () => {
  const t = useT("experience");

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader id="experience-title" title={t.title} subtitle={t.subtitle} />
        <div className="experience-grid">
          <Timeline label={t.workLabel} Icon={FiBriefcase} items={t.work} copy={t} />
          <Timeline label={t.educationLabel} Icon={FiBookOpen} items={t.education} copy={t} offset={1} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
