import React from 'react'

const About = () => {
    return (
        <section className="container p-4 w-full h-[37rem] mx-auto mt-20 bg-cyan-800">
            <div className='w-full bg-red-600 text-center'>
                <h1 className='text-2xl font-bold text-slate-900'>About me</h1>
                <p className='text-base text-slate-600'>Introduction</p>
            </div>

            <div className='flex w-full flex-col bg-blue-700 h-auto mt-10 md:flex-row md:justify-center'>
                <div className='w-full md:w-[25rem] md:ml-10'>
                <div className='w-72 h-72 bg-black mx-auto'>
                    <img src="" alt="" />
                </div>
                </div>

                <div className='w-full flex flex-col bg-amber-600 h-auto mt-10 md:w-[25rem]'>
                    <div className='w-full flex flex-row gap-x-3 justify-center'>
                        <div className='bg-white w-40 text-center rounded-xl'>
                            <p>Icon</p>
                            <h5>Pengalaman</h5>
                            <p>1.5 + Tahun</p>
                        </div>
                        <div className='bg-white w-40 text-center rounded-xl'>
                            <p>Icon</p>
                            <h5>Pengalaman</h5>
                            <p>1.5 + Tahun</p>
                        </div>
                        <div className='bg-white w-40 text-center rounded-xl'>
                            <p>Icon</p>
                            <h5>Pengalaman</h5>
                            <p>1.5 + Tahun</p>
                        </div>
                    </div>
                    <div className='max-w-xl mx-auto bg-red-700 text-center md:text-left my-7'>
                        <p>React developer, Saya membuat web pages dengan UI / UX, Saya harap pengalaman yang banyak membuat clients senang dengan project yang dibuat</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About