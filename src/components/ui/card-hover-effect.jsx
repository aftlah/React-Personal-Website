/* eslint-disable react/prop-types */
import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className, }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 py-10 ",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={item?.link}
                    className="relative block w-full h-full p-2 group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 block w-full h-full bg-neutral-100 dark:bg-slate-300 rounded-3xl"
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
                        <CardTitle>{item.name}</CardTitle>
                        <CardImage>{item.image}</CardImage>
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
                "rounded-2xl h-full w-full p-1  overflow-hidden bg-white border border-gray-200  relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn(" text-md text-slate-700 font-bold tracking-wide ", className)}>
            {children}
        </h4>
    );
};


export const CardImage = ({ className, children, }) => {
    return (
        <p className={cn("mt-2  tracking-wide leading-relaxed ",
            className)}>
            {/* {} */}
            <div className="">
                <img src={children} className="object-fill w-full rounded-xl" />
            </div>
        </p>
    );
};
