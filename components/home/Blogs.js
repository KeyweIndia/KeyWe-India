import React from 'react'
import Blog1 from '../../public/blogs/greatest.png'
import Blog2 from '../../public/blogs/releasing.png'
import Blog3 from '../../public/blogs/Power.png'
import Image from 'next/image'
import Profile from '../../public/ceo-image.png'
import Link from 'next/link'

const bloglist = [
    {
        id: 1,
        title: `Greatest applications for Azure DevOps and Microsoft Copilot`,
        description: `Using cutting-edge tools and technologies is essential to staying ahead of the curve in the always changing field of software development. #microsoft has been leading the way in enabling developers, and two of their most notable products, #AzureDevOps and #MicrosoftCopilot, have drawn a lot of attention for improving coding efficiency and optimizing development workflows. In this piece, we'll examine the best uses for Azure DevOps and consider how Microsoft Copilot has revolutionized the coding community. `,
        img: Blog1,
        url: `https://www.linkedin.com/pulse/greatest-applications-azure-devops-microsoft-copilot-keyweindia-kcraf/?trackingId=gzIBWaZoRGeaEcF7QTgrpA%3D%3D`,
        publish: '5',

    },
    {
        id: 2,
        title: `Releasing Microsoft Viva Connections improvements for SharePoint Framework 1.18.1`,
        description: `With updates for #MicrosoftViva Connections, Microsoft is pleased to present the general availability of the #SharePoint Framework (SPFx) 1.18.1. With industry-standard web stack tooling, automatic hosting, and single sign-on, #SharePointFramework offers the simplest approach to develop enterprise solutions for #Microsoft365. This streamlines your development process because you can use the same code and solution for all Microsoft 365 offerings.  `,
        img: Blog2,
        url: `https://www.linkedin.com/pulse/releasing-microsoft-viva-connections-improvements-sharepoint-flynf/?trackingId=%2BeeN1wmkRgewTjMf1GeFaA%3D%3D`,
        publish: '5',

    },
    {
        id: 3,
        title: `Power Automate: New Expedient Experiences Revealed`,
        description: `Microsoft is showcasing new ways to use #Copilot in #PowerAutomate to automate and coordinate business activities throughout your company at #MicrosoftIgnite 2023. Microsoft revealed earlier this year how users may use Copilot to help with data ingestion for process mining as well as to design and improve cloud processes. They thrilled to present the newest development of Copilot in Power Automate, which includes additional enhancements for cloud flows and desktop flows as well as #automation activity analysis.`,
        img: Blog3,
        url: `https://www.linkedin.com/pulse/power-automate-new-expedient-experiences-revealed-keyweindia-dy8jc/?trackingId=%2BYWU%2B354Sl%2Bc%2FKMGC3%2F9HQ%3D%3D`,
        publish: '6',

    },
    // {
    //     id: 4,
    //     title: `Transform Your Workplace with ConnectHub: A Microsoft SharePoint Intranet for Maximum Productivity`,
    //     description: `Microsoft is showcasing new ways to use #Copilot in #PowerAutomate to automate and coordinate business activities throughout your company at #MicrosoftIgnite 2023. Microsoft revealed earlier this year how users may use Copilot to help with data ingestion for process mining as well as to design and improve cloud processes. They thrilled to present the newest development of Copilot in Power Automate, which includes additional enhancements for cloud flows and desktop flows as well as #automation activity analysis.`,
    //     img: Blog3,
    //     url: `/blogs/transform-your-workplace-with-connecthub-a-microsoft-sharepoint-intranet-for-maximum-productivity`,
    //     publish: '6',

    // },
    
]

const Blogs = () => {
  return (
    <div className='pb-10' >
      <div className="container mx-auto" >
      <div className='flex flex-col justify-center items-center '>
            <h5 className='text-[18px] uppercase font-Open text-primary font-semibold'>OUR Blogs</h5>
            <h2 className='lg:text-[40px] text-[22px] capitalize text-white text-center font-Open font-bold'>Check Out Our Latest Blogs & News</h2>
<div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
{
   bloglist.map((item, index)=>{
    return <div key={index} className='bg-white rounded-lg shadow-lg'>
         <Link href={item.url} target='_blank' className='glass-card   '>
    <div className=''>
        <Image src={item.img} alt='' className='w-full h-full object-cover rounded-lg'/>
    </div>
    <div className='p-4'>
        <h4 className='text-lg font-semibold hover:text-primary text-justify'>{item.title}</h4>
        <p className='text-gray-700 text-[18px] line-clamp-4 font-Jost text-justify pt-2'>{item.description}</p>
    </div>
    <div className='p-4 flex justify-start items-center gap-2'>
        <div>
            <Image src={Profile} alt='' className='w-[50px] h-[50px] object-contain rounded-full'/>
        </div>
        <div className='flex flex-col justify-start'>
            <h5 className='text-black font-semibold text-[18px] font-Jost'>Arjit Soni</h5>
            <p className='text-[15px] font-Jost text-gray-900'>{item.publish} months ago</p>
        </div>
    </div>
</Link>
    </div>
   })
}


</div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
