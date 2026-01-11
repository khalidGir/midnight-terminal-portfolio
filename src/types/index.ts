export interface Project {
    id: string;
    name: string;
    problem: string;
    solution: string;
    techStack: string[];
    architectureNotes: string;
    deploymentStatus: 'production' | 'staging' | 'development';
    liveUrl?: string;
    githubUrl: string;
    image?: string;
}

export interface Experience {
    id: string;
    period: string;
    company: string;
    role: string;
    description: string[];
    skills: string[];
    type: 'freelance' | 'product' | 'learning';
}

export interface SkillGroup {
    category: string;
    skills: { name: string; level: number }[];
}
