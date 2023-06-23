import React from 'react'

const Skills = ({id}) => {
  return (
    <div>
        <section id={id} className='container w-full h-auto p-4 mx-auto mt-20 bg-cyan-800'>
        <div data-aos="fade" className='w-[90%] mx-auto text-center bg-red-600'>
                <h1 className='text-2xl font-bold text-slate-900'>Skills</h1>
                <p className='mt-3 text-base text-slate-600'>Keterampilan saya</p>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-auto px-5 mt-10 bg-amber-600 gap-y-10 md:gap-x-14 md:flex-row md:px-0'>
                <div data-aos="fade-down" className='bg-blue-500 w-10/12 h-72 rounded-3xl md:w-[21rem]'>
                    <div className='w-full mt-5 text-center'>
                        <h1 className='text-lg font-semibold text-slate-800'>Front-End Skills</h1>
                    </div>

                    <div  className='w-11/12 mx-auto mt-3 bg-red-500'>
                        <ul className='flex justify-center gap-10 list-disc list-inside bg-green-700'>
                            <div className='flex flex-col gap-y-10'>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            </div>
                            <div className='flex flex-col gap-y-10'>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                
                <div data-aos="fade-up" className='bg-blue-500 w-10/12 h-72 rounded-3xl md:w-[21rem]'>
                    <div className='w-full mt-5 text-center'>
                        <h1 className='text-lg font-semibold text-slate-800'>Front-End Skills</h1>
                    </div>

                    <div className='w-11/12 mx-auto mt-3 bg-red-500'>
                        <ul className='flex justify-center gap-10 list-disc list-inside bg-green-700'>
                            <div className='flex flex-col gap-y-10'>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            </div>
                            <div className='flex flex-col gap-y-10'>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            <li className='w-24 bg-pink-800 h-11'>
                                <p className='text-sm text-slate-500'>Intermediat</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                
            </div>
        </section>
    </div>
  )
}

export default Skills