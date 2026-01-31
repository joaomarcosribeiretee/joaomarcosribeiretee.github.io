import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import "../styles/Home.css";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";

const Home = () => {
  const nameText = "JOÃO MARCOS";

  // Configuração da animação "fluida e leve"
  const springTransition = (delay) => ({
    type: "spring",
    stiffness: 100, // Suavidade da mola
    damping: 20,    // Controle da oscilação
    mass: 1,
    delay: delay
  });

  return (
    <>
      {/* Onda animada no rodapé - Animação via CSS */}
      <div className="wave-container" style={{ position: "fixed" }}>
        <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#737373" fillOpacity="0.4" d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,245.3C672,213,768,139,864,133.3C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <PageTransition>
        <div className="home-container">
          <main className="content">
            <div className="mobile-only">
              <SocialIcons />
            </div>

            <motion.div
              className="home-title-wrapper"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition(0.1)}
            >
              <h1 className="home-title">
                OLÁ, EU SOU{" "}
                <motion.span
                  className="highlight-name"
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(255,255,255)" }}
                >
                  {nameText}
                </motion.span>
              </h1>
            </motion.div>

            <motion.h2
              className="home-subtitle"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition(0.3)}
              whileHover={{ scale: 1.05, color: "#ffffff", cursor: "default" }}
            >
              Desenvolvedor Full Stack | QA (Automação de Testes)
            </motion.h2>

            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition(0.5)}
              whileHover={{ scale: 1.05, color: "#e0e0e0", cursor: "default" }}
            >
              Aplicando <strong>Inteligência Artificial</strong> para elevar o padrão de desenvolvimento e automação.
            </motion.p>

            <motion.div
              className="home-buttons"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition(0.7)}
            >
              <Link to="/projects" className="btn-custom btn-primary">
                <span className="arrow">→</span> ver meus projetos
              </Link>
              <Link to="/about" className="btn-custom btn-secondary">
                <span className="arrow">→</span> sobre mim
              </Link>
            </motion.div>
          </main>
        </div>
      </PageTransition>
    </>
  );
};

export default Home;
