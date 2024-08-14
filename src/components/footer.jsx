import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-white'>
      <div className=' bg-[#EE2121] text-white'>
        <div className='container mx-auto px-[5%] lg:px-0 pt-[80px] pb-[80px]'>
          {/* <div className='h-[1px] w-full bg-[#FFFFFF] my-[60px]'></div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[16px] gap-[15px]">
            <div>
              <p className='font-bold text-[18px] leading-[28px]'>Slovakia</p>
              <div className='mt-[18px] font-[400] flex flex-col gap-2'>
                <p className=''>Rennman International S.R.O,</p>
                <p className=''>Velka Okruzna 17,</p>
                <p className=''>01001, Zilina,</p>
                <p className=''>Slovakia</p>
                <p className=''>info@rennmangroup.com</p>
              </div>
            </div>
            <div>
              <p className='font-bold text-[18px] leading-[28px]'>Quick Link</p>
              <div className='mt-[18px] font-[400] flex flex-col gap-2'>
                <p className=''>Home</p>
                <Link href={'/services'}>
                  <p className=''>Services</p>
                </Link>
                <Link href={'/about'}>
                  <p className=''>About</p>
                </Link>
                <Link href={'/contact'}>
                  <p className=''>Contact</p>
                </Link>
              </div>
            </div>
            <div>
              <p className='font-bold text-[18px] leading-[28px]'>Terms of Use</p>
              <div className='mt-[18px] font-[400] flex flex-col gap-2'>
                <p className=''>Terms and Conditions</p>
                <p className=''>Cookie Policy</p>
                <p className=''>Refund Policy</p>
                <p className=''>Cancellation Policy</p>
              </div>
            </div>
            <div>
              {/* <p className='font-bold text-[18px] leading-[28px]'>Payment Channels</p>
              <div className='mt-[18px] font-[400] flex gap-2'>
                <Image src={'/logo/visa.svg'} height={300} width={300} alt='logo' className='w-[50px] h-[34px]' />
                <Image src={'/logo/master-card.svg'} height={300} width={300} alt='logo' className='w-[50px] h-[34px]' />
                <Image src={'/logo/american-express.svg'} height={300} width={300} alt='logo' className='w-[50px] h-[34px]' />
              </div> */}
              <p className='font-bold text-[18px] leading-[28px] mt-[20px]'>Follow Us</p>
              <div className='mt-[18px] font-[400] flex gap-4'>
                <Image src={'/logo/facebook.svg'} height={300} width={300} alt='logo' className='w-[25px] h-[25px]' />
                <Image src={'/logo/instagram.svg'} height={300} width={300} alt='logo' className='w-[25px] h-[25px]' />
                <Image src={'/logo/linkedin.svg'} height={300} width={300} alt='logo' className='w-[25px] h-[25px]' />
              </div>
            </div>
          </div>
          <p className='text-center mt-7'>2022 All rights reserved | Rennman International S.R.O</p>
        </div>
      </div>
    </div>
  )
}
