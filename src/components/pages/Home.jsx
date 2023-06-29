import React from "react";
import AosCom from "../../../utils/AosCom";
import Aos from "aos";
import Sosmed from "../fragment/Sosmed";
const Home = ({ id }) => {
  Aos.init();
  return (
    <section id={id} className="container p-4  w-full h-[37rem] mx-auto   ">
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
            <div className="hidden ml-0 text-5xl font-bold lg:block text-slate-900">
              Altaf Fattah Amanullah 🖐️
            </div>
          </AosCom>
          
          <AosCom dataAos={"fade-left"} dataAosDuration={500}>
            <div className="flex items-center my-3 gap-x-4 md:my-4 lg:my-6">
              <div className="h-[0.1rem] w-12 bg-slate-500"></div>
              <p className="font-medium text-slate-500 md:text-lg lg:text-2xl">
                Front-end Developer
              </p>
            </div>
          </AosCom>
          <div>
            <AosCom dataAos={"fade-up"} dataAosDelay={50}>
              <p className="max-w-sm mb-6 text-slate-500 md:text-md lg:text-lg">
                Seorang bocah berumur 18 tahun yang ingin menjadi Front-end
                Developer
              </p>
            </AosCom>
            <AosCom dataAos={"fade-up"} dataAosDelay={200}>
              <button className="w-32 h-12 italic font-medium text-white bg-black rounded-full md:text-lg">
                Contact Me
              </button>
            </AosCom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
