import React from 'react'
import Logo from  '../../public/logo3.png'
import MicrosoftImg from '../../public/microsoft_solution_partner.png'

import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

// import { FaFacebookF,FaInstagram ,FaLinkedinIn ,FaYoutube  } from "react-icons/fa";

const MainFooter = () => {
  return (
    <div className='border-t border-t-[#000000] text-[#000000] pt-10' >
    <div className='container mx-auto' >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  gap-10'>
<div className='flex flex-col justify-start items-start gap-5'>
<div>
<Image src={Logo} alt='' className='w-full h-[50px] object-contain'/>
</div>
<p className='font-Jost text-gray-700 text-[15px]'>Our team can assist you in transforming<br/> your business through latest tech capabilities<br/> to stay ahead of the curve.</p>
{/* <ul className='flex justify-center items-center gap-3'> */}
       {/* <Link href={'https://www.facebook.com/profile.php?id=100078043957514'} target='_blank' className='bg-black/55 p-2 rounded-full'> <FaFacebookF className='hover:text-primary ease-in-out duration-200'/></Link> */}
        {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'><FaXTwitter className='hover:text-primary ease-in-out duration-200'/></Link> */}
        {/* <Link href={'https://www.instagram.com/keyweindia'} target='_blank' className='bg-black/55 p-2  rounded-full'><FaInstagram className='hover:text-primary ease-in-out duration-200'/></Link> */}
      {/* <Link href={'https://www.linkedin.com/company/keyweindia'} target='_blank' className='bg-black/55  p-2 rounded-full'>  <FaLinkedinIn className='hover:text-primary ease-in-out duration-200'/></Link> */}
      {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'>  <FaYoutube className='hover:text-primary ease-in-out duration-200'/></Link> */}
        {/* </ul> */}
        <Image src={MicrosoftImg} alt='Microsoft' width={200} height={200}/>
</div>
<div className='flex flex-col justify-center items-start '>
  <h4 className='font-Jost text-[20px] font-semibold'>Useful Links</h4>
  <span className='bg-gradient-to-r from-[#b01d5f] to-secondary w-[106px] h-[2px] my-1'></span>
  <ul className='flex flex-col justify-start  items-start gap-2 mt-3'>
    <li><Link href={'/'} className='font-Jost text-[15px] text-gray-700 hover:text-primary ease-in-out duration-200'>Home</Link></li>
    <li><Link href={'/about'} className='font-Jost text-[15px] text-gray-700 hover:text-primary ease-in-out duration-200'>About us</Link></li>
    <li><Link href={'/services'} className='font-Jost text-[15px] text-gray-700 hover:text-primary ease-in-out duration-200'>Services</Link></li>
    <li><Link href={'https://forms.office.com/r/ehBVZ9AiHN?origin=lprLink'} className='font-Jost text-[15px] text-gray-700 hover:text-primary ease-in-out duration-200'>Careers</Link></li>
    <li><Link href={'/contact'} className='font-Jost text-[15px] text-gray-700 hover:text-primary ease-in-out duration-200'>Contact us</Link></li>
  </ul>
</div>
<div className='flex flex-col justify-center items-start '>
<h4 className='font-Jost text-[20px] font-semibold'>Company</h4>
  <span className='bg-gradient-to-r from-[#b01d5f] to-secondary w-[80px] h-[2px] my-1'></span>
<div className='flex flex-col justify-start items-start gap- mt-3'>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoLocationSharp className='text-[20px] text-primary'/></span>
    <Link href={'https://www.google.com/maps/place/KeyWe+India+Private+limited/@26.8822541,75.7540781,17z/data=!3m1!4b1!4m6!3m5!1s0x396db55220512f01:0x23257aefcdaea079!8m2!3d26.8822541!4d75.7540781!16s%2Fg%2F11q4cdxf65?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D'} target='_blank' className='font-Jost text-[15px] text-gray-700'>{`G-3, Padmavati B Colony, Padmavti Colony, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoCall className='text-[20px] text-primary'/></span>
    <Link href="tel:+919414584766" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-700'>{`+91 9414584766`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoMdMail className='text-[20px] text-primary'/></span>
    <Link href="mailto:Sales@keywe.in" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-700'>{`Sales@keywe.in`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoMdMail className='text-[20px] text-primary'/></span>
    <Link href="mailto:HR@keywe.in" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-700'>{`HR@keywe.in`}</Link>
  </div>
</div>
</div>
      </div>
      <hr className='mt-10'/>
      <div className='flex flex-col md:flex-row justify-between items-center gap-5 py-5'>
        <div>
          <Link href={'/'} className='font-Jost text-gray-700 text-[15px] hover:text-primary ease-in-out duration-200'>Privacy Policy</Link>
      
        </div>
       <p className='font-Jost text-[15px] text-gray-700'>{`Copyright © 2026 KeyWe India. All Rights Reserved.`}</p>
      </div>
    </div>
    </div>
  )
}

export default MainFooter
