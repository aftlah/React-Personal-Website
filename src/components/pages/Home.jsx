import AosCom from "../../../utils/AosCom";
import Aos from "aos";
import Sosmed from "../fragment/Sosmed";
import Type from "../../../utils/Typed";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen pb-32 overflow-hidden">
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -z-10"
            />

            <div className="container px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <AosCom dataAos="fade-up" dataAosDuration={800}>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-full shadow-sm cursor-default"
                        >
                            👋 Welcome to my portfolio
                        </motion.div>
                    </AosCom>

                    <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={100}>
                        <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl lg:text-8xl font-heading relative z-20">
                            <span className="inline-block relative">
                                Altaf Fattah
                                <motion.svg
                                    className="absolute -bottom-2 w-full h-3 text-blue-500/30"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </motion.svg>
                            </span>
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300% animate-gradient">
                                Amanullah
                            </span>
                        </h1>
                    </AosCom>

                    <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={200}>
                        <div className="flex items-center justify-center h-12 mt-6 text-2xl font-medium text-slate-600 md:text-3xl">
                            <span className="mr-3">I am a</span>
                            <Type />
                        </div>
                    </AosCom>

                    <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={300}>
                        <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                            I&apos;m a Fullstack Web Developer at Universitas Budi Luhur. I build accessible, pixel-perfect, performant, and web experiences.
                        </p>
                    </AosCom>

                    <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={400}>
                        <div className="flex flex-col items-center gap-4 mt-10 sm:flex-row">
                            <motion.a
                                href="#project"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 text-lg font-medium text-white transition-all bg-slate-900 rounded-full hover:shadow-xl hover:shadow-slate-900/20 relative overflow-hidden group"
                            >
                                <span className="relative z-10">View My Work</span>
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/altaf-fattah-amanullah-10b852266/"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 text-lg font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:border-slate-400 hover:text-slate-900 group"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </AosCom>

                    <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={500}>
                        <div className="mt-12">
                            <Sosmed />
                        </div>
                    </AosCom>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-sm font-medium text-slate-400">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1"
                >
                    <motion.div className="w-1 h-2 bg-slate-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
