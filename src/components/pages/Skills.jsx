import AosCom from "../../../utils/AosCom";
import SkillItem from "../fragment/Skill";
import skillsData from "../../json/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <AosCom dataAos="fade-up" dataAosDuration={600}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl font-heading">
              Skills & Tools
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600">
              The technologies and tools I use to bring ideas to life.
            </p>
          </AosCom>
        </div>

        <div className="grid gap-12">
          {skillsData.map((category, catIndex) => (
            <div key={catIndex}>
              <AosCom dataAos="fade-up" dataAosDuration={600} dataAosDelay={catIndex * 100}>
                <h3 className="mb-8 text-xl font-semibold text-center text-slate-800 md:text-left md:ml-4">
                  {category.category}
                </h3>
              </AosCom>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    name={skill.name}
                    icon={skill.icon}
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
