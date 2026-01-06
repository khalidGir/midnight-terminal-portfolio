import { motion } from 'framer-motion';
import { Briefcase, Zap } from 'lucide-react';
import { experiences } from '../../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="mb-12">
                <h2 className="text-status-success font-mono text-sm mb-2">03_timeline</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Learning & Growth</h3>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-status-success/30 before:to-transparent">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                    >
                        {/* Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-bg-primary bg-bg-secondary text-status-success shadow-[0_0_10px_rgba(16,185,129,0.2)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <Zap className="w-4 h-4" />
                        </div>

                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 terminal-panel">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <div className="font-mono text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full inline-block">
                                    {exp.period}
                                </div>
                                <div className="flex items-center text-text-muted text-xs font-mono">
                                    <Briefcase className="w-3 h-3 mr-1" />
                                    {exp.company}
                                </div>
                            </div>

                            <h4 className="text-lg font-bold text-text-primary mb-2 font-mono">{exp.role}</h4>

                            <ul className="space-y-3 mb-6">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-text-muted">
                                        <span className="text-status-success mr-2 mt-1.5 w-1 h-1 rounded-full bg-status-success shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="text-[10px] font-mono text-status-success border border-status-success/20 px-1.5 py-0.5 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
