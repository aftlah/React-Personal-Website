import AosCom from "../../../utils/AosCom";
import Aos from "aos";
import Sosmed from "../fragment/Sosmed";
import Type from "../../../utils/Typed";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-28 pb-24 overflow-hidden matrix-bg"
    >
      <motion.div
        animate={{ opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-500/10 -z-10"
      />

      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <AosCom dataAos="fade-up" dataAosDuration={800} dataAosOnce="true">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-cyan-500/25 bg-black/30 backdrop-blur-md">
              <span className="font-mono text-xs text-cyan-200/90">{"<dev/>"}</span>
              <span className="text-xs text-slate-300">portfolio</span>
            </div>
          </AosCom>

          <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={120} dataAosOnce="true">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              <span
                className="glitch text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300"
                data-text="Altaf Fattah"
              >
                Altaf Fattah
              </span>
              <span className="block mt-2 font-mono text-base md:text-lg text-slate-400 tracking-wide">
                altaf.fattah@portfolio:~$
              </span>
            </h1>
          </AosCom>

          <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={220} dataAosOnce="true">
            <div className="w-full max-w-2xl mt-8 overflow-hidden rounded-2xl border border-cyan-500/15 bg-slate-950/60 backdrop-blur-xl shadow-xl shadow-cyan-500/5 scanlines">
              <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="font-mono text-xs tracking-[0.25em] text-slate-400">
                  TERMINAL
                </div>
              </div>
              <div className="px-5 py-4 font-mono text-sm md:text-base text-slate-200">
                <div className="text-slate-400">
                  <span className="text-cyan-300">$</span> role --current
                </div>
                <div className="mt-2">
                  <span className="text-violet-300">{"{"}</span>{" "}
                  <span className="text-slate-200">title:</span>{" "}
                  <span className="text-cyan-200">
                    <Type />
                  </span>{" "}
                  <span className="text-violet-300">{"}"}</span>
                </div>
              </div>
            </div>
          </AosCom>

          <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={320} dataAosOnce="true">
            <p className="max-w-2xl mx-auto mt-8 text-base leading-relaxed text-slate-300 md:text-lg">
              I build accessible, performant web experiences with a focus on clean architecture,
              product thinking, and execution.
            </p>
          </AosCom>

          <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={420} dataAosOnce="true">
            <div className="flex flex-col items-center gap-4 mt-10 sm:flex-row">
              <motion.a
                href="#project"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 text-base font-semibold text-black rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
              >
                View Projects
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/altaf-fattah-amanullah-10b852266/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 text-base font-semibold text-cyan-200 rounded-full border border-cyan-500/25 bg-black/20 hover:bg-black/35 transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </AosCom>

          <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={520} dataAosOnce="true">
            <div className="mt-12">
              <Sosmed className="justify-center" />
            </div>
          </AosCom>
        </div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-mono text-xs text-slate-400">scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-7 h-12 rounded-full border border-cyan-500/25 flex justify-center p-1 bg-black/20"
        >
          <motion.div className="w-1 h-2 bg-cyan-300 rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Home;
