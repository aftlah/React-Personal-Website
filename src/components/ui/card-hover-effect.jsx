import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const HoverEffect = ({ items = [], className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  // Validasi items
  const validItems = Array.isArray(items) ? items : [];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {validItems.map((item, idx) => (
        <a
          href={item?.link}
          target="_blank"
          rel="noreferrer noopener"
          key={item?.id || idx}
          className="relative block w-full h-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-slate-100 dark:bg-slate-200/50 rounded-3xl -z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="relative overflow-hidden rounded-xl h-48 group-hover:shadow-md transition-all duration-300">
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900/80 rounded-full backdrop-blur-sm">
                        View Project <FaExternalLinkAlt size={12} />
                    </span>
                 </div>
                <img 
                    src={item.image} 
                    alt={item.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" 
                />
            </div>
            <div className="pt-4">
                <CardTitle>{item.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                    {item.tech?.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-semibold tracking-wide text-slate-600 bg-slate-100 rounded-md border border-slate-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-slate-200 relative z-20 shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-lg font-bold tracking-tight text-slate-900", className)}>
      {children}
    </h4>
  );
};
