import React, { useEffect, useState } from "react";
import AosCom from "../../../utils/AosCom";
import { BsArrowRightShort } from "react-icons/bs";
// import data from "../../json/projects.json";

const data = [
    {
      id: 1,
      name: "Quran-Ku",
      image: "/src/assets/images/quranku.jpeg",
      link: "https://aftlah.github.io/Quran-Ku/",
      dataAos: "fade",
      dataAosDelay: 50,
      dataAosOnce: true,
      dataAosDuration: 300
    },
    {
      id: 2,
      name: "Hap Hap Games",
      image: "/src/assets/images/haphap-games.jpeg",
      link: "https://hap-hap-games.vercel.app/",
      dataAos: "fade",
      dataAosDelay: 50,
      dataAosOnce: true,
      dataAosDuration: 300
    },
    {
      id: 3,
      name: "Rumah Impian",
      image: "/src/assets/images/rumah-impian.jpeg",
      link: "https://rumah-impian-peach.vercel.app/",
      dataAos: "fade",
      dataAosDelay: 50,
      dataAosOnce: true,
      dataAosDuration: 300
    },
    {
      id: 4,
      name: "Tes Tahfidz",
      image: "/src/assets/images/tes-tahfidz.jpeg",
      link: "https://tes-tahfidz-pink.vercel.app/",
      dataAos: "fade",
      dataAosDelay: 50,
      dataAosOnce: true,
      dataAosDuration: 300
    }
  
]


const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
    console.log(projects);
  }, []);

  return (
    <div>
      <section
        id="project"
        className="container w-full h-auto p-4 mx-auto mt-20 md:p-0 lg:p-4"
      >
        <div className="w-[90%] mx-auto text-center ">
          <AosCom dataAos="fade" dataAosOnce="true">
            <h1 className="text-2xl font-bold text-slate-900">Project</h1>
            <p className="mt-3 text-sm text-slate-600">
              Project Yang Pernah Saya Buat
            </p>
          </AosCom>
        </div>

        <div className="flex flex-col flex-wrap md:justify-start lg:justify-center  items-start w-full sm:w-[85%]  py-4 mx-auto mt-9 gap-x-3  gap-7 md:flex-row md:w-[100%] xl:w-[80%]  xl:gap-14">
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-full h-full rounded-2xl  md:w-[20rem] lg:w-[29rem] mx-auto md:mx-4 lg:mx-0 "
            >
              <AosCom
                dataAos={project.dataAos}
                dataAosDuration={project.dataAosDuration}
                dataAosDelay={project.dataAosDelay}
                dataAosOnce={project.dataAosOnce}
              >
                <div className="max-w-md bg-white h-full  rounded-2xl md:w-[22rem] lg:w-[28rem] mx-auto md:mx-5 lg:mx-auto py-1 border ">
                  <div>
                    <div className="flex w-[95%] sm:w-[90%] h-52 sm:h-56 mx-auto mt-5 rounded-2xl md:h-48 lg:h-56">
                      <img
                        src={project.image}
                        alt="Error"
                        className="w-full rounded-xl"
                      />
                    </div>
                    <div className=" w-[88%] mx-auto mt-2">
                      <h1 className="font-bold text-md text-slate-700"> 
                        {project.name}
                      </h1>
                      <p className="text-slate-500 group w-[20%] pb-2">
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-sm font-medium"
                        >
                          
                          Demo
                          <BsArrowRightShort className="inline-block ml-1 text-xl font-extrabold transition-all ease-linear group-hover:translate-x-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </AosCom>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
