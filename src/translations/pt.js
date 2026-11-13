export const pt = {
  meta: {
    htmlLang: "pt-BR",
    cvFile: "JoaoMarcos_CV.pdf",
  },

  header: {
    home: "Início",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    social: "Redes sociais",
    mainNav: "Principal",
    themeToLight: "Mudar para o tema claro",
    themeToDark: "Mudar para o tema escuro",
  },

  home: {
    greeting: "Olá, eu sou",
    name: "João Marcos",
    role: "Desenvolvedor Full Stack · IA Aplicada",
    description:
      "Levo ideias do protótipo à produção, criando produtos com <strong>IA</strong> que as pessoas usam e confiam.",
    ctaProjects: "Ver projetos",
    ctaCV: "Baixar currículo",
    facts: [
      { label: "Hoje", value: "QA Engineer na Lucy" },
      { label: "Estudando", value: "Pós Tech IA para Devs · FIAP" },
      { label: "Formação", value: "Ciência da Computação · PUC-SP" },
    ],
    scroll: "Role para explorar",
  },

  about: {
    title: "Sobre mim",
    bio1:
      "Sou <strong>João Marcos Ribeirete Garbelini</strong>, desenvolvedor full stack focado em levar produtos com IA do protótipo à produção. Comecei na qualidade de software, e por isso construo pensando em como as coisas podem quebrar antes que quebrem.",
    bio2:
      "Trabalho principalmente com <strong>React, React Native, Node.js e Python</strong>. Nos projetos mais recentes integro <strong>LLMs, RAG e agentes</strong> em produtos de voz, finanças, saúde e fitness, sempre com testes automatizados (<strong>Playwright, Cypress e Percy</strong>) garantindo que tudo continue funcionando.",
    bio3:
      "Fora do terminal: musculação, futebol, games, ficção científica e animação. É de lá que sai boa parte das ideias que viram projeto.",
    soundHint: "Clique nos personagens",
    // {name} is replaced with the character's name
    playSound: "Tocar som do {name}",
    // on-screen text of the character effects (the Lightning McQueen catchphrase)
    effects: { kachow: "KA-CHOW!" },
    listeningLabel: "Ouvindo agora no",
    location: "São Paulo, SP",
  },

  skills: {
    title: "Habilidades",
    subtitle: "O que uso no dia a dia, do protótipo ao teste automatizado.",
    coreTech: "Tecnologia principal",
    categories: {
      ai: { label: "IA & Agentes", description: "LLMs, RAG, agentes e integração com ferramentas." },
      qa: {
        label: "Qualidade & Testes",
        description: "Automação, regressão visual e avaliação de IA.",
        // shown automatically when no skill in src/data/skills.js has evals: true
        descriptionNoEvals: "Automação de testes, regressão visual e qualidade de API.",
      },
      frontend: { label: "Front-end", description: "Interfaces web, mobile e desktop, responsivas e rápidas." },
      backend: { label: "Back-end", description: "APIs, regras de negócio e bancos de dados." },
      tools: { label: "Ferramentas", description: "Versionamento, containers, design e dados." },
    },
  },

  projects: {
    title: "Projetos",
    subtitle: "Ideias que saíram do protótipo e viraram produto. Abra um projeto para ver o case.",
    filters: { all: "Todos", ai: "IA & Agentes", web: "Web & Desktop", mobile: "Mobile" },
    showAll: "Mostrar todos",
    showLess: "Mostrar menos",
    open: "Ver case",
    close: "Fechar",
    github: "Repositório",
    video: "Vídeo",
    cover: "Capa",
    team: "Equipe",
    solo: "Projeto individual",
    stack: "Stack",
    overview: "Visão geral",
    highlights: "Destaques",
    quality: "Qualidade",
    year: "Ano",
    context: "Contexto",
    role: "Função",
    footer: "Curtiu o projeto?",
    footerLink: "Vamos conversar.",

    items: {
      relampago: {
        title: "Relâmpago",
        context: "Assistente de voz · IA",
        role: "Full Stack & IA",
        shortDesc: "Você fala a rotina, ele organiza o Google Agenda e responde em voz.",
        longDesc:
          "Assistente de voz pessoal. Você fala o que precisa, ele escolhe a agenda certa no <strong>Google Agenda</strong>, cria ou ajusta o evento e responde falando.<br/><br/>A interface é um cockpit: fundo preto, vermelho de corrida e um núcleo de áudio no centro. Toque no núcleo (ou na barra de espaço), fale, e ele envia sozinho depois de um segundo de silêncio.",
        fullDetails:
          "<h3>Fluxo</h3><ul><li><strong>Voz para texto:</strong> transcrição com <em>gpt-4o-mini-transcribe</em>.</li><li><strong>Decisão:</strong> o agente escolhe a agenda (Treinos, Reuniões, Trabalho, Estudos, Dieta) e a ação; se nenhuma serve, cria uma nova.</li><li><strong>Texto para voz:</strong> resposta falada com <em>gpt-4o-mini-tts</em>.</li></ul><h3>Decisões de produto</h3><ul><li>Grava mesmo com conflito de horário e avisa o que ficou junto.</li><li>Apagar evento é imediato; apagar uma agenda inteira pede confirmação.</li><li>Tocar de novo enquanto ele fala interrompe o áudio.</li></ul>",
      },
      nublar: {
        title: "Nublar Finance",
        context: "App desktop · Finanças",
        role: "Full Stack",
        shortDesc: "Dashboard pessoal da vida financeira, com a API como fonte da verdade.",
        longDesc:
          "O Nublar reúne a vida financeira num só lugar, simples e visual: quanto se tem, quanto entra, quanto sai, o que já está comprometido nos próximos meses e como o patrimônio evolui.<br/><br/>Começa como <strong>app desktop</strong> para uso pessoal, com a <strong>API como fonte da verdade</strong> do dinheiro, pronta para ganhar versão mobile e receber dados de fora sem perder o histórico.",
        fullDetails:
          "<h3>O que ele cobre</h3><ul><li><strong>Fluxo:</strong> receitas, despesas, transferências e categorias.</li><li><strong>Compromissos:</strong> cartões, faturas, parcelamentos, assinaturas e contas a vencer.</li><li><strong>Patrimônio:</strong> contas, renda fixa, ações, FIIs, ETFs, cripto e dívidas.</li><li><strong>Planejamento:</strong> metas, orçamentos, calendário e projeção do mês.</li></ul><h3>Consistência financeira</h3><ul><li>Transferência entre contas próprias não é gasto nem ganho: o patrimônio continua o mesmo.</li><li>Compra parcelada vira as parcelas futuras, para a projeção não esquecer o que já foi assumido.</li></ul><h3>Arquitetura</h3><ul><li><strong>Monorepo Turborepo + pnpm</strong> com <em>apps/desktop</em> (Electron, React, Vite, Tailwind, Recharts) e <em>apps/api</em> (Prisma + PostgreSQL).</li></ul>",
      },
      ironsynk: {
        title: "IronSynk",
        context: "App mobile · Fitness",
        role: "Full Stack Mobile",
        shortDesc: "Treino, nutrição, social e gamificação RPG num app só.",
        longDesc:
          "App mobile (iOS e Android) para quem treina com base em ciência: sobrecarga progressiva, RIR/RPE e controle de volume, junto com nutrição, rede social e <strong>gamificação estilo RPG</strong>.<br/><br/>A filosofia é ser completo por dentro e minimalista por fora, com identidade escura, moderna e jovem.",
        fullDetails:
          "<h3>Arquitetura</h3><ul><li><strong>Monorepo:</strong> <em>apps/mobile</em> (Expo), <em>apps/api</em> (Fastify) e <em>packages/shared</em> com tipos e schemas Zod compartilhados.</li><li><strong>Dados:</strong> Prisma sobre Postgres no Supabase, com Auth e Storage do próprio Supabase.</li><li><strong>Cache:</strong> Upstash Redis.</li></ul><h3>Mobile</h3><ul><li>Expo + TypeScript, NativeWind para estilo, Zustand para estado global e TanStack Query para dados do servidor.</li></ul><h3>Público</h3><ul><li>Atletas, público geral e personal trainers rodando a consultoria dentro do app.</li></ul>",
      },
      medprotocol: {
        title: "MedProtocol AI",
        meta: "Saúde · IA",
        context: "Tech Challenge FIAP · Fase 3",
        role: "Engenheiro de IA",
        shortDesc: "Assistente de protocolos hospitalares com LLM ajustada, RAG e LangGraph.",
        longDesc:
          "Assistente educacional para consulta de protocolos hospitalares simulados de acompanhamento de <strong>diabetes tipo 2</strong>. Combina um LLM com <strong>fine-tuning (LoRA/QLoRA)</strong>, recuperação de documentos com citação de fonte, dados estruturados em SQLite e um fluxo explícito com validação humana em <strong>LangGraph</strong>.<br/><br/>Protótipo educacional com dados 100% sintéticos: não diagnostica, não prescreve.",
        fullDetails:
          "<h3>Arquitetura</h3><ul><li><strong>Fluxo:</strong> Interface → LangGraph → RAG + SQLite → LLM ajustada → validação → resposta com fontes e logs.</li><li><strong>RAG:</strong> LangChain com embeddings <em>multilingual-e5-small</em> rodando local.</li><li><strong>Auditoria:</strong> toda recomendação passa por revisão humana e gera log.</li></ul><h3>Engenharia</h3><ul><li>Python 3.11, pacote instalável, testes com pytest desde a etapa zero.</li><li>Dataset sintético validado por script, com schema e dataset card documentados.</li></ul>",
      },
      rotas: {
        title: "Rotas Médicas",
        meta: "Saúde · Otimização com IA",
        context: "Tech Challenge FIAP · Fase 2",
        role: "Engenheiro de IA",
        shortDesc: "Rotas de medicamentos (TSP/VRP) com algoritmo genético e GPT.",
        longDesc:
          "Otimização de rotas de entrega de medicamentos e insumos entre uma farmácia central e 14 unidades de saúde em São Paulo.<br/><br/>Partindo de um código-base de TSP, adaptei o problema para a realidade hospitalar: <strong>até 3 veículos, prioridade por unidade, capacidade de 90 kg e autonomia de 70 km</strong>. Um LLM gera instruções para motoristas, relatórios e responde perguntas sobre as rotas.",
        fullDetails:
          "<h3>Algoritmo genético</h3><ul><li><strong>Cromossomo:</strong> permutação das entregas, decodificada em rotas que saem e voltam à farmácia.</li><li><strong>Operadores:</strong> crossover OX, mutação e elitismo.</li><li><strong>Fitness:</strong> km (Haversine) + prioridade + penalidades de capacidade e autonomia.</li></ul><h3>Avaliação</h3><ul><li>Comparativo entre rota aleatória, vizinho mais próximo e GA em 3 experimentos.</li><li>Mapas em Matplotlib e Folium.</li></ul><h3>LLM</h3><ul><li>Instruções de entrega, relatório técnico e perguntas em linguagem natural sobre o resultado.</li></ul>",
      },
      heart: {
        title: "Risco Cardíaco",
        meta: "Saúde · Machine Learning",
        context: "Tech Challenge FIAP · Fase 1",
        role: "Engenheiro de ML",
        shortDesc: "Triagem de risco cardíaco com Machine Learning e explicabilidade SHAP.",
        longDesc:
          "Sistema de apoio à triagem que classifica pacientes em baixo ou alto risco de doença cardíaca a partir de dados clínicos tabulares.<br/><br/>Comparei 4 classificadores e otimizei o <strong>Random Forest</strong> para recall: no teste, o modelo encontrou <strong>91,7% dos pacientes em risco</strong> (ROC-AUC 0,885), com só 5 falsos negativos em 60 casos.",
        fullDetails:
          "<h3>Pipeline</h3><ul><li>EDA, pré-processamento sem vazamento de dados, correlação, treino, avaliação e explicabilidade.</li><li>Comparação: Random Forest, XGBoost, Regressão Logística e KNN no mesmo pipeline.</li></ul><h3>Trade-off</h3><ul><li>Threshold de 0,35 com busca de hiperparâmetros por recall: recall subiu de ~0,78 para 0,92.</li><li>Em triagem, um falso negativo custa muito mais do que um exame extra.</li></ul><h3>Explicabilidade</h3><ul><li>Feature importance e SHAP para mostrar ao profissional por que o modelo decidiu.</li></ul>",
      },
      tccFitness: {
        title: "TCC: AI Fitness System",
        context: "App mobile · IA",
        role: "Full Stack & IA",
        shortDesc: "Treino e dieta personalizados por um GPT-4o mini com fine-tuning.",
        longDesc:
          "Trabalho de Conclusão de Curso que explora LLMs na personalização de saúde. Um <strong>GPT-4o mini com fine-tuning supervisionado</strong> atua como treinador e nutricionista.<br/><br/>O usuário responde uma anamnese completa e a IA monta e ajusta treino e dieta respeitando restrições, lesões, nível e tempo disponível.",
        fullDetails:
          "<h3>IA especializada</h3><ul><li><strong>Limitações do usuário:</strong> o modelo considera lesões, experiência e tempo para gerar planos seguros.</li><li><strong>Fine-tuning:</strong> mais precisão em macros e volume de treino, menos alucinação.</li></ul><h3>Arquitetura</h3><ul><li><strong>Back-end (Python/FastAPI):</strong> assíncrono, Clean Architecture, Repository Pattern e injeção de dependência.</li><li><strong>Front-end (React Native):</strong> MVVM, lógica de apresentação fora da UI.</li></ul><h3>App</h3><ul><li>Execução do treino em tempo real com registro de cargas e progressão.</li><li>Dieta com refeições calculadas para o objetivo atual.</li></ul>",
      },
      todoList: {
        title: "To-Do List App",
        context: "App Android",
        role: "Desenvolvedor Android",
        shortDesc: "App de produtividade nativo com 5 telas e navegação por Intents.",
        longDesc:
          "App Android nativo em <strong>Java</strong>, construído sobre múltiplas Activities e navegação por Intents explícitas.<br/><br/>Fluxo completo de criar, ver e gerenciar tarefas, com validação em tempo real e feedback imediato.",
        fullDetails:
          "<h3>Telas</h3><ul><li><strong>Dashboard:</strong> navegação central com cards e ícones.</li><li><strong>Cadastro:</strong> formulário validado com data de vencimento.</li><li><strong>Listagem:</strong> RecyclerView otimizado.</li><li><strong>Detalhes:</strong> visão expandida com opção de concluir.</li><li><strong>Ajustes:</strong> notificações e tema.</li></ul>",
      },
      ultrafit: {
        title: "UltraFit Gym",
        context: "Sistema web",
        role: "Full Stack (equipe)",
        shortDesc: "Gestão de alunos, treinos e avaliações físicas para academias.",
        longDesc:
          "Plataforma web para substituir planilhas e fichas de papel em academias.<br/><br/>Centraliza alunos, prescrição de treinos e histórico de avaliações físicas, dando agilidade aos professores.",
        fullDetails:
          "<h3>Gestão</h3><ul><li><strong>Prescrição de treinos:</strong> montagem de fichas por grupo muscular com exercícios pré-cadastrados.</li><li><strong>Avaliações:</strong> histórico por aluno.</li></ul>",
      },
      marketplace: {
        title: "Marketplace",
        context: "Sistema web",
        role: "Back-end & Banco de dados",
        shortDesc: "E-commerce de periféricos com autenticação própria e controle de estoque.",
        longDesc:
          "Marketplace de compra e venda focado em <strong>integridade de dados e segurança</strong>.<br/><br/>Usuários criam conta, gerenciam anúncios e fazem compras simuladas, sobre um banco relacional que garante a consistência do estoque.",
        fullDetails:
          "<h3>Segurança</h3><ul><li><strong>Senhas:</strong> hash com salt (Bcrypt).</li><li><strong>Rotas protegidas:</strong> middleware de autenticação para criar e editar anúncios.</li></ul><h3>Dados (MySQL)</h3><ul><li>Relacionamentos entre usuários, produtos e pedidos (1:N e N:N).</li><li>Estoque debitado só quando o pedido é confirmado.</li></ul><h3>Produto</h3><ul><li>CRUD de anúncios com upload de imagens e carrinho persistido na sessão.</li></ul>",
      },
      ligamaster: {
        title: "Ligamaster",
        context: "Sistema web",
        role: "Full Stack",
        shortDesc: "Organização de campeonatos entre amigos: times, jogos e tabelas.",
        longDesc:
          "Sistema web para criar e administrar campeonatos com <strong>times, jogos e tabelas</strong>.<br/><br/>Cadastro de participantes, registro de resultados e classificação calculada automaticamente.",
        fullDetails:
          "<h3>Campeonatos</h3><ul><li>Criação de torneios, cadastro de times e registro de partidas.</li><li>Tabela de classificação gerada a partir dos resultados.</li></ul>",
      },
      flashcards: {
        title: "Flashcards",
        context: "Desktop & mobile",
        role: "Desenvolvedor",
        shortDesc: "App de estudo com flashcards, em versão desktop e mobile.",
        longDesc:
          "App para criar e revisar <strong>flashcards</strong>, em duas versões: <strong>desktop</strong>, com Electron empacotando uma aplicação web, e <strong>mobile</strong>, em React Native.",
        fullDetails:
          "<h3>Funcionalidades</h3><ul><li>Criação de cartões com pergunta e resposta.</li><li>Organização por decks e modo de revisão.</li></ul>",
      },
    },
  },

  experience: {
    title: "Experiência",
    subtitle: "Onde trabalhei e onde estudei.",
    workLabel: "Trabalho",
    educationLabel: "Formação",
    techLabel: "Tecnologias",
    projectsLink: "Ver projetos →",
    projectsLinkLabel: "Ver projetos de IA & Agentes",
    work: [
      {
        role: "QA Engineer",
        company: "Lucy",
        period: "2025 · atual",
        current: true,
        description:
          "Garantia de qualidade combinando testes manuais e automatizados. Automação com Playwright e regressão visual com Percy, com foco em confiabilidade e experiência do usuário.",
      },
      {
        role: "Analista de Testes Jr",
        company: "Virtual Town",
        period: "2023 · 2025",
        description:
          "Execução e gestão do ciclo de testes no Jira. Criei um painel em HTML, CSS e JavaScript que automatizou tarefas recorrentes do time.",
        chips: ["JavaScript", "HTML", "CSS", "Jira"],
      },
      {
        role: "Estagiário Unity",
        company: "VRGlass",
        period: "2022 · 2023",
        description:
          "Suporte ao desenvolvimento de jogos: detecção e correção de erros e melhorias de processo para estabilidade e qualidade da experiência.",
      },
    ],
    education: [
      {
        role: "Pós Tech IA para Devs",
        company: "FIAP",
        period: "2026 · cursando",
        current: true,
        description:
          "Machine Learning, LLMs, fine-tuning, RAG e agentes, aplicados nos Tech Challenges de saúde: risco cardíaco, rotas médicas e protocolos hospitalares.",
        chips: ["Python", "LLMs", "RAG", "Agentes"],
        filterLink: "ai",
      },
      {
        role: "Ciência da Computação",
        company: "PUC-SP",
        period: "2022 · 2025",
        description:
          "Bacharelado com base em algoritmos, engenharia de software, IA e sistemas. TCC: app fitness com fine-tuning do GPT-4o mini.",
      },
    ],
  },

  contact: {
    title: "Vamos conversar",
    subtitle: "Vaga, projeto ou ideia: me manda uma mensagem e eu respondo.",
    emailLabel: "Email",
    copy: "Copiar",
    copyLabel: "Copiar email",
    copied: "Copiado!",
    downloadCV: "Baixar currículo",
    availability: {
      label: "Disponibilidade",
      reply: "Respondo em até 48h",
      location: "Remoto, híbrido ou presencial em São Paulo",
      contract: "CLT ou PJ",
      timezone: "Fuso: São Paulo (UTC−3)",
    },
    form: {
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      namePlaceholder: "Como posso te chamar?",
      emailPlaceholder: "voce@email.com",
      messagePlaceholder: "Conte um pouco sobre a vaga ou o projeto",
      sendButton: "Enviar mensagem",
      sending: "Enviando...",
      successMessage: "Mensagem enviada! Respondo em até 48h.",
      errorMessage: "Não consegui enviar. Tente de novo ou me escreva direto no email acima.",
      errors: {
        name: "Informe seu nome",
        email: "Informe um email válido",
        message: "Escreva uma mensagem",
      },
    },
  },

  footer: {
    built: "Feito com React e Motion",
    top: "Voltar ao topo",
  },
};
