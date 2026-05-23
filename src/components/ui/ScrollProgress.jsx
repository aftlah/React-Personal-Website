import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300 origin-left z-[9999] shadow-[0_0_14px_rgba(0,255,255,0.25)]"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
