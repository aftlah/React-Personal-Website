import React, { useEffect, useState } from "react";
import AosCom from "../../../utils/AosCom";
import { BsArrowRightShort } from "react-icons/bs";
import data from "../../json/projects.json";

const Project = ({ id }) => {
  const [projects, setProjects] = useState([]);

  console.log(projects);
  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <div>
      <section
        id={id}
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

        <div className="flex flex-col flex-wrap md:justify-start lg:justify-center  items-start w-full py-4 mx-auto mt-9 bg-red-500 gap-x-3  gap-7 md:flex-row md:w-[100%] xl:w-[80%]  xl:gap-14">
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-full  h-full rounded-2xl md:w-[20rem] lg:w-[29rem] mx-auto md:mx-5 lg:mx-0 "
            >
              <AosCom
                dataAos={project.dataAos}
                dataAosDuration={project.dataAosDuration}
                dataAosDelay={project.dataAosDelay}
                dataAosOnce={project.dataAosOnce}
              >
                <div className="w-full bg-white h-full rounded-2xl md:w-[22.5rem] lg:w-[28rem] mx-auto md:mx-5 lg:mx-auto py-1 border ">
                  <div>
                    <div className="w-[90%] bg-orange-500 h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]">
                      <img src="" alt="" />
                    </div>
                    <div className=" w-[90%] mx-auto my-1">
                      <h1 className="text-xl font-semibold text-slate-800">
                        {project.name}
                      </h1>
                      <p className="text-slate-500 group w-[30%]">
                        <a href="" className="text-base font-medium">
                          {project.demo}
                        </a>
                        <BsArrowRightShort className="inline-block ml-1 text-2xl font-extrabold transition-all ease-linear group-hover:translate-x-1" />
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
