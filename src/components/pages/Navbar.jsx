import { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineCode } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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
    { id: "#home", icon: <AiOutlineHome size={20} />, label: "Home" },
    { id: "#about", icon: <AiOutlineUser size={20} />, label: "About" },
    { id: "#skills", icon: <AiOutlineCode size={20} />, label: "Skills" },
    { id: "#project", icon: <AiOutlineProject size={20} />, label: "Project" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className={`flex items-center gap-1 px-4 py-3 rounded-full transition-all duration-300 ${isScrolled
          ? "backdrop-blur-xl bg-white/80 border border-white/40 shadow-xl shadow-black/10"
          : "backdrop-blur-md bg-white/70 border border-white/40 shadow-lg shadow-black/5"
        }`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${active === item.id ? "text-white" : "text-slate-500 hover:text-slate-900"
              }`}
          >
            {active === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-full shadow-md"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                {item.icon}
              </motion.span>
              <AnimatePresence>
                {active === item.id && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="text-sm font-medium overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
