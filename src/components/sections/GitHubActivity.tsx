import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import Section from '../shared/Section';

const GitHubActivity = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Section id="github" className="bg-zinc-900/50">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    GitHub <span className="gradient-text">Activity</span>
                </h2>
                <p className="mt-4 text-zinc-400">
                    My contribution graph and open-source activity.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card overflow-hidden bg-zinc-950/50 p-6"
            >
                {isLoading && (
                    <div className="flex items-center justify-center py-16">
                        <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
                    </div>
                )}
                <img
                    src="https://ghchart.rshah.org/khalidGir"
                    alt="Khalid's GitHub contribution chart"
                    className={`w-full ${isLoading ? 'hidden' : 'block'}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                />
            </motion.div>

            <div className="mt-6 text-center">
                <a
                    href="https://github.com/khalidGir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-amber-400"
                >
                    View full profile <ExternalLink size={14} />
                </a>
            </div>
        </Section>
    );
};

export default GitHubActivity;
