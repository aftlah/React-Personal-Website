import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#experience", label: "Experience" },
    { id: "#skills", label: "Skills" },
    { id: "#project", label: "Projects" },
  ];

  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-black/45 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/5"
            : "bg-black/25 backdrop-blur-lg border-b border-cyan-500/10"
        }`}
      >
        <a
          href="#home"
          onClick={() => {
            setActive("#home");
            setIsOpen(false);
          }}
          className="font-mono text-sm md:text-base tracking-tight text-slate-100"
        >
          <span className="neon-text">{"<AF/>"}</span>
        </a>

        <div className="hidden md:flex items-center gap-2 md:gap-6">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.id}
                onClick={() => setActive(item.id)}
                className={`px-2 py-1 text-sm md:text-[15px] font-medium transition-all border-b ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400 border-cyan-300/50"
                    : "text-slate-300 border-transparent hover:text-cyan-200 hover:border-cyan-300/40"
                }`}
              >
                <span className="font-mono">{item.label}</span>
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-cyan-500/20 bg-black/30 text-cyan-200 shadow-[0_0_18px_rgba(0,255,255,0.10)]"
        >
          {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-cyan-500/15 bg-black/60 backdrop-blur-xl"
          >
            <div className="px-4 pb-4 pt-2 space-y-2">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.id}
                    onClick={() => {
                      setActive(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                      isActive
                        ? "border-cyan-500/25 bg-cyan-500/10 text-cyan-200"
                        : "border-slate-800/70 bg-slate-950/40 text-slate-200"
                    }`}
                  >
                    <span className="font-mono">{item.label}</span>
                    <span className="text-slate-500 font-mono">{">"}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
