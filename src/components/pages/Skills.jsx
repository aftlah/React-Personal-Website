import React from 'react'

const Skills = () => {
  return (
    <div>
        <section className='container p-4 w-full h-auto mx-auto mt-20 bg-cyan-800'>
        <div className='w-full bg-red-600 text-center'>
                <h1 className='text-2xl font-bold text-slate-900'>Skills</h1>
                <p className='text-base text-slate-600 mt-3'>Keterampilan saya</p>
            </div>

            <div className='w-full flex flex-col justify-center items-center bg-amber-600 h-auto px-5 mt-10 gap-y-10 md:gap-x-14 md:flex-row md:px-0'>
                <div className='bg-blue-500 w-10/12 h-72 rounded-3xl md:w-[21rem]'>
                    <div className='w-full text-center mt-5'>
                        <h1 className='text-lg font-semibold text-slate-800'>Front-End Skills</h1>
                    </div>

                    <div className='bg-red-500 w-11/12 mx-auto mt-3'>
                        <ul className='list-disc bg-green-700 flex justify-center list-inside gap-10'>
                            <div className='flex flex-col gap-y-10'>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            </div>
                            <div className='flex flex-col gap-y-10'>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                
                <div className='bg-blue-500 w-10/12 h-72 rounded-3xl md:w-[21rem]'>
                    <div className='w-full text-center mt-5'>
                        <h1 className='text-lg font-semibold text-slate-800'>Front-End Skills</h1>
                    </div>

                    <div className='bg-red-500 w-11/12 mx-auto mt-3'>
                        <ul className='list-disc bg-green-700 flex justify-center list-inside gap-10'>
                            <div className='flex flex-col gap-y-10'>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            </div>
                            <div className='flex flex-col gap-y-10'>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
                                </li>
                            <li className='bg-pink-800 w-24 h-11'>
                                <p className='text-slate-500 text-sm'>Intermediat</p>
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