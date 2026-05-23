import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGo,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const iconMap = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  tailwind: SiTailwindcss,
  nextjs: SiNextdotjs,
  php: FaPhp,
  laravel: FaLaravel,
  git: FaGitAlt,
  figma: FaFigma,
  vite: SiVite,
  bootstrap: FaBootstrap,
  nodejs: SiNodedotjs,
  express: SiExpress,
  typescript: SiTypescript,
  go: SiGo,
  mysql: SiMysql,
  oracle: SiOracle,
  postgresql: SiPostgresql,
};

const SkillItem = ({ name, icon, color, index }) => {
  const Icon = iconMap[icon] || FaCode;
  const glow = color || "#00ffff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{
        y: -3,
        boxShadow: `0 0 0 1px ${glow}33, 0 0 22px ${glow}33`,
      }}
      className="flex flex-col items-center justify-center p-3 transition-all duration-300 rounded-xl border border-slate-800/60 bg-slate-950/55 backdrop-blur-md"
    >
      <div
        className="p-2 mb-2 rounded-full border border-slate-800/60 bg-black/30"
        style={{ boxShadow: `0 0 18px ${glow}12` }}
      >
        <Icon size={32} style={{ color: glow }} />
      </div>
      <h3 className="text-xs font-semibold text-center text-slate-200 font-mono">
        {name}
      </h3>
    </motion.div>
  );
};

export default SkillItem;
