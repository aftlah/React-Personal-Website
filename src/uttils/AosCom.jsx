import React from 'react'

const AosCom = ({dataAos,dataAosDelay,dataAosOnce,children,dataAosDuration}) => {
  return (
    <div className='w-auto h-auto' data-aos={dataAos} data-aos-delay={dataAosDelay} data-aos-once={dataAosOnce} data-aos-duration={dataAosDuration}>
        {children}
    </div>
  )
}

export default AosCom