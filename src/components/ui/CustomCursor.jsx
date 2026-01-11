import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
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

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-slate-900 rounded-full pointer-events-none z-[99999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    scale: isHovered ? 0.5 : 1,
                }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-slate-900 rounded-full pointer-events-none z-[99998] mix-blend-difference"
                style={{
                    x: useSpring(cursorX, { damping: 50, stiffness: 400 }),
                    y: useSpring(cursorY, { damping: 50, stiffness: 400 }),
                    scale: isHovered ? 2.5 : 0,
                    opacity: isHovered ? 1 : 0,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
                }}
                transition={{
                    duration: 0.2,
                }}
            />
        </>
    );
};

export default CustomCursor;
