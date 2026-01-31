import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PageTransition5 from "../components/PageTransition5";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Header.css";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "TCC: ARQUITETURA & IA",
    subtitle: "PROJETO ACADÊMICO",
    description: `
      Projeto de conclusão de curso focado na interseção entre <strong>Arquitetura de Software</strong> e <strong>Inteligência Artificial</strong>.
      <br/><br/>
      Desenvolvido para explorar como algoritmos inteligentes podem otimizar decisões arquiteturais e processamento de dados.
      Envolve o uso de <strong>Python, Machine Learning</strong> e arquiteturas modernas para criar soluções preditivas e eficientes.
      Um marco acadêmico que demonstra capacidade de pesquisa e implementação complexa.
    `,
    link: "https://github.com/joaomarcosribeiretee",
    media: { type: "youtube", src: "" },
    isHighlight: true,
  },
  {
    title: "LIGAMASTER",
    subtitle: "APLICAÇÃO WEB",
    description: `
      Aplicativo para criação e gestão de campeonatos esportivos, permitindo organizar times, partidas e tabelas de desempenho de forma prática e eficiente.
      <br/><br/>
      <strong>Desenvolvido com:</strong> HTML, CSS, JavaScript, Express e MySQL, proporcionando funcionalidades como cadastro de campeonatos, gerenciamento de times e jogadores, geração automática de partidas e acompanhamento de desempenho em tempo real.
    `,
    link: "https://github.com/joaomarcosribeiretee/Gerenciador-de-Campeonatos-",
    media: { type: "youtube", src: "https://www.youtube.com/embed/nuB1MMiZdAw?si=GF6dH2z5j9PHLWg0" },
  },
  {
    title: "MARKETPLACE",
    subtitle: "APLICAÇÃO WEB",
    description: `
      Marketplace online para compra e venda de produtos tecnológicos.
      <br/><br/>
      <strong>Desenvolvido com:</strong> HTML, CSS, JavaScript, Express, MySQL, integração com bcrypt para hashing de senhas e funcionalidades como registro de usuários, login, cadastro de produtos e carrinho de compras.
    `,
    link: "https://github.com/joaomarcosribeiretee/marketplace",
    media: { type: "youtube", src: "https://www.youtube.com/embed/fIJb9g500FM?si=fc8X6-HKy7w7VI9Q" }
  },
  {
    title: "FLASHCARDS",
    subtitle: "APLICAÇÃO MOBILE E DESKTOP",
    description: `
      Aplicativo para criação, organização e estudo de flashcards personalizados.
      <br/><br/>
      <strong>Desenvolvido com:</strong> HTML, CSS, JavaScript e Electron para a versão desktop, e React Native para a versão mobile, garantindo uma experiência fluida em múltiplas plataformas.
    `,
    link: "https://github.com/joaomarcosribeiretee/Flashcards-MOBILE",
    media: { type: "youtube", src: "https://www.youtube.com/embed/VL5EffGGRXs?si=9KOStMz3-Ort6M-L" },
  },
];

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);
  }, []);

  return (
    <PageTransition5>
      <div className={`projects-container ${fadeIn ? "fade-in" : "fade-out"}`}>
        <div className="corner-decor2">
          <img src={`${process.env.PUBLIC_URL}/icons/Retangulos.png`} alt="Decoração" />
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="projects-swiper"
        >
          <SwiperSlide className="first-slide">
            <div className="content-wrapper">
              <h1 className="projects-title">PORTFOLIO & PROJETOS</h1>
              <p className="projects-description">
                Aqui estão alguns dos projetos que desenvolvi, cada um focado em atender demandas específicas com soluções criativas.
                Se precisar de algo exclusivo ou quiser discutir sua ideia, entre em <span className="highlight">contato</span> comigo!
              </p>
              <a href="https://github.com/joaomarcosribeiretee" className="projects-link" target="_blank" rel="noopener noreferrer">
                Ver Projetos &gt;
              </a>
            </div>
          </SwiperSlide>

          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className={`project-slide ${project.isHighlight ? "highlight-project" : ""}`}>
                <div className="project-text">
                  <h3 className="project-subtitle">{project.subtitle}</h3>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects-link">
                    {project.isHighlight ? "Ver Detalhes >" : "Acessar o App >"}
                  </a>
                </div>
                <div className="project-media-container">
                  <div className="video-container">
                    {project.media.src ? (
                      <iframe
                        className="youtube-iframe"
                        id={`youtube-${index}`}
                        src={project.media.src}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      /* Fallback for projects without video (like TCC if not ready) */
                      <div className="media-placeholder">
                        <span>Em Breve - Documentação Visual</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="wave-container2">
          <svg className="wave-svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#737373" fillOpacity="0.6" d="M0,256L205.7,288L411.4,128L617.1,256L822.9,160L1028.6,320L1234.3,256L1440,32L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </PageTransition5>
  );
};

export default Projects;
