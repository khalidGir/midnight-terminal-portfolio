import type { Project, Skill, Testimonial, BlogPost, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
    name: 'Khalid Girma',
    title: 'Full-Stack Developer',
    tagline: 'I architect high-performance web applications with clean code and pixel-perfect design.',
    bio: "Hey, I'm Khalid. I've been building software for a while now — full-stack apps, backend systems, automation pipelines, you name it. I like solving messy problems and shipping things that actually work.\n\nWhen I'm not coding, I'm probably diving into AI workflows, tinkering with new tools, or figuring out how to make different systems talk to each other better. I believe the best solutions come from understanding the real problem first, and that usually means listening more than typing.",
    email: 'khalidgirma3@gmail.com',
    phone: '0903 146 834',
    location: 'Addis Ababa, Ethiopia',
    avatar: '/images/avatar.svg',
    resumeUrl: '/Khalid_Girma_FullStack_Developer_CV.pdf',
    social: {
        github: 'https://github.com/khalidGir',
        linkedin: 'https://www.linkedin.com/in/khalid-girma-5a864a2a0/',
        twitter: 'https://twitter.com/khalidgir',
    },
};

export const skills: Skill[] = [
    { name: 'TypeScript', category: 'Language', badge: { label: 'TypeScript', color: '3178c6', logoSlug: 'typescript' } },
    { name: 'JavaScript', category: 'Language', badge: { label: 'JavaScript', color: 'f7df1e', logoSlug: 'javascript' } },
    { name: 'Python', category: 'Language', badge: { label: 'Python', color: '3776ab', logoSlug: 'python' } },
    { name: 'React', category: 'Frontend', badge: { label: 'React', color: '61dafb', logoSlug: 'react' } },
    { name: 'Next.js', category: 'Frontend', badge: { label: 'Next.js', color: '000000', logoSlug: 'nextdotjs' } },
    { name: 'Tailwind CSS', category: 'Frontend', badge: { label: 'Tailwind CSS', color: '06b6d4', logoSlug: 'tailwindcss' } },
    { name: 'Flutter', category: 'Frontend', badge: { label: 'Flutter', color: '02569B', logoSlug: 'flutter' } },
    { name: 'React Native', category: 'Frontend', badge: { label: 'React Native', color: '61DAFB', logoSlug: 'react' } },
    { name: 'Webflow', category: 'Frontend', badge: { label: 'Webflow', color: '4353FF', logoSlug: 'webflow' } },
    { name: 'Redux Toolkit', category: 'Frontend', badge: { label: 'Redux Toolkit', color: '764abc', logoSlug: 'redux' } },
    { name: 'Node.js', category: 'Backend', badge: { label: 'Node.js', color: '339933', logoSlug: 'nodedotjs' } },
    { name: 'FastAPI', category: 'Backend', badge: { label: 'FastAPI', color: '009688', logoSlug: 'fastapi' } },
    { name: 'NestJS', category: 'Backend', badge: { label: 'NestJS', color: 'e0234e', logoSlug: 'nestjs' } },
    { name: 'SQLAlchemy', category: 'Backend', badge: { label: 'SQLAlchemy', color: 'd71f00', logoSlug: 'sqlalchemy' } },
    { name: 'Google Stitch', category: 'Design', badge: { label: 'Google Stitch', color: '4285f4', logoSlug: 'google' } },
    { name: 'PostgreSQL', category: 'Database', badge: { label: 'PostgreSQL', color: '4169e1', logoSlug: 'postgresql' } },
    { name: 'MongoDB', category: 'Database', badge: { label: 'MongoDB', color: '47a248', logoSlug: 'mongodb' } },
    { name: 'Prisma', category: 'Database', badge: { label: 'Prisma', color: '2d3748', logoSlug: 'prisma' } },
    { name: 'SQLite', category: 'Database', badge: { label: 'SQLite', color: '003b57', logoSlug: 'sqlite' } },
    { name: 'Docker', category: 'DevOps', badge: { label: 'Docker', color: '2496ed', logoSlug: 'docker' } },
    { name: 'Git', category: 'DevOps', badge: { label: 'Git', color: 'f05032', logoSlug: 'git' } },
    { name: 'CI/CD', category: 'DevOps', badge: { label: 'CI/CD', color: 'fc6d26', logoSlug: 'gitlab' } },
    { name: 'JWT Auth', category: 'DevOps', badge: { label: 'JWT Auth', color: '000000', logoSlug: 'jsonwebtokens' } },
    { name: 'Kubernetes', category: 'DevOps', badge: { label: 'Kubernetes', color: '326CE5', logoSlug: 'kubernetes' } },
    { name: 'AWS', category: 'DevOps', badge: { label: 'AWS', color: 'FF9900', logoSlug: 'amazonwebservices' } },
    { name: 'GitHub Actions', category: 'DevOps', badge: { label: 'GitHub Actions', color: '2088FF', logoSlug: 'githubactions' } },
    { name: 'Nginx', category: 'DevOps', badge: { label: 'Nginx', color: '009639', logoSlug: 'nginx' } },
    { name: 'Linux', category: 'DevOps', badge: { label: 'Linux', color: 'FCC624', logoSlug: 'linux' } },
    { name: 'Figma', category: 'Design', badge: { label: 'Figma', color: 'F24E1E', logoSlug: 'figma' } },
    { name: 'Framer Motion', category: 'Design', badge: { label: 'Framer Motion', color: '0055FF', logoSlug: 'framer' } },
    { name: 'System Architecture', category: 'Design', badge: { label: 'Architecture', color: '6B3FA0', logoSlug: 'diagramsdotnet' } },
    { name: 'Canva', category: 'Design', badge: { label: 'Canva', color: '00C4CC', logoSlug: 'canva' } },
];

