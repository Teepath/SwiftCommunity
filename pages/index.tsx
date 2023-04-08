import Header from '@/Components/header'
import Image from 'next/image'
import Homepage from './Homepage'
import Product from './Product'
import Customise from './Customise'
import Experience from './Experience'
import CustomerInvoice from './CustomerInvoice'
import Promotion from './Promotion'
import Rider from "./Rider"
import MigrateStore from './MigrateStore'
import Businesses from './Businesses'
import Community from './Community'
import Footer from './Footer'



export default function Home() {
  return (
    <main>
      {/* Homapge */}
      {/* Header*/}
      <div className='bg-[#FBFDF7;] pl-[5.56%]'>
        <Header/>
        <Homepage/>
      </div>
      <div>
      <Product />
      </div>
      <div>
        <Customise/>
      </div>
      <div>
        <Experience/>
      </div>
      <div>
        <CustomerInvoice/>
      </div>
      <div>
        <Promotion/>
      </div>
      <div>
        <Rider/>
      </div>
      <div className=' mt-4 mb-4 md:hidden'>
      <Image src={require('../public/assets/dema.svg')} alt="dema" className='flex w-[500px]'/>
      </div>
      <div className='hidden md:inline-flex md:mt-4'>
      <Image src={require('../public/assets/dema2.svg')} alt="dema" />
      </div>
      <div>
        <MigrateStore/>
      </div>
      <div>
        <Businesses />
      </div>
      <div>
        <Community/>
      </div>
      <Footer/>

    </main>
  )
}
