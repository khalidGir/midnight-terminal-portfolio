import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import Section from '../shared/Section';

const About = () => {
    return (
        <Section id="about" className="bg-zinc-900/50">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        About <span className="gradient-text">Me</span>
                    </h2>

                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                        {personalInfo.bio.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-4">
                        {[
                            { value: '3+', label: 'Years Experience' },
                            { value: '12+', label: 'Projects Completed' },
                            { value: '8+', label: 'Happy Clients' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="card gradient-border p-8">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 text-2xl font-bold text-amber-400">
                                KG
                            </div>
                            <div>
                                <p className="text-lg font-semibold">{personalInfo.name}</p>
                                <p className="text-sm text-zinc-500">{personalInfo.title}</p>
                            </div>
                        </div>
                        <blockquote className="border-l-2 border-amber-400/50 pl-4 text-sm italic text-zinc-400">
                            I believe in writing code that is not only functional but also elegant,
                            maintainable, and scalable. Every project is an opportunity to push
                            boundaries and deliver exceptional results.
                        </blockquote>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            {[
                                'Full-Stack Development',
                                'AI Integration',
                                'System Architecture',
                                'Performance Optimization',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-zinc-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl" />
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
