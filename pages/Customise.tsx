import React from 'react';
import Image from 'next/image';

export default function Customise() {
  return (
    <div>
      <p className='text-center bold text-xs py-4'>Bring your business online</p>
      <div className=' md:flex flex-col md:justify-center md:items-center'>
        <h2 className='text-center bold font-bold'>Build and Customize your store!</h2>
        <div className='p-4 text-center text-sm md:w-[500px] md:items-center py-4'>Create a professional business website in 60 seconds and start selling to anyone on the internet, no coding expertise required. Select from customisable templates created by world-class designers.</div>
      </div>
      <div className='flex justify-center items-end md:hidden'>
        <Image src={require('../public/assets/frame2.svg')} alt="frame"/>
      </div>
      <div className='hidden md:inline-flex'>
        <Image src={require('../public/assets/frame3.svg')} alt="frame1"/>
      </div>
    </div>
  )
}
