import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[9997] h-[3px] origin-left"
            style={{
                scaleX,
                background: 'linear-gradient(90deg, #f59e0b, #f97316, #ef4444)',
            }}
        />
    );
};

export default ScrollProgress;
