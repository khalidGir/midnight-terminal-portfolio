import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Server, Globe } from 'lucide-react';
import type { Project } from '../../types';
import { projects } from '../../data/portfolio';

const ProjectCard = ({ project }: { project: Project }) => {
    const accentClass = {
        cyan: 'text-accent-cyan border-accent-cyan/20 group-hover:border-accent-cyan/50',
        violet: 'text-accent-violet border-accent-violet/20 group-hover:border-accent-violet/50',
        green: 'text-status-success border-status-success/20 group-hover:border-status-success/50',
        amber: 'text-status-warning border-status-warning/20 group-hover:border-status-warning/50',
    }[project.accentColor];

    const glowClass = {
        cyan: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
        violet: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
        green: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
        amber: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    }[project.accentColor];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`group terminal-panel bg-bg-secondary p-6 transition-all duration-300 ${glowClass}`}
        >
            <div className="flex justify-between items-start mb-6">
                <div className={`p-2 bg-white/5 rounded ${accentClass}`}>
                    <Code2 className="w-5 h-5" />
                </div>
                <div className="flex space-x-3">
                    <a href={project.githubUrl} className="text-text-muted hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} className="text-text-muted hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-3 font-mono">
                {project.name}
            </h3>

            <div className="space-y-4 mb-6">
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Problem</span>
                    <p className="text-sm text-text-muted line-clamp-2">{project.problem}</p>
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Solution</span>
                    <p className="text-sm text-text-primary">{project.solution}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-bg-primary border border-text-muted/10 text-text-muted rounded">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="pt-4 border-t border-text-muted/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Server className="w-3.5 h-3.5 text-text-muted" />
                    <span className="text-[10px] font-mono text-text-muted truncate max-w-[150px]">
                        {project.architectureNotes}
                    </span>
                </div>
                <div className="flex items-center space-x-1.5">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${project.deploymentStatus === 'production' ? 'bg-status-success' : 'bg-status-warning'}`} />
                    <span className="text-[10px] font-mono text-text-muted uppercase">
                        {project.deploymentStatus}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
                <div>
                    <h2 className="text-accent-cyan font-mono text-sm mb-2">02_modules</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Featured Projects</h3>
                </div>
                <div className="text-text-muted text-sm font-mono flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Status: All Systems Operational</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
