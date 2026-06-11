import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/portfolio';
import Section from '../shared/Section';

const categories = ['All', ...new Set(skills.map((s) => s.category))] as const;

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filtered = activeCategory === 'All'
        ? skills
        : skills.filter((s) => s.category === activeCategory);

    return (
        <Section id="skills">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Skills &amp; <span className="gradient-text">Expertise</span>
                </h2>
                <p className="mt-4 text-zinc-400">
                    Technologies and tools I work with on a daily basis.
                </p>
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            activeCategory === cat
                                ? 'bg-amber-400 text-black'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
                        }`}
                    >
                        {cat === 'All' ? 'All' : cat}
                    </button>
                ))}
            </div>

            <motion.div layout className="flex flex-wrap justify-center gap-3">
                <AnimatePresence mode="popLayout">
                    {filtered.map((skill) => (
                        <motion.a
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            href={`https://shields.io/badge/${skill.badge.label}-${skill.badge.color}?logo=${skill.badge.logoSlug}&style=for-the-badge`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img
                                src={`https://img.shields.io/badge/${skill.badge.label}-${skill.badge.color}?logo=${skill.badge.logoSlug}&style=for-the-badge`}
                                alt={skill.name}
                                className="h-8"
                                loading="lazy"
                            />
                        </motion.a>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    );
};

export default Skills;
