import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVite } from "react-icons/si";

const iconMap = {
  html: <FaHtml5 size={40} className="text-[#E44D26]" />,
  css: <FaCss3Alt size={40} className="text-[#1572B6]" />,
  javascript: <FaJs size={40} className="text-[#F0DB4F]" />,
  react: <FaReact size={40} className="text-[#61DAFB]" />,
  tailwind: <SiTailwindcss size={40} className="text-[#38bdf8]" />,
  nextjs: <SiNextdotjs size={40} className="text-black" />,
  php: <FaPhp size={40} className="text-[#777BB4]" />,
  laravel: <FaLaravel size={40} className="text-[#FF2D20]" />,
  git: <FaGitAlt size={40} className="text-[#F05032]" />,
  figma: <FaFigma size={40} className="text-[#F24E1E]" />,
  vite: <SiVite size={40} className="text-[#646CFF]" />,
  bootstrap: <FaBootstrap size={40} className="text-[#7952b3]" />,
};

const SkillItem = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-white border shadow-sm rounded-2xl border-slate-100 hover:shadow-md hover:-translate-y-2 group"
    >
      <div className="p-4 mb-3 transition-colors duration-300 rounded-full bg-slate-50 group-hover:bg-slate-100">
        {iconMap[icon]}
      </div>
      <h3 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
        {name}
      </h3>
    </motion.div>
  );
};

export default SkillItem;
