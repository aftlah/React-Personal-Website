import React from "react";
import AosCom from "../../../utils/AosCom";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";

const Skills = ({ id }) => {
  return (
    <div>
      <section
        id={id}
        className="container w-full h-auto p-4 mx-auto mt-20 "
      >
        <div className="w-[90%] mx-auto text-center ">
          <AosCom dataAos="fade" dataAosDelay={true}>
            <h1 className="text-2xl font-bold text-slate-900">Skills</h1>
            <p className="mt-3 text-sm text-slate-600">Keterampilan saya</p>
          </AosCom>
        </div>

        <AosCom dataAos={"fade-down"} dataAosOnce={true}>
          <div className="flex flex-col items-center justify-center w-full h-auto px-5 mt-10 gap-y-10 md:gap-x-14 md:flex-row md:px-0">
            <div className=" w-10/12 h-auto rounded-3xl md:w-[21rem] bg-white border  border-slate-200">
              <div className="w-full my-3 text-center">
                <h1 className="font-semibold text-md text-slate-800">
                  Front-End Skill
                </h1>
              </div>

              <div className="w-11/12 mx-auto ">
                <ul className="flex justify-center gap-10 py-3 list-none list-inside ">
                  <div className="flex flex-col ml-10 gap-y-5">
                    <li className="w-24 h-auto ">
                      <AiFillHtml5 className="text-xl md:text-3xl" />
                      <p className="mt-1 text-[0.55rem] ml-1 text-slate-700">Interm7diat</p>
                    </li>
                    
                    <li className="w-24 h-auto ">
                      <DiCss3 className="text-xl md:text-3xl" />
                      <p className="mt-1 text-[0.55rem] ml-1 text-slate-700">Intermediat</p>
                    </li>
                    <li className="w-24 h-auto ">
                      <SiJavascript className="ml-1 text-lg md:text-2xl" />
                      <p className="mt-1 text-[0.55rem] ml-1 text-slate-700">Intermediat</p>
                    </li>
                  </div>
                  
                  <div className="flex flex-col gap-y-5">
                    <li className="w-24 h-auto ">
                      <BiLogoTailwindCss className="text-xl md:text-3xl" />
                      <p className="mt-1 text-[0.55rem] ml-1 text-slate-700">Intermediat</p>
                    </li>
                    <li className="w-24 h-auto ">
                      <BiLogoReact className="text-xl md:text-3xl" />
                      <p className="mt-1 text-[0.55rem] ml-1 text-slate-700">Intermediat</p>
                    </li>
                    <li className="w-24 h-auto ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"

                        className="block w-6 md:w-8 "
                        viewBox="0 0 118 94"
                      >
                        <path
                          fillRule="evenodd"
                          clip={"evenodd"}
                          d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="mt-1 text-[0.55rem] ml-1 text-slate-700">Intermediat</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </AosCom>
      </section>
    </div>
  );
};

export default Skills;
