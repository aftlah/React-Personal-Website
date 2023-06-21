import React from 'react'

const Img = ({ height, width, rounded,mb,mt,ml,mr,md,lg }) => {
    return (

        <div className={`mb-${mb} mt-${mt} ml-${ml} mr-${mr} text-center bg-gray-500 rounded-${rounded} h-${height} w-${width}`}>
            <img src="" alt="Foto" />
        </div>
    )
}

export default Img