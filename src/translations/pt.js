// Arquivo de traduções PT-BR - TEXTOS EXATOS DO PORTFÓLIO ATUAL
export const pt = {
    // Header/Menu
    header: {
        home: "Página Inicial",
        about: "Sobre Mim",
        skills: "Habilidades",
        projects: "Projetos",
        experience: "Experiência",
        contact: "Contato"
    },

    // Home Page
    home: {
        greeting: "OLÁ, EU SOU",
        name: "JOÃO MARCOS",
        subtitle: "Desenvolvedor Full Stack | QA (Automação de Testes)",
        description: "Aplicando <strong>Inteligência Artificial</strong> para elevar o padrão de desenvolvimento e automação.",
        btnProjects: "ver meus projetos",
        btnAbout: "sobre mim"
    },

    // About Page
    about: {
        title: "SOBRE",
        titleHighlight: "MIM",
        bio1: "Olá! Sou <strong>João Marcos Ribeirete Garbelini</strong>, Desenvolvedor Full Stack e QA com foco em construir software de alta qualidade e performance. Sou graduado em Ciência da Computação pela PUC-SP e estou me especializando em uma Pós-Graduação de AI Scientist pela FIAP, unindo o desenvolvimento tradicional às possibilidades da Inteligência Artificial.",
        bio2: "Minha expertise concentra-se em <strong>React, Node.js</strong>, além de uma forte atuação em automação de testes com <strong>Playwright, Percy e Cypress</strong>. Estou expandindo minha atuação para a área de <strong>dados e IA</strong>, buscando integrar tecnologias inteligentes para otimizar processos e desenvolver soluções que acompanhem as constantes evoluções do mercado.",
        bio3: "Fora do terminal, busco equilíbrio na musculação e no futebol, mantendo o corpo ativo tanto quanto a mente. Meu lado entusiasta se completa com jogos, filmes de ficção e animações, que são minhas principais fontes de inspiração para explorar novas ideias e continuar evoluindo no mundo da tecnologia.",
        listeningLabel: "Ouvindo agora no"
    },

    // Skills Page
    skills: {
        title: "Habilidades",
        categories: {
            frontend: {
                label: "Front-End",
                description: "Interfaces modernas, responsivas e focadas na experiência do usuário"
            },
            backend: {
                label: "Back-End",
                description: "Lógica de negócio, APIs e integração com bancos de dados"
            },
            qa: {
                label: "Testes & QA",
                description: "Garantia de qualidade, estabilidade e confiabilidade do sistema"
            },
            utils: {
                label: "Utilitários",
                description: "Ferramentas de apoio para produtividade e criação"
            }
        }
    },

    // Projects Page
    projects: {
        title: "PROJETOS",
        subtitle: "Veja meus projetos pessoais",
        viewDetails: "Ver Detalhes",
        close: "Fechar",
        githubRepo: "Repositório GitHub",
        watchVideo: "Assistir Vídeo",
        team: "Equipe",
        stack: "Stack Tecnológica",
        year: "ANO",
        context: "CONTEXTO",
        role: "FUNÇÃO",
        overview: "VISÃO GERAL",
        footer: "Curtiu o projeto?",
        footerLink: "Entre em contato.",
        detailsLabel: "Detalhes",

        // Individual Projects
        tccFitness: {
            title: "TCC: AI FITNESS SYSTEM",
            year: "2025",
            context: "Mobile App & IA",
            role: "Full Stack & IA Eng.",
            shortDesc: "Gestão inteligente de treinos e nutrição com GPT-4o.",
            longDesc: `Projeto de Conclusão de Curso que explora o potencial de <strong>LLMs (Large Language Models)</strong> na ultra-personalização de saúde. O sistema utiliza um modelo <strong>GPT-4o Mini com Fine-Tuning supervisionado</strong> para atuar como um treinador biomecânico e nutricionista especialista.<br/><br/>Diferente de apps comuns, ele realiza uma anamnese clínica completa e utiliza a IA para ajustar protocolos de treinamento e dieta em tempo real, respeitando todas as restrições e objetivos únicos de cada usuário.`,
            fullDetails: `<h3>🧠 Inteligência Artificial Especializada</h3><p>O foco do uso de IA neste projeto foi a precisão e segurança.</p><ul><li><strong>Compreensão de Limitações:</strong> O sistema foi treinado para entender profundamente as especificidades do usuário (lesões, nível de experiência, tempo disponível). Ele gera planos totalmente adaptados, garantindo que cada recomendação seja segura e eficiente.</li><li><strong>Fine-Tuning e Precisão:</strong> Graças ao refinamento do modelo, alcançamos uma precisão elevada nos cálculos de macronutrientes e volume de treino, eliminando as "alucinações" comuns e garantindo a confiabilidade das prescrições.</li></ul><h3>🏗️ Arquitetura & Engenharia de Software</h3><p>Construído sobre os pilares da <strong>Clean Architecture</strong> para garantir desacoplamento total.</p><ul><li><strong>Backend (Python/FastAPI):</strong> Arquitetura assíncrona otimizada para alta concorrência. Utiliza <em>Repository Pattern</em> para abstração de dados e injeção de dependência via contêineres.</li><li><strong>Frontend (React Native):</strong> Implementação rigorosa do padrão MVVM (Model-View-ViewModel), garantindo que a lógica de apresentação não contamine a UI, facilitando testes unitários.</li></ul><h3>📱 Experiência do Usuário (App)</h3><p>Funciona de forma intuitiva: o usuário responde a uma anamnese e a IA constrói o plano ideal.</p><ul><li><strong>Treino & Execução:</strong> O usuário visualiza seu treino e pode executá-lo em tempo real, registrando cargas e acompanhando sua progressão visualmente ao longo do tempo.</li><li><strong>Dieta Integrada:</strong> A dieta aparece de forma clara, com as refeições calculadas especificamente para o objetivo atual.</li></ul>`
        },

        marketplace: {
            title: "MARKETPLACE",
            year: "2024",
            context: "Sistemas Web",
            role: "Backend & Database",
            shortDesc: "Plataforma completa de e-commerce com autenticação e gestão de estoque.",
            longDesc: `Ecossistema de compra e venda desenvolvido com foco na <strong>integridade de dados e segurança</strong>.<br/><br/>O sistema permite que usuários criem contas, gerenciem seus próprios anúncios de produtos e realizem transações simuladas, tudo suportado por um banco de dados relacional robusto que garante a consistência do estoque.`,
            fullDetails: `<h3>🔐 Segurança & Autenticação</h3><p>Implementação de um sistema de login seguro "do zero", sem depender de serviços externos.</p><ul><li><strong>Criptografia:</strong> Senhas armazenadas com hash + salt (Bcrypt), protegendo contra ataques de rainbow table.</li><li><strong>Proteção de Rotas:</strong> Middleware de autenticação que garante que apenas usuários logados possam criar/editar anúncios.</li></ul><h3>💾 Arquitetura de Dados (MySQL)</h3><p>Modelagem relacional complexa para sustentar o fluxo de marketplace.</p><ul><li><strong>Relacionamentos:</strong> Estrutura robusta conectando <em>Users</em>, <em>Products</em> e <em>Orders</em> (1:N e N:N).</li><li><strong>Transações Atômicas:</strong> Garantia de que o estoque é debitado apenas se o pedido for confirmado com sucesso.</li></ul><h3>🚀 Funcionalidades do Produto</h3><ul><li><strong>Gestão de Anúncios:</strong> CRUD completo (Create, Read, Update, Delete) com upload de imagens.</li><li><strong>Carrinho de Compras:</strong> Persistência de estado da sessão do usuário.</li></ul>`
        },

        todoList: {
            title: "TO-DO LIST APP",
            year: "2025",
            context: "Mobile Android",
            role: "Android Developer",
            shortDesc: "Sistema de produtividade com 5 módulos e UX nativa.",
            longDesc: `Aplicação Android robusta, construída com <strong>Java</strong>, focada na arquitetura de múltiplas Activities e navegação por Intents explícitas.<br/><br/>O projeto implementa um fluxo completo de criação, visualização e gestão de tarefas, com validação de dados em tempo real e feedback visual instantâneo (Toasts), garantindo uma experiência de usuário fluída e sem falhas.`,
            fullDetails: `<h3>📱 Engenharia Mobile & Arquitetura</h3><p>O diferencial deste projeto é a separação clara de responsabilidades em 5 telas distintas, cada uma com sua lógica de negócio isolada:</p><ul><li><strong>Dashboard (Main):</strong> Navegação centralizada com cards coloridos e ícones intuitivos.</li><li><strong>Cadastro (Add):</strong> Formulários com validação de entrada e data de vencimento.</li><li><strong>Listagem (View):</strong> RecyclerView otimizado para scroll e performance.</li><li><strong>Detalhes (Detail):</strong> Visualização expandida com opções de conclusão.</li><li><strong>Ajustes (Settings):</strong> Switches funcionais para controle de notificações e tema.</li></ul><h3>🛠️ Stack Tecnológica</h3><ul><li><strong>Java & SDK Android:</strong> Desenvolvimento puramente nativo para máxima performance e controle do ciclo de vida.</li><li><strong>XML Layouts:</strong> Uso avançado de ConstraintLayout e Componentes Material Design.</li><li><strong>Gradle:</strong> Gerenciamento eficiente de dependências e build.</li></ul>`
        },

        ultrafit: {
            title: "ULTRAFIT ACADEMY",
            year: "2024",
            context: "Aplicação Web",
            role: "Full Stack Team",
            shortDesc: "Gestão completa de alunos, treinos e avaliações físicas.",
            longDesc: `Plataforma web modernizada para substituir planilhas e métodos manuais em academias.<br/><br/>Centraliza o gerenciamento de alunos, a prescrição de treinos personalizados e o histórico de avaliações físicas, proporcionando eficiência operacional para os professores.`,
            fullDetails: `<h3>📊 Gestão & Eficiência</h3><p>O sistema resolve a desorganização de fichas de papel e planilhas descentralizadas.</p><ul><li><strong>Prescrição de Treinos:</strong> Interface intuitiva para montar fichas de treino com grupos musculares e exercícios pré-cadastrados.</li></ul><h3>💻 Stack Tecnológica</h3><ul><li><strong>Frontend (React):</strong> Interface reativa focada na usabilidade do profissional de educação física.</li><li><strong>Backend (Node/Express):</strong> API RESTful que gerencia as regras de negócio e persistência.</li></ul>`
        },

        ligamaster: {
            title: "LIGAMASTER",
            year: "2024",
            context: "Aplicação Web",
            role: "Full Stack Developer",
            shortDesc: "Plataforma completa para organização de campeonatos entre amigos.",
            longDesc: `Sistema web robusto para gerenciamento de torneios esportivos, permitindo criar e administrar campeonatos completos com <strong>times, jogos e tabelas</strong>.<br/><br/>A plataforma oferece ferramentas para cadastro de participantes, geração automática de chaveamentos, registro de resultados e acompanhamento de estatísticas em tempo real, tornando a organização de competições entre amigos simples e profissional.`,
            fullDetails: `<h3>⚽ Gestão Completa de Campeonatos</h3><p>O Ligamaster centraliza todas as funcionalidades necessárias para organizar torneios do início ao fim:</p><ul><li><strong>Criação de Campeonatos:</strong> Configure torneios personalizados com diferentes formatos (eliminatória, pontos corridos, grupos).</li><li><strong>Gestão de Times:</strong> Cadastro completo de equipes participantes com informações detalhadas.</li><li><strong>Controle de Jogos:</strong> Registro de partidas, resultados e estatísticas individuais.</li><li><strong>Tabelas Automáticas:</strong> Geração dinâmica de classificações e chaveamentos baseados nos resultados.</li><li><strong>Estatísticas em Tempo Real:</strong> Acompanhamento de desempenho, artilharia e histórico de confrontos.</li></ul><h3>🛠️ Stack Tecnológica</h3><ul><li><strong>Backend (Node.js + Express):</strong> API RESTful para gerenciamento de dados e lógica de negócio.</li><li><strong>Banco de Dados (MySQL):</strong> Persistência relacional otimizada para consultas complexas de estatísticas.</li><li><strong>Frontend (EJS + Bootstrap):</strong> Interface responsiva e intuitiva para administração dos torneios.</li><li><strong>Algoritmos Personalizados:</strong> Lógica de chaveamento automático e cálculo de classificações.</li></ul>`
        },

        flashcards: {
            title: "FLASHCARDS",
            year: "2022",
            context: "App Multiplataforma",
            role: "Mobile & Desktop Developer",
            shortDesc: "Ferramenta de estudo com flashcards para mobile e desktop.",
            longDesc: `Aplicação multiplataforma para criação e revisão de <strong>flashcards</strong>, disponível tanto em <strong>dispositivos móveis</strong> quanto em <strong>desktop</strong>.<br/><br/>O app permite que estudantes criem, organizem e revisem conteúdos de forma eficiente através de cartões de memorização, facilitando o aprendizado ativo e a retenção de informações em qualquer lugar.`,
            fullDetails: `<h3>📱 Multiplataforma Real</h3><p>O Flashcards foi desenvolvido para funcionar perfeitamente em diferentes plataformas, oferecendo a mesma experiência de usuário em todos os dispositivos:</p><ul><li><strong>Versão Mobile:</strong> Aplicativo nativo para Android e iOS, permitindo estudo em movimento.</li><li><strong>Versão Desktop:</strong> Aplicação standalone para Windows, macOS e Linux, ideal para sessões de estudo mais longas.</li><li><strong>Sincronização:</strong> Dados compartilhados entre plataformas para continuidade do aprendizado.</li></ul><h3>🎯 Funcionalidades de Estudo</h3><ul><li><strong>Criação de Flashcards:</strong> Interface intuitiva para criar cartões com perguntas e respostas.</li><li><strong>Organização por Decks:</strong> Agrupe flashcards por matérias ou tópicos específicos.</li><li><strong>Modo de Revisão:</strong> Sistema de repetição espaçada para otimizar a memorização.</li><li><strong>Estatísticas de Progresso:</strong> Acompanhe seu desempenho e evolução nos estudos.</li><li><strong>Offline First:</strong> Funciona sem conexão com internet, sincronizando quando disponível.</li></ul><h3>🛠️ Stack Tecnológica</h3><ul><li><strong>Mobile (React Native + Expo):</strong> Desenvolvimento cross-platform para iOS e Android.</li><li><strong>Desktop (Electron):</strong> Aplicação desktop multiplataforma com tecnologias web.</li><li><strong>Banco de Dados (SQLite):</strong> Persistência local eficiente em todas as plataformas.</li><li><strong>Code Sharing:</strong> Lógica de negócios compartilhada entre mobile e desktop.</li></ul>`
        }
    },

    // Experience Page
    experience: {
        title: "MINHA JORNADA",

        items: {
            aiAnalytics: {
                role: "AI Analytics",
                company: "FIAP",
                period: "Cursando - 2026",
                description: "Pós-graduação em Inteligência Artificial e Data Analytics, com foco em Machine Learning, Deep Learning e estratégias data-driven. Estou aprofundando meus conhecimentos na aplicação de modelos preditivos para resolver problemas complexos de negócios e engenharia."
            },
            analistaTestes: {
                role: "Analista de Testes",
                company: "Lucy",
                period: "2025 - Atual",
                description: "Atuo na garantia de qualidade de software, combinando testes manuais e automatizados para assegurar entregas impecáveis. Especializei-me em automação com Playwright e Percy, criando fluxos de verificação robustos com foco total na confiabilidade do sistema e na experiência do usuário."
            },
            analistaTestesJr: {
                role: "Analista de Testes Jr",
                company: "Virtual Town",
                period: "2023 - 2025",
                description: "Responsável pela execução e gestão do ciclo de vida de testes utilizando Jira. Desenvolvi um Painel Funcional em HTML,CSS e JS que automatizou tarefas recorrentes, aumentando a produtividade."
            },
            estagiarioUnity: {
                role: "Estagiário Unity",
                company: "VRGlass",
                period: "2022 - 2023",
                description: "Atuei no suporte ao ciclo de desenvolvimento de jogos, com foco na garantia de integridade e desempenho dos sistemas. Minha principal atuação foi na detecção e correção de erros, além de colaborar com a equipe na implementação de melhorias em processos e funcionalidades para assegurar a estabilidade e a qualidade da experiência do usuário."
            },
            cienciaComputacao: {
                role: "Ciência da Computação",
                company: "PUC-SP",
                period: "2022 - 2025",
                description: "Graduação completa em Ciência da Computação, com formação voltada para desenvolvimento de software, algoritmos, inteligência artificial e engenharia de sistemas. O curso proporcionou uma base sólida, unindo teoria e prática, preparando para a resolução de problemas complexos. Ao longo da graduação, apliquei os conhecimentos adquiridos em projetos práticos, desenvolvendo habilidades técnicas e colaborativas alinhadas às demandas do mercado."
            }
        }
    },

    // Contact Page
    contact: {
        title: "ENTRE EM CONTATO",
        subtitle: "Vamos construir algo incrível juntos",
        form: {
            namePlaceholder: "Seu Nome",
            emailPlaceholder: "Seu Email",
            messagePlaceholder: "Sua Mensagem...",
            sendButton: "Enviar Mensagem",
            sending: "Enviando...",
            successMessage: "Enviado com sucesso!",
            errorMessage: "Erro ao enviar. Tente novamente."
        },
        downloadCV: "Baixar Currículo"
    }
};
