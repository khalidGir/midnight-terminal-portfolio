export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    period: string;
    company: string;
    role: string;
    description: string[];
    skills: string[];
    type: 'freelance' | 'product' | 'learning' | 'internship';
    logo?: string;
}

export interface Skill {
    name: string;
    category: 'Language' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design';
    badge: {
        label: string;
        color: string;
        logoSlug: string;
    };
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    resumeUrl: string;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}
