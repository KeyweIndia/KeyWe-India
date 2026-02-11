import React from 'react'
import F1 from '../../public/hands.png'
import F2 from '../../public/integration.png'
import F3 from '../../public/secure.png'
import F4 from '../../public/live-chat.png'
import Image from 'next/image'
const WhyChoose = () => {
  return (
    <div className=' pt-20' >
      <div className='container mx-auto' >
      <div className='flex flex-col justify-center items-center '>
    
            {/* <h2 className='text-[40px] font-Open font-bold'>Why Choose Us</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            <div
              style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
            className='  bg-white group  px-4 py-9  rounded-[10px] duration-300 ease-linear transition-all flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={F1} alt='' className='w-full h-full object-cover'/>
          </div>
          <h4 className='text-[18px] font-Open font-bold  text-[#000000]'>Custom Solutions</h4>
          <p className='text-[18px] font-Jost text-center text-gray-700 '>{`We design Microsoft solutions just for your business needs.`}</p>
            </div>
           
            <div
              style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
            className='  bg-white  group  px-4 py-9  rounded-[10px] duration-300 ease-linear transition-all flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={F2} alt='' className='w-full h-full object-cover'/>
          </div>
          <h4 className='text-[18px] font-Open font-bold  text-[#000000]'>Easy Integration</h4>
          <p className='text-[18px] font-Jost text-center text-gray-700 '>{`Our solutions fit smoothly into your current setup.`}</p>
            </div>
            <div
              style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
            className='group  bg-white   px-4 py-9  rounded-[10px] duration-300 ease-linear transition-all flex flex-col justify-start items-center gap-5'>
     <div className=''>
            <Image src={F3} alt='' className='w-full h-full object-cover'/>
          </div>
          <h4 className='text-[18px] font-Open font-bold  text-[#000000]'>Strong Security</h4>
          <p className='text-[18px] font-Jost text-center  text-gray-700 '>{`We keep your data safe with advanced protection measures.`}</p>
            </div>
          
            <div
              style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
            className='  group  bg-white   px-4 py-9  rounded-[10px] duration-300 ease-linear transition-all flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={F4} alt='' className='w-full h-full object-cover'/>
          </div>
          <h4 className='text-[18px] font-Open font-bold text-[#000000]'>24/7 Live Support</h4>
          <p className='text-[18px] font-Jost text-center  text-gray-700 '>{`Get continuous support to keep everything running smoothly.`}</p>
            </div>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
