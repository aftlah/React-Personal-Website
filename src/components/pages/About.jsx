import AosCom from "../../../utils/AosCom";
import imageKu from "/images/gambar2.jpeg";
import Experience from "../fragment/Experience";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md"


const About = () => {
  const StyleImg = {
    backgroundImage: `url(${imageKu})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section id="about" className="container w-full h-auto p-4 mx-auto mt-20 ">
      <AosCom dataAos="fade" dataAosOnce="true">
        <div className="w-[90%] mx-auto text-center ">
          <h1 className="text-2xl font-bold text-slate-900">About me</h1>
          <p className="mt-3 text-sm text-slate-600">Tetang Saya</p>
        </div>
      </AosCom>

      <div className="flex flex-col items-start w-full h-auto mt-16 md:flex-row md:justify-center lg:gap-x-20">
        <div className="w-full md:w-[25rem] md:ml-10">
          <AosCom
            dataAos="fade"
            dataAosDelay={50}
            dataAosOnce={"true"}
            dataAosDuration={300}
          >
            <div
              className="mx-auto bg-center w-60 h-60 rounded-2xl lg:w-96 lg:h-96"
              style={StyleImg}
            ></div>
          </AosCom>
        </div>

        <div className="w-full flex flex-col  h-auto mt-8 md:mt-5 md:w-[27rem] lg:my-auto ">
          <div className="flex justify-center w-full mx-auto gap-x-3 gap-y-2">
            <Experience
              duration={300}
              cardLogo={<MdWorkHistory />}
              cardText={"Experience"}
              subCardText={" 1 Year"}
            />
            <Experience
              duration={450}
              cardLogo={<FaProjectDiagram />}
              cardText={"Project"}
              subCardText={"5+ Project"}
            />
            <Experience
              duration={600}
              cardLogo={<BiSupport />}
              cardText={"Support"}
              subCardText={"Online 24/7"}
            />
          </div>

          <div className="max-w-lg mx-auto text-center md:max-w-md md:text-left my-7 lg:ml-4">
            <p className="font-semibold text-slate-500 text-[0.9rem] lg:text-[1.1rem]">

              {/* I&apos;am a Web Developer from Tangerang, Indonesia. I specialised in
              Front-End Web Developer and Web Design. Im always striving to grow
              and learn somethingg new and i don&apos;t take my self too seriously.
              I&apos;m passionate about helping startup grow, improve their customer
              experience. */}

              I&apos;m a Fullstack Web Developer at Universitas Budi Luhur. I specialised in
              Front-End Web Developer and Web Design. Im always striving to grow
              and learn somethingg new and i don&apos;t take my self too seriously.
              I&apos;m passionate about helping startup grow, improve their customer
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
