import React from 'react'
import AboutImage from '../../public/Team-cuate.png'
import T1 from '../../public/target.png'
import T2 from '../../public/vision.png'
import T3 from '../../public/value-proposition.png'

import Image from 'next/image'
import Link from 'next/link'
const AboutSection = () => {
  return (
    <div className='pb-20 pt-10  relative'>
<div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />


      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center  items-center gap-10 '>
<div className='w-full lg:w-[50%]'>
    <div>
        <Image src={AboutImage} alt='About' className='w-full h-full object-cover'/>
    </div>
</div>
<div className='w-full lg:w-[50%] flex flex-col justify-start lg:items-start items-center  '>
<div className=' flex justify-center items-center gap-3'>
    <p className='text-[18px] font-Open font-semibold text-primary  uppercase'>About Us</p>
    <p className='w-[35px] h-[3px] bg-primary'></p>
</div>
<h3 className="lg:text-[40px] text-[22px] capitalize text-center text-[#000000] pt-4 font-bold">{`Welcome To KeyWe `} </h3>
<p className="font-Jost text-[18px] text-justify pt-3 text-gray-700" >{`KeyWe is a boutique IT service consulting for app solutions, software Development Company, aiming to maximize customers’ business productivity and transform their digital transformation across the globe. We are registered in MCA and our services are driven by a specialized and enthusiastic team that blends industry standards with technological expertise and domain understanding to enable a better experience for customers.`}</p>
<div className='my-7'>
<Link href={'/contact'} className='btn2'>Get Started Now</Link>

</div>
</div>
</div>
<div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 pt-20'>
  <div className='bg-white flex-[1 0 0] border shadow-md rounded-md p-5 flex flex-col justify-center items-center gap-5'>
  <div className='bg-primary p-4 rounded-full flex justify-center items-center'>
        <Image src={T1} alt='' className='w-full h-full object-cover'/>
    </div>
    <h3 className='text-[20px] font-Open font-bold text-black '>{`Our mission`}</h3>
    <p className='text-[18px] font-Jost text-center  text-black '>{`At KeyWe, we are a team of diverse and talented professionals. Our mix of skills and experiences helps us deliver fast and creative solutions for your business. We work closely with you to develop strategies that achieve real results, supporting you every step of the way.`}</p>
  </div>
  <div className='bg-white flex-[1 0 0] border shadow-md rounded-md p-5 flex flex-col justify-center items-center gap-5'>
    <div className='bg-primary p-4 rounded-full flex justify-center items-center'>
        <Image src={T2} alt='' className='w-full h-full object-cover'/>
    </div>
    <h3 className='text-[20px] font-Open font-bold text-black '>{`Our vision`}</h3>
    <p className='text-[18px] font-Jost text-center  text-black '>{`At KeyWe, we see a future where our diverse team provides quick and creative solutions for businesses. We aim to help you create strategies that get real results. By working closely with you, we ensure your business grows and succeeds.`}</p>
  </div>
  <div className='bg-white flex-[1 0 0] border shadow-md rounded-md p-5 flex flex-col justify-center items-center gap-5'>
  <div className='bg-primary p-4 rounded-full flex justify-center items-center'>
        <Image src={T3} alt='' className='w-full h-full object-cover'/>
    </div>
    <h3 className='text-[20px] font-Open font-bold text-black '>{`Our value`}</h3>
    <p className='text-[18px] font-Jost text-center  text-black '>{`At KeyWe, we value diversity, talent, and experience. Our team uses these strengths to provide fast and creative solutions for your business. We work closely with you to create strategies that get real results, helping your business succeed.`}</p>
  </div>
</div>
      </div>
    </div>
  )
}

export default AboutSection
