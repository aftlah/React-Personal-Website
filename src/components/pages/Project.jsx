import React from 'react'
import AosCom from '../../../utils/AosCom'
import { BsArrowRightShort } from 'react-icons/bs'

const Project = ({ id }) => {
    return (
        <div>
            <section id={id} className='container w-full h-auto p-4 mx-auto mt-20 bg-cyan-700 '>
                <div className='w-[90%] mx-auto text-center bg-red-600'>
                    <AosCom dataAos="fade" dataAosOnce="true">
                        <h1 className='text-2xl font-bold text-slate-900'>Project</h1>
                        <p className='mt-3 text-sm text-slate-600'>Project Yang Pernah Saya Buat</p>
                    </AosCom>
                </div>

                <div className='flex flex-col flex-wrap justify-center items-start w-full py-4 mx-auto mt-10 bg-blue-700 gap-7 md:flex-row md:w-[100%] xl:w-[80%]  xl:gap-14'>

                    <div className='w-full bg-green-700 h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration={300} dataAosDelay={50} dataAosOnce="true">
                        <div className='w-full bg-white h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0 py-1'>
                            <div>
                                <div className='w-[90%] bg-orange-500 h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className=' w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold text-slate-800'>Name Project</h1>
                                    <p className='text-slate-500 group w-[30%]'>
                                        <a href="" className='text-base font-medium'>Demo</a>
                                        <BsArrowRightShort className='inline-block ml-1 text-2xl font-extrabold transition-all ease-linear group-hover:translate-x-1' />
                                    </p>
                                </div>
                            </div>
                            </div>
                        </AosCom>
                    </div>

                    <div className='w-full bg-red-700 h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration={400} dataAosDelay={50} dataAosOnce="true">
                        <div className='w-full bg-white h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0 py-1'>
                            <div >
                                <div className='w-[90%] bg-orange-500 h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className=' w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold text-slate-800'>Name Project</h1>
                                    <p className='text-slate-500 group w-[30%]'>
                                        <a href="" className='text-base font-medium'>Demo</a>
                                        <BsArrowRightShort className='inline-block ml-1 text-2xl font-extrabold transition-all ease-linear group-hover:translate-x-1' />
                                    </p>
                                </div>
                            </div>
                            </div>
                        </AosCom>
                    </div>

                    <div className='w-full h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration={500} dataAosDelay={70} dataAosOnce="true">
                    <div className='w-full bg-white h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0 py-1'>
                            <div >
                                <div className='w-[90%] bg-orange-500 h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className=' w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold text-slate-800'>Name Project</h1>
                                    <p className='text-slate-500 group w-[30%]'>
                                        <a href="" className='text-base font-medium'>Demo</a>
                                        <BsArrowRightShort className='inline-block ml-1 text-2xl font-extrabold transition-all ease-linear group-hover:translate-x-1' />
                                    </p>
                                </div>
                            </div>
                            </div>
                        </AosCom>
                    </div>


                    <div className='w-full h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration={600} dataAosDelay={80} dataAosOnce="true">
                            <div className=' bg-white h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0 py-1'>
                                <div>
                                    <div className='w-[90%] bg-orange-500 h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className=' w-[90%] mx-auto my-3'>
                                        <h1 className='text-xl font-semibold text-slate-800'>Name Project</h1>
                                        <p className='text-slate-500 group w-[30%]'>
                                            <a href="" className='text-base font-medium'>Demo</a>
                                            <BsArrowRightShort className='inline-block ml-1 text-2xl font-extrabold transition-all ease-linear group-hover:translate-x-1' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AosCom>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project