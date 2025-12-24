import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaBootstrap,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiGo,
  SiMysql,
  SiOracle,
  SiPostgresql,
  // SiVuejs,
} from "react-icons/si";

const iconMap = {
  html: <FaHtml5 size={32} className="text-[#E44D26]" />,
  css: <FaCss3Alt size={32} className="text-[#1572B6]" />,
  javascript: <FaJs size={32} className="text-[#F0DB4F]" />,
  react: <FaReact size={32} className="text-[#61DAFB]" />,
  tailwind: <SiTailwindcss size={32} className="text-[#38bdf8]" />,
  nextjs: <SiNextdotjs size={32} className="text-black" />,
  php: <FaPhp size={32} className="text-[#777BB4]" />,
  laravel: <FaLaravel size={32} className="text-[#FF2D20]" />,
  git: <FaGitAlt size={32} className="text-[#F05032]" />,
  vite: <SiVite size={32} className="text-[#646CFF]" />,
  bootstrap: <FaBootstrap size={32} className="text-[#7952b3]" />,
  nodejs: <SiNodedotjs size={32} className="text-[#339933]" />,
  express: <SiExpress size={32} className="text-black" />,
  typescript: <SiTypescript size={32} className="text-[#3178C6]" />,
  go: <SiGo size={32} className="text-[#00ADD8]" />,
  mysql: <SiMysql size={32} className="text-[#4479A1]" />,
  oracle: <SiOracle size={32} className="text-[#F80000]" />,
  postgresql: <SiPostgresql size={32} className="text-[#4169E1]" />,
  // vuejs: <SiVuejs size={32} className="text-[#4FC08D]" />,
  vuejs: <FaVuejs size={32} className="text-[#4FC08D]" />,
};

const SkillItem = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-3 transition-all duration-300 bg-white border shadow-sm rounded-xl border-slate-100 hover:shadow-md hover:-translate-y-1 group"
    >
      <div className="p-2 mb-2 transition-colors duration-300 rounded-full bg-slate-50 group-hover:bg-slate-100">
        {iconMap[icon]}
      </div>
      <h3 className="text-xs font-semibold text-center text-slate-700 group-hover:text-slate-900">
        {name}
      </h3>
    </motion.div>
  );
};

export default SkillItem;
