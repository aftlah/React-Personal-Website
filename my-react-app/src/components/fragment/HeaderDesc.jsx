import React from 'react'

const HeaderDesc = () => {
    
    const desc = {
        nama:"Altaf Fattah Amanullah",
        bidang:"Front-End Developer",
        decsMe:"Seorang bocah berumur 18 tahun yang ingin menjadi Front-End Developer",
        btnMsg:"Kirim Pesan"
    }

  return (
  
        <div className="">
              <h1 className='text-3xl font-bold text-slate-900 md:text-4xl'>{desc.nama}<span className="inline-block text-[1.5rem]">🖐️</span> </h1>
              <div className="flex flex-col">
                <div className="flex items-center my-1.5">
                  <div className="w-10 h-[0.02rem] bg-slate-800 mr-3 md:w-[3.7rem] md:h-[0.05rem]"></div>
                  <h5 className=' text-md text-slate-900 md:text-lg'>{desc.bidang}</h5>
                </div>
                <h5 className='max-w-sm text-sm text-slate-500 md:text-base'>{desc.decsMe}</h5>
                <div className="flex items-center justify-center h-12 my-5 text-white rounded-full md:mt-10 w-36 bg-slate-900">
                  <h1 className="font-semibold text-center ">{desc.btnMsg}</h1>
                </div>
              </div>
            </div>
    
  )
}

export default HeaderDesc