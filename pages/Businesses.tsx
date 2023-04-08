import React from 'react'
import Image from 'next/image'

export default function () {
  return (
    <div>
    <div>

    <h1 className='text-center font-[900] text-1xl md:text-2xl bold m-10 mx-4'>Hear from business owners who chose Swiftsell</h1>

<p className='text-center text-xs md:text-sm m-2'>This is what business owners have to say about us</p>
        </div>
    <div className='flex justify-center pt-4 item-center  md:hidden'>
            <Image src={require('../public/assets/lady.svg')} alt="lady"/>
          
        </div>
        <div className='flex justify-center item-center  md:hidden'>
            <Image src={require('../public/assets/quote.svg')} alt="quote"/> 
        </div>
        <div className='hidden md:grid grid-cols-2 sm:grid sm:grid-cols-2 mx-10'>
        {/* <Image src={require('../public/assets/quote2.svg')} alt="quote2" className='object-scale-down h-96'/> */}
        <div className='md:bg-[#1D2700;] flex md:flex-col justify-center items-center text-white space-y-10'>
            <Image src={require('../public/assets/qu.svg')} alt="q"/>
            <p className='text-white mx-auto p-6 items-center justify-center w-96'>Swiftsell helped me take something that I put my heart and soul into and share it with people that need it and find it useful.</p>
            <h2>Abisola Adeboye</h2>
            <Image src={require('../public/assets/dots.svg')} alt="dots"/>
        </div>
        <Image src={require('../public/assets/lady2.svg')} alt="lady2" className='hidden md:inline-flex'/>
            </div>
    </div>
  
  )
}
