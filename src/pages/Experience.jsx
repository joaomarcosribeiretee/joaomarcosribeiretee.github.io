import React from "react";
import PageTransition2 from "../components/PageTransition2";
import "../styles/Experience.css";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  // Map experience items from translations
  const experienceData = [
    {
      ...t.items.aiAnalytics,
      type: "education"
    },
    {
      ...t.items.analistaTestes,
      type: "work"
    },
    {
      ...t.items.analistaTestesJr,
      type: "work"
    },
    {
      ...t.items.estagiarioUnity,
      type: "work"
    },
    {
      ...t.items.cienciaComputacao,
      type: "education"
    }
  ];

  return (
    <PageTransition2>
      <div id="experience" className="experience-page">
        <header className="experience-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="experience-title"
          >
            {t.title}
          </motion.h1>
          <div className="title-underline"></div>
        </header>

        <div className="timeline-container">
          <div className="timeline-bar"></div>

          {experienceData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>

        {/* Ambient Element */}
        <div className="glow-orb"></div>
      </div>
    </PageTransition2>
  );
};

const TimelineItem = ({ data, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-item ${isLeft ? "left" : "right"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-content">
        <div className="timeline-header-group">
          <div className="timeline-date">{data.period}</div>
          <h3 className="timeline-role">{data.role}</h3>
          <span className="timeline-company">{data.company}</span>
        </div>

        {/* Single paragraph with decorative arrow styled via CSS */}
        <p className="timeline-description">
          {data.description}
        </p>
      </div>

      <div className="timeline-dot">
        <div className="dot-core"></div>
        <div className="dot-ripple"></div>
      </div>
    </motion.div>
  );
};

export default Experience;