import React from 'react'
import AboutImage from '../../public/about.jpg'
import Image from 'next/image'
import CounterUp from './CounterUp'

const About = () => {
  return (
    <div className=' pt-20 pb-20'>
      <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row justify-center items-start gap-10'>
<div className='w-full lg:w-[50%]'>
    <div>
        <Image src={AboutImage} alt='About' className='w-full h-full object-cover'/>
    </div>
</div>
<div className='w-full lg:w-[50%] flex flex-col lg:justify-start lg:items-start justify-center items-center gap-3'>
<div className='bg-primary text-white px-7 py-1 shadow-md rounded-full flex justify-center items-center'>
    <p className='text-[18px] font-Open font-medium'>Who we are</p>
</div>
<h3 className='lg:text-[40px] text-[20px] text-center lg:text-start capitalize leading-[45px] text-white  font-bold'>{`We promise rewarding results through solutions.`} </h3>
<p className="font-Jost text-[18px] text-justify text-gray-300" >{`At KeyWe India Pvt. Ltd. we ensure solutions that yield satisfying outcomes, customized to meet your unique requirements effectively and efficiently.`}</p>
<CounterUp/>
</div>
</div>

      </div>
    </div>
  )
}

export default About
