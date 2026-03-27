import type { Project, Experience } from '../types';

export const projects: Project[] = [
    {
        id: 'taptrade-system-api',
        name: 'TapTrade System API',
        problem: 'Required a cryptocurrency trading platform capable of analyzing social sentiment for AI trading signals.',
        solution: 'Built RESTful APIs with FastAPI and integrated Twitter sentiment analysis using VADER NLP (achieving 85% accuracy). Implemented historical trading data API with cursor pagination, maintaining <50ms response times and 100% test coverage via 50+ automated tests.',
        techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'VADER', 'Pytest', 'PostgreSQL'],
        architectureNotes: 'Microservices architecture with robust security (RBAC, JWT, input validation) and extensive testing.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/taptrade-system-api',
        image: '/taptrade_thumbnail.png'
    },
    {
        id: 'ethi-sugar-backend',
        name: 'Ethio-Sugar Backend',
        problem: 'Needed a robust, scalable backend architecture for an agricultural platform processing complex relationships.',
        solution: 'Developed a feature-rich, typed backend using TypeScript and Node.js with secure authentication and database integration for the EthioSugar platform.',
        techStack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
        architectureNotes: 'Microservices style structure with clean repository pattern.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/ethi-sugar-backend',
        image: '/ethio_backend_thumbnail.png'
    },
    {
        id: 'ethio-sugar-frontend',
        name: 'Ethio-Sugar Frontend',
        problem: 'Required a performant and responsive interface for Ethiopian agricultural management and operations dashboard.',
        solution: 'Built a structured frontend utilizing React and TypeScript to handle intricate dashboard data and management roles.',
        techStack: ['TypeScript', 'React', 'Tailwind CSS'],
        architectureNotes: 'Component-first architecture tailored for an industrial data dashboard.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/ethio-sugar-frontend',
        image: '/ethio_frontend_thumbnail.png'
    },
    {
        id: 'sekina-wellness',
        name: 'Sekina Wellness',
        problem: 'Needed a modern health and wellness scheduling and informational web platform.',
        solution: 'Constructed an engaging and interactive TypeScript-based web platform to assist users in managing wellness goals and bookings.',
        techStack: ['TypeScript', 'React', 'Next.js'],
        architectureNotes: 'Server-side rendered application focusing on SEO and performance.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/Sekina-wellness',
        image: '/sekina_wellness_thumbnail.png'
    },    
    {
        id: 'dashboard-ui',
        name: 'Modern Dashboard UI',
        problem: 'Required a unified template for displaying multiple streams of data metrics and analytics.',
        solution: 'Designed and implemented a versatile and highly responsive aesthetic dashboard tailored for analytics applications.',
        techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Chart.js'],
        architectureNotes: 'Reusable UI component library for consistent styling.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/Dashboard-UI',
        image: '/modern_dashboard_thumbnail.png'
    },
    {
        id: 'link-scope',
        name: 'Link Scope',
        problem: 'Needed an efficient way to manage, shorten, and track links seamlessly.',
        solution: 'Built a complete link management and tracking tool featuring dynamic analytics using JavaScript.',
        techStack: ['JavaScript', 'Node.js', 'React'],
        architectureNotes: 'RESTful API architecture handling concurrent redirect tracking.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/Link-Scope',
        liveUrl: 'https://link-scope-theta.vercel.app',
        image: '/link_scope_thumbnail.png'
    },
    {
        id: 'interactive-resume-builder',
        name: 'Interactive Resume Builder',
        problem: 'Job seekers needed an easy-to-use, visual tool to construct real-time resumes.',
        solution: 'Developed a real-time responsive resume builder that compiles user input into beautifully formatted document structures.',
        techStack: ['TypeScript', 'React', 'Tailwind CSS'],
        architectureNotes: 'State management optimized for continuous real-time preview updates.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/interactive-resume-builder',
        image: '/resume_builder_thumbnail.png'
    },
    {
        id: 'ai-task-manager',
        name: 'AI Task Manager',
        problem: 'Standard task managers lacked smart prioritization and context-aware suggestions.',
        solution: 'Created an intelligent task management system utilizing AI concepts to prioritize efficiency and schedule optimization.',
        techStack: ['TypeScript', 'React', 'Node.js', 'AI Integration'],
        architectureNotes: 'Asynchronous event-driven architecture integrating with AI prompt APIs.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/AI-task-manager',
        image: '/ai_task_manager_thumbnail.png'
    },
    {
        id: 'sentiment-analysis-api',
        name: 'Sentiment Analysis API',
        problem: 'Required automated insights into user feedback loops and textual data analytics.',
        solution: 'Engineered a machine learning-backed API capable of parsing text inputs and categorizing underlying sentiment data payloads.',
        techStack: ['Python', 'Flask', 'Machine Learning', 'NLP'],
        architectureNotes: 'REST API wrapping NLP analysis models.',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir/sentiment_analysis_api',
        image: '/sentiment_api_thumbnail.png'
    }
];

export const experiences: Experience[] = [
    {
        id: 'syntax-program',
        period: 'Dec 2025 - Present',
        company: 'Syntax Software Solutions',
        role: 'Full Stack Developer & n8n Automation Expert',
        description: [
            'Contributed to core development and project design utilizing full-stack technologies.',
            'Implemented workflow automation and processes using n8n to streamline operations.',
            'Participated in code reviews and continuous integration processes.'
        ],
        skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'n8n'],
        type: 'product',
        logo: '/syntax_logo.png'
    },
    {
        id: 'awura-technologies',
        period: 'Dec 2025 - Present',
        company: 'Awura Technologies',
        role: 'Frontend QA Engineer',
        description: [
            'Established and maintained comprehensive QA testing protocols for frontend applications.',
            'Identified and documented software defects, ensuring high-quality user experiences.',
            'Collaborated closely with developers to resolve visual and functional issues.'
        ],
        skills: ['React', 'TypeScript', 'Testing', 'QA', 'Cypress'],
        type: 'product',
        logo: '/awura_logo.svg'
    },
    {
        id: 'startup-agile',
        period: 'Dec 2025 - Present',
        company: 'Startup Agile',
        role: 'Backend Developer',
        description: [
            'Built robust backend infrastructure and APIs to support rapidly iterating MVP features.',
            'Adapted to agile methodologies and collaborative sprints to deliver reliable data services.',
            'Optimized database queries and managed server deployments.'
        ],
        skills: ['Node.js', 'PostgreSQL', 'TypeScript', 'Express', 'Agile'],
        type: 'product',
        logo: '/startup_agile.png'
    },
    {
        id: 'ati-internship',
        period: '3 Months',
        company: 'ATI (Agricultural Transformation Institute)',
        role: 'Agri-Chatbot Developer Intern',
        description: [
            'Built an agricultural chatbot integrated with Telegram to assist farmers.',
            'Implemented automated communication flows for improved accessibility.',
            'Collaborated on AI integration for localized agricultural support.'
        ],
        skills: ['Python', 'Telegram API', 'Chatbot Development', 'AI'],
        type: 'internship',
        logo: '/ati_logo.png'
    },
    {
        id: '1',
        period: '2024 - Present',
        company: 'Independent / Self-Initiated Projects',
        role: 'Full-Stack Developer',
        description: [
            'Built and deployed full-stack applications from scratch',
            'Integrated authentication, payments, and databases',
            'Worked with AI-powered features and automation',
            'Focused on real-world usability and deployment',
        ],
        skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
        type: 'product'
    }
];
