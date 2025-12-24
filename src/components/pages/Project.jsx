import { HoverEffect } from "../ui/card-hover-effect";
import AosCom from "../../../utils/AosCom";
import projectsData from "../../json/projects.json";

export function Project() {
  return (
    <section id="project" className="py-20 bg-slate-50/50">
      <div className="max-w-6xl px-8 mx-auto">
        <div className="w-[90%] mx-auto text-center mb-10">
          <AosCom dataAos="fade-up" dataAosOnce="true" dataAosDuration={600}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl font-heading">
              Featured Projects
            </h2>
            <p className="mt-4 text-slate-600">
              A collection of projects I&apos;ve built to solve problems and learn new technologies.
            </p>
          </AosCom>
        </div>
        <AosCom dataAos="fade-up" dataAosOnce="true" dataAosDelay={200}>
            <HoverEffect items={projectsData} />
        </AosCom>
      </div>
    </section>
  );
}
