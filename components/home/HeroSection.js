import React from 'react';
import Hero1 from '../../public/tech company-amico.svg'
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className={` text-white pt-[90px]`}>
   
        <div className=' container mx-auto h-full '>
         <div className='flex flex-col lg:flex-row justify-center items-center gap-10 pt-10'>
         <div className='w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start gap-5  '>
            <h1 className='lg:text-[50px] text-[32px] text-center lg:text-start font-Open font-bold '>Best <span className='text-primary'>Microsoft</span> Solution Providers for Your Needs</h1>
            <p className='text-[18px] font-Jost text-center lg:text-start text-gray-300 '>{`We offer expert Microsoft solutions backed by the latest technical knowledge and skills.`}</p>
            <div className='flex justify-start items-start gap-5 mt-7 mb-7 lg:mb-0'>
              <Link href={'/contact'} className="btn2">{`let's connect now`}</Link>
             
            </div>
          </div>
<div className='w-full lg:w-[50%]'>
  <div>
    <Image src={Hero1} alt='hero' className='w-full slow-bounce  h-full object-cover'/>
  </div>
</div>
         </div>
        
 
      </div>
    </div>
  );
};

export default HeroSection;
