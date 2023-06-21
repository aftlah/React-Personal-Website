import React from 'react'
import Medsos from '../elements/Medsos'
import Img from '../elements/Img'

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full md:justify-normal md:w-2/4 lg:w-2/6">
        <Medsos />
        <div className="flex items-center justify-around w-full ">
          <div className="w-2/3 md:justify-center md:items-center md:flex md:w-4/5">
            <Img width={60} height={60} rounded={"full"} mb={5} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header