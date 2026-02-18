import React, { useEffect, useState } from "react";
import PageTransition3 from "../components/PageTransition3";
import { motion } from "framer-motion";
import "../styles/About.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  // Aplica o cursor personalizado
  useEffect(() => {
    document.body.style.cursor = '';
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  // Função para tocar o áudio com validação
  const playSound = (soundFile) => {
    if (isPlaying) return; // Se já estiver tocando, ignora o clique

    setIsPlaying(true);
    const audio = new Audio(`${process.env.PUBLIC_URL}/audio/${soundFile}`);

    audio.play().catch(error => {
      console.error("Erro ao reproduzir áudio:", error);
      setIsPlaying(false); // Reseta estado em caso de erro
    });

    audio.onended = () => {
      setIsPlaying(false); // Libera o clique quando o áudio termina
    };
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom ease for smooth entry
      },
    }),
  };

  return (
    <PageTransition3>
      <div id="about" className="about-page">
        <div className="about-container">
          {/* ... existing content ... */}
          {/* Seção da Esquerda: Texto */}
          <div className="about-content">
            <motion.div
              className="about-header"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInUp}
            >
              <h1 className="about-title">{t.title} <span className="outline-text">{t.titleHighlight}</span></h1>
            </motion.div>

            <motion.div
              className="about-bio"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
            >
              <p dangerouslySetInnerHTML={{ __html: t.bio1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.bio2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.bio3 }} />
            </motion.div>

            <motion.div
              className="about-actions"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
            >
              {/* Ícones Interativos */}
              <div className="about-icons">
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src={`${process.env.PUBLIC_URL}/icons/spider.png`} alt="Spider-Man" onClick={() => playSound("spider.MP3")} />
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src={`${process.env.PUBLIC_URL}/icons/95.png`} alt="95" className="icon-95" onClick={() => playSound("katchau.mp3")} />
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src={`${process.env.PUBLIC_URL}/icons/thorfin.png`} alt="Thorfinn" className="thorfinn-icon" onClick={() => playSound("thorfin.MP3")} />
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src={`${process.env.PUBLIC_URL}/icons/flash.png`} alt="Flash" className="flash-icon" onClick={() => playSound("flash.MP3")} />
              </div>

              <div className="music-status">
                <span className="listening-label">{t.listeningLabel}</span>
                <a href="https://open.spotify.com/user/22lseke5ukek7jgd4sepaacoy?si=81add31631224262" target="_blank" rel="noopener noreferrer" className="spotify-link">
                  Spotify
                </a>
              </div>
            </motion.div>
          </div>

          {/* Seção da Direita: Imagem */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img src={`${process.env.PUBLIC_URL}/icons/fotoabout.jpg`} alt="João Marcos" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition3>
  );
};

export default About;
