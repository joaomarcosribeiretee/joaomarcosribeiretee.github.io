// English translations - Professional technical translations
export const en = {
    // Header/Menu
    header: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact"
    },

    // Home Page
    home: {
        greeting: "HEY, I'M",
        name: "JOÃO MARCOS",
        subtitle: "Full Stack Developer | QA (Test Automation)",
        description: "Applying <strong>Artificial Intelligence</strong> to elevate development and automation standards.",
        btnProjects: "view my projects",
        btnAbout: "about me"
    },

    // About Page
    about: {
        title: "ABOUT",
        titleHighlight: "ME",
        bio1: "Hello! I'm <strong>João Marcos Ribeirete Garbelini</strong>, a Full Stack Developer and QA focused on building high-quality, high-performance software. I graduated in Computer Science from PUC-SP and I'm specializing in a Postgraduate degree in AI Scientist at FIAP, combining traditional development with the possibilities of Artificial Intelligence.",
        bio2: "My expertise focuses on <strong>React, Node.js</strong>, as well as strong experience in test automation with <strong>Playwright, Percy, and Cypress</strong>. I'm expanding my work into the <strong>data and AI</strong> field, seeking to integrate intelligent technologies to optimize processes and develop solutions that keep pace with constant market evolution.",
        bio3: "Outside the terminal, I seek balance through weight training and soccer, keeping my body as active as my mind. My enthusiast side is completed with games, sci-fi movies, and animations, which are my main sources of inspiration to explore new ideas and continue evolving in the world of technology.",
        listeningLabel: "Currently listening on"
    },

    // Skills Page
    skills: {
        title: "Skills",
        categories: {
            frontend: {
                label: "Front-End",
                description: "Modern, responsive interfaces focused on user experience"
            },
            backend: {
                label: "Back-End",
                description: "Business logic, APIs, and database integration"
            },
            qa: {
                label: "Testing & QA",
                description: "Quality assurance, stability, and system reliability"
            },
            utils: {
                label: "Utilities",
                description: "Support tools for productivity and creation"
            }
        }
    },

    // Projects Page
    projects: {
        title: "PROJECTS",
        subtitle: "Explore my personal projects",
        viewDetails: "View Details",
        close: "Close",
        githubRepo: "GitHub Repository",
        watchVideo: "Watch Video",
        team: "Team",
        stack: "Tech Stack",
        year: "YEAR",
        context: "CONTEXT",
        role: "ROLE",
        overview: "OVERVIEW",
        footer: "Liked the project?",
        footerLink: "Get in touch.",
        detailsLabel: "Details",

        // Individual Projects
        tccFitness: {
            title: "TCC: AI FITNESS SYSTEM",
            year: "2025",
            context: "Mobile App & AI",
            role: "Full Stack & AI Eng.",
            shortDesc: "Intelligent workout and nutrition management with GPT-4o.",
            longDesc: `Final thesis project exploring the potential of <strong>LLMs (Large Language Models)</strong> in health ultra-personalization. The system uses a <strong>GPT-4o Mini model with supervised Fine-Tuning</strong> to act as a biomechanical trainer and specialist nutritionist.<br/><br/>Unlike common apps, it performs a complete clinical anamnesis and uses AI to adjust training and diet protocols in real-time, respecting all unique restrictions and goals of each user.`,
            fullDetails: `<h3>🧠 Specialized Artificial Intelligence</h3><p>The focus of AI use in this project was precision and safety.</p><ul><li><strong>Understanding Limitations:</strong> The system was trained to deeply understand user specificities (injuries, experience level, available time). It generates fully adapted plans, ensuring each recommendation is safe and efficient.</li><li><strong>Fine-Tuning and Precision:</strong> Thanks to model refinement, we achieved high precision in macronutrient calculations and training volume, eliminating common "hallucinations" and ensuring prescription reliability.</li></ul><h3>🏗️ Architecture & Software Engineering</h3><p>Built on the pillars of <strong>Clean Architecture</strong> to ensure total decoupling.</p><ul><li><strong>Backend (Python/FastAPI):</strong> Asynchronous architecture optimized for high concurrency. Uses <em>Repository Pattern</em> for data abstraction and dependency injection via containers.</li><li><strong>Frontend (React Native):</strong> Rigorous implementation of the MVVM pattern (Model-View-ViewModel), ensuring presentation logic doesn't contaminate the UI, facilitating unit testing.</li></ul><h3>📱 User Experience (App)</h3><p>Works intuitively: the user answers an anamnesis and AI builds the ideal plan.</p><ul><li><strong>Training & Execution:</strong> The user views their workout and can execute it in real-time, recording loads and visually tracking their progression over time.</li><li><strong>Integrated Diet:</strong> The diet appears clearly, with meals calculated specifically for the current goal.</li></ul>`
        },

        marketplace: {
            title: "MARKETPLACE",
            year: "2024",
            context: "Web Systems",
            role: "Backend & Database",
            shortDesc: "Complete e-commerce platform with authentication and inventory management.",
            longDesc: `Buy and sell ecosystem developed with focus on <strong>data integrity and security</strong>.<br/><br/>The system allows users to create accounts, manage their own product listings, and perform simulated transactions, all supported by a robust relational database that ensures inventory consistency.`,
            fullDetails: `<h3>🔐 Security & Authentication</h3><p>Implementation of a secure login system "from scratch", without relying on external services.</p><ul><li><strong>Encryption:</strong> Passwords stored with hash + salt (Bcrypt), protecting against rainbow table attacks.</li><li><strong>Route Protection:</strong> Authentication middleware that ensures only logged-in users can create/edit listings.</li></ul><h3>💾 Data Architecture (MySQL)</h3><p>Complex relational modeling to support marketplace flow.</p><ul><li><strong>Relationships:</strong> Robust structure connecting <em>Users</em>, <em>Products</em>, and <em>Orders</em> (1:N and N:N).</li><li><strong>Atomic Transactions:</strong> Guarantee that inventory is debited only if the order is successfully confirmed.</li></ul><h3>🚀 Product Features</h3><ul><li><strong>Listing Management:</strong> Complete CRUD (Create, Read, Update, Delete) with image upload.</li><li><strong>Shopping Cart:</strong> User session state persistence.</li></ul>`
        },

        todoList: {
            title: "TO-DO LIST APP",
            year: "2025",
            context: "Android Mobile",
            role: "Android Developer",
            shortDesc: "Productivity system with 5 modules and native UX.",
            longDesc: `Robust Android application, built with <strong>Java</strong>, focused on multiple Activities architecture and navigation via explicit Intents.<br/><br/>The project implements a complete flow for creating, viewing, and managing tasks, with real-time data validation and instant visual feedback (Toasts), ensuring a fluid and flawless user experience.`,
            fullDetails: `<h3>📱 Mobile Engineering & Architecture</h3><p>The differential of this project is the clear separation of responsibilities across 5 distinct screens, each with its isolated business logic:</p><ul><li><strong>Dashboard (Main):</strong> Centralized navigation with colorful cards and intuitive icons.</li><li><strong>Registration (Add):</strong> Forms with input validation and due date.</li><li><strong>Listing (View):</strong> RecyclerView optimized for scroll and performance.</li><li><strong>Details (Detail):</strong> Expanded view with completion options.</li><li><strong>Settings (Settings):</strong> Functional switches for notification and theme control.</li></ul><h3>🛠️ Tech Stack</h3><ul><li><strong>Java & Android SDK:</strong> Purely native development for maximum performance and lifecycle control.</li><li><strong>XML Layouts:</strong> Advanced use of ConstraintLayout and Material Design Components.</li><li><strong>Gradle:</strong> Efficient dependency and build management.</li></ul>`
        },

        ultrafit: {
            title: "ULTRAFIT ACADEMY",
            year: "2024",
            context: "Web Application",
            role: "Full Stack Team",
            shortDesc: "Complete management of students, workouts, and physical assessments.",
            longDesc: `Modernized web platform to replace spreadsheets and manual methods in gyms.<br/><br/>Centralizes student management, personalized workout prescription, and physical assessment history, providing operational efficiency for instructors.`,
            fullDetails: `<h3>📊 Management & Efficiency</h3><p>The system solves the disorganization of paper forms and decentralized spreadsheets.</p><ul><li><strong>Workout Prescription:</strong> Intuitive interface to build workout sheets with pre-registered muscle groups and exercises.</li></ul><h3>💻 Tech Stack</h3><ul><li><strong>Frontend (React):</strong> Reactive interface focused on physical education professional usability.</li><li><strong>Backend (Node/Express):</strong> RESTful API that manages business rules and persistence.</li></ul>`
        },

        ligamaster: {
            title: "LIGAMASTER",
            year: "2024",
            context: "Web Application",
            role: "Full Stack Developer",
            shortDesc: "Complete platform for organizing championships among friends.",
            longDesc: `Robust web system for sports tournament management, allowing creation and administration of complete championships with <strong>teams, games, and tables</strong>.<br/><br/>The platform offers tools for participant registration, automatic bracket generation, result recording, and real-time statistics tracking, making competition organization among friends simple and professional.`,
            fullDetails: `<h3>⚽ Complete Championship Management</h3><p>Ligamaster centralizes all necessary functionalities to organize tournaments from start to finish:</p><ul><li><strong>Championship Creation:</strong> Configure custom tournaments with different formats (knockout, round-robin, groups).</li><li><strong>Team Management:</strong> Complete registration of participating teams with detailed information.</li><li><strong>Game Control:</strong> Match recording, results, and individual statistics.</li><li><strong>Automatic Tables:</strong> Dynamic generation of standings and brackets based on results.</li><li><strong>Real-Time Statistics:</strong> Performance tracking, top scorers, and match history.</li></ul><h3>🛠️ Tech Stack</h3><ul><li><strong>Backend (Node.js + Express):</strong> RESTful API for data management and business logic.</li><li><strong>Database (MySQL):</strong> Relational persistence optimized for complex statistics queries.</li><li><strong>Frontend (EJS + Bootstrap):</strong> Responsive and intuitive interface for tournament administration.</li><li><strong>Custom Algorithms:</strong> Automatic bracket logic and standings calculation.</li></ul>`
        },

        flashcards: {
            title: "FLASHCARDS",
            year: "2022",
            context: "Cross-Platform App",
            role: "Mobile & Desktop Developer",
            shortDesc: "Study tool with flashcards for mobile and desktop.",
            longDesc: `Cross-platform application for creating and reviewing <strong>flashcards</strong>, available on both <strong>mobile devices</strong> and <strong>desktop</strong>.<br/><br/>The app allows students to create, organize, and review content efficiently through memorization cards, facilitating active learning and information retention anywhere.`,
            fullDetails: `<h3>📱 True Cross-Platform</h3><p>Flashcards was developed to work perfectly on different platforms, offering the same user experience on all devices:</p><ul><li><strong>Mobile Version:</strong> Native app for Android and iOS, allowing study on the go.</li><li><strong>Desktop Version:</strong> Standalone application for Windows, macOS, and Linux, ideal for longer study sessions.</li><li><strong>Synchronization:</strong> Data shared between platforms for learning continuity.</li></ul><h3>🎯 Study Features</h3><ul><li><strong>Flashcard Creation:</strong> Intuitive interface to create cards with questions and answers.</li><li><strong>Deck Organization:</strong> Group flashcards by subjects or specific topics.</li><li><strong>Review Mode:</strong> Spaced repetition system to optimize memorization.</li><li><strong>Progress Statistics:</strong> Track your performance and evolution in studies.</li><li><strong>Offline First:</strong> Works without internet connection, syncing when available.</li></ul><h3>🛠️ Tech Stack</h3><ul><li><strong>Mobile (React Native + Expo):</strong> Cross-platform development for iOS and Android.</li><li><strong>Desktop (Electron):</strong> Cross-platform desktop application with web technologies.</li><li><strong>Database (SQLite):</strong> Efficient local persistence on all platforms.</li><li><strong>Code Sharing:</strong> Business logic shared between mobile and desktop.</li></ul>`
        }
    },

    // Experience Page
    experience: {
        title: "MY JOURNEY",

        items: {
            aiAnalytics: {
                role: "AI Analytics",
                company: "FIAP",
                period: "Ongoing - 2026",
                description: "Postgraduate degree in Artificial Intelligence and Data Analytics, focusing on Machine Learning, Deep Learning, and data-driven strategies. I am deepening my knowledge in applying predictive models to solve complex business and engineering problems."
            },
            analistaTestes: {
                role: "Test Analyst",
                company: "Lucy",
                period: "2025 - Present",
                description: "I work in software quality assurance, combining manual and automated testing to ensure flawless deliveries. I specialized in automation with Playwright and Percy, creating robust verification flows with total focus on system reliability and user experience."
            },
            analistaTestesJr: {
                role: "Junior Test Analyst",
                company: "Virtual Town",
                period: "2023 - 2025",
                description: "Responsible for executing and managing the test lifecycle using Jira. I developed a Functional Dashboard in HTML, CSS, and JS that automated recurring tasks, increasing productivity."
            },
            estagiarioUnity: {
                role: "Unity Intern",
                company: "VRGlass",
                period: "2022 - 2023",
                description: "I worked supporting the game development cycle, focusing on ensuring system integrity and performance. My main role was in detecting and correcting errors, as well as collaborating with the team in implementing improvements in processes and functionalities to ensure stability and quality of user experience."
            },
            cienciaComputacao: {
                role: "Computer Science",
                company: "PUC-SP",
                period: "2022 - 2025",
                description: "Complete degree in Computer Science, with training focused on software development, algorithms, artificial intelligence, and systems engineering. The course provided a solid foundation, combining theory and practice, preparing for solving complex problems. Throughout the degree, I applied acquired knowledge in practical projects, developing technical and collaborative skills aligned with market demands."
            }
        }
    },

    // Contact Page
    contact: {
        title: "GET IN TOUCH",
        subtitle: "Let's build something amazing together",
        form: {
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message...",
            sendButton: "Send Message",
            sending: "Sending...",
            successMessage: "Successfully sent!",
            errorMessage: "Error sending. Please try again."
        },
        downloadCV: "Download Resume"
    }
};
