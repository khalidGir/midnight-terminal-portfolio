import type { Project, Experience } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        name: 'AI Chat Widget Platform',
        problem: 'Businesses need an easy way to add AI-powered support chat to websites using their own documents.',
        solution: 'Built a modular chat widget system with document ingestion, vector search, and customizable embeds.',
        techStack: ['NestJS', 'PostgreSQL', 'Prisma', 'Qdrant', 'Docker', 'TypeScript'],
        architectureNotes: 'Microservices with vector search and RAG pipeline',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir'
    },
    {
        id: '2',
        name: 'Full-Stack Dashboard Application',
        problem: 'Managing data, analytics, and reporting across users required a centralized dashboard.',
        solution: 'Developed a secure dashboard with authentication, charts, file uploads, and printable reports.',
        techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
        architectureNotes: 'JWT authentication with role-based access control',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir'
    },
    {
        id: '3',
        name: 'SEO Analysis Tool',
        problem: 'Website owners lacked simple tools to compare SEO health against competitors.',
        solution: 'Built a one-page SEO comparison tool that analyzes two websites and outputs actionable recommendations.',
        techStack: ['React', 'JavaScript', 'SEO APIs', 'Netlify'],
        architectureNotes: 'Client-side processing with API integration',
        deploymentStatus: 'production',
        githubUrl: 'https://github.com/khalidGir'
    },
    {
        id: '4',
        name: 'E-Commerce Website',
        problem: 'A local shop needed an online presence to list products and manage deliveries.',
        solution: 'Designed and deployed a lightweight e-commerce website focused on usability and fast deployment.',
        techStack: ['React', 'Tailwind CSS', 'Backend APIs'],
        architectureNotes: 'Optimized for fast loading and mobile experience',
        deploymentStatus: 'development',
        githubUrl: 'https://github.com/khalidGir'
    }
];

export const experiences: Experience[] = [
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
