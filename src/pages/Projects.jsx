import React, { useState, useEffect } from "react";
import PageTransition5 from "../components/PageTransition5";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaTimes } from "react-icons/fa";
import "../styles/Projects.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

// --- Dados dos Projetos (PT-BR) ---
const projectsData = [
  {
    id: "tcc-fitness",
    title: "TCC: AI FITNESS SYSTEM",
    year: "2025",
    context: "Mobile App & IA",
    role: "Full Stack & IA Eng.",
    shortDesc: "Gestão inteligente de treinos e nutrição com GPT-4o.",
    longDesc: `
      Projeto de Conclusão de Curso que explora o potencial de <strong>LLMs (Large Language Models)</strong> na ultra-personalização de saúde.
      O sistema utiliza um modelo <strong>GPT-4o Mini com Fine-Tuning supervisionado</strong> para atuar como um treinador biomecânico e nutricionista especialista.
      <br/><br/>
      Diferente de apps comuns, ele realiza uma anamnese clínica completa e utiliza a IA para ajustar protocolos de treinamento e dieta em tempo real, respeitando todas as restrições e objetivos únicos de cada usuário.
    `,
    fullDetails: `
      <h3>🧠 Inteligência Artificial Especializada</h3>
      <p>
        O foco do uso de IA neste projeto foi a precisão e segurança.
      </p>
      <ul>
        <li><strong>Compreensão de Limitações:</strong> O sistema foi treinado para entender profundamente as especificidades do usuário (lesões, nível de experiência, tempo disponível). Ele gera planos totalmente adaptados, garantindo que cada recomendação seja segura e eficiente.</li>
        <li><strong>Fine-Tuning e Precisão:</strong> Graças ao refinamento do modelo, alcançamos uma precisão elevada nos cálculos de macronutrientes e volume de treino, eliminando as "alucinações" comuns e garantindo a confiabilidade das prescrições.</li>
      </ul>

      <h3>🏗️ Arquitetura & Engenharia de Software</h3>
      <p>
        Construído sobre os pilares da <strong>Clean Architecture</strong> para garantir desacoplamento total.
      </p>
      <ul>
        <li><strong>Backend (Python/FastAPI):</strong> Arquitetura assíncrona otimizada para alta concorrência. Utiliza <em>Repository Pattern</em> para abstração de dados e injeção de dependência via contêineres.</li>
        <li><strong>Frontend (React Native):</strong> Implementação rigorosa do padrão MVVM (Model-View-ViewModel), garantindo que a lógica de apresentação não contamine a UI, facilitando testes unitários.</li>
      </ul>

      <h3>📱 Experiência do Usuário (App)</h3>
      <p>
        Funciona de forma intuitiva: o usuário responde a uma anamnese e a IA constrói o plano ideal.
      </p>
      <ul>
        <li><strong>Treino & Execução:</strong> O usuário visualiza seu treino e pode executá-lo em tempo real, registrando cargas e acompanhando sua progressão visualmente ao longo do tempo.</li>
        <li><strong>Dieta Integrada:</strong> A dieta aparece de forma clara, com as refeições calculadas especificamente para o objetivo atual.</li>
      </ul>
    `,
    stack: ["React Native", "TypeScript", "Python", "FastAPI", "OpenAI API", "MySQL"],
    repoLink: "https://github.com/joaomarcosribeiretee/tcc-app-fitness",
    videoLink: "https://www.youtube.com/embed/b5MFeshOD44?si=O_8z1jXdOhB27jmK",
    team: ["João Marcos Ribeirete Garbelini", "Gabriel Souza de Carvalho", "Jefferson da Silva de Souza"],
    previewColor: "linear-gradient(135deg, #FF4500 0%, #8B0000 100%)", // Orange/Red vibe for fitness
    image: "/projects/tcc-fitness.jpg" // Image path
  },
  {
    id: "marketplace",
    title: "MARKETPLACE",
    year: "2024",
    context: "Sistemas Web",
    role: "Backend & Database",
    shortDesc: "Plataforma completa de e-commerce com autenticação e gestão de estoque.",
    longDesc: `
      Ecossistema de compra e venda desenvolvido com foco na <strong>integridade de dados e segurança</strong>.
      <br/><br/>
      O sistema permite que usuários criem contas, gerenciem seus próprios anúncios de produtos e realizem transações simuladas, tudo suportado por um banco de dados relacional robusto que garante a consistência do estoque.
    `,
    fullDetails: `
      <h3>🔐 Segurança & Autenticação</h3>
      <p>
        Implementação de um sistema de login seguro "do zero", sem depender de serviços externos.
      </p>
      <ul>
        <li><strong>Criptografia:</strong> Senhas armazenadas com hash + salt (Bcrypt), protegendo contra ataques de rainbow table.</li>
        <li><strong>Proteção de Rotas:</strong> Middleware de autenticação que garante que apenas usuários logados possam criar/editar anúncios.</li>
      </ul>

      <h3>💾 Arquitetura de Dados (MySQL)</h3>
      <p>
        Modelagem relacional complexa para sustentar o fluxo de marketplace.
      </p>
      <ul>
        <li><strong>Relacionamentos:</strong> Estrutura robusta conectando <em>Users</em>, <em>Products</em> e <em>Orders</em> (1:N e N:N).</li>
        <li><strong>Transações Atômicas:</strong> Garantia de que o estoque é debitado apenas se o pedido for confirmado com sucesso.</li>
      </ul>

      <h3>🚀 Funcionalidades do Produto</h3>
      <ul>
        <li><strong>Gestão de Anúncios:</strong> CRUD completo (Create, Read, Update, Delete) com upload de imagens.</li>
        <li><strong>Carrinho de Compras:</strong> Persistência de estado da sessão do usuário.</li>
      </ul>
    `,
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "Bcrypt", "EJS"],
    repoLink: "https://github.com/joaomarcosribeiretee/marketplace",
    videoLink: "https://www.youtube.com/embed/fIJb9g500FM?si=ftvl1HlMz3wYP3ov",
    team: ["João Marcos Ribeirete", "Andre Cavalcanti", "Vitor Assunção", "Felipe Espel", "Gustavo Ioels"],
    previewColor: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)", // Blue/Dark Theme
    image: "/projects/marketplace.jpg"
  },
  {
    id: "todo-list",
    title: "TO-DO LIST APP",
    year: "2025",
    context: "Mobile Android",
    role: "Android Developer",
    shortDesc: "Sistema de produtividade com 5 módulos e UX nativa.",
    longDesc: `
      Aplicação Android robusta, construída com <strong>Java</strong>, focada na arquitetura de múltiplas Activities e navegação por Intents explícitas.
      <br/><br/>
      O projeto implementa um fluxo completo de criação, visualização e gestão de tarefas, com validação de dados em tempo real e feedback visual instantâneo (Toasts), garantindo uma experiência de usuário fluída e sem falhas.
    `,
    fullDetails: `
      <h3>📱 Engenharia Mobile & Arquitetura</h3>
      <p>
        O diferencial deste projeto é a separação clara de responsabilidades em 5 telas distintas, cada uma com sua lógica de negócio isolada:
      </p>
      <ul>
        <li><strong>Dashboard (Main):</strong> Navegação centralizada com cards coloridos e ícones intuitivos.</li>
        <li><strong>Cadastro (Add):</strong> Formulários com validação de entrada e data de vencimento.</li>
        <li><strong>Listagem (View):</strong> RecyclerView otimizado para scroll e performance.</li>
        <li><strong>Detalhes (Detail):</strong> Visualização expandida com opções de conclusão.</li>
        <li><strong>Ajustes (Settings):</strong> Switches funcionais para controle de notificações e tema.</li>
      </ul>

      <h3>🛠️ Stack Tecnológica</h3>
      <ul>
        <li><strong>Java & SDK Android:</strong> Desenvolvimento puramente nativo para máxima performance e controle do ciclo de vida.</li>
        <li><strong>XML Layouts:</strong> Uso avançado de ConstraintLayout e Componentes Material Design.</li>
        <li><strong>Gradle:</strong> Gerenciamento eficiente de dependências e build.</li>
      </ul>
    `,
    stack: ["Java", "Android Studio", "XML", "Material Design"],
    repoLink: "https://github.com/joaomarcosribeiretee/ToDoListApp_Redesigned",
    videoLink: null,
    team: [
      "João Marcos Ribeirete Garbelini",
      "Guilherme Diniz Leocadio"
    ],
    previewColor: "linear-gradient(135deg, #3DDC84 0%, #2A9D8F 100%)", // Android Green
    image: "/projects/todolist2.png"
  },
  {
    id: "ultrafit",
    title: "ULTRAFIT GYM",
    year: "2024",
    context: "Aplicação Web",
    role: "Full Stack Team",
    shortDesc: "Gestão completa de alunos, treinos e avaliações físicas.",
    longDesc: `
      Plataforma web modernizada para substituir planilhas e métodos manuais em academias. 
      <br/><br/>
      Centraliza o gerenciamento de alunos, a prescrição de treinos personalizados e o histórico de avaliações físicas, proporcionando eficiência operacional para os professores.
    `,
    fullDetails: `
      <h3>📊 Gestão & Eficiência</h3>
      <p>
        O sistema resolve a desorganização de fichas de papel e planilhas descentralizadas.
      </p>
      <ul>
        <li><strong>Prescrição de Treinos:</strong> Interface intuitiva para montar fichas de treino com grupos musculares e exercícios pré-cadastrados.</li>
      </ul>

      <h3>💻 Stack Tecnológica</h3>
      <ul>
        <li><strong>Frontend (React):</strong> Interface reativa focada na usabilidade do profissional de educação física.</li>
        <li><strong>Backend (Node/Express):</strong> API RESTful que gerencia as regras de negócio e persistência.</li>
      </ul>
    `,
    stack: ["React", "Node.js", "Express", "MySQL"],
    repoLink: "https://github.com/joaomarcosribeiretee/ultrafit-academy-system",
    videoLink: "https://www.youtube.com/embed/b7eMImkw7Os?si=i0IQfqoTKufPEbp0",
    team: [
      "João Marcos Ribeirete Garbelini",
      "André Cavalcanti Teles Dos Santos",
      "Felipe Casagrande Espel",
      "Guilherme Diniz Leocadio",
      "Gustavo Leite Ioels",
      "Vitor Assunção Silva"
    ],
    previewColor: "linear-gradient(135deg, #008080 0%, #004d4d 100%)", // Teal/Cyan vibe
    image: "/projects/ultra-fit.jpg"
  },
  {
    id: "ligamaster",
    title: "LIGAMASTER",
    year: "2024",
    context: "Aplicação Web",
    role: "Full Stack Developer",
    shortDesc: "Plataforma completa para organização de campeonatos entre amigos.",
    longDesc: `
      Sistema web robusto para gerenciamento de torneios esportivos, permitindo criar e administrar campeonatos completos com <strong>times, jogos e tabelas</strong>.
      <br/><br/>
      A plataforma oferece ferramentas para cadastro de participantes, geração automática de chaveamentos, registro de resultados e acompanhamento de estatísticas em tempo real, tornando a organização de competições entre amigos simples e profissional.
    `,
    fullDetails: `
      <h3>⚽ Gestão Completa de Campeonatos</h3>
      <p>
        O Ligamaster centraliza todas as funcionalidades necessárias para organizar torneios do início ao fim:
      </p>
      <ul>
        <li><strong>Criação de Campeonatos:</strong> Configure torneios personalizados com diferentes formatos (eliminatória, pontos corridos, grupos).</li>
        <li><strong>Gestão de Times:</strong> Cadastro completo de equipes participantes com informações detalhadas.</li>
        <li><strong>Controle de Jogos:</strong> Registro de partidas, resultados e estatísticas individuais.</li>
        <li><strong>Tabelas Automáticas:</strong> Geração dinâmica de classificações e chaveamentos baseados nos resultados.</li>
        <li><strong>Estatísticas em Tempo Real:</strong> Acompanhamento de desempenho, artilharia e histórico de confrontos.</li>
      </ul>

      <h3>🛠️ Stack Tecnológica</h3>
      <ul>
        <li><strong>Backend (Node.js + Express):</strong> API RESTful para gerenciamento de dados e lógica de negócio.</li>
        <li><strong>Banco de Dados (MySQL):</strong> Persistência relacional otimizada para consultas complexas de estatísticas.</li>
        <li><strong>Frontend (EJS + Bootstrap):</strong> Interface responsiva e intuitiva para administração dos torneios.</li>
        <li><strong>Algoritmos Personalizados:</strong> Lógica de chaveamento automático e cálculo de classificações.</li>
      </ul>
    `,
    stack: ["Node.js", "Express", "MySQL", "EJS", "Bootstrap"],
    repoLink: "https://github.com/joaomarcosribeiretee/Gerenciador-de-Campeonatos-",
    videoLink: "https://www.youtube.com/embed/nuB1MMiZdAw?si=GF5dH2z5jPHLWg0",
    team: [
      "João Marcos Ribeirete Garbelini",
      "André Cavalcanti Teles Dos Santos",
      "Vitor Assunção Silva"
    ],
    previewColor: "linear-gradient(135deg, #004d00 0%, #002200 100%)",
    image: "/projects/ligamaster.jpg"
  },

  {
    id: "flashcards",
    title: "FLASHCARDS",
    year: "2022",
    context: "App Multiplataforma",
    role: "Mobile & Desktop Developer",
    shortDesc: "Ferramenta de estudo com flashcards para mobile e desktop.",
    longDesc: `
      Aplicação multiplataforma para criação e revisão de <strong>flashcards</strong>, disponível tanto em <strong>dispositivos móveis</strong> quanto em <strong>desktop</strong>.
      <br/><br/>
      O app permite que estudantes criem, organizem e revisem conteúdos de forma eficiente através de cartões de memorização, facilitando o aprendizado ativo e a retenção de informações em qualquer lugar.
    `,
    fullDetails: `
      <h3>📱 Multiplataforma Real</h3>
      <p>
        O Flashcards foi desenvolvido para funcionar perfeitamente em diferentes plataformas, oferecendo a mesma experiência de usuário em todos os dispositivos:
      </p>
      <ul>
        <li><strong>Versão Mobile:</strong> Aplicativo nativo para Android e iOS, permitindo estudo em movimento.</li>
        <li><strong>Versão Desktop:</strong> Aplicação standalone para Windows, macOS e Linux, ideal para sessões de estudo mais longas.</li>
        <li><strong>Sincronização:</strong> Dados compartilhados entre plataformas para continuidade do aprendizado.</li>
      </ul>

      <h3>🎯 Funcionalidades de Estudo</h3>
      <ul>
        <li><strong>Criação de Flashcards:</strong> Interface intuitiva para criar cartões com perguntas e respostas.</li>
        <li><strong>Organização por Decks:</strong> Agrupe flashcards por matérias ou tópicos específicos.</li>
        <li><strong>Modo de Revisão:</strong> Sistema de repetição espaçada para otimizar a memorização.</li>
        <li><strong>Estatísticas de Progresso:</strong> Acompanhe seu desempenho e evolução nos estudos.</li>
        <li><strong>Offline First:</strong> Funciona sem conexão com internet, sincronizando quando disponível.</li>
      </ul>

      <h3>🛠️ Stack Tecnológica</h3>
      <ul>
        <li><strong>Mobile (React Native + Expo):</strong> Desenvolvimento cross-platform para iOS e Android.</li>
        <li><strong>Desktop (Electron):</strong> Aplicação desktop multiplataforma com tecnologias web.</li>
        <li><strong>Banco de Dados (SQLite):</strong> Persistência local eficiente em todas as plataformas.</li>
        <li><strong>Code Sharing:</strong> Lógica de negócios compartilhada entre mobile e desktop.</li>
      </ul>
    `,
    stack: ["React Native", "Electron", "SQLite", "Expo"],
    repoLink: "https://github.com/joaomarcosribeiretee/Flashcards-Desktop",
    videoLink: "https://www.youtube.com/embed/VL5EffGGRXs?si=9KOStMz3-Ort6M-L",
    team: [
      "João Marcos Ribeirete Garbelini",
      "Felipe Espel",
      "Gustavo Leite Ioels",
      "Gabriel Souza de Carvalho"
    ],
    previewColor: "linear-gradient(135deg, #4b0082 0%, #1a0033 100%)",
    image: "/projects/flashcards.png"
  }
];

