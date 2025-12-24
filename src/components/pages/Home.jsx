import AosCom from "../../../utils/AosCom";
import Aos from "aos";
import Sosmed from "../fragment/Sosmed";
import Type from "../../../utils/Typed";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-20 pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
            <AosCom dataAos="fade-up" dataAosDuration={800}>
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-full shadow-sm">
                    👋 Welcome to my portfolio
                </div>
            </AosCom>

            <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={100}>
                <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl lg:text-8xl font-heading">
                    Altaf Fattah
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
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
                    <a href="#project" className="px-8 py-3.5 text-lg font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20">
                        View My Work
                    </a>
                     <a href="https://www.linkedin.com/in/altaf-fattah-amanullah-10b852266/" target="_blank" rel="noreferrer" className="px-8 py-3.5 text-lg font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:border-slate-400 hover:text-slate-900 hover:scale-105">
                        Contact Me
                    </a>
                </div>
            </AosCom>
            
             <AosCom dataAos="fade-up" dataAosDuration={800} dataAosDelay={500}>
                <div className="mt-12">
                    <Sosmed />
                </div>
            </AosCom>
        </div>
      </div>
    </section>
  );
};

export default Home;
