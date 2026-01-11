
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium">
                            Available for hire
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary leading-tight">
                            Hi, I'm Khalid.
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                            I simplify complex problems and build high-performance web experiences.
                            Let's create something exceptional together.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn-primary">
                            View Work
                        </a>
                        <a href="#contact" className="px-6 py-3 rounded-lg text-text-primary font-medium hover:bg-slate-100 transition-colors flex items-center group">
                            Contact Me <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex items-center space-x-6 pt-4 text-text-muted">
                        <a href="#" className="hover:text-accent-primary transition-colors hover:scale-110 transform duration-200">
                            <Github size={24} />
                        </a>
                        <a href="#" className="hover:text-accent-primary transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hello@example.com" className="hover:text-accent-primary transition-colors hover:scale-110 transform duration-200">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-50" />

                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white/50 aspect-[4/5] max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <img
                            src={profileImage}
                            alt="Khalid"
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
