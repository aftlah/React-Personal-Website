import React from 'react'
import Titles from '../fragment/Titles'
import Img from '../elements/Img'


const About = ({id}) => {
  return (
      <section id={id} className=" container bg-slate-600 p-2 m-auto mt-32   md:p-0 xl:px-8 md:h-[30rem] ">
        <div className="w-full">
        <Titles title={"About Me"} subTitle={"Introduction"}/>

          

          <div className="flex flex-col flex-wrap items-center justify-center w-full mt-10 bg-blue-700 md:flex-row ">

            <div className=" bg-green-500 w-full md:w-[20rem] md:ml-8 lg:ml-28">
              <Img ml={"auto"} mr={"auto"} rounded={"3xl"} width={72} height={72}/>
            </div>

            <div className="w-11/12 bg-yellow-600 md:w-[26rem]  lg:ml-20 mt-10">
              <div className="flex justify-center mt-4 gap-x-3">
                <div className="w-32 h-16 text-center bg-white border rounded-lg border-slate-500">
                  <h5>icon</h5>
                  <h2 className="text-sm font-semibold">Pengalam</h2>
                  <h6 className="text-xs text-slate-500">ijdsa</h6>
                </div>
                <div className="w-32 h-16 text-center bg-white border rounded-lg border-slate-500">
                  <h5>icon</h5>
                  <h2 className="text-sm font-semibold">Pengalam</h2>
                  <h6 className="text-xs text-slate-500">ijdsa</h6>
                </div>
                <div className="w-32 h-16 text-center bg-white border rounded-lg border-slate-500">
                  <h5>icon</h5>
                  <h2 className="text-sm font-semibold">Pengalam</h2>
                  <h6 className="text-xs text-slate-500">ijdsa</h6>
                </div>
              </div>
              <div className="flex mx-auto mt-9 text-center bg-green-600 md:text-left md:ml-1 px-[0.10rem]">
                <p className="text-slate-500">Front-end developer, Saya membuat web pages dengan UI / UX, Saya harap pengalaman yang banyak membuat clients senang dengan project yang dibuat</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    
  )
}

export default About