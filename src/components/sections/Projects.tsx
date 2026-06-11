import { motion } from 'framer-motion';
import { ExternalLink, BarChart3, Timer, Leaf, Puzzle, type LucideIcon } from 'lucide-react';
import { GithubIcon } from '../shared/Icons';
import { projects } from '../../data/portfolio';
import Section from '../shared/Section';

const iconMap: Record<string, LucideIcon> = {
    BarChart3,
    Timer,
    Leaf,
    Puzzle,
};

const Projects = () => {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
                    Projects
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                    Featured <span className="gradient-text">work</span>
                </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {projects.map((project, i) => {
                    const Icon = iconMap[project.icon];
                    return (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700"
                        >
                            <div
                                className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 bg-cover bg-center"
                                style={{ backgroundImage: `url(${project.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/40" />
                                {Icon && (
                                    <Icon size={48} className="relative text-zinc-600 opacity-20 transition-all group-hover:opacity-40 group-hover:text-amber-400" />
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <div className="flex shrink-0 gap-1">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-lg p-2 text-zinc-500 transition-colors hover:text-zinc-200"
                                        >
                                            <GithubIcon size={14} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-lg p-2 text-zinc-500 transition-colors hover:text-zinc-200"
                                        >
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </Section>
    );
};

export default Projects;
