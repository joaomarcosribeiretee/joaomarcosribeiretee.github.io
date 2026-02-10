import React, { useState, useEffect } from "react";
import PageTransition6 from "../components/PageTransition6";
import "../styles/Skills.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs,
  SiPython, SiMysql, SiGit, SiGithub, SiCypress,
  SiPercy, SiExpress, SiJira,
  SiAdobecreativecloud
} from "react-icons/si";
import { FaFileExcel, FaTasks, FaRobot, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const skillsData = [
  {
    id: "frontend",
    label: "Front-End",
    description: "Interfaces modernas, responsivas e focadas na experiência do usuário",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "Typescript", icon: <SiTypescript /> },
    ]
  },
  {
    id: "backend",
    label: "Back-End",
    description: "Lógica de negócio, APIs e integração com bancos de dados",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
    ]
  },
  {
    id: "qa",
    label: "Testes & QA",
    description: "Garantia de qualidade, estabilidade e confiabilidade do sistema",
    items: [
      { name: "Playwright", icon: <FaRobot /> },
      { name: "Percy", icon: <SiPercy /> },
      { name: "Cypress", icon: <SiCypress /> },
    ]
  },
  {
    id: "utils",
    label: "Utilitários",
    description: "Ferramentas de apoio para produtividade e criação",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Excel", icon: <FaFileExcel /> },
      { name: "Adobe Cloud", icon: <SiAdobecreativecloud /> },
      { name: "Jira", icon: <SiJira /> },
      { name: "Monday", icon: <FaTasks /> },
    ]
  }
];

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageTransition6>
      <div className="skills-page-container">

        {/* Mobile Layout: Accordion */}
        {isMobile ? (
          <div className="skills-mobile-container">
            <header className="skills-header-mobile">
              <h1 className="skills-main-title">{t.title}</h1>
              <div className="title-underline"></div>
            </header>

            <div className="skills-mobile-accordion">
              {skillsData.map((cat) => (
                <div key={cat.id} className="accordion-item">
                  <button
                    className={`accordion-header ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  >
                    <span className="accordion-title">{t.categories[cat.id].label}</span>
                    <motion.div
                      animate={{ rotate: activeCategory === cat.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="accordion-icon"
                    >
                      <FaChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeCategory === cat.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="accordion-content"
                      >
                        <p className="mobile-skill-description">{t.categories[cat.id].description}</p>
                        <div className="accordion-grid">
                          {cat.items.map((skill, idx) => (
                            <div key={idx} className="skill-card-mobile-minimal">
                              <div className="skill-icon-mobile">{skill.icon}</div>
                              <span className="skill-name-mobile">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Layout: Interactive Split View */
          <div className="skills-content-wrapper">
            {/* Esquerda: Navegação */}
            <div className="skills-nav-section">
              <header className="skills-header-minimal">
                <h1 className="skills-main-title">{t.title}</h1>
                <div className="title-underline"></div>
              </header>

              <nav className="skills-nav">
                {skillsData.map((cat) => (
                  <button
                    key={cat.id}
                    className={`nav-item ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span className="nav-item-text">{t.categories[cat.id].label}</span>
                    {activeCategory === cat.id && (
                      <motion.div
                        className="nav-active-indicator"
                        layoutId="activeIndicator"
                      />
                    )}
                  </button>
                ))}
              </nav>

              <div className="skills-decor-line"></div>
            </div>

            {/* Direita: Stage */}
            <div className="skills-display-section">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  className="category-stage"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="stage-title">
                    {t.categories[activeCategory]?.label}
                  </h2>
                  <p className="stage-description">
                    {t.categories[activeCategory]?.description}
                  </p>

                  <div className="stage-grid">
                    {skillsData.find(d => d.id === activeCategory)?.items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="skill-card-minimal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -5, borderColor: "rgba(0, 191, 255, 0.5)" }}
                      >
                        <div className="skill-icon-large">{skill.icon}</div>
                        <span className="skill-label-minimal">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Decoração de Fundo */}
        <div className="ambient-glow"></div>
      </div>
    </PageTransition6>
  );
};

export default Skills;
