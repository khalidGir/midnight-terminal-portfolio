import { motion } from 'framer-motion';
import { ChevronRight, Terminal as TerminalIcon } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const Hero = () => {
    const typedText = useTypewriter([
        "Building AI-powered web systems",
        "Shipping real-world products",
        "Engineering for performance",
    ]);

    return (
        <div className="relative min-h-[80vh] flex flex-col justify-center">
            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#22D3EE 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
            >
                <div className="flex items-center space-x-2 text-accent-cyan font-mono text-sm mb-6">
                    <TerminalIcon className="w-4 h-4" />
                    <span className="bg-accent-cyan/10 px-2 py-0.5 rounded">v2.0.4-stable</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="text-text-primary">I'm </span>
                    <span className="text-accent-cyan glow-text-cyan">Antigravity</span>
                    <span className="block text-2xl md:text-3xl text-text-muted mt-4 font-mono">
                        Full-Stack Engineer <span className="text-accent-violet">&&</span> AI Specialist
                    </span>
                </h1>

                <div className="h-12 flex items-center font-mono text-lg md:text-xl text-text-muted mb-10">
                    <span className="text-status-success mr-2">{'>'}</span>
                    <span>{typedText}</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2.5 h-6 bg-accent-cyan ml-1"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-md overflow-hidden hover:bg-accent-cyan/20 transition-all"
                    >
                        <span className="relative z-10 flex items-center font-mono">
                            View Projects <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-text-muted/20 text-text-primary rounded-md font-mono hover:bg-white/5 transition-all"
                    >
                        Contact
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
