import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineCode } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("#home");

  const navItems = [
    { id: "#home", icon: <AiOutlineHome size={20} />, label: "Home" },
    { id: "#about", icon: <AiOutlineUser size={20} />, label: "About" },
    { id: "#skills", icon: <AiOutlineCode size={20} />, label: "Skills" },
    { id: "#project", icon: <AiOutlineProject size={20} />, label: "Project" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-4 py-3 rounded-full backdrop-blur-md bg-white/70 border border-white/40 shadow-lg shadow-black/5">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
              active === item.id ? "text-white" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {active === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-slate-900 rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {item.icon}
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
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
