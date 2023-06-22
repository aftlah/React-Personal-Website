import React from 'react'

const About = () => {
    return (
        <section className="container p-4 w-full h-auto mx-auto mt-20 bg-cyan-800">
            <div className='w-full bg-red-600 text-center'>
                <h1 className='text-2xl font-bold text-slate-900'>About me</h1>
                <p className='text-base text-slate-600 mt-3'>Introduction</p>
            </div>

            <div className='flex w-full flex-col bg-blue-700 h-auto mt-10 md:flex-row md:justify-center'>
                <div className='w-full md:w-[25rem] md:ml-10'>
                    <div className=' w-60 h-60 bg-black mx-auto rounded-2xl md:w-72 md:h-72'>
                        <img src="" alt="" />
                    </div>
                </div>

                <div className='w-full flex flex-col bg-amber-600 h-auto mt-10 md:w-[25rem]'>
                    <div className='w-full flex gap-x-3 justify-center '>
                        <div className='flex flex-col bg-white  w-32 md:w-32 text-center h-1h-16 rounded-xl border border-slate-400'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='font-medium h-6 md:text-base text-sm'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                        </div>
                        <div className='flex flex-col bg-white w-32 md:w-32  text-center  h-160 rounded-xl border border-slate-400'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='font-medium h-6 md:text-base text-sm'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                        </div>
                        <div className='flex flex-col bg-white w-32 md:w-32  text-center  h-160  rounded-xl border border-slate-400'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='font-medium h-6 md:text-base text-sm'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                        </div>
                    </div>
                    <div className='max-w-xl mx-auto bg-red-700 text-center md:text-left my-7'>
                        <p className='text-slate-600 font-normal '>React developer, Saya membuat web pages dengan UI / UX, Saya harap pengalaman yang banyak membuat clients senang dengan project yang dibuat</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About