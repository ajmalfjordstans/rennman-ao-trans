import Image from 'next/image'
import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className='bg-[#FFF5EE]'>
      <div className='container mx-auto px-[5%] lg:px-0 py-[70px]'>
        <p className='text-[36px] text-custom-red text-center'>WHY CHOOSE US?</p>
        <div className='max-w-[821px] w-full mx-auto mt-[60px] flex flex-col gap-10'>

          <div className='flex flex-col md:flex-row gap-5 items-between'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="none"
              viewBox="0 0 150 150"
              className='mx-auto'
            >
              <circle cx="75" cy="75" r="74.5" stroke="red"></circle>
              <mask
                id="mask0_56_249"
                style={{ maskType: "alpha" }}
                width="90"
                height="90"
                x="30"
                y="30"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M30 30H120V120H30z"></path>
              </mask>
              <g mask="url(#mask0_56_249)">
                <path
                  fill="red"
                  d="M75 93.75c5.188 0 9.61-1.828 13.266-5.484C91.922 84.609 93.75 80.187 93.75 75c0-5.188-1.828-9.61-5.484-13.266C84.609 58.078 80.187 56.25 75 56.25c-5.188 0-9.61 1.828-13.266 5.484C58.078 65.391 56.25 69.812 56.25 75c0 5.188 1.828 9.61 5.484 13.266C65.391 91.922 69.812 93.75 75 93.75zm6.188-9.938l-8.063-8.062v-12h3.75v10.5l6.938 6.938-2.626 2.624zM75 112.5c-8.688-2.188-15.86-7.172-21.516-14.953C47.828 89.766 45 81.125 45 71.625V48.75L75 37.5l30 11.25v22.875c0 9.5-2.828 18.14-8.484 25.922C90.859 105.328 83.687 110.312 75 112.5zm0-7.875c6.5-2.063 11.875-6.188 16.125-12.375 4.25-6.188 6.375-13.063 6.375-20.625V53.906L75 45.47l-22.5 8.437v17.719c0 7.563 2.125 14.438 6.375 20.625 4.25 6.188 9.625 10.312 16.125 12.375z"
                ></path>
              </g>
            </svg>
            <div className='w-full justify-center flex flex-col gap-2 max-w-[500px]'>
              <p className='text-[24px] text-[#FF0000]'>Reliability and Timeliness:</p>
              <p className='text-[17px] '>Depend on us for on-time deliveries and consistent service. Our meticulous planning and real-time tracking systems ensure your shipments arrive precisely as scheduled. We prioritize reliability to meet your deadlines and keep your supply chain running smoothly.</p>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row gap-5 items-between'>
            <div className='w-full justify-center flex flex-col gap-2 max-w-[500px]'>
              <p className='text-[24px] text-[#FF0000]'>State-of-the-Art Technology:</p>
              <p className='text-[17px] '>Leverage our cutting-edge tracking systems for real-time visibility into your shipments. Our advanced technology ensures seamless logistics management and proactive issue resolution. Stay informed with up-to-date information and streamlined operations throughout your supply chain.</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="none"
              viewBox="0 0 150 150"
              className='mx-auto'
            >
              <circle cx="75" cy="75" r="74.5" stroke="red"></circle>
              <mask
                id="mask0_56_257"
                style={{ maskType: "alpha" }}
                width="90"
                height="90"
                x="30"
                y="30"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M30 30H120V120H30z"></path>
              </mask>
              <g mask="url(#mask0_56_257)">
                <path
                  fill="red"
                  d="M52.5 116.25c-3.125 0-5.781-1.094-7.969-3.281-2.187-2.188-3.281-4.844-3.281-7.969s1.094-5.781 3.281-7.969c2.188-2.187 4.844-3.281 7.969-3.281.875 0 1.688.094 2.438.281.75.188 1.468.438 2.156.75l5.343-6.656c-1.75-1.938-2.968-4.125-3.656-6.563-.687-2.437-.843-4.874-.468-7.312l-7.594-2.531a12.18 12.18 0 01-4.032 3.75c-1.624.937-3.437 1.406-5.437 1.406-3.125 0-5.781-1.094-7.969-3.281C31.094 71.406 30 68.75 30 65.625s1.094-5.781 3.281-7.969c2.188-2.187 4.844-3.281 7.969-3.281s5.781 1.094 7.969 3.281c2.187 2.188 3.281 4.844 3.281 7.969v.75L60.094 69a17.937 17.937 0 015.015-5.719c2.094-1.562 4.454-2.562 7.079-3v-8.156c-2.438-.688-4.454-2.016-6.047-3.984-1.594-1.97-2.391-4.266-2.391-6.891 0-3.125 1.094-5.781 3.281-7.969C69.22 31.094 71.875 30 75 30s5.781 1.094 7.969 3.281c2.187 2.188 3.281 4.844 3.281 7.969 0 2.625-.813 4.922-2.438 6.89-1.624 1.97-3.624 3.297-6 3.985v8.156c2.626.438 4.985 1.438 7.079 3A17.937 17.937 0 0189.906 69l7.594-2.625v-.75c0-3.125 1.094-5.781 3.281-7.969 2.188-2.187 4.844-3.281 7.969-3.281s5.781 1.094 7.969 3.281C118.906 59.844 120 62.5 120 65.625s-1.094 5.781-3.281 7.969c-2.188 2.187-4.844 3.281-7.969 3.281-2 0-3.828-.469-5.484-1.406-1.657-.938-2.985-2.188-3.985-3.75l-7.594 2.531c.376 2.438.22 4.86-.468 7.266-.688 2.406-1.906 4.609-3.656 6.609l5.343 6.563a10.241 10.241 0 012.156-.704c.75-.156 1.563-.234 2.438-.234 3.125 0 5.781 1.094 7.969 3.281 2.187 2.188 3.281 4.844 3.281 7.969s-1.094 5.781-3.281 7.969c-2.188 2.187-4.844 3.281-7.969 3.281s-5.781-1.094-7.969-3.281c-2.187-2.188-3.281-4.844-3.281-7.969 0-1.25.203-2.453.61-3.609a11.99 11.99 0 011.64-3.141l-5.344-6.656c-2.562 1.437-5.297 2.156-8.203 2.156-2.906 0-5.64-.719-8.203-2.156L61.5 98.25a11.99 11.99 0 011.64 3.141c.407 1.156.61 2.359.61 3.609 0 3.125-1.094 5.781-3.281 7.969-2.188 2.187-4.844 3.281-7.969 3.281zM41.25 69.375c1.063 0 1.953-.36 2.672-1.078.719-.719 1.078-1.61 1.078-2.672 0-1.063-.36-1.953-1.078-2.672-.719-.719-1.61-1.078-2.672-1.078-1.063 0-1.953.36-2.672 1.078-.719.719-1.078 1.61-1.078 2.672 0 1.063.36 1.953 1.078 2.672.719.719 1.61 1.078 2.672 1.078zM52.5 108.75c1.063 0 1.953-.359 2.672-1.078.719-.719 1.078-1.61 1.078-2.672s-.36-1.953-1.078-2.672c-.719-.719-1.61-1.078-2.672-1.078-1.063 0-1.953.359-2.672 1.078-.719.719-1.078 1.61-1.078 2.672s.36 1.953 1.078 2.672c.719.719 1.61 1.078 2.672 1.078zM75 45c1.063 0 1.953-.36 2.672-1.078.719-.719 1.078-1.61 1.078-2.672 0-1.063-.36-1.953-1.078-2.672-.719-.719-1.61-1.078-2.672-1.078-1.063 0-1.953.36-2.672 1.078-.719.719-1.078 1.61-1.078 2.672 0 1.063.36 1.953 1.078 2.672C73.047 44.64 73.938 45 75 45zm0 41.25c2.625 0 4.844-.906 6.656-2.719 1.813-1.812 2.719-4.031 2.719-6.656s-.906-4.844-2.719-6.656C79.844 68.406 77.625 67.5 75 67.5s-4.844.906-6.656 2.719c-1.813 1.812-2.719 4.031-2.719 6.656s.906 4.844 2.719 6.656c1.812 1.813 4.031 2.719 6.656 2.719zm22.5 22.5c1.063 0 1.953-.359 2.672-1.078.719-.719 1.078-1.61 1.078-2.672s-.359-1.953-1.078-2.672c-.719-.719-1.61-1.078-2.672-1.078-1.063 0-1.953.359-2.672 1.078-.719.719-1.078 1.61-1.078 2.672s.36 1.953 1.078 2.672c.719.719 1.61 1.078 2.672 1.078zm11.25-39.375c1.062 0 1.953-.36 2.672-1.078.719-.719 1.078-1.61 1.078-2.672 0-1.063-.359-1.953-1.078-2.672-.719-.719-1.61-1.078-2.672-1.078s-1.953.36-2.672 1.078c-.719.719-1.078 1.61-1.078 2.672 0 1.063.359 1.953 1.078 2.672.719.719 1.61 1.078 2.672 1.078z"
                ></path>
              </g>
            </svg>
          </div>

          <div className='flex flex-col md:flex-row gap-5 items-between'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="none"
              viewBox="0 0 150 150"
              className='mx-auto'
            >
              <circle cx="75" cy="75" r="74.5" stroke="red"></circle>
              <mask
                id="mask0_56_265"
                style={{ maskType: "alpha" }}
                width="90"
                height="90"
                x="30"
                y="30"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M30 30H120V120H30z"></path>
              </mask>
              <g mask="url(#mask0_56_265)">
                <path
                  fill="red"
                  d="M30 97.5v-5.906c0-2.688 1.375-4.875 4.125-6.563C36.875 83.344 40.5 82.5 45 82.5c.813 0 1.594.016 2.344.047.75.031 1.468.11 2.156.234a15.609 15.609 0 00-1.969 4.125 15.374 15.374 0 00-.656 4.5V97.5H30zm22.5 0v-6.094c0-2 .547-3.828 1.64-5.484 1.094-1.656 2.641-3.11 4.641-4.36 2-1.25 4.39-2.187 7.172-2.812 2.781-.625 5.797-.938 9.047-.938 3.313 0 6.36.313 9.14.938 2.782.625 5.172 1.563 7.172 2.813 2 1.25 3.532 2.703 4.594 4.359 1.063 1.656 1.594 3.484 1.594 5.484V97.5h-45zm50.625 0v-6.094c0-1.625-.203-3.156-.609-4.594a14.718 14.718 0 00-1.828-4.03 15.53 15.53 0 012.109-.235A50.653 50.653 0 01105 82.5c4.5 0 8.125.828 10.875 2.484 2.75 1.657 4.125 3.86 4.125 6.61V97.5h-16.875zM60.469 90h29.156c-.625-1.25-2.36-2.344-5.203-3.281-2.844-.938-5.984-1.406-9.422-1.406-3.438 0-6.578.468-9.422 1.406-2.844.937-4.547 2.031-5.11 3.281zM45 78.75c-2.063 0-3.828-.734-5.297-2.203-1.469-1.469-2.203-3.234-2.203-5.297 0-2.125.734-3.906 2.203-5.344C41.172 64.47 42.937 63.75 45 63.75c2.125 0 3.906.719 5.344 2.156 1.437 1.438 2.156 3.219 2.156 5.344 0 2.063-.719 3.828-2.156 5.297-1.438 1.469-3.219 2.203-5.344 2.203zm60 0c-2.062 0-3.828-.734-5.297-2.203-1.469-1.469-2.203-3.234-2.203-5.297 0-2.125.734-3.906 2.203-5.344 1.469-1.437 3.235-2.156 5.297-2.156 2.125 0 3.906.719 5.344 2.156 1.437 1.438 2.156 3.219 2.156 5.344 0 2.063-.719 3.828-2.156 5.297-1.438 1.469-3.219 2.203-5.344 2.203zM75 75c-3.125 0-5.781-1.094-7.969-3.281-2.187-2.188-3.281-4.844-3.281-7.969 0-3.188 1.094-5.86 3.281-8.016C69.22 53.578 71.875 52.5 75 52.5c3.188 0 5.86 1.078 8.016 3.234 2.156 2.157 3.234 4.828 3.234 8.016 0 3.125-1.078 5.781-3.234 7.969C80.859 73.906 78.187 75 75 75zm0-7.5c1.063 0 1.953-.36 2.672-1.078.719-.719 1.078-1.61 1.078-2.672 0-1.063-.36-1.953-1.078-2.672C76.953 60.36 76.062 60 75 60c-1.063 0-1.953.36-2.672 1.078-.719.719-1.078 1.61-1.078 2.672 0 1.063.36 1.953 1.078 2.672.719.719 1.61 1.078 2.672 1.078z"
                ></path>
              </g>
            </svg>
            <div className='w-full justify-center flex flex-col gap-2 max-w-[500px]'>
              <p className='text-[24px] text-[#FF0000]'>Experienced Team:</p>
              <p className='text-[17px] '>Benefit from our team of seasoned logistics professionals with extensive industry expertise. We are dedicated to optimizing your supply chain and ensuring smooth, efficient operations. Our experience and knowledge drive exceptional service and innovative solutions tailored to your needs.</p>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row gap-5 items-between'>
            <div className='w-full justify-center flex flex-col gap-2 max-w-[500px]'>
              <p className='text-[24px] text-[#FF0000]'>Flexible Solutions:</p>
              <p className='text-[17px] '>Enjoy tailored logistics solutions designed to meet your unique needs. Whether you require standard, expedited, or specialized transport, we offer flexible options to fit your requirements. Our adaptive approach ensures that we can handle any logistical challenge efficiently and effectively.</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="none"
              viewBox="0 0 150 150"
              className='mx-auto'
            >
              <circle cx="75" cy="75" r="74.5" stroke="red"></circle>
              <mask
                id="mask0_57_15"
                style={{ maskType: "alpha" }}
                width="90"
                height="90"
                x="30"
                y="30"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M30 30H120V120H30z"></path>
              </mask>
              <g mask="url(#mask0_57_15)">
                <path
                  fill="red"
                  d="M62.625 92.625l-5.25-5.25L73.5 71.25H60v-7.5h26.25V90h-7.5V76.5L62.625 92.625zM101.25 75V48.75H75v-7.5h33.75V75h-7.5zm-52.5 33.75c-2.063 0-3.828-.734-5.297-2.203-1.469-1.469-2.203-3.235-2.203-5.297v-60h7.5v60h60v7.5h-60z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
