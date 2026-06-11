import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import Section from '../shared/Section';

const Experience = () => {
    return (
        <Section id="experience" className="bg-zinc-900/50">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-zinc-400">
                    My professional journey and key milestones.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-[23px] top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex flex-col md:flex-row gap-6 md:gap-0"
                        >
                            <div className="hidden md:flex md:w-1/3 md:justify-end md:pr-12">
                                <div className="text-right">
                                    <span className="inline-block rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400 mb-2">
                                        {exp.period}
                                    </span>
                                    <div className="flex items-center justify-end text-zinc-500 text-sm gap-1.5">
                                        <Briefcase size={14} />
                                        {exp.company}
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex absolute left-[15px] top-0">
                                <div className="h-4 w-4 rounded-full border-2 border-amber-400 bg-zinc-950" />
                            </div>

                            <div className="md:w-2/3 md:pl-12">
                                <div className="card p-6">
                                    <div className="flex items-center gap-4 mb-4 md:hidden">
                                        {exp.logo && (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="h-10 w-10 object-contain rounded-md bg-zinc-800 p-1"
                                            />
                                        )}
                                        <div>
                                            <span className="inline-block rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                                                {exp.period}
                                            </span>
                                            <div className="flex items-center text-zinc-500 text-xs mt-1 gap-1">
                                                <Briefcase size={12} />
                                                {exp.company}
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-zinc-100 mb-3">
                                        {exp.role}
                                    </h4>

                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-zinc-400">
                                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 mr-3 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
