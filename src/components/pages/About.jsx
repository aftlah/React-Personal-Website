import React from 'react'
import AosCom from '../../../utils/AosCom'

const About = ({id}) => {
    return (
        <section id={id} className="container w-full h-auto p-4 mx-auto mt-20 bg-cyan-800">
            <AosCom dataAos="fade" dataAosOnce="true">
            <div className='w-[90%] mx-auto text-center bg-red-600'>
                <h1 className='text-2xl font-bold text-slate-900'>About me</h1>
                <p className='mt-3 text-sm text-slate-600'>Introduction</p>
            </div>
            </AosCom>

            <div className='flex flex-col w-full h-auto mt-10 bg-blue-700 md:flex-row md:justify-center'>
                <div className='w-full md:w-[25rem] md:ml-10'>
                <AosCom dataAos="fade" dataAosDelay={50} dataAosOnce={"true"}dataAosDuration={300}>
                    <div className='mx-auto bg-black w-60 h-60 rounded-2xl md:w-72 md:h-72'>
                        <img src="" alt="" />
                    </div>
                </AosCom>
                </div>

                <div className='w-full flex flex-col  bg-amber-600 h-auto mt-10 md:w-[25rem]'>
                    <div className='flex flex-wrap justify-center w-full mx-auto gap-x-3 gap-y-2'>
                        <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"}dataAosDuration={300}>
                        <div className='flex flex-col h-16 text-center bg-white border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-400'>
                            <div className='flex flex-col'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='h-6 text-sm font-medium md:text-base'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                            </div>
                        </div>
                        </AosCom>

                        <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"}dataAosDuration={450}>
                        <div className='flex flex-col h-16 text-center bg-white border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-400'>
                            <div className='flex flex-col'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='h-6 text-sm font-medium md:text-base'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                            </div>
                        </div>
                        </AosCom>
                        
                        <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"}dataAosDuration={600}>
                        <div className='flex flex-col h-16 text-center bg-white border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-400'>
                            <div className='flex flex-col'>
                            <p className='text-slate-500'>📸</p>
                            <h5 className='h-6 text-sm font-medium md:text-base'>Pengalaman</h5>
                            <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                            </div>
                        </div>
                        </AosCom>

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