import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'home' },
        { id: 'about', label: 'profile' },
        { id: 'projects', label: 'modules' },
        { id: 'experience', label: 'timeline' },
        { id: 'contact', label: 'secure-comms' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Basic Intersection logic (Simple implementation for now)
            const sections = navItems.map(item => document.getElementById(item.id));
            const currentSection = sections.find(section => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
            isScrolled
                ? "bg-bg-primary/80 backdrop-blur-md border-accent-cyan/10 py-3"
                : "bg-transparent border-transparent py-5"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo / Console Prompt */}
                <a href="#home" className="flex items-center space-x-2 group">
                    <Terminal className="w-5 h-5 text-accent-cyan group-hover:glow-text-cyan transition-all" />
                    <span className="font-mono font-bold text-lg tracking-tight">
                        <span className="text-accent-cyan">$</span> admin<span className="text-accent-violet">_</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={cn(
                                "font-mono text-sm tracking-widest transition-all hover:text-accent-cyan relative px-2 py-1",
                                activeSection === item.id ? "text-accent-cyan" : "text-text-muted"
                            )}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text-muted hover:text-accent-cyan"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-bg-secondary border-b border-accent-cyan/10 py-8 px-4 flex flex-col items-center space-y-6"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "font-mono text-lg tracking-widest",
                                    activeSection === item.id ? "text-accent-cyan" : "text-text-muted"
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
