import AosCom from "../../../utils/AosCom";
import imageKu from "/images/gambar2.jpeg";
import Experience from "../fragment/Experience";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md"
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
    <section id="about" className="container w-full h-auto px-6 py-20 mx-auto">
      <AosCom dataAos="fade" dataAosOnce="true">
        <div className="w-[90%] mx-auto text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl font-heading">
            About Me
          </h2>
          <p className="mt-4 text-slate-600">Tetang Saya</p>
        </div>
      </AosCom>

      <div className="flex flex-col items-start w-full h-auto mt-16 md:flex-row md:justify-center lg:gap-x-20">
        <div className="w-full md:w-[25rem] md:ml-10 perspective-1000">
          <AosCom
            dataAos="fade"
            dataAosDelay={50}
            dataAosOnce={"true"}
            dataAosDuration={300}
          >
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileHover={{ cursor: "grab" }}
              whileTap={{ cursor: "grabbing" }}
              className="mx-auto bg-center w-60 h-60 rounded-2xl lg:w-96 lg:h-96 shadow-xl"
            >
              <div
                className="mx-auto bg-center w-60 h-60 rounded-2xl lg:w-96 lg:h-96"
                style={StyleImg}
              />
            </motion.div>
          </AosCom>
        </div>

        <div className="w-full flex flex-col  h-auto mt-8 md:mt-5 md:w-[27rem] lg:my-auto ">
          <div className="flex justify-center w-full mx-auto gap-x-3 gap-y-2">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Experience
                duration={300}
                cardLogo={<MdWorkHistory />}
                cardText={"Experience"}
                subCardText={" 1 Year"}
              />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Experience
                duration={450}
                cardLogo={<FaProjectDiagram />}
                cardText={"Project"}
                subCardText={"5+ Project"}
              />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Experience
                duration={600}
                cardLogo={<BiSupport />}
                cardText={"Support"}
                subCardText={"Online 24/7"}
              />
            </motion.div>
          </div>

          <div className="max-w-lg mx-auto text-center md:max-w-md md:text-left my-7 lg:ml-4">
            <p className="font-semibold text-slate-500 text-[0.9rem] lg:text-[1.1rem] leading-relaxed">
              I&apos;m a Fullstack Web Developer at Universitas Budi Luhur. I specialised in
              Front-End Web Developer and Web Design. Im always striving to grow
              and learn somethingg new and i don&apos;t take my self too seriously.
              I&apos;m passionate about helping startup grow, improve their customer
              experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
