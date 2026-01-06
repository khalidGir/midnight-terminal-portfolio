import type { Project, Experience } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        name: 'NeuralNexus Engine',
        problem: 'Fragmentation in AI-driven data pipelines causing high latency and inconsistency.',
        solution: 'A unified gRPC-based architectural layer for real-time LLM inference and vector search.',
        techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Python', 'Docker'],
        architectureNotes: 'Microservices architecture with event-driven synchronization.',
        deploymentStatus: 'production',
        githubUrl: 'https://github.com/example/neuralnexus',
        accentColor: 'cyan'
    },
    {
        id: '2',
        name: 'Quantum UI System',
        problem: 'Inflexible design systems slowing down development in enterprise-scale React apps.',
        solution: 'A high-performance, token-based UI framework built with focus on accessibility and motion.',
        techStack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
        architectureNotes: 'Composite component pattern with strong internal type safety.',
        deploymentStatus: 'production',
        githubUrl: 'https://github.com/example/quantum-ui',
        accentColor: 'violet'
    }
];

export const experiences: Experience[] = [
    {
        id: '1',
        period: '2024 - Present',
        company: 'Self-Initiated',
        role: 'Full-Stack Developer',
        description: [
            'Developed and deployed autonomous AI agents for workflow automation.',
            'Optimized database queries reducing latency by 40% across major projects.',
        ],
        skills: ['TS', 'Next.js', 'Go', 'AI'],
        type: 'product'
    },
    {
        id: '2',
        period: '2023 - 2024',
        company: 'Various Clients',
        role: 'Freelance Engineer',
        description: [
            'Built production-grade web applications for e-commerce and fintech startups.',
            'Implemented robust CI/CD pipelines significantly improving deployment speed.',
        ],
        skills: ['React', 'Node', 'AWS'],
        type: 'freelance'
    }
];
