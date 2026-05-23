import { motion } from "framer-motion";

const FloatingElements = () => {
  const float = (duration, delay = 0) => ({
    duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 6, 0] }}
        transition={float(6)}
        className="absolute top-[12%] left-[8%] font-mono text-4xl text-cyan-300/20"
      >
        {"{ }"}
      </motion.div>

      <motion.div
        animate={{ y: [0, 22, 0], x: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={float(7, 0.8)}
        className="absolute bottom-[18%] right-[10%] font-mono text-5xl text-violet-300/20"
      >
        {"</>"}
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 14, 0], rotate: [0, 10, 0] }}
        transition={float(8, 1.4)}
        className="absolute top-[22%] right-[16%] font-mono text-4xl text-cyan-300/15"
      >
        {"[ ]"}
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -10, 0], rotate: [0, -6, 0] }}
        transition={float(9, 2.1)}
        className="absolute bottom-[30%] left-[14%] font-mono text-4xl text-violet-300/15"
      >
        {"( )"}
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={float(10)}
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.24, 0.18] }}
        transition={float(12, 0.6)}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default FloatingElements;
