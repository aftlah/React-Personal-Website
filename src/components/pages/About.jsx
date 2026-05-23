import AosCom from "../../../utils/AosCom";
import imageKu from "/images/gambar2.jpeg";
import Experience from "../fragment/Experience";
import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import { motion, useMotionValue, useTransform } from "framer-motion";

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const StyleImg = {
    backgroundImage: `url(${imageKu})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section id="about" className="relative py-20 bg-slate-950/40">
      <div className="container px-6 mx-auto">
        <AosCom dataAos="fade-up" dataAosOnce="true">
          <div className="w-[90%] mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl font-heading">
              About Me
            </h2>
            <p className="mt-4 text-slate-400">
              Engineer mindset, clean code, and product-first execution.
            </p>
          </div>
        </AosCom>

        <div className="flex flex-col items-start w-full h-auto mt-16 md:flex-row md:justify-center lg:gap-x-20">
          <div className="w-full md:w-[25rem] md:ml-10 perspective-1000">
            <AosCom dataAos="fade-up" dataAosDelay={50} dataAosOnce={"true"} dataAosDuration={300}>
              <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                className="mx-auto bg-center w-60 h-60 rounded-2xl lg:w-96 lg:h-96 shadow-xl border border-cyan-500/20 glow-cyan overflow-hidden"
              >
                <div className="w-full h-full" style={StyleImg} />
              </motion.div>
            </AosCom>
          </div>

          <div className="w-full flex flex-col h-auto mt-10 md:mt-5 md:w-[27rem] lg:my-auto">
            <div className="flex justify-center w-full mx-auto gap-x-3 gap-y-2">
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320 }}>
                <Experience duration={300} cardLogo={<MdWorkHistory />} cardText={"Experience"} subCardText={"1+ Year"} />
              </motion.div>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320 }}>
                <Experience duration={450} cardLogo={<FaProjectDiagram />} cardText={"Projects"} subCardText={"5+ Built"} />
              </motion.div>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320 }}>
                <Experience duration={600} cardLogo={<BiSupport />} cardText={"Support"} subCardText={"Online 24/7"} />
              </motion.div>
            </div>

            <div className="max-w-lg mx-auto text-center md:max-w-md md:text-left mt-8 lg:ml-4">
              <p className="text-slate-300 text-[0.95rem] lg:text-[1.05rem] leading-relaxed">
                I&apos;m a Fullstack Web Developer at Universitas Budi Luhur. I focus on building web
                products that are fast, maintainable, and delightful to use.
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-7 px-6 py-2.5 text-sm font-semibold text-black rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
              >
                Download CV <FaArrowRight size={14} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
