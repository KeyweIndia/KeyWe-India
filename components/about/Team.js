import Image from 'next/image'
import React from 'react'
import Profile from '../../public/ceo-image.png'
const Team = () => {
  
  return (
    <div className=' pb-20'>
      <div className='container mx-auto'>
    <section className="  px-8 lg:px-10">
  <h2 className="lg:text-[40px] text-[22px] capitalize text-center text-[#000000] font-bold">Our Managing Directors</h2>
  <hr className="mx-auto w-16 h-1 outline-0 border-0 bg-primary block mt-4 mb-6" />
  <p className="text-center text-xl font-Jost text-gray-700">KeyWe is a group of creative and hardworking people who have come together to form the perfect team.</p>
  <div className="flex flex-col gap-6 mt-16">
    <div className="flex flex-col justify-center items-start lg:flex-row gap-6">
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center rounded-3xl overflow-hidden">
        <Image src={Profile} alt="Hanna Lubin" className="w-full h-full object-contain rounded-3xl  aspect-video lg:aspect-square" />
        <h3 className="text-2xl capitalize text-gray-700 font-semibold pt-4">Arjit Soni</h3>
        <span className="inline-block capitalize text-xl text-gray-700 font-light mt-1.5 mb-5">CEO & Founder</span>
      </div>
      <div className="w-full lg:w-9/12 border bg-primary rounded-3xl flex flex-col justify-center p-8 lg:p-14">

        <p className="text-gray-300 md:text-[17px] text-[14px] text-justify font-Jost leading-normal">{`An IIT Jodhpur Alumni from AI and ML department.  Arjit Soni has completed his masters of technology in Artificial Intelligence from Indian Institute of Technology, Jodhpur. Arjit has completed his B.Tech. in 2012 and into the IT industry since then. He’s having more than 9 years of experience in IT industry where he delivered many projects successfully.`}</p>
        <p className="text-gray-300 md:text-[17px] text-[14px] text-justify font-Jost leading-normal pt-3">{`During his tenure, he has worked with tech giants like Yamaha, Wipro, Infosys, Genpact, LTI etc. He started from SharePoint developer then moved into Presales Technical Consultant role, where he worked closely with Client’s requirements and provide solutions which made huge impact on the organization growth.`}</p>
      </div>
    </div>
    
  </div>
</section>

      </div>
    </div>
  )
}

export default Team

