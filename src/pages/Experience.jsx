import React from "react";
import PageTransition2 from "../components/PageTransition2";
import "../styles/Experience.css";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "AI Analytics",
    company: "FIAP",
    period: "Cursando - 2026",
    description: "Pós-graduação em Inteligência Artificial e Data Analytics, com foco em Machine Learning, Deep Learning e estratégias data-driven. Estou aprofundando meus conhecimentos na aplicação de modelos preditivos para resolver problemas complexos de negócios e engenharia.",
    type: "education"
  },
  {
    role: "Analista de Testes",
    company: "Lucy",
    period: "2025 - Atual",
    description: "Atuo na garantia de qualidade de software, combinando testes manuais e automatizados para assegurar entregas impecáveis. Especializei-me em automação com Playwright e Percy, criando fluxos de verificação robustos com foco total na confiabilidade do sistema e na experiência do usuário.",
    type: "work"
  },
  {
    role: "Analista de Testes Jr",
    company: "Virtual Town",
    period: "2023 - 2025",
    description: "Responsável pela execução e gestão do ciclo de vida de testes (ALM) utilizando Jira. Desenvolvi um Painel Funcional (HTML/CSS/JS/Express) que automatizou tarefas recorrentes, aumentando significativamente a produtividade da equipe.",
    type: "work"
  },
  {
    role: "Estagiário Unity",
    company: "VRGlass",
    period: "2022 - 2023",
    description: "Atuei no desenvolvimento de aplicações interativas e jogos utilizando Unity e C#, participando de projetos inovadores de Realidade Virtual e Aumentada. Meu foco era otimizar a performance e garantir a integridade das aplicações.",
    type: "work"
  },
  {
    role: "Ciência da Computação",
    company: "PUC-SP",
    period: "2020 - 2023",
    description: "Bacharelado Concluído. Tive uma formação sólida em Engenharia de Software e Algoritmos, desenvolvendo a base teórica e prática necessária para criar soluções tecnológicas escaláveis e arquiteturas de sistemas eficientes.",
    type: "education"
  }
];

const Experience = () => {
  return (
    <PageTransition2>
      <div className="experience-page">
        <header className="experience-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="experience-title"
          >
            MINHA JORNADA
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