import Image from 'next/image'
import React from 'react'

export default function HomeServices() {
  return (
    <div>
      <div className='container mx-auto px-[5%] lg:px-0 py-[70px] min-h-[100vh] flex flex-col justify-center'>
        <p className='text-[48px] text-custom-red text-center font-semibold'>OUR SERVICES</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] gap-10 max-w-[1023px] mx-auto'>
          {/* First card */}
          <div className='h-[439px] rounded-[10px] flex-col overflow-hidden shadow-lg'>
            <div className='h-[227px] w-full relative'>
              <Image src={"/images/home/services/transport.png"} height={700} width={700} className='h-full w-full object-cover object-bottom' />
              <div class='bg-[#FF0000] h-[80px] w-[80px] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 50 50"
                >
                  <mask
                    id="mask0_86_100"
                    style={{ maskType: "alpha" }}
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#D9D9D9" d="M0 0H50V50H0z"></path>
                  </mask>
                  <g mask="url(#mask0_86_100)">
                    <path
                      fill="#fff"
                      d="M12.084 40.333c-1.667 0-3.084-.583-4.25-1.75-1.167-1.166-1.75-2.583-1.75-4.25h-4v-22c0-1.1.391-2.041 1.175-2.825.783-.783 1.725-1.175 2.825-1.175h28v8h6l6 8v10h-4c0 1.667-.584 3.084-1.75 4.25-1.167 1.167-2.584 1.75-4.25 1.75-1.667 0-3.084-.583-4.25-1.75-1.167-1.166-1.75-2.583-1.75-4.25h-12c0 1.667-.584 3.084-1.75 4.25-1.167 1.167-2.584 1.75-4.25 1.75zm0-4c.566 0 1.041-.191 1.425-.575.383-.383.575-.858.575-1.425 0-.566-.192-1.041-.575-1.425-.384-.383-.859-.575-1.425-.575-.567 0-1.042.192-1.425.575-.384.384-.575.859-.575 1.425 0 .567.191 1.042.575 1.425.383.384.858.575 1.425.575zm-6-6h1.6a6.918 6.918 0 011.95-1.45c.733-.366 1.55-.55 2.45-.55.9 0 1.716.184 2.45.55a6.92 6.92 0 011.95 1.45h13.6v-18h-24v18zm30 6c.566 0 1.041-.191 1.424-.575.384-.383.575-.858.575-1.425 0-.566-.191-1.041-.575-1.425-.383-.383-.858-.575-1.425-.575-.566 0-1.041.192-1.425.575-.383.384-.575.859-.575 1.425 0 .567.192 1.042.575 1.425.384.384.859.575 1.425.575zm-2-10h8.5l-4.5-6h-4v6z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className='px-[20px] mt-[30px] max-w-[400px] mx-auto'>
              <p className='text-center text-[24px] font-semibold'>Transport</p>
              <p className='mt-[20px] text-center leading-loose'>Efficient and reliable transport solutions to keep your goods moving smoothly and on time.</p>
            </div>
          </div>

          {/* Second card */}
          <div className='h-[439px] rounded-[10px] flex-col overflow-hidden shadow-lg'>
            <div className='h-[227px] w-full relative'>
              <Image src={"/images/home/services/fleet.png"} height={700} width={700} className='h-full w-full object-cover object-bottom' />
              <div class='bg-[#FF0000] h-[80px] w-[80px] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 50 50"
                >
                  <mask
                    id="mask0_86_70"
                    style={{ maskType: "alpha" }}
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#D9D9D9" d="M0 0H50V50H0z"></path>
                  </mask>
                  <g mask="url(#mask0_86_70)">
                    <path
                      fill="#fff"
                      d="M6.25 20.833v-12.5h4.167v4.896A18.19 18.19 0 0116.9 8.073 18.606 18.606 0 0125 6.25c5.208 0 9.635 1.823 13.281 5.469C41.927 15.365 43.75 19.792 43.75 25h-4.167c0-4.063-1.415-7.509-4.244-10.338-2.83-2.83-6.276-4.245-10.339-4.245-2.396 0-4.635.555-6.719 1.666-2.083 1.111-3.837 2.64-5.26 4.584h5.729v4.166H6.25zm.104 6.25h4.271c.417 3.23 1.745 5.964 3.984 8.203 2.24 2.24 4.922 3.603 8.047 4.089l2.5 4.375c-4.791 0-8.993-1.589-12.604-4.766-3.611-3.177-5.677-7.144-6.198-11.9zm21.459 3.646l-4.896-4.896v-11.25h4.166v9.584L30 27.083l-2.188 3.646zM37.447 50l-.625-3.125a14.747 14.747 0 01-1.172-.547 9.066 9.066 0 01-1.12-.703l-3.02.938-2.084-3.542 2.396-2.084a8.9 8.9 0 010-2.708l-2.396-2.083 2.083-3.542 3.021.938a9.08 9.08 0 011.12-.703c.365-.191.755-.374 1.172-.547l.625-3.125h4.167l.625 3.125a9.432 9.432 0 012.292 1.354l3.02-1.042 2.083 3.646-2.395 2.083c.069.452.104.886.104 1.302 0 .417-.035.851-.104 1.303l2.395 2.083-2.083 3.541-3.02-.937a9.058 9.058 0 01-1.12.703c-.365.191-.756.373-1.172.547L41.615 50h-4.167zm2.083-6.25c1.146 0 2.127-.408 2.943-1.224.816-.816 1.224-1.797 1.224-2.943 0-1.145-.408-2.126-1.224-2.942-.816-.816-1.797-1.224-2.943-1.224-1.146 0-2.127.408-2.942 1.224-.816.816-1.224 1.797-1.224 2.942 0 1.146.408 2.127 1.224 2.943.816.816 1.796 1.224 2.942 1.224z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className='px-[20px] mt-[30px] max-w-[400px] mx-auto'>
              <p className='text-center text-[24px] font-semibold'>Fleet Management</p>
              <p className='mt-[20px] text-center leading-loose'>Ensuring optimal vehicle maintenance, route planning, and operational efficiency.</p>
            </div>
          </div>

          {/* Third card */}
          <div className='h-[439px] rounded-[10px] flex-col overflow-hidden shadow-lg'>
            <div className='h-[227px] w-full relative'>
              <Image src={"/images/home/services/transport.png"} height={700} width={700} className='h-full w-full object-cover object-bottom' />
              <div class='bg-[#FF0000] h-[80px] w-[80px] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 50 50"
                >
                  <mask
                    id="mask0_86_94"
                    style={{ maskType: "alpha" }}
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#D9D9D9" d="M0 0H50V50H0z"></path>
                  </mask>
                  <g mask="url(#mask0_86_94)">
                    <path
                      fill="#fff"
                      d="M22.916 47.917V43.75c-4.34-.486-8.064-2.283-11.172-5.39-3.107-3.108-4.904-6.832-5.39-11.172H2.187V23.02h4.167c.486-4.34 2.283-8.064 5.39-11.172 3.108-3.107 6.832-4.904 11.172-5.39V2.292h4.167v4.167c4.34.486 8.064 2.283 11.172 5.39 3.107 3.108 4.904 6.832 5.39 11.172h4.167v4.167h-4.167c-.486 4.34-2.283 8.064-5.39 11.172-3.108 3.107-6.832 4.904-11.172 5.39v4.167h-4.167zM25 39.687c4.027 0 7.465-1.423 10.312-4.27 2.847-2.847 4.27-6.285 4.27-10.313 0-4.027-1.423-7.465-4.27-10.312C32.465 11.945 29.027 10.52 25 10.52c-4.028 0-7.466 1.424-10.313 4.27-2.847 2.848-4.27 6.286-4.27 10.313 0 4.028 1.423 7.466 4.27 10.313 2.847 2.847 6.285 4.27 10.313 4.27z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className='px-[20px] mt-[30px] max-w-[400px] mx-auto'>
              <p className='text-center text-[24px] font-semibold'>Tracking</p>
              <p className='mt-[20px] text-center leading-loose'>Advanced tracking systems providing real-time shipment visibility for transparency.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