// --- Modal Interno Component ---
const DetailModal = ({ isOpen, onClose, content, title, detailsLabel }) => {
  if (!isOpen) return null;
  return (
    <div className="text-modal-overlay" onClick={onClose}>
      <motion.div
        className="text-modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <button className="text-modal-close" onClick={onClose}><FaTimes /></button>
        <h2 className="text-modal-title">{title} - {detailsLabel}</h2>
        <div className="text-modal-body" dangerouslySetInnerHTML={{ __html: content }}></div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  // Helper function to get translated project data
  const getProjectData = (projectId) => {
    const projectMap = {
      'tcc-fitness': t.tccFitness,
      'marketplace': t.marketplace,
      'todo-list': t.todoList,
      'ultrafit': t.ultrafit,
      'ligamaster': t.ligamaster,
      'flashcards': t.flashcards
    };
    return projectMap[projectId] || {};
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const currentPreview = projectsData.find(p => p.id === hoveredProject);

  return (
    <PageTransition5>
      <div id="projects" className="projects-page-container">

        {/* --- LIST VIEW (Esquerda) --- */}
        <div className="projects-list-wrapper">
          <header className="projects-header-minimal">
            <h1 className="list-main-title">{t.title}</h1>
            <span className="list-subtitle">{t.subtitle}</span>
          </header>

          <div className="projects-list">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-list-item"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                whileHover={{ x: 20 }}
              >
                <div className="project-item-content">
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-info-group">
                    <h2 className="project-list-title">{getProjectData(project.id).title}</h2>
                    <span className="project-list-category">{getProjectData(project.id).context}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- IMAGE PREVIEW (Direita / Fundo) --- */}
        <div className="project-preview-stage">
          <AnimatePresence mode="wait">
            {currentPreview && (
              <motion.div
                key={currentPreview.id}
                className="preview-card"
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  background: currentPreview.previewColor,
                  backgroundImage: currentPreview.image ? `url(${currentPreview.image})` : currentPreview.previewColor,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {!currentPreview.image && (
                  <span className="preview-placeholder-text">{getProjectData(currentPreview.id).title}</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- DETAIL OVERLAY (Case Study) --- */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-detail-overlay"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >

              <button className="close-detail-btn" onClick={() => { setSelectedProject(null); setShowDetailModal(false); }}>
                <FaArrowLeft /> {t.close}
              </button>

              <div className="detail-content">
                <div className="detail-hero">
                  <h1 className="detail-title">{getProjectData(selectedProject.id).title}</h1>
                  <div className="detail-meta">
                    <span className="meta-item"><strong>{t.year}:</strong> {getProjectData(selectedProject.id).year}</span>
                    <span className="meta-item"><strong>{t.context}:</strong> {getProjectData(selectedProject.id).context}</span>
                    <span className="meta-item"><strong>{t.role}:</strong> {getProjectData(selectedProject.id).role}</span>
                  </div>
                </div>

                <div className="detail-grid">
                  <div className="detail-left">
                    <h3 className="section-label">{t.overview}</h3>
                    <p className="detail-description" dangerouslySetInnerHTML={{ __html: getProjectData(selectedProject.id).longDesc }}></p>

                    {selectedProject.team && (
                      <div className="detail-team" style={{ marginBottom: '2rem' }}>
                        <h3 className="section-label">{t.team}</h3>
                        <p style={{ color: '#aaa', fontFamily: "'Inria Sans', sans-serif" }}>
                          {selectedProject.team.join(", ")}
                        </p>
                      </div>
                    )}
                    <div className="detail-actions">

                      {selectedProject.repoLink && (
                        <a href={selectedProject.repoLink} target="_blank" rel="noreferrer" className="action-btn">
                          <FaGithub /> {t.githubRepo}
                        </a>
                      )}

                      <button
                        className="action-btn highlight"
                        onClick={() => setShowDetailModal(true)}
                      >
                        {t.viewDetails}
                      </button>
                    </div>
                  </div>

                  <div className="detail-right" id="techs">
                    <h3 className="section-label">{t.stack}</h3>
                    <div className="tech-tags">
                      {selectedProject.stack.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="media-preview">
                      {selectedProject.videoLink ? (
                        <div className="video-wrapper">
                          <iframe
                            src={selectedProject.videoLink}
                            title={getProjectData(selectedProject.id).title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="no-media-placeholder">
                          <span>Preview Visual em Breve</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="detail-footer">
                  <p>{t.footer} <a href="#/contact">{t.footerLink}</a></p>
                </div>
              </div>

              {/* Text Modal Rendering */}
              <AnimatePresence>
                {showDetailModal && (
                  <DetailModal
                    isOpen={showDetailModal}
                    onClose={() => setShowDetailModal(false)}
                    content={getProjectData(selectedProject.id).fullDetails}
                    title={getProjectData(selectedProject.id).title}
                    detailsLabel={t.detailsLabel}
                  />
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition5>
  );
};

export default Projects;
