import { motion } from "framer-motion";
import AosCom from "../../../utils/AosCom";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import experienceData from "../../json/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950/40">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <AosCom dataAos="fade-up" dataAosDuration={600} dataAosOnce="true">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl font-heading">
              <span className="font-mono text-cyan-300/90">{"// "}</span>Work Experience
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-400">
              A timeline formatted like a dev log — roles, impact, and stack.
            </p>
          </AosCom>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/35 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[28px_1fr] md:grid-cols-[1fr_40px_1fr] gap-6 md:gap-10 items-start"
                >
                  <div className="relative flex justify-start md:justify-center pt-3 col-start-1 md:col-start-2">
                    <span className="relative z-10 w-3.5 h-3.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,255,255,0.45)]" />
                  </div>

                  <div
                    className={`col-start-2 ${
                      isLeft ? "md:col-start-1" : "md:col-start-3"
                    }`}
                  >
                    <AosCom
                      dataAos={isLeft ? "fade-right" : "fade-left"}
                      dataAosDuration={600}
                      dataAosOnce="true"
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="p-6 rounded-2xl border border-cyan-500/15 bg-slate-950/60 backdrop-blur-xl shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/10 transition-shadow"
                      >
                        <div className="font-mono text-xs text-slate-400">
                          <span className="text-violet-300">const</span>{" "}
                          <span className="text-cyan-200">role</span>{" "}
                          <span className="text-slate-500">=</span>{" "}
                          <span className="text-emerald-200">&quot;{item.title}&quot;</span>
                          <span className="text-slate-500">;</span>
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                          <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <FaBriefcase className="text-cyan-300" />
                              {item.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FaCalendarAlt className="text-violet-300" />
                              {item.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FaMapMarkerAlt className="text-cyan-300" />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        <p className="mt-4 text-slate-300 leading-relaxed">{item.description}</p>

                        <div className="flex flex-wrap gap-2 mt-5">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-semibold text-cyan-200 bg-cyan-500/10 border border-cyan-500/15 rounded-full font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </AosCom>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
