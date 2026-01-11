import { motion } from "framer-motion";

const FloatingElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Circle 1 - Top Left */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full border border-slate-200/50"
            />

            {/* Circle 2 - Bottom Right */}
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    rotate: [0, -15, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full border border-blue-100/30"
            />

            {/* Square - Top Right */}
            <motion.div
                animate={{
                    rotate: [0, 90, 180],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[15%] right-[15%] w-16 h-16 border border-purple-100/30 rotate-45"
            />

            {/* Triangleish - Bottom Left */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[30%] left-[10%] w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-slate-100/40 border-r-[20px] border-r-transparent"
            />

            {/* Blur Blob 1 */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
            />

            {/* Blur Blob 2 */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"
            />
        </div>
    );
};

export default FloatingElements;