export const projects: Project[] = [
    {
        id: 1,
        title: 'Tap Trade Pro',
        description: 'A high-frequency derivatives and perpetual futures trading terminal integrating Web3 wallet connections with ultra-low latency WebSocket streams from global exchanges like Hyperliquid and OKX.',
        image: '/images/project-1.png',
        icon: 'BarChart3',
        tags: ['Next.js', 'Node.js', 'WebSockets', 'Hyperliquid API', 'Docker', 'Tailwind CSS'],
        liveUrl: 'https://taptrade.example.com',
        githubUrl: 'https://github.com/khalidGir/tap-trade-pro',
        featured: true,
    },
    {
        id: 2,
        title: 'Tanker Logistics Engine',
        description: 'A comprehensive multi-actor logistics platform for on-demand fluid distribution, mapping over 16 dedicated state-synchronized views across driver, customer, and dispatch applications with offline-first support.',
        image: '/images/project-2.png',
        icon: 'Timer',
        tags: ['Next.js', 'React Native', 'PostgreSQL', 'Framer Motion'],
        liveUrl: 'https://tanker.example.com',
        githubUrl: 'https://github.com/khalidGir/tanker-logistics',
        featured: true,
    },
    {
        id: 3,
        title: 'SatAgro Internal Platform',
        description: 'An enterprise-grade internal insights dashboard for agroeconomists, leveraging processing pipelines for satellite telemetry data and automated alerts driven by custom spatial algorithms.',
        image: '/images/project-3.png',
        icon: 'Leaf',
        tags: ['Python', 'Next.js', 'FastAPI', 'PostGIS', 'n8n Automation'],
        liveUrl: 'https://satagro.example.com',
        githubUrl: 'https://github.com/khalidGir/satagro-insights',
        featured: true,
    },
    {
        id: 4,
        title: 'Bilingual AI Support Core',
        description: 'An autonomous AI-powered agent framework designed for institutional support over low-bandwidth communication channels, utilizing semantic vector search and custom localized language processing layers.',
        image: '/images/project-4.png',
        icon: 'Puzzle',
        tags: ['Node.js', 'Qwen LLM', 'Vector DB', 'Telegram API', 'TypeScript'],
        liveUrl: 'https://ai-core.example.com',
        githubUrl: 'https://github.com/khalidGir/bilingual-ai-core',
        featured: false,
    },
];

