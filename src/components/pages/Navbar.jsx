import React from "react";
import AosCom from "../../../utils/AosCom";

const Navbar = ({ home, about, skills, project }) => {
  return (
    <nav className="relative">
      <div className="fixed z-50 w-16 h-auto bottom-10 md:right-3 md:w-20 md:h-96">
        <AosCom dataAos="fade-left" dataAosOnce="true">
          <div className="flex flex-col items-center justify-center h-full text-center bg-transparent border rounded-full gap-y-3 backdrop-blur-xl border-slate-300">
            <div className="bg-slate-500 w-[0.12rem] h-10 rounded-e-full"></div>
            <a
              href={home}
              className="py-1.5 font-medium md:py-3 text-slate-700"
            >
              Home
            </a>
            <a
              href={about}
              className="py-1.5 font-medium md:py-3 text-slate-700"
            >
              About
            </a>
            <a
              href={skills}
              className="py-1.5 font-medium md:py-3 text-slate-700"
            >
              Skills
            </a>
            <a
              href={project}
              className="py-1.5 font-medium md:py-3 text-slate-700"
            >
              Project
            </a>
            <div className="bg-slate-500 w-[0.12rem] h-10 rounded-e-full"></div>
          </div>
        </AosCom>
      </div>
    </nav>
  );
};

export default Navbar;
