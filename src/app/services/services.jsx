import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <section className='container mx-auto px-[5%] lg:px-0 py-[80px]'>
      <p className='font-[900] text-[52px]'>Our Services</p>
      <div className='text-center flex flex-col items-center gap-2'>
        <p className='text-[28px] font-[900] uppercase mt-[30px]'>Transport</p>
        <ul className='list-disc text-[18px] font-[400] text-left mt-[20px]'>
          <li>Full transport loads</li>
          <li>Partial transport loads</li>
        </ul>
      </div>

    </section>
  )
}
