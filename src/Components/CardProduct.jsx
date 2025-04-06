import React from 'react'

export default function CardProduct({Title3 , image , TextCaed}) {
  return (
    <div className="lgx:w-[465.33px] text-center lg:w-[373.33px] w-[338px]  hover:shadow-lg  hover:shadow-lightGreen hover:translate-y-3  ">
      <div className="flex justify-center items-center"><img src={image} alt="" className='lg:mb-30 md:mb-24 xs:mb-[20px] lg:w-[98px] md:w-[72px] ' /></div>
      <h3 className="lg:text-2xl font-normal leading-[150%] text-white lg:mb-20 md:text-[20px] md:mb-[16px] xs:mb-[12px] ">{Title3}</h3>
      <p className="lg:text-bodyLg font-light text-textGray mb-[30] md:text-bodyMd xs:text-bodySm">{TextCaed}</p>
    </div>
  )
}
