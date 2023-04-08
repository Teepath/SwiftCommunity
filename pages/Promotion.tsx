import React from 'react'
import Image from 'next/image'

function Promotion() {
  return (
    <div className='transparent md:mt-10'>
        <div className='flex flex-col relative md:grid grid-cols-2 sm:grid sm:grid-cols-2  mx-w-5xl mx-4'>
        <div className='flex justify-center pt-4 item-center  md:hidden'>
            <Image src={require('../public/assets/promo.svg')} alt="promotion"/>
        </div>
        <div className='flex  flex-col mx-4   mt-4 space-y-2 md:flex md:flex-col justify-start md:justify-center md:mx-auto'>
            <h2 className='flextext-lg mx-4 bold font-bold md:flex md:items-start'>Promotional Flyers</h2>
            <p className='flex justify-start items-start mx-4 text-sm'>Swiftsell provides you with promotional flyers for you social media post. </p>
        </div>
        <div className='hidden md:inline-flex'>
            <Image src={require('../public/assets/promo2.svg')} alt="promotion2" />
        </div>
        
            </div>
            </div>
  )
}

export default Promotion
