export const en = {
  meta: {
    htmlLang: "en",
    cvFile: "JoaoMarcos_CV_EN.pdf",
  },

  header: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    social: "Social links",
    mainNav: "Main",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
  },

  home: {
    greeting: "Hi, I'm",
    name: "João Marcos",
    role: "Full Stack Developer · Applied AI",
    description:
      "I take ideas from prototype to production, building <strong>AI</strong> products people use and trust.",
    ctaProjects: "See projects",
    ctaCV: "Download résumé",
    facts: [
      { label: "Now", value: "QA Engineer at Lucy" },
      { label: "Studying", value: "Postgraduate in AI for Devs · FIAP" },
      { label: "Degree", value: "Computer Science · PUC-SP" },
    ],
    scroll: "Scroll to explore",
  },

  about: {
    title: "About me",
    bio1:
      "I'm <strong>João Marcos Ribeirete Garbelini</strong>, a full stack developer focused on taking AI products from prototype to production. I started out in software quality, so I build thinking about how things can break before they do.",
    bio2:
      "I work mostly with <strong>React, React Native, Node.js and Python</strong>. In my recent projects I integrate <strong>LLMs, RAG and agents</strong> into voice, finance, health and fitness products, always backed by automated tests (<strong>Playwright, Cypress and Percy</strong>) to keep everything working.",
    bio3:
      "Away from the terminal: weight training, soccer, video games, sci-fi and animation. That's where many of my project ideas come from.",
    soundHint: "Click the characters",
    // {name} is replaced with the character's name
    playSound: "Play {name} sound",
    // on-screen text of the character effects (the Lightning McQueen catchphrase)
    effects: { kachow: "KA-CHOW!" },
    listeningLabel: "Now listening on",
    location: "São Paulo, Brazil",
  },

  skills: {
    title: "Skills",
    subtitle: "What I use day to day, from prototype to automated tests.",
    coreTech: "Core technology",
    categories: {
      ai: { label: "AI & Agents", description: "LLMs, RAG, agents and tool integration." },
      qa: {
        label: "Quality & Testing",
        description: "Automation, visual regression and AI evaluation.",
        // shown automatically when no skill in src/data/skills.js has evals: true
        descriptionNoEvals: "Test automation, visual regression and API quality.",
      },
      frontend: { label: "Front-end", description: "Fast, responsive web, mobile and desktop interfaces." },
      backend: { label: "Back-end", description: "APIs, business rules and databases." },
      tools: { label: "Tools", description: "Version control, containers, design and data." },
    },
  },

  projects: {
    title: "Projects",
    subtitle: "Ideas that left the prototype and became products. Open a project to see the case.",
    filters: { all: "All", ai: "AI & Agents", web: "Web & Desktop", mobile: "Mobile" },
    showAll: "Show all",
    showLess: "Show less",
    open: "Open case",
    close: "Close",
    github: "Repository",
    video: "Video",
    cover: "Cover",
    team: "Team",
    solo: "Solo project",
    stack: "Stack",
    overview: "Overview",
    highlights: "Highlights",
    quality: "Quality",
    year: "Year",
    context: "Context",
    role: "Role",
    footer: "Liked this project?",
    footerLink: "Let's talk.",

    items: {
      relampago: {
        title: "Relâmpago",
        context: "Voice assistant · AI",
        role: "Full Stack & AI",
        shortDesc: "You say your routine, it organizes Google Calendar and answers by voice.",
        longDesc:
          "A personal voice assistant. You say what you need, it picks the right calendar in <strong>Google Calendar</strong>, creates or adjusts the event and talks back.<br/><br/>The interface is a cockpit: black background, racing red and an audio core in the middle. Tap the core (or the space bar), speak, and it sends on its own after one second of silence.",
        fullDetails:
          "<h3>Flow</h3><ul><li><strong>Speech to text:</strong> transcription with <em>gpt-4o-mini-transcribe</em>.</li><li><strong>Decision:</strong> the agent picks the calendar (Workouts, Meetings, Work, Study, Diet) and the action; if none fits, it creates one.</li><li><strong>Text to speech:</strong> spoken answer with <em>gpt-4o-mini-tts</em>.</li></ul><h3>Product decisions</h3><ul><li>Saves even on a time conflict and tells you what overlaps.</li><li>Deleting an event is instant; deleting a whole calendar asks for confirmation.</li><li>Tapping again while it speaks interrupts the audio.</li></ul>",
      },
      nublar: {
        title: "Nublar Finance",
        context: "Desktop app · Finance",
        role: "Full Stack",
        shortDesc: "A personal dashboard for your financial life, with the API as source of truth.",
        longDesc:
          "Nublar puts your financial life in one simple, visual place: what you have, what comes in, what goes out, what is already committed for the next months and how your net worth evolves.<br/><br/>It starts as a <strong>desktop app</strong> for personal use, with the <strong>API as the source of truth</strong> for money, ready for a mobile version and outside data without losing history.",
        fullDetails:
          "<h3>What it covers</h3><ul><li><strong>Cash flow:</strong> income, expenses, transfers and categories.</li><li><strong>Commitments:</strong> cards, bills, installments, subscriptions and upcoming payments.</li><li><strong>Net worth:</strong> accounts, fixed income, stocks, REITs, ETFs, crypto and debt.</li><li><strong>Planning:</strong> goals, budgets, calendar and a monthly projection.</li></ul><h3>Financial consistency</h3><ul><li>A transfer between your own accounts is neither spending nor income: net worth stays the same.</li><li>An installment purchase becomes its future installments, so the projection never forgets them.</li></ul><h3>Architecture</h3><ul><li><strong>Turborepo + pnpm monorepo</strong> with <em>apps/desktop</em> (Electron, React, Vite, Tailwind, Recharts) and <em>apps/api</em> (Prisma + PostgreSQL).</li></ul>",
      },
      ironsynk: {
        title: "IronSynk",
        context: "Mobile app · Fitness",
        role: "Full Stack Mobile",
        shortDesc: "Training, nutrition, social and RPG-style gamification in one app.",
        longDesc:
          "A mobile app (iOS and Android) for people who train by the science: progressive overload, RIR/RPE and volume tracking, together with nutrition, a social feed and <strong>RPG-style gamification</strong>.<br/><br/>The philosophy: powerful under the hood, minimal on the surface, with a dark, modern, young identity.",
        fullDetails:
          "<h3>Architecture</h3><ul><li><strong>Monorepo:</strong> <em>apps/mobile</em> (Expo), <em>apps/api</em> (Fastify) and <em>packages/shared</em> with shared Zod schemas and types.</li><li><strong>Data:</strong> Prisma on Supabase Postgres, plus Supabase Auth and Storage.</li><li><strong>Cache:</strong> Upstash Redis.</li></ul><h3>Mobile</h3><ul><li>Expo + TypeScript, NativeWind for styling, Zustand for global state and TanStack Query for server data.</li></ul><h3>Audience</h3><ul><li>Athletes, the general public and personal trainers running their coaching inside the app.</li></ul>",
      },
      medprotocol: {
        title: "MedProtocol AI",
        meta: "Health · AI",
        context: "FIAP Tech Challenge · Phase 3",
        role: "AI Engineer",
        shortDesc: "Hospital protocol assistant with a fine-tuned LLM, RAG and LangGraph.",
        longDesc:
          "An educational assistant to look up simulated hospital protocols for <strong>type 2 diabetes</strong> follow-up. It combines an LLM with <strong>fine-tuning (LoRA/QLoRA)</strong>, document retrieval with source citations, structured SQLite data and an explicit flow with human review in <strong>LangGraph</strong>.<br/><br/>Educational prototype on 100% synthetic data: it does not diagnose or prescribe.",
        fullDetails:
          "<h3>Architecture</h3><ul><li><strong>Flow:</strong> UI → LangGraph → RAG + SQLite → fine-tuned LLM → validation → answer with sources and logs.</li><li><strong>RAG:</strong> LangChain with local <em>multilingual-e5-small</em> embeddings.</li><li><strong>Audit:</strong> every recommendation goes through human review and is logged.</li></ul><h3>Engineering</h3><ul><li>Python 3.11, installable package, pytest from step zero.</li><li>Synthetic dataset validated by script, with documented schema and dataset card.</li></ul>",
      },
      rotas: {
        title: "Medical Routes",
        meta: "Health · AI Optimization",
        context: "FIAP Tech Challenge · Phase 2",
        role: "AI Engineer",
        shortDesc: "Medicine delivery routes (TSP/VRP) with a genetic algorithm and GPT.",
        longDesc:
          "Route optimization for medicine and supply deliveries between a central pharmacy and 14 health units in São Paulo.<br/><br/>Starting from a TSP code base, I adapted the problem to hospital reality: <strong>up to 3 vehicles, per-unit priority, 90 kg capacity and 70 km range</strong>. An LLM writes driver instructions and reports, and answers questions about the routes.",
        fullDetails:
          "<h3>Genetic algorithm</h3><ul><li><strong>Chromosome:</strong> a permutation of deliveries, decoded into routes that leave and return to the pharmacy.</li><li><strong>Operators:</strong> OX crossover, mutation and elitism.</li><li><strong>Fitness:</strong> km (Haversine) + priority + capacity and range penalties.</li></ul><h3>Evaluation</h3><ul><li>Random route vs nearest neighbour vs GA across 3 experiments.</li><li>Maps in Matplotlib and Folium.</li></ul><h3>LLM</h3><ul><li>Delivery instructions, technical report and natural language questions about the result.</li></ul>",
      },
      heart: {
        title: "Heart Risk",
        meta: "Health · Machine Learning",
        context: "FIAP Tech Challenge · Phase 1",
        role: "ML Engineer",
        shortDesc: "Heart disease risk screening with Machine Learning and SHAP explainability.",
        longDesc:
          "A screening support system that classifies patients as low or high heart disease risk from tabular clinical data.<br/><br/>I compared 4 classifiers and tuned a <strong>Random Forest</strong> for recall: on the test set it found <strong>91.7% of at-risk patients</strong> (ROC-AUC 0.885), with only 5 false negatives out of 60 cases.",
        fullDetails:
          "<h3>Pipeline</h3><ul><li>EDA, leak-free preprocessing, correlation, training, evaluation and explainability.</li><li>Random Forest, XGBoost, Logistic Regression and KNN on the same pipeline.</li></ul><h3>Trade-off</h3><ul><li>0.35 threshold and recall-driven hyperparameter search: recall went from ~0.78 to 0.92.</li><li>In screening, a false negative costs far more than an extra exam.</li></ul><h3>Explainability</h3><ul><li>Feature importance and SHAP so clinicians can see why the model decided.</li></ul>",
      },
      tccFitness: {
        title: "Thesis: AI Fitness System",
        context: "Mobile app · AI",
        role: "Full Stack & AI",
        shortDesc: "Training and diet personalized by a fine-tuned GPT-4o mini.",
        longDesc:
          "My undergraduate thesis, exploring LLMs for personalized health. A <strong>GPT-4o mini with supervised fine-tuning</strong> acts as coach and nutritionist.<br/><br/>Users fill in a full intake form and the AI builds and adjusts training and diet around restrictions, injuries, level and available time.",
        fullDetails:
          "<h3>Specialized AI</h3><ul><li><strong>User limits:</strong> the model accounts for injuries, experience and time to produce safe plans.</li><li><strong>Fine-tuning:</strong> more precise macros and training volume, fewer hallucinations.</li></ul><h3>Architecture</h3><ul><li><strong>Back-end (Python/FastAPI):</strong> async, Clean Architecture, Repository Pattern and dependency injection.</li><li><strong>Front-end (React Native):</strong> MVVM, presentation logic kept out of the UI.</li></ul><h3>App</h3><ul><li>Real-time workout logging with loads and progression.</li><li>Meals calculated for the current goal.</li></ul>",
      },
      todoList: {
        title: "To-Do List App",
        context: "Android app",
        role: "Android Developer",
        shortDesc: "Native productivity app with 5 screens and Intent navigation.",
        longDesc:
          "A native Android app in <strong>Java</strong>, built on multiple Activities and explicit Intent navigation.<br/><br/>Full create, view and manage flow for tasks, with real-time validation and instant feedback.",
        fullDetails:
          "<h3>Screens</h3><ul><li><strong>Dashboard:</strong> central navigation with cards and icons.</li><li><strong>Create:</strong> validated form with due date.</li><li><strong>List:</strong> optimized RecyclerView.</li><li><strong>Detail:</strong> expanded view with complete action.</li><li><strong>Settings:</strong> notifications and theme.</li></ul>",
      },
      ultrafit: {
        title: "UltraFit Gym",
        context: "Web system",
        role: "Full Stack (team)",
        shortDesc: "Student, workout and assessment management for gyms.",
        longDesc:
          "A web platform that replaces spreadsheets and paper sheets in gyms.<br/><br/>It centralizes students, workout prescription and physical assessment history, saving trainers time.",
        fullDetails:
          "<h3>Management</h3><ul><li><strong>Workout prescription:</strong> build sheets by muscle group from a pre-registered exercise list.</li><li><strong>Assessments:</strong> per-student history.</li></ul>",
      },
      marketplace: {
        title: "Marketplace",
        context: "Web system",
        role: "Back-end & Database",
        shortDesc: "Peripherals e-commerce with in-house auth and stock control.",
        longDesc:
          "A buy-and-sell marketplace focused on <strong>data integrity and security</strong>.<br/><br/>Users sign up, manage listings and place simulated orders, on a relational database that keeps stock consistent.",
        fullDetails:
          "<h3>Security</h3><ul><li><strong>Passwords:</strong> salted hashes (Bcrypt).</li><li><strong>Protected routes:</strong> auth middleware for creating and editing listings.</li></ul><h3>Data (MySQL)</h3><ul><li>Users, products and orders relationships (1:N and N:N).</li><li>Stock is only debited when the order is confirmed.</li></ul><h3>Product</h3><ul><li>Listing CRUD with image upload and a session-persisted cart.</li></ul>",
      },
      ligamaster: {
        title: "Ligamaster",
        context: "Web system",
        role: "Full Stack",
        shortDesc: "Tournaments among friends: teams, matches and standings.",
        longDesc:
          "A web system to create and run tournaments with <strong>teams, matches and standings</strong>.<br/><br/>Participant sign-up, result logging and standings calculated automatically.",
        fullDetails:
          "<h3>Tournaments</h3><ul><li>Create tournaments, register teams and log matches.</li><li>Standings generated from results.</li></ul>",
      },
      flashcards: {
        title: "Flashcards",
        context: "Desktop & mobile",
        role: "Developer",
        shortDesc: "Flashcard study app, in desktop and mobile versions.",
        longDesc:
          "An app to create and review <strong>flashcards</strong>, in two versions: <strong>desktop</strong>, with Electron packaging a web app, and <strong>mobile</strong>, in React Native.",
        fullDetails:
          "<h3>Features</h3><ul><li>Question and answer cards.</li><li>Decks and a review mode.</li></ul>",
      },
    },
  },

  experience: {
    title: "Experience",
    subtitle: "Where I've worked and studied.",
    workLabel: "Work",
    educationLabel: "Education",
    techLabel: "Technologies",
    projectsLink: "See projects →",
    projectsLinkLabel: "See AI & Agents projects",
    work: [
      {
        role: "QA Engineer",
        company: "Lucy",
        period: "2025 · now",
        current: true,
        description:
          "Quality assurance combining manual and automated testing. Automation with Playwright and visual regression with Percy, focused on reliability and user experience.",
      },
      {
        role: "Junior QA Analyst",
        company: "Virtual Town",
        period: "2023 · 2025",
        description:
          "Ran and managed the test life cycle in Jira. Built an HTML, CSS and JavaScript panel that automated the team's recurring tasks.",
        chips: ["JavaScript", "HTML", "CSS", "Jira"],
      },
      {
        role: "Unity Intern",
        company: "VRGlass",
        period: "2022 · 2023",
        description:
          "Supported game development: finding and fixing bugs and improving processes for stability and experience quality.",
      },
    ],
    education: [
      {
        role: "Postgraduate in AI for Devs",
        company: "FIAP",
        period: "2026 · in progress",
        current: true,
        description:
          "Machine Learning, LLMs, fine-tuning, RAG and agents, applied in healthcare Tech Challenges: heart risk, medical routes and hospital protocols.",
        chips: ["Python", "LLMs", "RAG", "Agents"],
        filterLink: "ai",
      },
      {
        role: "Computer Science",
        company: "PUC-SP",
        period: "2022 · 2025",
        description:
          "Bachelor's degree grounded in algorithms, software engineering, AI and systems. Capstone project: fitness app with a fine-tuned GPT-4o mini.",
      },
    ],
  },

  contact: {
    title: "Let's talk",
    subtitle: "A role, a project or an idea: send me a message and I'll get back to you.",
    emailLabel: "Email",
    copy: "Copy",
    copyLabel: "Copy email",
    copied: "Copied!",
    downloadCV: "Download résumé",
    availability: {
      label: "Availability",
      reply: "I reply within 48 hours",
      location: "Remote, hybrid or on-site in São Paulo",
      contract: "Open to full-time or contract roles",
      timezone: "Time zone: São Paulo (UTC−3)",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "What should I call you?",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me a bit about the role or project",
      sendButton: "Send message",
      sending: "Sending...",
      successMessage: "Message sent! I'll reply within 48 hours.",
      errorMessage: "Couldn't send it. Try again or email me directly above.",
      errors: {
        name: "Please enter your name",
        email: "Please enter a valid email",
        message: "Please write a message",
      },
    },
  },

  footer: {
    built: "Built with React and Motion",
    top: "Back to top",
  },
};