export const experiences = [
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
        period: '3 Months',
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

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'Working with Khalid was an incredible experience. His ability to translate complex requirements into elegant, performant code is truly remarkable. He brought both technical excellence and creative problem-solving to every challenge.',
        name: 'Sarah Mekonnen',
        role: 'CTO, TechVentures Ethiopia',
        avatar: '/images/testimonial-1.svg',
    },
    {
        id: '2',
        quote: 'Khalid delivered beyond expectations. His full-stack expertise and attention to detail made our platform launch seamless. He has a rare ability to see the big picture while perfecting the small details.',
        name: 'Abel Tesfaye',
        role: 'Product Lead, AgroInsight',
        avatar: '/images/testimonial-2.svg',
    },
    {
        id: '3',
        quote: 'Exceptional developer with a deep understanding of modern web architecture. Khalid\'s work on our AI integration was groundbreaking. He is not just a developer but a true technology partner.',
        name: 'Bereket Hailu',
        role: 'Founder, NexaSoft',
        avatar: '/images/testimonial-3.svg',
    },
];

export const blogPosts: BlogPost[] = [
    {
        slug: 'building-scalable-apis-with-fastapi',
        title: 'Building Scalable APIs with FastAPI',
        date: 'March 15, 2026',
        readTime: '8 min read',
        excerpt: 'A deep dive into building production-ready APIs with FastAPI, covering middleware, testing, and deployment strategies.',
        content: `In the rapidly evolving landscape of web development, building APIs that are both performant and maintainable is crucial. FastAPI has emerged as a leading framework for Python developers, offering automatic OpenAPI documentation, type safety, and async support out of the box.\n\nThis article explores the key patterns and practices I have adopted while building production APIs with FastAPI. From structuring your project with dependency injection to implementing robust authentication and authorization, we will cover the essential building blocks.\n\nOne of the most powerful features of FastAPI is its dependency injection system. By leveraging dependencies, you can keep your route handlers clean and focused on business logic while cross-cutting concerns like authentication, database sessions, and rate limiting are handled declaratively.\n\nTesting is another area where FastAPI shines. The TestClient, built on top of HTTPX, allows you to write comprehensive integration tests with minimal boilerplate. Combined with pytest fixtures, you can create a test suite that gives you confidence in every deployment.\n\nFinally, we will look at deployment strategies, including containerization with Docker, database migrations with Alembic, and CI/CD pipelines that automate testing and deployment.`,
        tags: ['Python', 'FastAPI', 'API', 'Backend'],
    },
    {
        slug: 'mastering-tailwind-css-v4',
        title: 'Mastering Tailwind CSS v4',
        date: 'February 20, 2026',
        readTime: '6 min read',
        excerpt: 'Explore the new features in Tailwind CSS v4 and how they change the way we style modern web applications.',
        content: `Tailwind CSS v4 represents a paradigm shift in how we think about utility-first CSS. With the new CSS-first configuration model, you can define your design system directly in your stylesheet using CSS variables and @theme directives.\n\nThe most significant change in v4 is the removal of the tailwind.config.js file in favor of CSS-based configuration. This means your color palette, spacing scale, and typography settings all live in your CSS file, making it more intuitive and reducing context switching.\n\nAnother game-changing feature is the improved performance. The new engine uses Lightning CSS under the hood, resulting in build times that are up to 10x faster than v3. For large projects with extensive design systems, this translates to significant developer experience improvements.\n\nThe new @import syntax for layers and the ability to use arbitrary variants more easily make complex responsive designs simpler to implement. Combined with the new container queries support, Tailwind v4 truly embraces modern CSS.`,
        tags: ['CSS', 'Tailwind', 'Frontend', 'Design'],
    },
    {
        slug: 'the-art-of-code-review',
        title: 'The Art of Code Review',
        date: 'January 10, 2026',
        readTime: '5 min read',
        excerpt: 'How to give and receive constructive code reviews that improve both code quality and team culture.',
        content: `Code review is one of the most effective practices for maintaining code quality and sharing knowledge within a team. However, the difference between a productive code review and a frustrating one often comes down to approach and communication.\n\nWhen reviewing code, focus on the architecture and logic first, then move to style and naming conventions. Start by understanding the problem the code is solving. Ask questions rather than making assumptions. Frame feedback as suggestions rather than commands.\n\nFor the author, the key is to separate yourself from your code. When someone suggests a change, they are not criticizing you; they are collaborating to make the code better. Write clear commit messages and PR descriptions that explain the context and decisions made.\n\nUltimately, great code reviews are a conversation between peers who share a common goal: building great software. They require empathy, humility, and a commitment to continuous improvement from everyone involved.`,
        tags: ['Best Practices', 'Team', 'Development', 'Collaboration'],
    },
];
