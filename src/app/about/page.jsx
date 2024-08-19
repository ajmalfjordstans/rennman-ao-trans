'use client'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <>
      <Image src={"/images/background/about.svg"} height={1400} width={1400} alt='bg' className='absolute w-screen z-[-1] mt-[70px] lg:mt-[100px] object-cover' />
      <div className='pt-[120px] md:pt-[180px] lg:pt-[260px] container mx-auto px-[5%] lg:px-0 relative min-h-[80vh] flex flex-col justify-around lg:flex-row'>
        <div>
          <p className='font-semibold text-[36px] md:text-[64px] lg:mt-[80px] text-[#EE2121]'>About Us</p>
          <p className='text-[16px] md:text-[22px] font-[600] leading-[25px] md:leading-[34px] text-opacity-60 my-[15px] md:my-[60px] max-w-[580px] text-[#000000]'>Rennman Group was founded in 2023 by a team of enterprising entrepreneurs, led by two ambitious friends Mr. Rejin Rasheed and Mahesh O.H. The Group has remained constant, The HQ (headquarters) of Rennman Group located in Slovakia.</p>
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
            <p className='text-[36px] md:text-[64px] font-semibold leading-[74px] translate-y-[-100px] md:translate-y-[-90px] translate-x-[20px] md:translate-x-[90px] w-min whitespace-nowrap'>Our Mission</p>
          </div>
          <p className="text-[16px] md:text-[26px] font-[600] text-black text-opacity-60 max-w-[960px] md:ml-[60px] translate-y-[-100px] md:translate-y-[-40px]">
            Our mission is to support your business with{" "}
            <span className="text-black">dependable logistics services</span> that
            enhance your{" "}
            <span className="text-black">supply chain operations</span>. We are
            dedicated to achieving <span className="text-black">excellence</span> in
            every aspect of our service, ensuring your cargo reaches its destination{" "}
            <span className="text-black">safely</span> and{" "}
            <span className="text-black">on time</span>.
          </p>
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
            <p className='text-[36px] md:text-[64px] font-semibold leading-[74px] translate-y-[-100px] md:translate-y-[-90px] translate-x-[-10px] md:translate-x-[-40px] text-right'>What We Offer</p>
          </div>
          <p className="text-[16px] md:text-[26px] font-[600] text-black text-opacity-60 max-w-[960px] md:ml-[60px] translate-y-[-100px] md:translate-y-[-40px]">
            We offer comprehensive logistics solutions, ensuring{" "}
            <span className="text-black">safe, timely,{" "}</span>
            and{" "}
            <span className="text-black">efficient{" "}</span>
            transportation of your goods. Our services are tailored to meet your unique needs, with a focus on{" "}
            <span className="text-black">reliability{" "}</span>
            and{" "}
            <span className="text-black">precision.{" "}</span>
          </p>

          <div className='h-[1px] w-[80%] bg-[#D9D9D9] mx-auto mb-[40px]'></div>

          <div className='grid grid-cols-1 md:grid-cols-2 text-[#101010] gap-[30px] md:gap-[60px] mt-[15px] mb-[60px] lg:px-[60px]'>
            <div>
              <p className='text-[18px] md:text-[26px] leading-[34px] md:leading-[24px] font-[600]'>Reliable Logistics Services</p>
              <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-opacity-60 font-[500] mt-[10px] max-w-[460px]'>We provide a range of logistics services tailored to handle your goods with care and precision. Our goal is to ensure efficient and secure transportation, meeting your specific requirements.</p>
            </div>
            <div>
              <p className='text-[18px] md:text-[26px] leading-[34px] md:leading-[24px] font-[600]'>Timely Deliveries</p>
              <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-opacity-60 font-[500] mt-[10px] max-w-[460px]'>We prioritize punctuality by employing effective planning and tracking systems, aiming to minimize delays and keep your shipments on schedule.</p>
            </div>
            <div>
              <p className='text-[18px] md:text-[26px] leading-[34px] md:leading-[24px] font-[600]'>Customer-Centric Service</p>
              <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-opacity-60 font-[500] mt-[10px] max-w-[460px]'>We are dedicated to understanding and addressing your unique needs. Our team works closely with you to offer personalized solutions and responsive support throughout the logistics process.</p>
            </div>
            <div>
              <p className='text-[18px] md:text-[26px] leading-[34px] md:leading-[24px] font-[600]'>Experienced Team </p>
              <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-opacity-60 font-[500] mt-[10px] max-w-[460px]'>Our professionals bring extensive experience and expertise to every job, ensuring your cargo is handled with the utmost attention to detail and safety.</p>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-[40px]'>
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
            <p className='text-[36px] md:text-[64px] font-semibold leading-[74px] translate-y-[-100px] md:translate-y-[-90px] translate-x-[20px] md:translate-x-[90px] w-min whitespace-nowrap'>Our Values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:px-[60px] gap-[45px] md:gap-[30px] mb-[60px] translate-y-[-80px] md:translate-y-[0px]">
            <div>
              <div className='p-[20px]'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="68"
                  fill="none"
                  viewBox="0 0 56 68"
                  className='mx-auto md:mx-0'
                >
                  <path
                    stroke="#000"
                    strokeWidth="2.25"
                    d="M27.999 44.956c6.115 0 11.072-4.957 11.072-11.072 0-6.115-4.957-11.073-11.072-11.073-6.115 0-11.073 4.958-11.073 11.073S21.884 44.956 28 44.956z"
                  ></path>
                  <path
                    fill="#000"
                    d="M34.947 44.389a2.769 2.769 0 013.915-3.915l9.344 9.345a2.768 2.768 0 01-3.915 3.914l-9.344-9.344z"
                  ></path>
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M29.195.84A2.768 2.768 0 0027.28.834L2.135 10.026a2.769 2.769 0 00-1.818 2.6v21.142c0 .117.008.233.023.349l2.746-.349-2.746.349v.007l.002.014.007.053a75.17 75.17 0 00.501 3.198c.322 1.798.815 4.163 1.469 6.029 1.33 3.79 2.486 5.902 4.71 9.15 2.509 3.662 4.28 5.86 7.99 8.682 1.658 1.261 3.586 2.513 6.29 3.754 1.114.51 2.596 1.064 3.74 1.471.677.241 1.358.476 2.04.703l.034.011.009.003.002.001h.001a2.766 2.766 0 001.709.006h.002l.004-.002.012-.004.046-.014.163-.054c.86-.286 1.715-.587 2.564-.903 1.528-.57 3.534-1.378 5.083-2.234 1.704-.942 2.515-1.453 4.242-2.745.573-.429 1.153-.918 1.725-1.437l-3.92-3.92c-.36.324-.735.633-1.122.925-1.516 1.134-2.112 1.508-3.602 2.33-1.174.65-2.86 1.34-4.34 1.894a71.32 71.32 0 01-1.7.609c-.365-.126-.73-.253-1.093-.383-1.127-.402-2.413-.887-3.292-1.29-2.289-1.05-3.87-2.08-5.245-3.127-3.08-2.344-4.466-4.035-6.774-7.405-1.999-2.918-2.912-4.598-4.055-7.855-.5-1.424-.93-3.425-1.242-5.17a71.845 71.845 0 01-.44-2.779l-.006-.049V14.561L28.22 6.384l21.923 8.165V33.56l-.005.032c-.15.963-.32 1.922-.507 2.878-.356 1.809-.842 3.919-1.401 5.472-.054.151-.112.307-.174.466l4.213 4.214c.44-.954.854-1.925 1.172-2.807.704-1.963 1.255-4.41 1.622-6.277.202-1.03.384-2.064.547-3.1l.03-.197.008-.054.002-.015v-.006c.02-.132.03-.266.03-.399V12.626a2.768 2.768 0 00-1.803-2.594L29.195.84z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className='text-[26px] font-[600] leading-[36px]'>Integrity</p>
              <p className='text-black text-opacity-80 text-[18px] mt-[15px]'>We operate with transparency and honesty, building trust through dependable service and clear communication.</p>
            </div>
            <div>
              <div className='p-[20px]'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                  className='mx-auto md:mx-0'
                >
                  <g clipPath="url(#clip0_123_92)">
                    <path
                      fill="#000"
                      d="M60.808 7.427H19.192L0 29.031l40 43.541 40-43.541L60.808 7.427zM27.685 27.14l-5.747-16.922h36.497l-5.858 16.922H27.685zm23.927 2.789l-11.6 33.508-11.38-33.508h22.98zm-26.873-2.79H5.412L19.394 11.4l5.346 15.739zm.948 2.79l12.36 36.396L4.613 29.928h21.075zm28.876 0h20.825L41.972 66.303l12.591-36.375zm.966-2.79L60.873 11.7 74.588 27.14h-19.06z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_123_92">
                      <path fill="#fff" d="M0 0H80V80H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className='text-[26px] font-[600] leading-[36px]'>Excellence</p>
              <p className='text-black text-opacity-80 text-[18px] mt-[15px]'>We strive for excellence in every aspect of our work, from customer interactions to timely deliveries.</p>
            </div>
            <div>
              <div className='p-[20px]'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                  className='mx-auto md:mx-0'
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    d="M64.79 43.728L58.334 40l6.458-3.728a9.166 9.166 0 10-9.167-15.877l-6.457 3.728v-7.456a9.166 9.166 0 10-18.334 0v7.456l-6.457-3.728a9.167 9.167 0 10-9.167 15.877L21.667 40l-6.458 3.728a9.167 9.167 0 009.167 15.877l6.457-3.728v7.456a9.166 9.166 0 1018.334 0v-7.456l6.457 3.728a9.167 9.167 0 109.167-15.877zM30.834 24.123L58.334 40M30.834 55.877L58.334 40"
                  ></path>
                </svg>
              </div>
              <p className='text-[26px] font-[600] leading-[36px]'>Safety</p>
              <p className='text-black text-opacity-80 text-[18px] mt-[15px]'>We adhere to rigorous safety standards to ensure the secure handling of your cargo.</p>
            </div>
          </div>
        </div>

        <div className='text-center mt-[30px] mb-[100px]'>
          <p className='text-[36px] md:text-[64px] font-semibold leading-[34px] md:leading-[74px] text-[#EE2121]'>Partner with Us</p>
          <p className='max-w-[692px] text-[15px] md:text-[18px] leading-[24px] md:leading-[30px] mx-auto mt-[20px] md:my-[50px]'>Choose Rennman for reliable and efficient logistics solutions. We are here to support your business with professionalism and dedication</p>
        </div>
      </div>
    </>
  )
}
