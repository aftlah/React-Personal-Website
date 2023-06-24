import React from 'react'
import AosCom from '../../../utils/AosCom'
import {BsArrowRightShort} from 'react-icons/bs'

const Project = ({ id }) => {
    return (
        <div>
            <section id={id} className='container w-full h-auto p-4 mx-auto mt-20 bg-cyan-700'>
                <div className='w-[90%] mx-auto text-center bg-red-600'>
                    <AosCom dataAos="fade" dataAosOnce="true">
                        <h1 className='text-2xl font-bold text-slate-900'>Project</h1>
                        <p className='mt-3 text-base text-slate-600'>Project saya</p>
                    </AosCom>
                </div>

                <div className='flex flex-col flex-wrap justify-center items-start w-full py-4 mx-auto mt-10 bg-blue-700 gap-7 md:flex-row md:w-[100%] xl:w-[80%]  xl:gap-14'>

                    <div className='w-full bg-green-700 h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration="300" dataAosDelay="50" dataAosOnce="true">
                            <div>
                                <div className='w-[90%] bg-white h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className='bg-cyan-600 w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold'>Name Project</h1>
                                    <p className='font-normal text-md text-slate-500'>
                                        <a href="">Demo</a>
                                        <BsArrowRightShort className='inline-block'/>
                                    </p>
                                </div>
                            </div>
                        </AosCom>
                    </div>

                    <div className='w-full bg-red-700 h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration="400" dataAosDelay="60" dataAosOnce="true">
                            <div >
                                <div className='w-[90%] bg-white h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className='bg-cyan-600 w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold'>Name Project</h1>
                                    <p className='font-normal text-md text-slate-500'>
                                        <a href="">Demo</a>
                                        <BsArrowRightShort className='inline-block'/>
                                    </p>
                                </div>
                            </div>
                        </AosCom>
                    </div>

                    <div className='w-full bg-yellow-700 h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration="500" dataAosDelay="70" dataAosOnce="true">
                            <div >
                                <div className='w-[90%] bg-white h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className='bg-cyan-600 w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold'>Name Project</h1>
                                    <p className='font-normal text-md text-slate-500'>
                                        <a href="">Demo</a>
                                        <BsArrowRightShort className='inline-block'/>
                                    </p>
                                </div>
                            </div>
                        </AosCom>
                    </div>


                    <div className='w-full bg-yellow-700 h-full rounded-2xl md:w-[26.4rem] mx-auto md:mx-0'>
                        <AosCom dataAos="fade" dataAosDuration="600" dataAosDelay="80" dataAosOnce="true">
                            <div >
                                <div className='w-[90%] bg-white h-[13rem] mx-auto mt-5 rounded-2xl md:h-[15rem]'>
                                    <img src="" alt="" />
                                </div>
                                <div className='bg-cyan-600 w-[90%] mx-auto my-3'>
                                    <h1 className='text-xl font-semibold'>Name Project</h1>
                                    <p className='font-normal text-md text-slate-500'>
                                        <a href="">Demo</a>
                                        <BsArrowRightShort className='inline-block'/>
                                    </p>
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