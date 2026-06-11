import { Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-sm text-zinc-400">
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 text-sm text-zinc-400">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by {personalInfo.name}
                    </p>
                    <div className="flex gap-6">
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                        >
                            GitHub
                        </a>
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={personalInfo.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
