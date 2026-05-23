import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isCoarse || isTouch) {
            setIsEnabled(false);
            return;
        }

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === "a" ||
                e.target.tagName.toLowerCase() === "button" ||
                e.target.closest("a") ||
                e.target.closest("button") ||
                e.target.dataset.cursor === "hover"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isEnabled) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    scale: isHovered ? 0.85 : 1,
                }}
            >
                <div className="absolute inset-0 cursor-crosshair" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(0,255,255,0.55)]" />
                </div>
            </motion.div>

            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[99998] border border-violet-400/60 shadow-[0_0_24px_rgba(139,92,246,0.25)] -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: useSpring(cursorX, { damping: 45, stiffness: 380 }),
                    top: useSpring(cursorY, { damping: 45, stiffness: 380 }),
                    scale: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                    backgroundColor: isHovered ? "rgba(139, 92, 246, 0.06)" : "transparent",
                }}
                transition={{
                    duration: 0.2,
                }}
            />
        </>
    );
};

export default CustomCursor;
