import React from 'react'

export default function Page() {
  return (
    <>
      <div className='pt-[100px] container mx-auto px-[5%] lg:px-0 relative min-h-[80vh] flex flex-col lg:flex-row'>
        <div>
          <p className='font-[900] text-[52px] lg:mt-[80px]'>About Us</p>
          <p className='text-[18px] font-[400] my-[30px] max-w-[800px]'>Rennman Group was founded in 2023 by a team of enterprising entrepreneurs, led by two ambitious friends Mr. Rejin Rasheed and Mahesh O.H. The Group has remained constant, The HQ (headquarters) of Rennman Group located in Slovakia.</p>
        </div>
        <div className='h-[300px] lg:h-[500px] w-full lg:w-[500px] bg-about bg-cover bg-center my-[30px]'></div>
      </div>
    </>
  )
}
