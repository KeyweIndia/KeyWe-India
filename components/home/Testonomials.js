"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import C from '../../public/images.jpg'
import C1 from '../../public/unnamed.png'
import Image from "next/image";


const Learners = [
  {
    id: 1,
    img: C1,
    title: "Reshma Bond",
    description:
      `Keywe India Private Limited
      is a highly skilled and dedicated SharePoint Developers team. I have had the privilege of working closely with Keywe for the past 12 months and during this time, I have been consistently impressed by their exceptional expertise and professionalism. Keywe possesses a deep understanding of SharePoint and Microsoft technology and has demonstrated the ability to design, develop, and maintain complex SharePoint solutions. Keywe has a strong command of SharePoint's various components, including site architecture, content management, workflows, and integration with other systems. Their problem-solving skills are remarkable, and he consistently delivers innovative solutions to meet our organization's needs. What sets Keywe apart is their commitment to excellence and attention to detail.`,
  },
  {
    id: 2,
    img: C,
    title: "Nikail Ramchandani",
    description:
      "Working with Arjit and Keywe has been a pleasure from the start. I came to Arjit with a project which was only something that I had envisioned, and he was successfully able to help me turn this into a reality. Arjit helped me to build a platform where I was able to seamlessly connect with my customers which helped limit day to day communication on email as most of the operations were made possible on the platform. The after sales services offered by Keywe, were very helpful, Arjit and his team were always available when I needed them to get on a team and if the task was urgent, he ensured it was completed by the deadline set. I have had a great experience working with Arjit and his team so far, and because of this I have continued to go to him with more projects to help enhance the efficiency of operations at my company.",
  },
  {
    id: 3,
    img: C,
    title: "Francesco z.",
    description:
      " We collaborated KeyWe to work on our SharePoint environment and create a Power App to track very detailed expenses. We are delighted with their knowledge and work ethic. He understood what we needed; approached the work in such a way that made it easy for us to understand. I would recommend KeyWe to anyone wanted to work on both SP and PowerApps",
  },
  
 
];

const Testonomials = () => {
  const settings = {
    infinite: true, // Set to true for infinite loop
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={``}>
       <div className='  py-20 '>
       <div className="container mx-auto">
        <div
          className={`flex flex-col justify-center items-center space-y-2  pb-16 `}
        >
          <p className="text-[18px] font-Open font-medium text-primary uppercase"> OUR testimonial</p>
          <h3 className="text-white text-center lg:text-[40px] text-[22px] font-[700]">
          Experience the Delight of Satisfied Clients with Our Remarkable Work
          </h3>
        </div>
        <div
          className={` w-full overflow-hidden mx-auto`}
        >
          <Slider {...settings}>
            {Learners.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex  justify-center  items-center    cursor-pointer gap-6   "
                >
                 <div className="lg:h-[430px] h-full mr-3 flex flex-col justify-start items-start bg-transparent/10  border-2 border-primary  p-[25px] shadow-md shadow-transparent overflow-hidden rounded-md">
                 <div className="flex flex-col justify-start items-start gap-3">
                    <FaQuoteLeft className="text-[30px]  text-yellow-400" />
                    <span className="lg:text-[14px] text-gray-300 text-[14px] font-Jost text-justify  tracking-wide  leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                   <div className="flex justify-center items-center gap-3 mt-5">
                    <div className="" >
                      <Image src={item.img} alt="client" className="w-[60px] h-[60px] object-cover rounded-full border-2 "/>
                    </div>
                  <div className="flex flex-col justify-start items-start">
                  <span className=" text-[22px] font-medium text-white  ">
                    {item.title}
                  </span>
                  <div className="flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400"/>
                    <FaStar className="text-yellow-400"/>
                    <FaStar className="text-yellow-400"/>
                    <FaStar className="text-yellow-400"/>
                    <FaStar className="text-yellow-400"/>
                  </div>
                  </div>
                   </div>
                 
                 </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
       </div>
     
    </div>
  );
};

export default Testonomials;

