import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-black/45 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/5"
            : "bg-black/25 backdrop-blur-lg border-b border-cyan-500/10"
        }`}
      >
        <a
          href="#home"
          onClick={() => setActive("#home")}
          className="font-mono text-sm md:text-base tracking-tight text-slate-100"
        >
          <span className="neon-text">{"<AF/>"}</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
