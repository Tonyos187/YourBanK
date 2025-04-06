import React, { useState } from 'react'
import Title from '../Components/Title'
import { InfoCard } from '../Data/InfoCard';
import CardProduct from './CardProduct'


export default function Products() {
  const [activebutton , setactivebutton] = useState("Individuals");
  return (
    <section className='lg:px-162 md:px-80 px-16'>
      <div className='flex flex-wrap lgxx:justify-between justify-center items-end lg:mb-[100px]  md:mb-80 mb-60  '>
        <Title
          title1 = "Our"
          title2 = "Products"
          text ="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
          className1='lg:text-h1 font-medium text-white mb-[14px] leading-[150%] md:text-h2  text-h3 '
          className2 = 'lg:text-bodyLg font-light text-textGray leading-[150%] md:text-bodyMd text-bodySm '
        />
        <div className='border rounded-[82px] border-lightGray  bg-gray lg:p-[14px] p-[12px]'>
          <button className={`ma-btn ${activebutton ==="Individuals" ? "add-ma-btn" : ''}`}
          onClick={() =>  setactivebutton("Individuals")}>For Individuals</button>
          <button className={`ma-btn ${activebutton ==="Businesses" ? "add-ma-btn" : ''} `}
          onClick={() =>  setactivebutton("Businesses")}>For Businesses</button>
        </div>
      </div>
      <div className='flex md:justify-between md:items-center flex-wrap justify-center items-center'>
  {
    InfoCard[activebutton].map((item, index) => (
      <React.Fragment key={item.id}>
        <CardProduct
          image={item.image}
          Title3={item.Title2}
          TextCaed={item.TextCaed1}
        />

        {index < InfoCard[activebutton].length - 1 && (
          <div className="lgxx:h-[319px] lgxx:w-px bg-lightGray md:my-0 h-px w-[338px] my-30"></div>
        )}
      </React.Fragment>
    ))
  }
</div>
    </section>
  )
}
