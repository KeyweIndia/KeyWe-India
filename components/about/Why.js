import React from 'react'
import W1 from '../../public/Questions-amico.svg'
import Image from 'next/image'
import Link from 'next/link'
const Why = () => {
  return (
    <div className=' pb-20'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 '>

<div className='w-full lg:w-[50%] flex flex-col lg:justify-start lg:items-start  justify-center items-center'>
<div className=' flex justify-center items-center gap-3'>
    <p className='text-[18px] font-Open font-semibold text-primary  uppercase'>why choose Us</p>
    <p className='w-[35px] h-[3px] bg-primary'></p>
</div>
<h3 className="lg:text-[40px] text-[22px] capitalize text-center text-white pt-4 font-bold">{`Why KeyWe `} </h3>
<p className="font-Jost text-[18px] text-justify pt-3 text-gray-100" >{`KeyWe, your trusted IT solution provider, offers personalized services to meet your specific needs. Our team of experts understands the intricacies of your business and delivers tailor-made solutions that align perfectly with your goals. With our comprehensive approach to technology, we ensure smooth operations and empower your business to thrive in the ever-evolving digital landscape. Choose KeyWe for innovative solutions that propel your success story forward.`}</p>
<div className='my-7'>
<Link href={'/contact'} className='btn2'>Get Started Now</Link>

</div>
</div>
<div className='w-full lg:w-[50%]'>
    <div>
        <Image src={W1} alt='About' className='w-full h-full object-cover'/>
    </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Why



