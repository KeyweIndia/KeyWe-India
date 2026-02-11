import React from 'react'
import S1 from '../../public/network.png'
import S2 from '../../public/analytics.png'
import S3 from '../../public/request-for-proposal.png'
import S4 from '../../public/relationship.png'
import S5 from '../../public/project-management.png'
import Image from 'next/image'
import Link from 'next/link'
const Together = () => {
  return (
    <div className=' py-20'>
      <div className='container mx-auto'>
        <div>
           <h2 className="lg:text-[40px] text-[22px] capitalize text-center text-[#000000] font-bold">Want To Work Together?</h2> 
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pt-10'>
<div className='flex flex-col justify-center items-center gap-3'>
    <div>
        <Image src={S1} alt='' className='w-full h-full object-cover'/>
    </div>
    <h4 className='text-[20px] font-Jost text-gray-700 font-medium'>Connect</h4>
</div>
<div className='flex flex-col justify-center items-center gap-3'>
    <div>
        <Image src={S2} alt='' className='w-full h-full object-cover'/>
    </div>
    <h4 className='text-[20px] font-Jost text-gray-700 font-medium'>Business Analysis</h4>
</div>
<div className='flex flex-col justify-center items-center gap-3'>
    <div>
        <Image src={S3} alt='' className='w-full h-full object-cover'/>
    </div>
    <h4 className='text-[20px] font-Jost text-gray-700 font-medium'>Proposal</h4>
</div>
<div className='flex flex-col justify-center items-center gap-3'>
    <div>
        <Image src={S4} alt='' className='w-full h-full object-cover'/>
    </div>
    <h4 className='text-[20px] font-Jost text-gray-700 font-medium'>Work Contract
</h4>
</div>
<div className='flex flex-col justify-center items-center gap-3'>
    <div>
        <Image src={S5} alt='' className='w-full h-full object-cover'/>
    </div>
    <h4 className='text-[20px] font-Jost text-gray-700 font-medium'>Project Initiation</h4>
</div>

        </div>
        <div className=' flex justify-center items-center my-10'>
<Link href={'/contact'} className='btn2'>{`let's connect`}</Link>

</div>
      </div>
    </div>
  )
}

export default Together
