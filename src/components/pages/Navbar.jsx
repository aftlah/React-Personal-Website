import React from 'react'

const Navbar = () => {
    return (

        <nav className="w-16 h-72 fixed bottom-20 right-3 md:w-20 md:h-96">
            <div className="flex flex-col h-full justify-center items-center gap-y-3 rounded-full bg-transparent backdrop-blur-xl border border-slate-300 text-center">
                <div className="bg-white w-[0.11rem] h-10"></div>
                <a href="" className="py-3 font-medium text-slate-700">Home</a>
                <a href="" className="py-3 font-medium text-slate-700">About</a>
                <a href="" className="py-3 font-medium text-slate-700">Skills</a>
                <a href="" className="py-3 font-medium text-slate-700">Contact</a>
                <div className="bg-white w-[0.11rem] h-10"></div>
            </div>
        </nav>

    )
}

export default Navbar