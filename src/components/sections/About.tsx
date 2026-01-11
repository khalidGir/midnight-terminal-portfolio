import { motion } from 'framer-motion';
import { Shield, Layout, Code2, Cpu, Activity } from 'lucide-react';

const About = () => {
    const skillModules = [
        {
            title: "Frontend",
            icon: <Layout className="w-5 h-5" />,
            skills: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: <Code2 className="w-5 h-5" />,
            skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT Auth"]
        },
        {
            title: "Databases",
            icon: <Shield className="w-5 h-5" />,
            skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Firestore"]
        },
        {
            title: "DevOps",
            icon: <Activity className="w-5 h-5" />,
            skills: ["Git & GitHub", "Docker", "GitHub Actions", "Render", "Netlify"]
        },
        {
            title: "AI / Automation",
            icon: <Cpu className="w-5 h-5" />,
            skills: ["LLM Integration", "Vector DBs", "PDF Ingestion", "Chatbots"]
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Profile Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                            About Me
                        </h2>

                        <div className="prose prose-lg text-text-secondary">
                            <p>
                                I am a full-stack web developer passionate about building scalable, user-centric applications. With a strong foundation in modern JavaScript frameworks and backend architecture, I bridge the gap between complex engineering and intuitive design.
                            </p>
                            <p>
                                My approach is simple: clean code, rigorous testing, and a focus on delivering real value. Whether it's optimizing performance or integrating AI workflows, I'm always looking for the most efficient solution.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Full-Stack Development",
                                "AI Integration",
                                "System Architecture",
                                "Performance Optimization"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                                    <span className="text-text-primary font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {skillModules.map((module, i) => (
                            <motion.div
                                key={module.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card p-6"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2 bg-indigo-50 text-accent-primary rounded-lg">
                                        {module.icon}
                                    </div>
                                    <h3 className="font-heading font-semibold text-text-primary">
                                        {module.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {module.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-2.5 py-1 bg-slate-50 text-text-secondary rounded-md font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
