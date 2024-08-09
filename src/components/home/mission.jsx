import Image from 'next/image'
import React from 'react'

export default function Mission() {
  return (
    <section className='container mx-auto px-[5%] lg:px-0 py-[80px]'>
      <p className='font-[900] text-[52px]'>Our Mission</p>
      <div className='grid grid-cols-2 max-w-[800px] mx-auto mt-[30px] gap-[30px]'>
        <div className='text-center flex flex-col items-center gap-2'>
          <Image src={'/logo/mission/professional.png'} height={400} width={400} alt='' className='h-[80px] w-[80px]' />
          <p className='text-[28px] font-[900]'>PROFESSIONAL TEAM</p>
          <p className='text-[18px] font-[400]'>Our energetic and innovative team is dedicated to ongoing professional growth, always ready to provide the best solutions for you.</p>
        </div>
        <div className='text-center flex flex-col items-center gap-2'>
          <Image src={'/logo/mission/truck.png'} height={400} width={400} alt='' className='h-[80px] w-[80px]' />
          <p className='text-[28px] font-[900]'>MODERN FLEET</p>
          <p className='text-[18px] font-[400]'>With a fleet of 40 state-of-the-art trucks, we meet European standards for international freight, capable of transporting a wide variety of goods.</p>
        </div>
        <div className='text-center flex flex-col items-center gap-2'>
          <Image src={'/logo/mission/time.png'} height={400} width={400} alt='' className='h-[80px] w-[80px]' />
          <p className='text-[28px] font-[900]'>ON-TIME DELIVERY</p>
          <p className='text-[18px] font-[400]'>Our commitment to punctuality stems from our well-organized internal processes and the dedication of each employee to their role in the company.</p>
        </div>
        <div className='text-center flex flex-col items-center gap-2'>
          <Image src={'/logo/mission/dedication.png'} height={400} width={400} alt='' className='h-[80px] w-[80px]' />
          <p className='text-[28px] font-[900]'>DEDICATION</p>
          <p className='text-[18px] font-[400]'>Rennman offers personalized services, focusing on our ability to adapt and stay updated with market demands, ensuring customer satisfaction is a top priority.</p>
        </div>
      </div>

    </section>
  )
}
