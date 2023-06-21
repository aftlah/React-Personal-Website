import React, { useState } from 'react'
// import { Link }  from "react-router-dom"

export const Navbar = ({ home, about, skills, contact }) => {

  const [isActive, setIsActive] = useState(false)




  return (
    <nav className=' fixed bg-transparent border bottom-10 right-2 rounded-3xl border-slate-300 h-[35] w-14 md:h-1/2 md:w-20'>
      <div className='flex flex-col items-center h-full bg-transparent backdrop-blur-xl rounded-3xl'>
        <div className='bg-green-600 w-[0.12rem] rounded-full h-1/2'></div>
        <div className='flex flex-col p-2 text-sm font-bold text-center text-slate-700 md:text-lg md:p-4'>
          <a href={home} className={`py-4 rounded-lg  cursor-pointer `}>Home</a>
          <a href={about} className={`py-4 rounded-lg  cursor-pointer focus:text-slate-800`}>About</a>
          <a href={skills} className={`py-4 rounded-lg  cursor-pointer focus:text-slate-800`}>Skills</a>
          <a href={contact} className={`py-3 rounded-lg  cursor-pointer  focus:text-slate-800`}>Contact</a>
        </div>
        <div className='bg-green-600 w-[0.12rem] rounded-lg h-1/2'></div>
      </div>
    </nav>
  )
}
