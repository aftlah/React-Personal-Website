import { motion } from "framer-motion";
import AosCom from "../../../utils/AosCom";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import experienceData from "../../json/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <AosCom dataAos="fade-up" dataAosDuration={600} dataAosOnce="true">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl font-heading">
              Work Experience
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600">
              My professional journey and career milestones.
            </p>
          </AosCom>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 h-full w-0.5 bg-slate-200 md:left-1/2 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10 hidden md:block" />

                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <AosCom
                    dataAos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    dataAosDuration={600}
                    dataAosOnce="true"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-6 bg-white border rounded-2xl border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative group"
                    >
                        {/* Mobile Timeline Line/Dot */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-2xl md:hidden" />
                        
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <FaBriefcase className="text-blue-500" />
                            {item.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaCalendarAlt className="text-blue-500" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-blue-500" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <p className="mb-4 text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AosCom>
                </div>
                
                {/* Empty Space for Desktop Alignment */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
