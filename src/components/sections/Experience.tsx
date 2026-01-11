import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                        Experience
                    </h2>
                    <p className="text-lg text-text-secondary">
                        My professional journey and key milestones.
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
                        >
                            <div className="md:w-1/4 shrink-0">
                                <span className="inline-block px-3 py-1 bg-indigo-50 text-accent-primary rounded-full text-sm font-medium mb-2">
                                    {exp.period}
                                </span>
                                <div className="flex items-center text-text-secondary font-medium mt-1">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    {exp.company}
                                </div>
                            </div>

                            <div className="md:w-3/4">
                                <h4 className="text-xl font-bold text-text-primary mb-3">
                                    {exp.role}
                                </h4>

                                <ul className="space-y-3 mb-6">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-text-secondary">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 mr-3 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="text-xs px-2 py-1 bg-slate-100 text-text-secondary rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
