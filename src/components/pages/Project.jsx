import { HoverEffect } from "../ui/card-hover-effect";
import AosCom from "../../../utils/AosCom";
import projectsData from "../../json/projects.json";

export function Project() {
  return (
    <section id="project" className="py-20 bg-slate-950/30">
      <div className="max-w-6xl px-8 mx-auto">
        <div className="w-[90%] mx-auto text-center mb-10">
          <AosCom dataAos="fade-up" dataAosOnce="true" dataAosDuration={600}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl font-heading">
              <span className="font-mono text-cyan-300/90">{"// "}</span>Featured Projects
            </h2>
            <p className="mt-4 text-slate-400">
              Selected work with a clear stack and a live demo link.
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
