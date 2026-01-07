import { motion } from 'framer-motion';
import { Shield, Layout, Code2, Cpu, Activity } from 'lucide-react';

const About = () => {
    const skillModules = [
        {
            title: "Frontend",
            icon: <Layout className="w-4 h-4" />,
            skills: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: <Code2 className="w-4 h-4" />,
            skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT Auth"]
        },
        {
            title: "Databases",
            icon: <Shield className="w-4 h-4" />,
            skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Firestore"]
        },
        {
            title: "DevOps",
            icon: <Activity className="w-4 h-4" />,
            skills: ["Git & GitHub", "Docker", "GitHub Actions", "Render", "Netlify"]
        },
        {
            title: "AI / Automation",
            icon: <Cpu className="w-4 h-4" />,
            skills: ["LLM Integration", "Vector DBs (Qdrant)", "PDF Ingestion", "Chatbots"]
        }
    ];

    return (
        <section id="about" className="py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Profile Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 text-accent-violet font-mono text-sm border border-accent-violet/20 bg-accent-violet/5 px-3 py-1 rounded-full">
                        <Shield className="w-4 h-4" />
                        <span>sys_profile_v1.0</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                        Full-stack developer. <br />
                        <span className="text-text-muted">Focused on shipping real products.</span>
                    </h2>

                    <div className="prose prose-invert max-w-none text-text-muted">
                        <p className="text-lg leading-relaxed">
                            I am a full-stack web developer focused on building and deploying real-world applications using modern JavaScript frameworks, backend systems, and AI integrations. My work emphasizes clean architecture, performance, and practical problem-solving. I prioritize shipping functional products over demos.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-8">
                            {[
                                "Building and deploying full-stack applications",
                                "Integrating AI-powered features and automation",
                                "Clean architecture and type-safe development",
                                "Shipping real products, not just demos"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-sm">
                                    <span className="text-accent-cyan font-mono mt-1">/</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* System Modules Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {skillModules.map((module, i) => (
                        <motion.div
                            key={module.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="terminal-panel p-6"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 bg-accent-cyan/5 text-accent-cyan rounded border border-accent-cyan/10">
                                    {module.icon}
                                </div>
                                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-text-primary">
                                    {module.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {module.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[10px] font-mono px-2 py-0.5 bg-bg-primary border border-text-muted/10 text-text-muted rounded"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
