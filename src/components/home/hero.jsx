import React from 'react'

export default function Hero() {
  return (
    <section className='pt-[100px] h-[100vh] w-full relative bg-hero bg-cover bg-left '>
      <div className='container mx-auto px-[5%] lg:px-0 h-full '>
        <div className='h-full flex items-center text-white '>
          <div className='flex flex-col max-w-[600px] gap-[24px] p-[20px] lg:p-[50px]'>
            <p className='font-bold text-[36px] lg:text-[75px] leading-[42px] lg:leading-[86px]'>
              Rennman <br />AO Trans
            </p>
            <p className='text-[16px] md:text-[18px] leading-[24px] md:leading-[34px] text-white'>&quot;Delivering Excellence, Mile by Mile – Your Trusted Partner in Truck Logistics&quot;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
