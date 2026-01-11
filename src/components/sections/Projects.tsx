import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { projects } from '../../data/portfolio';

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group card overflow-hidden flex flex-col h-full"
        >
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-3">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs font-medium text-accent-primary bg-indigo-50 px-2 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <a href={project.githubUrl} className="text-text-muted hover:text-text-primary transition-colors" title="View Code">
                            <Github size={20} />
                        </a>
                        {project.liveUrl && (
                            <a href={project.liveUrl} className="text-text-muted hover:text-accent-primary transition-colors" title="View Live">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                    {project.name}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                    {project.problem}
                </p>

                <div className="pt-6 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-text-primary">
                            {project.solution.substring(0, 40)}...
                        </span>
                        {project.liveUrl && (
                            <a href={project.liveUrl} className="flex items-center text-sm font-medium text-accent-primary group-hover:underline">
                                Visit Site <ArrowUpRight className="ml-1 w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-text-secondary max-w-xl">
                            A selection of projects that demonstrate my technical capabilities and problem-solving skills.
                        </p>
                    </div>
                    <a href="https://github.com/khalidGir" className="text-accent-primary font-medium hover:underline flex items-center">
                        View GitHub <ArrowUpRight className="ml-1 w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
