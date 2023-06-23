import React from 'react'

const About = ({id}) => {
    return (
        <section id={id} className="container w-full h-auto p-4 mx-auto mt-20 bg-cyan-800">
            <div data-aos="fade" className='w-[90%] mx-auto text-center bg-red-600'>
                <h1 className='text-2xl font-bold text-slate-900'>About me</h1>
                <p className='mt-3 text-base text-slate-600'>Introduction</p>
            </div>

            <div className='flex flex-col w-full h-auto mt-10 bg-blue-700 md:flex-row md:justify-center'>
                <div data-aos="fade" data-aos-delay="50" data-aos-duration="300" className='w-full md:w-[25rem] md:ml-10'>
                    <div className='mx-auto bg-black w-60 h-60 rounded-2xl md:w-72 md:h-72'>
                        <img src="" alt="" />
                    </div>
                </div>

                <div className='w-full flex flex-col bg-amber-600 h-auto mt-10 md:w-[25rem]'>
                    <div className='flex justify-center w-full gap-x-3 '>
                        <div data-aos="fade-down"  data-aos-delay="50" data-aos-duration="300" className='flex flex-col w-32 text-center bg-white border md:w-32 h-1h-16 rounded-xl border-slate-400'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='h-6 text-sm font-medium md:text-base'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                        </div>
                        <div data-aos="fade-down"  data-aos-delay="50" data-aos-duration="450" className='flex flex-col w-32 text-center bg-white border md:w-32 h-160 rounded-xl border-slate-400'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='h-6 text-sm font-medium md:text-base'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                        </div>
                        <div data-aos="fade-down"  data-aos-delay="50" data-aos-duration="600" className='flex flex-col w-32 text-center bg-white border md:w-32 h-160 rounded-xl border-slate-400'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='h-6 text-sm font-medium md:text-base'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                        </div>
                    </div>
                    <div className='max-w-xl mx-auto text-center bg-red-700 md:text-left my-7'>
                        <p className='font-normal text-slate-600 '>React developer, Saya membuat web pages dengan UI / UX, Saya harap pengalaman yang banyak membuat clients senang dengan project yang dibuat</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About