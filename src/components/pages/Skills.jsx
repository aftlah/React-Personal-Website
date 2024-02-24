import AosCom from "../../../utils/AosCom";
import Skill from "../fragment/Skill";

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
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
            <div className=" w-10/12 h-auto rounded-3xl md:w-[24rem] bg-white border py-3  border-slate-200">
              <div className="w-full my-4 text-center">
                {/* <h1 className="font-semibold text-md text-slate-800">
                  Front-End Skill
                </h1> */}
              </div>

              <div className="w-11/12 mx-auto ml-5 ">
                <ul className="flex justify-center py-3 list-none list-inside md:justify-evenly ">
                  <Skill/>
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
