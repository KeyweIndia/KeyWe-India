import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div  className={`h-[280px] pt-[90px] pb-5  bg-cover bg-center border-b border-b-white text-white`}>
        <div className=' h-full w-full flex justify-center items-center'>
        <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-[32px] font-Open font-bold'>About Us</h2>
            <div className='flex justify-center items-center gap-3'>
                <Link href={'/'} className='text-[18px] font-Jost hover:text-primary'>Home</Link>
                <p>/</p>
                <p className='text-[18px] font-Jost text-primary'>About Us</p>
            </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default AboutUs