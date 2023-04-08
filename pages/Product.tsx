import React from 'react'
import Image from 'next/image'
import ProductCard from '../Components/Product'

export default function Product() {
  return (
    <div className='bg-white'>
         <div className='pt-6 flex flex-col justify-center items-center'>
        <h2 className='font-bold bold text-md my-2'>Built for today’s ambitious businesses</h2>
       
            <p className='text-sm my-2 text-center mx-4'>Create a business website, manage your customers, issue invoices, record sales, receive financial reports & manage all business operations on the Swiftsell app.</p>
            {/* <Image src={require('../public/assets/prod1.svg')} alt="icon1"/> */}
           
      
    
    </div>
    <div className='flex flex-col justify-center items-center p-4 md:flex md:flex-row md:space-x-2'>
        {/* Tilte */}
        <ProductCard  title="Customer Management" content='Swiftsell helps you record the details of your customers. Retain customers by sending them bulk SMS and emails on Swiftsell.' image={<Image src={require('../public/assets/prod1.svg')} alt="prod1"/>}/>
        <ProductCard title='Increased Transactions' content='Have all your customer and their information managed and organized in one place' image={<Image src={require('../public/assets/prod2.svg')} alt="prod2"/>}/>
        <ProductCard  title='Store Platform ' content='Have all your customer and their information managed and organized in one place' image={<Image src={require('../public/assets/prod3.svg')} alt="prod3"/>}/>
        
        </div>
    </div>
  )
}
