import React, { ReactNode } from 'react'
import Image from 'next/image'


type  Prop={
title: string;
content:string;
image?: ReactNode
}

function Product({title, content, image}: Prop) {
  return (
    <div className='pt-6 flex flex-col justify-center items-center md:justify-start md:items-start'>
           {image}
        <h2 className='font-bold bold text-md my-2'>{title}</h2>
       
        <p className='text-sm my-2 text-center md:text-left'> {content} </p>
           
      
    </div>
  )
}

export default Product
