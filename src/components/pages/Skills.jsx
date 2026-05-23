import AosCom from "../../../utils/AosCom";
import SkillItem from "../fragment/Skill";
import skillsData from "../../json/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950/30">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <AosCom dataAos="fade-up" dataAosDuration={600} dataAosOnce="true">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl font-heading">
              <span className="font-mono text-cyan-300/90">{"// "}</span>Skills & Tools
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-400">
              Stack I use to ship products — from UI to backend and data.
            </p>
          </AosCom>
        </div>

        <div className="grid gap-8">
          {skillsData.map((category, catIndex) => (
            <div key={catIndex}>
              <AosCom dataAos="fade-up" dataAosDuration={600} dataAosDelay={catIndex * 100} dataAosOnce="true">
                <h3 className="mb-4 text-base font-semibold text-center text-slate-200 md:text-left md:ml-4 font-mono">
                  {"// "}{category.category}
                </h3>
              </AosCom>
              
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
                {category.skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
