import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

const Section = ({ id, children, className, containerClassName }: SectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id={id} className={cn('py-24', className)}>
            <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
