import React from 'react'


const Titles = ({title, subTitle}) => {
  return (
    <>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-4xl">{title}</h3>
          <h6 className="text-sm text-slate-500">{subTitle}</h6>
        </div>
    </>
  )
}

export default Titles