// import { useEffect, useState } from "react";
// import AosCom from "../../../utils/AosCom";
// import { BsArrowRightShort } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Quran-Ku",
    image: "/images/quranku.jpeg",
    //   backgroundImage: `url(${Quranku})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    // },
    link: "https://aftlah.github.io/Quran-Ku/",
  },
  {
    id: 2,
    name: "Hap Hap Games",
    image: "/images/haphap-games.jpeg",
    link: "https://hap-hap-games.vercel.app/",
  },
  {
    id: 3,
    name: "Rumah Impian",
    image: "/images/rumah-impian.jpeg",
    link: "https://rumah-impian-peach.vercel.app/",
  },
  {
    id: 4,
    name: "Tes Tahfidz",
    image: "/images/tes-tahfidz.jpeg",
    link: "https://tes-tahfidz-pink.vercel.app/",
  },
  {
    id: 5,
    name: "Web Kelas XC",
    image: "/images/web-xc.png",
    link: "https://web-xc.vercel.app/",
  },
];

// const Project = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects(data);
//   }, []);

//   return (
//     <div>
//       <section
//         id="project"
//         className="container w-full h-auto p-4 mx-auto mt-20 md:p-0 lg:p-4"
//       >
//         <div className="w-[90%] mx-auto text-center">
//           <AosCom dataAos="fade" dataAosOnce="true">
//             <h1 className="text-2xl font-bold text-slate-900">Project</h1>
//             <p className="mt-3 text-sm text-slate-600">
//               Project Yang Pernah Saya Buat
//             </p>
//           </AosCom>
//         </div>

//         <div className="flex flex-col flex-wrap md:justify-start lg:justify-center  items-start w-full sm:w-[85%]  py-4 mx-auto mt-9 gap-x-3  gap-5 md:flex-row md:w-[100%] xl:w-[80%]  xl:gap-x-3 xl:gap-y-7">
//           {projects.map((project, i) => (
//             <div
//               key={i}
//               className="w-full h-full rounded-2xl  md:w-[20rem] lg:w-[29rem] mx-auto md:mx-4 lg:mx-0 "
//             >
//               <AosCom
//                 dataAos="fade"
//                 dataAosDelay={50}
//                 dataAosOnce={"true"}
//                 dataAosDuration={300}
//               >
//                 <div className="max-w-md bg-white h-full  rounded-2xl md:w-[22rem] lg:w-[28rem] mx-auto md:mx-5 lg:mx-auto py-1 border ">
//                   <div>
//                     <div className="flex w-[95%] sm:w-[90%] h-52 sm:h-56 mx-auto mt-2 sm:mt-4 rounded-2xl md:h-48 lg:h-56">
//                       <img src={project.image} className="object-fill w-full rounded-xl" />
//                     </div>
//                     <div className=" w-[88%] mx-auto mt-2">
//                       <h1 className="font-bold text-md text-slate-700">
//                         {project.name}
//                       </h1>
//                       <p className="text-slate-500 group w-[20%] pb-2">
//                         <a
//                           href={project.link}
//                           target="_blank"
//                           className="text-sm font-medium"
//                           rel="noreferrer"
//                         >
//                           Demo
//                           <BsArrowRightShort className="inline-block ml-1 text-xl font-extrabold transition-all ease-linear group-hover:translate-x-1" />
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </AosCom>
//             </div>
//           ))}



//         </div>
//       </section>
//     </div>
//   );
// };

// export default Project;

import { HoverEffect } from "../ui/card-hover-effect";
import AosCom from "../../../utils/AosCom";

export function Project() {
  return (
    <div id="project" className="max-w-5xl px-8 mx-auto mt-20">
      <div className="w-[90%] mx-auto text-center">
        <AosCom dataAos="fade" dataAosOnce="true" dataAosDelay={50}>
          <h1 className="text-2xl font-bold text-slate-900">Project</h1>
          <p className="mt-3 text-sm text-slate-600">
            Project Yang Pernah Saya Buat
          </p>
        </AosCom>
      </div>
      <HoverEffect items={data} />
    </div>
  );
}


