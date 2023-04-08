import React from 'react'
import Image from 'next/image'

function Experience() {
  return (
    <div className='bg-white'>

     <h1 className='text-center font-[900] text-1xl md:text-2xl bold m-10 mx-4'>How Swiftsell improves your business experience</h1>

     <p className='text-center text-xs md:text-sm m-2'>Swiftsell have every feature your business needs to successfully sell online</p>

     <div className='flex flex-col relative md:grid grid-cols-2 sm:grid sm:grid-cols-2'>
        <div className='flex justify-center pt-4 item-center  md:hidden'>
            <Image src={require('../public/assets/Recept.svg')} alt="recept"/>
        </div>
        <div className='flex  flex-col mx-4 space-y-2 md:flex md:flex-col justify-start md:justify-center'>
            <h2 className='flextext-lg mx-4 bold font-bold md:flex md:items-start'>Issue Invoices and send Receipts</h2>
            <p className='flex justify-start items-start mx-4 text-sm'>Create invoices for customers and send them receipts with the Swiftsell app. Close sales transactions with receipts that can be sent as PDFs to your customers DM on social media, email address or physically printed.</p>
        </div>
        <div className='hidden md:inline-flex'>
            <Image src={require('../public/assets/receipt2.svg')} alt="recept2" />
        </div>
     </div>
    
    </div>
  )
}

export default Experience
