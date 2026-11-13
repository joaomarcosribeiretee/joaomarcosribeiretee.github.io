// Project facts that do not change with language. Copy lives in src/translations.
// Covers are generated from scripts/covers (see scripts/covers/README.md).
//
// Optional per project:
//   quality: { pt: string[], en: string[] }  How it was tested/evaluated. Bullets are
//   shown in the case modal under "Destaques"; the block is hidden while the lists are empty.

const GH = "https://github.com/joaomarcosribeiretee";

export const PROJECT_FILTERS = ["all", "ai", "web", "mobile"];

export const projects = [
  {
    id: "relampago",
    quality: { pt: [], en: [] }, // TODO(joao): preencher como foi testado/avaliado
    year: "2026",
    tags: ["ai", "web"],
    stack: ["Next.js 16", "TypeScript", "OpenAI", "Google Calendar API", "Tailwind"],
    repo: `${GH}/relampago-ai-schedule`,
    video: null,
    team: ["João Marcos Ribeirete Garbelini"],
  },
  {
    id: "nublar",
    year: "2026",
    tags: ["web"],
    stack: ["TypeScript", "Electron", "React", "Vite", "Prisma", "PostgreSQL", "Recharts", "Turborepo"],
    repo: `${GH}/nublar-finance`,
    video: null,
    team: ["João Marcos Ribeirete Garbelini"],
  },
  {
    id: "ironsynk",
    year: "2026",
    tags: ["mobile"],
    stack: ["Expo", "React Native", "TypeScript", "Fastify", "Prisma", "Supabase", "Redis", "Zod"],
    repo: `${GH}/ironsynk`,
    video: null,
    team: ["João Marcos Ribeirete Garbelini"],
  },
  {
    id: "medprotocol",
    quality: { pt: [], en: [] }, // TODO(joao): preencher como foi testado/avaliado
    year: "2026",
    tags: ["ai"],
    stack: ["Python", "LangChain", "LangGraph", "LoRA / QLoRA", "SQLite", "Streamlit", "pytest"],
    repo: `${GH}/tech-challenge-fiap-medprotocol-ai`,
    video: null,
    team: ["João Marcos Ribeirete Garbelini"],
  },
  {
    id: "rotas",
    quality: { pt: [], en: [] }, // TODO(joao): preencher como foi testado/avaliado
    year: "2026",
    tags: ["ai"],
    stack: ["Python", "Algoritmo Genético", "OpenAI", "Folium", "Matplotlib", "Jupyter"],
    repo: `${GH}/tech-challenge-fiap-rotas-medicas`,
    video: "https://www.youtube-nocookie.com/embed/04i3900doKs",
    team: ["João Marcos Ribeirete Garbelini"],
  },
  {
    id: "heart",
    year: "2026",
    tags: ["ai"],
    stack: ["Python", "scikit-learn", "XGBoost", "SHAP", "Pandas", "Docker"],
    repo: `${GH}/tech-challenge-fiap-heart-disease`,
    video: "https://www.youtube-nocookie.com/embed/rHZVZQ1QG5Q",
    team: ["João Marcos Ribeirete Garbelini"],
  },
  {
    id: "tccFitness",
    year: "2025",
    tags: ["ai", "mobile"],
    stack: ["React Native", "TypeScript", "Python", "FastAPI", "OpenAI API", "MySQL"],
    repo: `${GH}/tcc-app-fitness`,
    video: "https://www.youtube-nocookie.com/embed/b5MFeshOD44",
    team: ["João Marcos Ribeirete Garbelini", "Gabriel Souza de Carvalho", "Jefferson da Silva de Souza"],
  },
  {
    id: "todoList",
    year: "2025",
    tags: ["mobile"],
    stack: ["Java", "Android Studio", "XML", "Material Design"],
    repo: `${GH}/ToDoListApp_Redesigned`,
    video: null,
    team: ["João Marcos Ribeirete Garbelini", "Guilherme Diniz Leocadio"],
  },
  {
    id: "ultrafit",
    year: "2024",
    tags: ["web"],
    stack: ["React", "Node.js", "Express", "MySQL"],
    repo: `${GH}/ultrafit-academy-system`,
    video: "https://www.youtube-nocookie.com/embed/b7eMImkw7Os",
    team: [
      "João Marcos Ribeirete Garbelini",
      "André Cavalcanti Teles Dos Santos",
      "Felipe Casagrande Espel",
      "Guilherme Diniz Leocadio",
      "Gustavo Leite Ioels",
      "Vitor Assunção Silva",
    ],
  },
  {
    id: "marketplace",
    year: "2024",
    tags: ["web"],
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "Bcrypt", "EJS"],
    repo: `${GH}/marketplace`,
    video: "https://www.youtube-nocookie.com/embed/fIJb9g500FM",
    team: ["João Marcos Ribeirete Garbelini", "André Cavalcanti", "Vitor Assunção", "Felipe Espel", "Gustavo Ioels"],
  },
  {
    id: "ligamaster",
    year: "2024",
    tags: ["web"],
    stack: ["Node.js", "Express", "MySQL", "EJS", "Bootstrap"],
    repo: `${GH}/Gerenciador-de-Campeonatos-`,
    video: "https://www.youtube-nocookie.com/embed/nuB1MMiZdAw",
    team: ["João Marcos Ribeirete Garbelini", "André Cavalcanti Teles Dos Santos", "Vitor Assunção Silva"],
  },
  {
    id: "flashcards",
    year: "2022",
    tags: ["mobile"],
    stack: ["React Native", "Electron", "SQLite", "Expo"],
    repo: `${GH}/Flashcards-Desktop`,
    video: "https://www.youtube-nocookie.com/embed/VL5EffGGRXs",
    team: ["João Marcos Ribeirete Garbelini", "Felipe Espel", "Gustavo Leite Ioels", "Gabriel Souza de Carvalho"],
  },
].map((p) => ({ ...p, cover: `${process.env.PUBLIC_URL}/projects/${p.id}.webp` }));
