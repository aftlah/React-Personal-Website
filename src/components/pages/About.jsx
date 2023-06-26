import React from 'react'
import AosCom from '../../../utils/AosCom'
import imageKu from "../../assets/images/gambar1.jpeg"

const About = ({ id }) => {

    const StyleImg = {
        backgroundImage: `url(${imageKu})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <section id={id} className="container w-full h-auto p-4 mx-auto mt-20 ">
            <AosCom dataAos="fade" dataAosOnce="true">
                <div className='w-[90%] mx-auto text-center '>
                    <h1 className='text-2xl font-bold text-slate-900'>About me</h1>
                    <p className='mt-3 text-sm text-slate-600'>Introduction</p>
                </div>
            </AosCom>

            <div className='flex flex-col items-start w-full h-auto mt-10 md:flex-row md:justify-center lg:gap-x-10' >
                <div className='w-full md:w-[25rem] md:ml-10'>
                    <AosCom dataAos="fade" dataAosDelay={50} dataAosOnce={"true"} dataAosDuration={300}>
                        <div className='mx-auto bg-center w-60 h-60 rounded-2xl lg:w-96 lg:h-96' style={StyleImg}></div>
                    </AosCom>
                </div>

                <div className='w-full flex flex-col  h-auto mt-8 md:mt-5 md:w-[27rem] lg:my-auto '>
                    <div className='flex justify-center w-full mx-auto gap-x-3 gap-y-2'>
                        <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"} dataAosDuration={300}>
                            <div className='flex flex-col h-16 text-center md:h-[4.5rem]  border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-200 bg-white'>
                                <div className='flex flex-col'>
                                    <p className='text-slate-500'>📸</p>
                                    <h5 className='text-xs font-medium md:h-6 md:text-sm text-slate-800'>Pengalaman</h5>
                                    <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                                </div>
                            </div>
                        </AosCom>

                        <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"} dataAosDuration={450}>
                            <div className='flex flex-col h-16 text-center md:h-[4.5rem]   border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-200 bg-white'>
                                <div className='flex flex-col'>
                                    <p className='text-slate-500'>📸</p>
                                    <h5 className='text-xs font-medium md:h-6 md:text-sm text-slate-800'>Pengalaman</h5>
                                    <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                                </div>
                            </div>
                        </AosCom>

                        <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"} dataAosDuration={600}>
                            <div className='flex flex-col h-16 text-center md:h-[4.5rem]  border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-200 bg-white'>
                                <div className='flex flex-col'>
                                    <p className='text-slate-500'>📸</p>
                                    <h5 className='text-xs font-medium md:h-6 md:text-sm text-slate-800'>Pengalaman</h5>
                                    <p className='text-xs text-slate-500'>1.5 + Tahun</p>
                                </div>
                            </div>
                        </AosCom>

                    </div>
                    <div className='max-w-xl mx-auto text-center md:max-w-md md:text-left my-7 lg:ml-4'>
                        <p className='font-semibold text-slate-500 text-[0.9rem]'>React developer, Saya membuat web pages dengan UI / UX, Saya harap pengalaman yang banyak membuat clients senang dengan project yang dibuat</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About