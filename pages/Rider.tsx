import React from 'react'
import Image from 'next/image'

function Rider() {
  return (
    <div className='bg-white'>
     <div className='flex flex-col relative md:grid grid-cols-2 sm:grid sm:grid-cols-2  mx-w-5xl mx-4'>
     <div className='flex justify-center pt-4 item-center  md:hidden'>
            <Image src={require('../public/assets/rider.svg')} alt="rider"/>
        </div>
       
        <div className='hidden md:inline-flex'>
            <Image src={require('../public/assets/rider2.svg')} alt="promotion2" />
        </div>
        <div className='flex  flex-col mx-4   mt-4 space-y-2 md:flex md:flex-col justify-start md:justify-center md:mx-auto'>
            <h2 className='flextext-lg mx-4 bold font-bold md:flex md:items-start'>Access 3rd party shipping providers</h2>
            <p className='flex justify-start items-start mx-4 text-sm'>Request delivery through any of our integrated 3rd party shipping service providers </p>
        </div>
        </div>
    </div>
  )
}

export default Rider
