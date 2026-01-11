import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const WelcomeAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const name = "Altaf Fattah";
  const letters = name.split("");

  useEffect(() => {
    // Hide animation after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8fafc]"
        >
          {/* Subtle grid pattern overlay - matching website background */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          {/* Animated gradient blobs - matching website style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] -z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] -z-10"
          />

          {/* Elegant corner accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-20 left-20 w-32 h-32 border-l-2 border-t-2 border-slate-300"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-20 right-20 w-32 h-32 border-r-2 border-b-2 border-slate-300"
          />

          {/* Main content container */}
          <div className="relative text-center px-8 z-10">
            {/* Animated name with letter-by-letter reveal */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-heading"
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-slate-900"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Elegant divider with gradient accent */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-slate-300"
                style={{ transformOrigin: "right" }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                className="h-px w-16 bg-gradient-to-l from-transparent via-slate-300 to-slate-300"
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Portfolio text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
              className="text-sm md:text-base tracking-[0.3em] text-slate-600 uppercase font-medium"
            >
              Portfolio
            </motion.div>

            {/* Gradient accent line below */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7, ease: "easeOut" }}
              className="h-0.5 w-24 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
