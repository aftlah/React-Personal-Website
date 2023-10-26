import React from "react";
import AosCom from "../../../utils/AosCom";
import Aos from "aos";
import Sosmed from "../fragment/Sosmed";
import Type from "../../../utils/Typed";


const Home = () => {
  Aos.init();
  return (
    <section id="home" className="container p-4  w-full h-[37rem] mx-auto   ">
      <div className="flex flex-row items-center justify-center w-full h-full gap-10 md:justify-start">
        <AosCom dataAosDuration={500} dataAos={"fade-right"}>
          <Sosmed />
        </AosCom>

        <div className="xl:ml-36 lg:ml-20 md:ml-16">
          <AosCom dataAos={"fade-down"} dataAosDuration={500}>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl lg:hidden">
              Hallo Aku, Altaf <span className="text-3xl md:text-5xl">🖐️</span>
            </h1>
            <h1 className="hidden ml-1 italic font-semibold md:text-5xl lg:text-2xl lg:block text-slate-600">
              Hallo Aku,
            </h1>
            <div className="hidden ml-0 text-5xl font-bold lg:block text-slate-900 bg-blue">
              Altaf Fattah Amanullah 🖐️
            </div>
          </AosCom>

          <AosCom dataAos={"fade-left"} dataAosDuration={500}>
            <div className="flex items-center h-5 my-3 md:h-9 gap-x-2 md:gap-x-4 md:my-4 lg:my-6">
              <div className="h-[0.1rem] w-9  md:w-12 bg-slate-500"></div>
              <Type/>
            </div>
          </AosCom>
          <div>
            <AosCom dataAos={"fade-up"} dataAosDelay={50}>
              <p className="max-w-sm mb-6 text-slate-500 md:text-md lg:text-lg">
                Seorang  berumur 18 tahun yang ingin menjadi Front-end
                Developer
              </p>
            </AosCom>
            <AosCom dataAos={"fade-up"} dataAosDelay={200}>
              <button className="w-32 h-12 italic font-medium text-white bg-black rounded-full md:text-lg">
                <a href="https://www.instagram.com/aftlah/" target="_blank">Contact Me</a>
              </button>
            </AosCom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
