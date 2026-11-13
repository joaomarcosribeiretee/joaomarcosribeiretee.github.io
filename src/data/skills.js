// Skills section config. Category titles/descriptions live in src/translations
// (skills.categories[id]); skill labels are product names and stay as-is.
//
// Icons: one monochrome set. Simple Icons (react-icons/si) for official logos;
// Lucide (react-icons/lu) where there is no logo or the logo is unreadable at 16px.

import {
  SiOpenai, SiLangchain, SiStreamlit, SiClaude, SiPostgresql, SiVercel,
  SiCypress, SiPercy, SiPostman, SiJira,
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiExpo, SiElectron,
  SiNodedotjs, SiPython, SiFastify, SiFastapi, SiPrisma, SiSupabase,
  SiGit, SiGithub, SiDocker, SiFigma, SiPandas, SiScikitlearn, SiJupyter,
} from "react-icons/si";
import {
  LuWorkflow, LuPlug, LuBoxes, LuDrama, LuFlaskConical, LuGauge, LuSearchCheck,
  LuChartLine, LuActivity, LuRoute, LuDatabase, LuMousePointer2,
} from "react-icons/lu";

/**
 * @typedef {{ id: string, label: string, icon: import("react-icons").IconType, primary?: boolean, evals?: boolean }} Skill
 * @typedef {{ id: string, size: "wide" | "normal", skills: Skill[] }} SkillCategory
 */

/** @type {SkillCategory[]} */
export const SKILL_CATEGORIES = [
  {
    id: "ai",
    size: "wide",
    skills: [
      { id: "openai", label: "OpenAI API", icon: SiOpenai, primary: true },
      { id: "langchain", label: "LangChain", icon: SiLangchain, primary: true },
      { id: "langgraph", label: "LangGraph", icon: LuWorkflow },
      { id: "streamlit", label: "Streamlit", icon: SiStreamlit },
      // optional AI items (section 0 of the brief)
      { id: "claude-api", label: "Claude API", icon: SiClaude },
      { id: "mcp", label: "MCP", icon: LuPlug },
      { id: "pgvector", label: "pgvector", icon: SiPostgresql },
      { id: "embeddings", label: "Embeddings", icon: LuBoxes },
      { id: "vercel-ai-sdk", label: "Vercel AI SDK", icon: SiVercel },
    ],
  },
  {
    id: "qa",
    size: "normal",
    skills: [
      { id: "playwright", label: "Playwright", icon: LuDrama, primary: true },
      { id: "cypress", label: "Cypress", icon: SiCypress },
      { id: "percy", label: "Percy", icon: SiPercy },
      { id: "postman", label: "Postman", icon: SiPostman },
      { id: "jira", label: "Jira", icon: SiJira },
      // optional AI evals (section 0). With none left, the card switches to
      // skills.categories.qa.descriptionNoEvals automatically.
      { id: "promptfoo", label: "Promptfoo", icon: LuFlaskConical, evals: true },
      { id: "deepeval", label: "DeepEval", icon: LuGauge, evals: true },
      { id: "ragas", label: "Ragas", icon: LuSearchCheck, evals: true },
      { id: "langsmith", label: "LangSmith", icon: LuChartLine, evals: true },
      { id: "langfuse", label: "Langfuse", icon: LuActivity, evals: true },
    ],
  },
  {
    id: "frontend",
    size: "normal",
    skills: [
      { id: "react", label: "React", icon: SiReact, primary: true },
      { id: "react-native", label: "React Native", icon: SiReact },
      { id: "nextjs", label: "Next.js", icon: SiNextdotjs },
      { id: "typescript", label: "TypeScript", icon: SiTypescript },
      { id: "javascript", label: "JavaScript", icon: SiJavascript },
      { id: "tailwind", label: "Tailwind", icon: SiTailwindcss },
      { id: "expo", label: "Expo", icon: SiExpo },
      { id: "electron", label: "Electron", icon: SiElectron },
    ],
  },
  {
    id: "backend",
    size: "normal",
    skills: [
      { id: "nodejs", label: "Node.js", icon: SiNodedotjs, primary: true },
      { id: "python", label: "Python", icon: SiPython, primary: true },
      // the Express and MySQL logos are wordmarks, unreadable at 16px
      { id: "express", label: "Express", icon: LuRoute },
      { id: "fastify", label: "Fastify", icon: SiFastify },
      { id: "fastapi", label: "FastAPI", icon: SiFastapi },
      { id: "prisma", label: "Prisma", icon: SiPrisma },
      { id: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
      { id: "mysql", label: "MySQL", icon: LuDatabase },
      { id: "supabase", label: "Supabase", icon: SiSupabase },
    ],
  },
  {
    id: "tools",
    size: "normal",
    skills: [
      { id: "git", label: "Git", icon: SiGit },
      { id: "github", label: "GitHub", icon: SiGithub },
      { id: "docker", label: "Docker", icon: SiDocker },
      { id: "figma", label: "Figma", icon: SiFigma },
      { id: "pandas", label: "Pandas", icon: SiPandas },
      { id: "scikit-learn", label: "scikit-learn", icon: SiScikitlearn },
      { id: "jupyter", label: "Jupyter", icon: SiJupyter },
      // optional AI dev tools (section 0)
      { id: "claude-code", label: "Claude Code", icon: SiClaude },
      { id: "cursor", label: "Cursor", icon: LuMousePointer2 },
    ],
  },
];
