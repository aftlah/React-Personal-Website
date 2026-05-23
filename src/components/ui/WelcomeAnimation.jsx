import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const WelcomeAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [typed, setTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  const script = useMemo(
    () => [
      { status: "OK", text: "boot sequence: portfolio_os v1.0.0" },
      { status: "OK", text: "detecting environment: web" },
      { status: "LOADING", text: "loading modules: ui, motion, aos" },
      { status: "OK", text: "config: neon_theme enabled" },
      { status: "READY", text: "launching interface..." },
    ],
    []
  );

  useEffect(() => {
    const already = sessionStorage.getItem("bootShown") === "1";
    if (already) {
      setIsVisible(false);
      return;
    }
    sessionStorage.setItem("bootShown", "1");
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (lineIndex >= script.length) {
      const t = setTimeout(() => setIsVisible(false), 700);
      return () => clearTimeout(t);
    }

    const full = script[lineIndex].text;
    let i = 0;
    setTyped("");

    const tick = () => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i < full.length) {
        timer = window.setTimeout(tick, 18);
      } else {
        timer = window.setTimeout(() => setLineIndex((v) => v + 1), 260);
      }
    };

    let timer = window.setTimeout(tick, 120);
    return () => window.clearTimeout(timer);
  }, [isVisible, lineIndex, script]);

  const badgeClass = (status) => {
    if (status === "OK") return "text-emerald-300 border-emerald-400/30";
    if (status === "READY") return "text-cyan-300 border-cyan-400/30";
    return "text-violet-300 border-violet-400/30";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712] matrix-bg"
        >
          <div className="absolute inset-0 opacity-90 scanlines" />
          <div className="relative w-[92%] max-w-3xl">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="font-mono text-xs tracking-[0.3em] text-slate-400">
                  ALTAF_BOOT
                </div>
              </div>

              <div className="p-5 font-mono text-sm md:text-base">
                <div className="text-slate-400">
                  <span className="neon-text">{"<AF/>"}</span> initializing...
                </div>
                <div className="mt-4 space-y-2">
                  {script.slice(0, Math.min(lineIndex, script.length)).map((l, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span
                        className={`px-2 py-0.5 rounded-md border text-[11px] leading-5 ${badgeClass(
                          l.status
                        )}`}
                      >
                        [{l.status}]
                      </span>
                      <span className="text-slate-200">{l.text}</span>
                    </div>
                  ))}
                  {lineIndex < script.length && (
                    <div className="flex gap-3">
                      <span
                        className={`px-2 py-0.5 rounded-md border text-[11px] leading-5 ${badgeClass(
                          script[lineIndex].status
                        )}`}
                      >
                        [{script[lineIndex].status}]
                      </span>
                      <span className="text-slate-200">
                        {typed}
                        <span className="inline-block w-2 h-4 ml-1 bg-cyan-300/80 align-[-2px]" />
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-slate-500">initializing runtime...</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
