import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../shared/Icons';
import { personalInfo } from '../../data/portfolio';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-20"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mx-auto max-w-3xl text-center"
                >
                    <motion.div variants={item}>
                        <div className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-full ring-4 ring-amber-400/20">
                            <img
                                src={profileImage}
                                alt="Khalid"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={item}>
                        <span className="inline-block rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-400">
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
                    >
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Khalid</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="btn-primary gap-2"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View my work <ArrowRight size={16} />
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get in touch
                        </a>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-12 flex items-center justify-center gap-6"
                    >
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 transition-colors hover:text-amber-400"
                        >
                            <GithubIcon size={22} />
                        </a>
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 transition-colors hover:text-amber-400"
                        >
                            <LinkedInIcon size={22} />
                        </a>
                        <a
                            href={personalInfo.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 transition-colors hover:text-amber-400"
                        >
                            <TwitterIcon size={22} />
                        </a>
                        <span className="text-zinc-600">|</span>
                        <span className="text-sm text-zinc-500">
                            {personalInfo.location}
                        </span>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="h-5 w-5 text-zinc-500" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
