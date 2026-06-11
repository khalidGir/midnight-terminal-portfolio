import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
            const scrollPos = window.scrollY + 120;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]!;
                if (section.offsetTop <= scrollPos) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/20'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-tight"
                >
                    Khalid<span className="text-amber-400">.</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={cn(
                                'text-sm font-medium transition-colors duration-200',
                                activeSection === item.id
                                    ? 'text-amber-400'
                                    : 'text-zinc-400 hover:text-zinc-200'
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-primary px-5 py-2 rounded-full text-sm"
                    >
                        Get in Touch
                    </a>
                </div>

                <button
                    className="md:hidden text-zinc-100 hover:text-amber-400 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className={cn(
                                        'text-lg font-medium py-2 block transition-colors',
                                        activeSection === item.id
                                            ? 'text-amber-400'
                                            : 'text-zinc-400 hover:text-zinc-200'
                                    )}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
