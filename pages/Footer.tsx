import React from 'react'
import Image from "next/image"


type ItemProps ={
    title:string,
    isUp?:boolean,
    isDown?:boolean,
    isColor?:boolean
}

const ListItem = ({title, isUp, isDown, isColor}: ItemProps)=>{
    return(
        <div className='mt-10 md:hidden'>
            <div className='flex justify-between mx-4'>
                {
                    isColor?
                    <h2 className='text-[#97CC04]'>{title}</h2>
                    :
                    <h2 className='text-white'>{title}</h2>
                }
               
                {
                    isUp?     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>: isDown? 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                
                  : null
                }
      

            </div>
          </div>
    )
}

export default function Footer() {
  return (
    <div className='flex flex-col bg-[#1D2700] mt-10 text-white'>
          <h1 className='text-center font-[900] text-1xl md:text-2xl bold m-10 mx-4'>Ready to get started with Swiftsell?</h1>
          <div className='justify-center items-center'>
          <p className='text-sm text-center '>Whether you want to sell products down the street or around the world, we have all the tools you need.</p>
          </div>
       
          <div className='flex py-4 justify-center items-center space-x-4  my-4'>
            <button className='text-white bg-[#97CC04] border h-11 w-40 rounded-md hover:scale-125 hover:cursor-pointer transition-transform duration-200 md:h-16 md:w-48'>Start free trial</button>
            <button className='w-40 text-[#97CC04] bg-transparent rounded-md flex border border-lime-200 h-11 items-center justify-center space-x-2 hover:scale-125 hover:cursor-pointer transition-transform duration-200 md:h-16 md:w-60'>  Watch 2 mins demo</button>
        
          </div>
          <ListItem title='Company' isUp={true} isColor={true}/>
          <ListItem title='About Us' />
          <ListItem title='Pricing' />
          <ListItem title='Careers' />
          <ListItem title='SUPPORT'  isDown isColor/>
          <ListItem title='LEGAL' isColor isDown />

            <div className='md:hidden'>
                <Image src={require('../public/assets/logo-footer.svg')} alt="footer" className='mx-4 mt-12 mb-8'/>
            </div>
        <p className='text-sm mx-4 md:hidden'>The 360 business management experience for small businesses across Africa</p>
        <div className='flex  justify- items-start mx-4 space-x-2 mt-4 md:hidden'>
            <Image src={require("../public/assets/f.svg")} alt="f" />
            <Image src={require("../public/assets/ig.svg")} alt="ig"/>
            <Image src={require("../public/assets/tw.svg")} alt="tw"/>
            <Image src={require("../public/assets/ln.svg")} alt="In"/>
        </div>
       
      
       
<div className='hidden md:inline mb-10'> 
            <div className='flex justify-between mx-4 '>
                <div className='flex flex-col justify-start items-start space-y-6'>
            <Image  src={require('../public/assets/logo-footer.svg')} alt="footer"/>
            <p>The 360 business management experience for small businesses across Africa</p>
            <div className='flex  justify- items-start space-x-2 mt-4 '>
            <Image src={require("../public/assets/f.svg")} alt="f" />
            <Image src={require("../public/assets/ig.svg")} alt="ig"/>
            <Image src={require("../public/assets/tw.svg")} alt="tw"/>
            <Image src={require("../public/assets/ln.svg")} alt="In"/>
        </div>
                </div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                    <h2 className='text-[#97CC04]'> COMPANY</h2>
                    <ul>
                        <li>About US</li>
                        <li>Pricing</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                    <h2 className='text-[#97CC04]'> SUPPORT</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>Swiftsell Community</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                    <h2 className='text-[#97CC04]'> LEGAL</h2>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms of Service</li>
                       
                    </ul>
                </div>
               
           

            </div>


         </div>
         <p className='mx-4 mt-10 text-center mb-6'>2023 Swiftsell Inc. All Rights Reserved.</p>
    </div>
  )
}
