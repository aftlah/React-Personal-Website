import React from 'react'

const Navbar = ({home,about,skills,project}) => {
    return (

        <nav data-aos="fade-left" className="fixed w-16 h-72 bottom-20 right-3 md:w-20 md:h-96">
            <div className="flex flex-col items-center justify-center h-full text-center bg-transparent border rounded-full gap-y-3 backdrop-blur-xl border-slate-300">
                <div className="bg-white w-[0.11rem] h-10"></div>
                <a href={home} className="py-3 font-medium text-slate-700">Home</a>
                <a href={about} className="py-3 font-medium text-slate-700">About</a>
                <a href={skills} className="py-3 font-medium text-slate-700">Skills</a>
                <a href={project} className="py-3 font-medium text-slate-700">Project</a>
                <div className="bg-white w-[0.11rem] h-10"></div>
            </div>
        </nav>

    )
}

export default Navbar