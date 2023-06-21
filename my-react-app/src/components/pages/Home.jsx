import React from 'react'
import Header from '../fragment/Header'
import HeaderDesc from '../fragment/HeaderDesc'

const Home = ({ id }) => {
  return (
    <section id={id} className=' container p-3 m-auto mt-20 bg-slate-800  md:p-0 xl:px-8 md:h-[30rem]'>
      <div className='flex flex-col justify-start w-full p-3 b md:p-0 md:h-full md:justify-center'>
        <div className='flex flex-col items-center justify-center mt-10 align-middle md:flex-row'>
          <Header />


          <div className='w-full md:items-center md:flex jus text-start md:w-3/5 lg:w-1/2 md:h-64'>
            <HeaderDesc />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home