import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const ResumeSection = () => {
    return (
        <section id="resume" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card gradient-border mx-auto max-w-2xl p-8 text-center md:p-12"
                >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10">
                        <FileText className="h-8 w-8 text-amber-400" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                        Ready to <span className="gradient-text">Collaborate</span>?
                    </h2>
                    <p className="mb-8 text-zinc-400">
                        Download my resume to learn more about my experience and skills.
                    </p>
                    <a
                        href={personalInfo.resumeUrl}
                        download
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Download size={16} />
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeSection;
