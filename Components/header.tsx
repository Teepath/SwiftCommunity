import React from 'react';
import Image from 'next/image';



export default function Header() {
  return (
    <div className='flex justify-between h-25 items-center pt-6 max-w-8xl mx-4 xl:mx-auto'>
          {/* Logo */}
          <div className='flex justify-content  md:flex-col items-center  md:h-[70px] md:w-[100px] hover:cursor-pointer hover:scale-125 transition-transform duration-200'>
<Image src={require('../public/assets/logo.svg')} alt="logo" className="md:h-8 w-8"/>
<Image src={require('../public/assets/company.svg')} alt="name"  className="md:h-20 w-20"/>

          </div>
          <div className='hidden md:inline-flex space-x-4 flex-1 items-center justify-center'> 
            <ul className='flex justify-between  space-x-4 text-sm font-semibold'>
              <li className='cursor-pointer mx-4'>Company</li>
              <li className='cursor-pointer mx-4 '>Pricing</li>
              <li className='flex space-x-[10px] cursor-pointer mx-4'>Support <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

                </span></li>
            </ul>
          </div>


          <div className='hidden md:inline-flex h-12 max-w-auto justify-between p-2  items-center hover:cursor-pointer'> 
            
             <button className='text-sm m-4 hover:cursor-pointer hover:scale-125 transition-transform duration-200'>Login</button> 
             <button className='bg-[#97CC04]  h-10 mx-4  rounded-md text-white hover:scale-125 transition-transform duration-200 md:p-2 items-center'>Start Free Trial</button>
            
          </div>
<div>
<svg  xmlns="http://www.w3.org/2000/svg" fill="#A2CF13" viewBox="0 0 24 24" strokeWidth={0.35} stroke="currentColor" className="w-8 h-10 hover:cursor-pointer hover:scale-125 transition-transform duration-200 ease-out  md:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>



        </div>
  )
}
