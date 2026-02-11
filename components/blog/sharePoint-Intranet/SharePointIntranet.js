import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from '../../../public/ceo-image.png'
import WorkPlace from '../../../public/workplace.jpg'
import Deal from '../../../public/deal-1.webp'
import Dea2 from '../../../public/employee-engagement.webp'
import Dea3 from '../../../public/grow-1.webp'
import Dea4 from '../../../public/efficacy-1.webp'



const SharePointIntranet = () => {
    return (
        <div className={`h-full pt-[140px] pb-5 mb-10 bg-cover bg-center  text-white`}>
            <div className=' h-full w-full flex justify-center items-center'>
                <div className='container mx-auto'>
                    
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Image src={Profile} alt='About' width={200} height={200} objectFit='cover' className='rounded-full' />
                        </div>
                        <p className='text-gray-300 md:text-[17px] text-[14px] text-justify font-Jost leading-normal pt-4'>13 November 2024</p>
                        <h4 className='text-2xl capitalize text-white font-semibold pt-2'>Arjit Soni</h4>
                        <p className='text-gray-300 md:text-[17px] text-[14px] text-justify font-Jost leading-normal pt-2'>Engagement Manager ADA at Decision Inc.</p>
                    </div>
                    <p className='text-gray-200 md:text-[17px] text-[14px] text-justify tracking-wide font-Jost leading-normal pt-7'>{`In today’s fast-paced business world, wasted time means lost opportunities. Searching for files, managing scattered information, and juggling multiple tools shouldn’t slow you down. At Keywe India, we’ve developed a modern intranet solution powered by Microsoft SharePoint to help your team work smarter, not harder.`}</p>
                    <div className='flex gap-10 justify-center items-center'>
                        <div className='lg:w-[50%] w-full'>
                            <h2 className="text-[22px] capitalize  text-white pt-4 font-bold">Transforming Challenges into Opportunities</h2>
                            <p className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal pt-4'>{`Does your team face these common hurdles?
workforce time:`}</p>
                            <ul className='flex flex-col gap-2 pt-4'>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Organized Information:`}</span>{`Easily find important data in one place without wasting time.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Better Teamwork:`}</span>{`Boost collaboration with modern tools and connected teams.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Remote Work Made Easy:`}</span>{`Keep remote employees engaged and aligned effortlessly.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Simplified Communication: `}</span>{`Reduce tool overload and stay focused with clear, streamlined channels.`}</li>
                            </ul>
                            <p className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal pt-5'>{`These obstacles consume time that could be spent on strategic work. A SharePoint intranet like ConnectHub is the key to overcoming these challenges.`}</p>
                        </div>
                        <div className='lg:w-[50%] w-full'>
                            <div>
                                <Image src={WorkPlace} alt='' className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-10 justify-center items-center pt-10 '>
                        <div className='lg:w-[50%] w-full'>
                            <div>
                                <Image src={WorkPlace} alt='' className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='lg:w-[50%] w-full'>
                            <h2 className="text-[22px] capitalize  text-white pt-4 font-bold">How Keywe ConnectHub Empowers Your Team</h2>
                            <p className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal pt-4'>{`We transform workplaces by centralizing information, boosting collaboration, and simplifying access to critical tools:`}</p>
                            <ul className='flex flex-col gap-2 pt-4'>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Personalized Dashboards:`}</span>{`Tailored landing pages provide quick access to everything your team needs.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Personalized Dashboards:`}</span>{`A single space for all company documents and best practices—no more wasted searches.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Document Management:`}</span>{`Secure, up-to-date, and version-controlled files for easy access anytime.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Mobile Friendly:  `}</span>{`Work seamlessly from any device, whether at home or on the go.`}</li>
                                <li className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal '><span className='font-bold'>{`– Role-Based Security:`}</span>{`Protect sensitive information while giving employees what they need.`}</li>
                            </ul>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center py-10  border-t-2 border-t-primary'>
                        <h3 className="text-[22px] capitalize  text-white pt-4 font-bold">Key Benefits of ConnectHub</h3>
                        <p className='text-gray-200 md:text-[17px] text-[14px] text-center  tracking-wide font-Jost leading-normal pt-4 '>{`ConnectHub brings measurable improvements to productivity and efficiency, enabling your team to reallocate

time spent on administrative and non-productive tasks toward more strategic, impactful work.`}</p>
                        <div className='flex flex-wrap justify-center items-start gap-7 pt-10'>
                            <div className='flex flex-col justify-center items-center gap-3 w-[250px]'>
                                <div>
                                    <Image src={Deal} alt='' className='w-[100px] h-[100px] object-cover' />
                                </div>
                                <h4 className="text-[18px] capitalize  text-center text-white font-bold">Enhanced Collaboration</h4>
                                <p className='text-gray-200 md:text-[17px] text-[14px] text-center  tracking-wide font-Jost leading-normal '>{`Real-time co-authoring, task assignment, and seamless integration with Microsoft 365 tools like Teams and Outlook cut down on delays and miscommunication.`}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 w-[250px]'>
                                <div>
                                    <Image src={Dea2} alt='' className='w-[100px] h-[100px] object-cover' />
                                </div>
                                <h4 className="text-[18px] capitalize  text-center text-white font-bold">Boosted Employee Engagement</h4>
                                <p className='text-gray-200 md:text-[17px] text-[14px] text-center  tracking-wide font-Jost leading-normal '>{`Personalised news feeds and resources keep employees informed and connected, strengthening their alignment with organisational goals.`}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 w-[250px]'>
                                <div>
                                    <Image src={Dea3} alt='' className='w-[100px] h-[100px] object-cover' />
                                </div>
                                <h4 className="text-[18px] capitalize text-center  text-white font-bold">Scalability and
                                    Customisation</h4>
                                <p className='text-gray-200 md:text-[17px] text-[14px] text-center  tracking-wide font-Jost leading-normal '>{`ConnectHub is adaptable to your business needs, growing alongside your organisation as it evolves.`}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 w-[250px]'>
                                <div>
                                    <Image src={Dea4} alt='' className='w-[100px] h-[100px] object-cover' />
                                </div>
                                <h4 className="text-[18px] capitalize text-center text-white font-bold">20% Workforce Efficiency Improvement</h4>
                                <p className='text-gray-200 md:text-[17px] text-[14px] text-center  tracking-wide font-Jost leading-normal '>{`Studies by McKinsey & Company show that collaboration tools like ConnectHub can improve productivity by over 20%—time that employees can spend on strategic initiatives rather than administrative tasks.`}</p>
                            </div>
                        </div>


                    </div>

                    <div className='flex gap-10 justify-center items-center pt-10 '>
                        <div className='lg:w-[50%] w-full'>
                            <div>
                                <Image src={WorkPlace} alt='' className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='lg:w-[50%] w-full'>
                            <h2 className="text-[22px] capitalize  text-white pt-4 font-bold">Help Your Team Focus on What Matters Most</h2>
                            <p className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal pt-4'>{`With a SharePoint intranet, you can clear away the clutter of scattered information, communication overload, and slow teamwork. This solution helps your team work better, faster, and focus on what truly matters.`}</p>
                          
                            <h2 className="text-[22px] capitalize  text-white pt-4 font-bold">{`Ready to Boost Your Team’s Productivity?`}</h2>
                            <p className='text-gray-200 md:text-[17px] text-[14px]  tracking-wide font-Jost leading-normal pt-4'>{`Book a demo now and see how our intranet can help you build a more efficient and successful workplace.`}</p>
                           <div className=' mt-10'>
                           <Link href={'/contact'} className="bg-transparent border-2 border-primary hover:bg-primary rounded-full px-7 py-3">Book A Demo</Link>
                           </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SharePointIntranet
