import React from 'react'
import Logo from  '../../public/logo1.png'

import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import { FaFacebookF,FaInstagram ,FaLinkedinIn ,FaYoutube  } from "react-icons/fa";

const MainFooter = () => {
  return (
    <div className='border-t border-t-white text-white pt-10' >
    <div className='container mx-auto' >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
<div className='flex flex-col justify-start items-start gap-5'>
<div>
<Image src={Logo} alt='' className='w-full h-[100px] object-contain'/>
</div>
<p className='font-Jost text-gray-300 text-[15px]'>Our team can assist you in transforming<br/> your business through latest tech capabilities<br/> to stay ahead of the curve.</p>
<ul className='flex justify-center items-center gap-3'>
       <Link href={'https://www.facebook.com/profile.php?id=100078043957514'} target='_blank' className='bg-black/55 p-2 rounded-full'> <FaFacebookF className='hover:text-primary ease-in-out duration-200'/></Link>
        {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'><FaXTwitter className='hover:text-primary ease-in-out duration-200'/></Link> */}
        <Link href={'https://www.instagram.com/keyweindia'} target='_blank' className='bg-black/55 p-2  rounded-full'><FaInstagram className='hover:text-primary ease-in-out duration-200'/></Link>
      <Link href={'https://www.linkedin.com/company/keyweindia'} target='_blank' className='bg-black/55  p-2 rounded-full'>  <FaLinkedinIn className='hover:text-primary ease-in-out duration-200'/></Link>
      {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'>  <FaYoutube className='hover:text-primary ease-in-out duration-200'/></Link> */}
        </ul>
</div>
<div className='flex flex-col justify-center items-start gap-5'>
  <h4 className='font-Jost text-[20px] font-semibold'>Useful Links</h4>
  <ul className='flex flex-col justify-start  items-start gap-2'>
    <li><Link href={'/'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Home</Link></li>
    <li><Link href={'/about'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>About us</Link></li>
    <li><Link href={'/services'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Services</Link></li>
    <li><Link href={'/contact'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Contact us</Link></li>
  </ul>
</div>
<div className='flex flex-col justify-center items-start gap-5'>
<h4 className='font-Jost text-[20px] font-semibold'>Company</h4>
<div className='flex flex-col justify-start items-start gap-2'>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoLocationSharp className='text-[20px]'/></span>
    <p className='font-Jost text-[15px] text-gray-300'>{`G-3, Padmavati B Colony, Padmavti Colony, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019`}</p>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoCall className='text-[20px]'/></span>
    <Link href="tel:+919414584766" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-300'>{`+91 9414584766`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoMdMail className='text-[20px] '/></span>
    <Link href="mailto:Sales@keywe.in" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-300'>{`Sales@keywe.in`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoMdMail className='text-[20px] '/></span>
    <Link href="mailto:HR@keywe.in" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-300'>{`HR@keywe.in`}</Link>
  </div>
</div>
</div>
      </div>
      <hr className='mt-10'/>
      <div className='flex flex-col md:flex-row justify-between items-center gap-5 py-5'>
        <div>
          <Link href={'/'} className='font-Jost text-gray-300 text-[15px] hover:text-primary ease-in-out duration-200'>Privacy Policy</Link>
      
        </div>
       <p className='font-Jost text-[15px] text-gray-300'>{`Copyright © 2023 KeyWe India. All Rights Reserved.`}</p>
      </div>
    </div>
    </div>
  )
}

export default MainFooter
