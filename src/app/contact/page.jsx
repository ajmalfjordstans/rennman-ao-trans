import CommonHero from '@/components/common-hero'
import ContactForm from '@/components/forms/contact-form'
import GoogleMap from '@/components/google-map'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <>
      <Image src={"/images/background/contact.svg"} height={1400} width={1400} alt='bg' className=' w-screen z-[-1] mt-[70px] lg:mt-[100px] object-cover' />
      <div className='container mx-auto rounded-[50px] p-[30px] lg:p-[100px] grid md:grid-cols-2 gap-10 translate-y-[-90px] md:translate-y-[-190px]'>
        <div>
          <p className='font-bold text-[42px] md:text-[54px]'>Get in <span className='text-custom-red'>Touch</span></p>
          <ContactForm />
        </div>
        {/* <GoogleMap /> */}
        <div className='pt-0 md:pt-[120px]'>
          <p className='text-[20px]'>We&apos;re here to assist you with all your logistics needs. Whether you have questions about our services, need a quote, or require support with your shipment, our team is ready to help.</p>
          <div className='mt-[30px] grid lg:grid-cols-2 gap-4'>
            <div className='flex gap-3 items-center'>
              <Image src={'/logo/call.svg'} height={200} width={200} alt='call' className='h-[28px] w-[28px]' />
              <div className='text-[13px]'>
                <p className='font-semibold'>PHONE</p>
                <p>+421911246563</p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <Image src={'/logo/mail.svg'} height={200} width={200} alt='call' className='h-[28px] w-[28px]' />
              <div className='text-[13px]'>
                <p className='font-semibold'>EMAIL</p>
                <p>info@rennmantransports.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
