import React from 'react'

export default function Community() {
  return (
    <div className='bg-white'>
    <div className='flex flex-col m-6 mt-4 space-y-4 md:flex md:flex-col md:items-center md:justify-center md:mx-auto md:w-[700px] md:mt-4'>
    <h2 className='flextext-lg mx-4 bold font-bold md:flex md:items-start'>Join the Swiftsell community</h2>
           <p className='flex  items-center justify-center mx-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
           <button className='flex  justify-center items-center text-white bg-[#97CC04] mx-4 border h-11 w-60 rounded-md hover:scale-125 hover:cursor-pointer transition-transform duration-200 md:h-16 md:w-60'>Join the swiftsell community 
           <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</button>
       </div>
       </div>
  )
}
