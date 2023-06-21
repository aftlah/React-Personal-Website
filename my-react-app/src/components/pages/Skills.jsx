import React from 'react'
import Titles from '../fragment/Titles'
import CardSkills from '../fragment/CardSkills'

const Skills = ({id}) => {
  return (
    <section id={id} className="container bg-slate-600 p-4 m-auto mt-32 md:p-0 xl:px-8 md:h-[30rem] ">
      <div className="w-full bg-blue-600">
      <Titles title={"Skills"} subTitle={"Keterampilan saya"}/>

        <div className="flex w-full bg-pink-600 mt-10 px-3 md:mt-14">
          <div className="flex flex-col flex-wrap bg-green-700 w-full md:justify-center gap-y-6 md:flex-row md:gap-x-8 lg:gap-x-20">
            <CardSkills bidang1={"Front-end Skill"} bidang2={"Back-end Skill"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills