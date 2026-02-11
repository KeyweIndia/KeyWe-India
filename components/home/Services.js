import Image from 'next/image'
import React from 'react'
import S1 from '../../public/consultation.png'
import S2 from '../../public/group.png'
import S3 from '../../public/programming.png'
import S4 from '../../public/windows.png'
import S5 from '../../public/azure.png'
const Services = () => {
  return (
    <div className={``}>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center '>
            <h5 className='text-[18px] font-Open text-primary font-semibold'>OUR SERVICES</h5>
            <h2 className='lg:text-[40px] text-[22px] text-[#000000] text-center font-Open font-bold'>Our Best-in-class Services</h2>
            <p className='text-[18px] font-Jost text-center text-gray-700'>{`At KeyWe India, Your Success is Our Priority`}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 pt-10'>
            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className='bg-[#ffffff]   duration-200 transition-all ease-linear  p-5   rounded-[10px] flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={S1} alt='' className="w-[100px] h-[40px] object-contain"/>
          </div>
          <h4 className='text-[18px] font-Open text-[#000000] font-bold'>Smart Consulting</h4>
          <p className='text-[18px] text-center text-gray-700 font-Jost'>{`Get custom advice to match Microsoft solutions with your business needs, ensuring smart and effective decisions.`}</p>
            </div>
            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className='  p-5  duration-200 transition-all ease-linear  rounded-[10px] flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={S2} alt='' className="w-[100px] h-[40px] object-contain"/>
          </div>
          <h4 className='text-[18px] font-Open text-center text-[#000000] font-bold'>Dedicated Developer Teams</h4>
          <p className='text-[18px] text-center text-gray-700 font-Jost'>{`Have a dedicated team of experts create custom Microsoft solutions tailored to your specific business needs and goals.`}</p>
            </div>
            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className=' p-5  duration-200 transition-all ease-linear  rounded-[10px] flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={S3} alt='' className="w-[100px] h-[40px] object-contain"/>
          </div>
          <h4 className='text-[18px] font-Open text-[#000000] text-center font-bold'>Custom Software Development</h4>
          <p className='text-[18px] text-center text-gray-700 font-Jost'>{`We build custom software solutions to fit your business needs perfectly, ensuring efficiency, scalability, and great performance.`}</p>
            </div>
           
            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className='  p-5  duration-200 transition-all ease-linear  rounded-[10px] flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={S4} alt='' className="w-[100px] h-[40px] object-contain"/>
          </div>
          <h4 className='text-[18px] font-Open text-[#000000] font-bold'>{`Microsoft Services`}</h4>
          <p className='text-[18px] text-center text-gray-700 font-Jost'>{`We offer Microsoft services like Azure, Office 365, and Dynamics 365 to help your business run smoothly and efficiently.`}</p>
            </div>
            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className=' p-5  duration-200 transition-all ease-linear  rounded-[10px] flex flex-col justify-start items-center gap-5'>
          <div className=''>
            <Image src={S5} alt='' className="w-[100px] h-[40px] object-contain"/>
          </div>
          <h4 className='text-[18px] font-Open  text-[#000000] font-bold'>Azure Services</h4>
          <p className='text-[18px] text-center text-gray-700 font-Jost'>{`We provide Azure services, including virtual machines, databases, and storage, to help your business operate in the cloud efficiently.`}</p>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Services
