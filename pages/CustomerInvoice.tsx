import React from 'react'
import Image from 'next/image'

export default function CustomerInvoice() {
  return (
    <div className='bg-white md:mt-10'>
        <div className='flex flex-col relative md:grid grid-cols-2 sm:grid sm:grid-cols-2 mx-w-5xl mx-4'>
        <div className='flex justify-center pt-4 item-center  md:hidden'>
            <Image src={require('../public/assets/class.svg')} alt="class"/>
        </div>
       
        <div className='hidden md:inline-flex'>
            <Image src={require('../public/assets/class2.svg')} alt="class2" />
        </div>
        <div className='flex  flex-col mx-4 space-y-2 mt-4 md:flex md:flex-col justify-start md:justify-center  md:mx-auto'>
            <h2 className='flextext-lg mx-4 bold font-bold md:flex md:items-start'>Powerful analytics & insights to help your business grow</h2>
            <p className='flex justify-start items-start mx-4 text-sm'>Get analytics that show you your best selling products, least selling products and how often each customer buys from you. Average spend per customer.</p>
        </div>

        </div>
    </div>
  )
}
