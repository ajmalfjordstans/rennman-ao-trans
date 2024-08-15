import Image from 'next/image'
import React from 'react'

export default function HomeAbout() {
  return (
    <div className='bg-[#FFF5EE] min-h-[100vh] flex items-center'>
      <div className='container mx-auto px-[5%] lg:px-0 py-[70px]'>
        <div className='flex flex-col lg:flex-row items-center gap-10 flex-nowrap'>
          <div className='w-full lg:w-[410px] h-[280px] md:h-[352px] rounded-[10px] overflow-hidden shadow-lg'>
            <Image src={"/images/home/trailer.jpg"} height={600} width={600} alt='trailer' className='h-full w-full object-cover' />
          </div>
          <div className='text-[17px] flex flex-col gap-4 w-full max-w-[692px] leading-[25px]'>
            <p>Welcome to Rennman – Your Premier Partner in Logistics Solutions
              At Rennman, we understand that in the fast-paced world of business, efficiency and reliability are paramount. As a leading provider of comprehensive logistics solutions, we are dedicated to ensuring that your goods move seamlessly from point A to point B, with precision and care.
            </p>
            <p>
              Our team of logistics experts combines industry knowledge with innovative technology to deliver tailored solutions that meet your unique needs. Whether you require freight forwarding, supply chain management, warehousing, or last-mile delivery, we offer a full spectrum of services designed to optimize your operations and enhance your competitive edge.
            </p>
            <p>
              Experience the difference with Rennman – where your logistics challenges become opportunities, and your goals are our top priority. Explore our services.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
