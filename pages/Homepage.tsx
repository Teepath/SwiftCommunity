import React from 'react';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
        {/* content homepage */}
        <div className='relative md:grid grid-cols-2 sm:grid sm:grid-cols-2'>
        <div className='flex flex-col justify-start md:justify-center items-center md:h-[500px]'>
        <div className='pt-4 h-40'>
        <h1 className=' text-4xl lg:text-5xl md:text-3xl bold font-bold sm:text-2xl xl:text-5xl'>
        Get your hyperlocal<span className='text-[#81AF00] whitespace-break-spaces'> business off the ground.</span> 
        </h1>
        </div>
           <div className='md: pt-2'> 
           <p className='text-md md:text-md sm:text-sm'>Create a web store for your company. Concentrate on overseeing your products and orders while we take care of your web promotion.</p>
            </div>
    

        <div className='flex py-4 justify-start  space-x-1  my-4'>
            <button className='text-white bg-[#97CC04] border h-11 w-[133px] rounded-md hover:scale-125 hover:cursor-pointer transition-transform duration-200 md:h-16 md:w-48'>Start free trial</button>
            <button className='w-[196px] text-[#97CC04] bg-transparent rounded-md flex border border-lime-200 h-11 items-center justify-center space-x-2 hover:scale-125 hover:cursor-pointer transition-transform duration-200 md:h-16 md:w-60'> <Image src={require('../public/assets/play.svg')} alt="play" className='h-5 w-6 mx-2'/> Watch 2 mins demo</button>
        </div>
        </div>
        <div className='relative h-[340px] items-center md:h-[600px]  w-auto '>
            <Image src={require("../public/assets/carpet.svg")} alt="carpet-up" className='top-0 left-0 absolute' />
            <div className='h-10 w-[128px] boder rounded-md bg-white top-10 left-56  absolute z-20 flex  justify-center items-center hover:cursor-pointer hover:scale-105 transition-transform duration-200 md:top-10 md:left-[450px] sm:left:84 sm:absolute md:z-20 md:absolute'>
                <button className=' flex text-xs items-center justify-around'><Image src={require("../public/assets/invoice.svg")} alt="invoice" /><p>Invoice/Receipt</p></button>
            </div>
            <div className='h-11 w-[168px] bg-white absolute bottom-7 left-0 z-20 text-xs flex items-center justify-center md:left-0 md:bottom-24 rounded-md hover:cursor-pointer hover:scale-125 transition-transform duration-200'><Image src={require("../public/assets/worldlogo.svg")} alt="world" className='mx-1'/> <p>Free customizable website </p></div>
            <div className='bottom-0 left-72  absolute -z-5 md:left-[520px] md:bottom-4 md:absolute'><Image  src={require("../public/assets/carpetdown.svg")} alt="carpetdown" className=''/></div>
            <Image  src={require("../public/assets/ladyBook.svg")} alt="ladybook" className='top-4 left-6 absolute z-10 md:hidden'/>
            <div className='hidden md:inline-flex'>
            <Image  src={require("../public/assets/ladybook2.svg")} alt="ladybook" className='top-4 left-6  sm:left-3  absolute z-10'/> 
            </div>

         


        </div>

        </div>
   
   

     
     
    </div>
  )
}
