'use client'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <>
      <Image src={"/images/background/about.svg"} height={1400} width={1400} alt='bg' className='absolute w-screen z-[-1] mt-[70px] lg:mt-[100px] object-cover' />
      <div className='pt-[120px] md:pt-[180px] lg:pt-[260px] container mx-auto px-[5%] lg:px-0 relative min-h-[80vh] flex flex-col justify-around lg:flex-row'>
        <div>
          <p className='font-semibold text-[36px] md:text-[64px] lg:mt-[80px] text-[#EE2121]'>Services</p>
          <p className='text-[16px] md:text-[22px] font-[600] leading-[25px] md:leading-[34px] text-opacity-60 my-[15px] md:my-[60px] max-w-[580px] text-[#000000]'>At Rennman, we understand that efficient logistics are the backbone of any successful business. Our suite of services is designed to provide end-to-end solutions that streamline your supply chain, ensuring your goods are transported safely, managed efficiently, and delivered on time. With a commitment to innovation, reliability, and customer satisfaction, we offer tailored logistics services that meet the unique needs of your business. Whether you&apos;re looking for transport solutions, fleet management, or advanced cargo tracking, our team of experts is here to support your operations every step of the way.</p>
        </div>
        <div className='h-[300px] lg:h-[500px] w-full lg:w-[500px] bg-about bg-cover bg-center md:my-[30px] rounded-[15px]'></div>
      </div>
      <div className='container mx-auto px-[5%] lg:px-0'>
        <div>
          <div className='my-[40px]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="609"
              height="142"
              fill="none"
              viewBox="0 0 609 142"
              className='max-w-[300px] md:max-w-[609px]'
            >
              <path
                fill="#F4BA1C"
                fillOpacity="0.65"
                d="M0 0h609L502.242 142H0V0z"
              ></path>
            </svg>
            <p className='text-[32px] md:text-[64px] font-semibold leading-[74px] translate-y-[-100px] md:translate-y-[-90px] md:translate-x-[20px] lg:translate-x-[90px] w-min whitespace-nowrap'>Transport Services</p>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] translate-y-[-100px] md:translate-y-[0px]">
              <Image
                src={'/images/home/services/transport-full.png'}
                height={900}
                width={900}
                alt='transport'
                className='w-full order-1 lg:order-2'
              />
              <p className="text-[16px] md:text-[26px] font-[600] text-black text-opacity-60 order-2 lg:order-1">
                Our Transport services are designed to offer efficient and reliable solutions to ensure your goods reach their destination safely and on time. Whether you&apos;re moving small parcels or large freight, our extensive network and cutting-edge technology enable seamless logistics from start to finish. We prioritize punctuality and safety, ensuring that your shipments are handled with the utmost care.
              </p>
            </div>
          </div>

        </div>

        <div>
          <div className='flex flex-col w-full items-end mb-[40px] md:my-[40px]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="609"
              height="142"
              fill="none"
              viewBox="0 0 609 142"
              className='max-w-[320px] md:max-w-[609px]'
            >
              <path
                fill="#F4BA1C"
                fillOpacity="0.65"
                d="M609 0H0l106.758 142H609V0z"
              ></path>
            </svg>
            <p className='text-[32px] md:text-[64px] font-semibold leading-[74px] translate-y-[-100px] md:translate-y-[-90px] translate-x-[-10px] md:translate-x-[-40px] text-right'>Fleet Management</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] translate-y-[-100px] md:translate-y-[0px]">
            <Image
              src={'/images/home/services/fleet-full.png'}
              height={900}
              width={900}
              alt='transport'
              className='w-full'
            />
            <p className="text-[16px] md:text-[26px] font-[600] text-black text-opacity-60">
              Our Fleet Management services provide comprehensive oversight of your transport vehicles, ensuring they operate at peak efficiency. We handle everything from routine maintenance to advanced route planning, enabling your fleet to deliver exceptional service while minimizing costs and downtime. With our proactive maintenance schedules, GPS tracking, and real-time analytics, we help you optimize fuel efficiency, reduce wear and tear on vehicles, and ensure that your fleet is always ready to meet your business demands.
            </p>
          </div>
        </div>

        <div className='pb-[70px]'>
          <div className='my-[40px]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="609"
              height="142"
              fill="none"
              viewBox="0 0 609 142"
              className='max-w-[300px] md:max-w-[609px]'
            >
              <path
                fill="#F4BA1C"
                fillOpacity="0.65"
                d="M0 0h609L502.242 142H0V0z"
              ></path>
            </svg>
            <p className='text-[36px] md:text-[64px] font-semibold leading-[74px] translate-y-[-100px] md:translate-y-[-90px] translate-x-[20px] md:translate-x-[90px] w-min whitespace-nowrap'>Cargo Tracking</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] translate-y-[-80px] md:translate-y-[0px]">
            <Image
              src={'/images/home/services/fleet-full.png'}
              height={900}
              width={900}
              alt='transport'
              className='w-full'
            />
            <p className="text-[16px] md:text-[26px] font-[600] text-black text-opacity-60">
              Our Cargo services are equipped with advanced tracking systems that offer real-time visibility of your shipments on the road. This transparency allows you to monitor the exact location and status of your goods at any point during transit. Whether your cargo is traveling across the city or across the country, you can rely on our road transport tracking technology to provide accurate updates, ensuring peace of mind and allowing you to manage your logistics with confidence. Our system also offers automated alerts and detailed reports, giving you complete control over your supply chain.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
