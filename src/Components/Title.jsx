import React from 'react'

export default function Title({className1 = '' , className2 = '' , title1 , title2 , text}) {
  return (
    <div className='lgx:w-[910px] lg:w-[831px]  w-[358px] md:text-left text-center mb-20 lg:mb-0'>
      <h2 className= {`${className1}`} >{title1} <span className="text-lightGreen">{title2}</span></h2>
      <p className= {`${className2}`} >{text}</p>
    </div>
  )
}
