import Link from 'next/link';
import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className='pb-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 '>
            <div className='bg-white lg:h-[250px] h-full hover:-translate-y-[8px] duration-300 group shadow-lg rounded-md px-5 py-8 flex flex-col justify-start items-center gap-3'>
                <div className='bg-primary/10 p-5 rounded-full group-hover:bg-primary  duration-300 transition-all ease-linear'>
                    <span><IoMailOutline className='text-[25px] text-primary group-hover:text-white duration-300 transition-all ease-linear font-bold'/></span>
                </div>
                <h4 className='text-[20px] font-Open font-semibold'>Mail Here</h4>
               <div className='flex flex-col justify-center items-center gap-1'>
               <Link href={'/'} className='text-[15px] font-Jost font-medium tracking-wider text-gray-500 hover:text-primary'>Sales@keywe.in</Link>
                <Link href={'/'} className='text-[15px] font-Jost font-medium tracking-wider text-gray-500 hover:text-primary'>HR@keywe.in</Link>
               </div>
            </div>
            <div className='bg-white lg:h-[250px] h-full  hover:-translate-y-[8px] duration-300 group shadow-lg rounded-md px-5 py-8 flex flex-col justify-start items-center gap-3'>
                <div className='bg-primary/10 p-5 rounded-full group-hover:bg-primary  duration-300 transition-all ease-linear'>
                    <span><FaLocationDot className='text-[25px] text-primary group-hover:text-white duration-300 transition-all ease-linear font-bold'/></span>
                </div>
                <h4 className='text-[20px] font-Open font-semibold'>Visit Here</h4>
               <div className='flex flex-col justify-center items-center gap-1'>
               <Link href={'/'} className='text-[15px] font-Jost font-medium tracking-wider text-center text-gray-500 hover:text-primary'>{`G-3, Padmavati B Colony, Padmavti Colony, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019`}</Link>

               </div>
            </div>
            <div className='bg-white lg:h-[250px] h-full  hover:-translate-y-[8px] duration-300 group shadow-lg rounded-md px-5 py-8 flex flex-col justify-start items-center gap-3'>
                <div className='bg-primary/10 p-5 rounded-full group-hover:bg-primary  duration-300 transition-all ease-linear'>
                    <span><IoMailOutline className='text-[25px] text-primary group-hover:text-white duration-300 transition-all ease-linear font-bold'/></span>
                </div>
                <h4 className='text-[20px] font-Open font-semibold'>Call Here</h4>
               <div className='flex flex-col justify-center items-center gap-1'>
               <Link href={'/'} className='text-[15px] font-Jost font-medium tracking-wider text-gray-500 hover:text-primary'>+91 9414584766</Link>

               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
