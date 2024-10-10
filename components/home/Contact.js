"use client";
import { useState, useRef } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactImage from '../../public/Call center-pana.svg';
import Image from 'next/image';
import emailjs from "@emailjs/browser";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import { FaFacebookF,FaInstagram ,FaLinkedinIn ,FaYoutube  } from "react-icons/fa";
import Scanner from '../../public/scanner.png';
import Link from 'next/link';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    console.log("Sending email with values:", { name, email, message, phone });

    emailjs.sendForm('service_c8pjofr', 'template_q3xmmoo', form.current, 'Kseuap6YdlMHv9knl')
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        toast.success("Message sent successfully!");
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }, (error) => {
        console.error("Error sending email:", error.text);
        toast.error("Error sending message. Please try again.");
      });
  };

  return (
    <div className=''>
      <div className='container mx-auto'>
        <div>
          <h2 className="lg:text-[40px] text-[22px] capitalize text-center text-white font-bold">
            Get In Touch With Us
          </h2>
        </div>
        <div className='flex lg:flex-row flex-col justify-center items-center gap-10 bg-transparent/20 h-full border-2 text-white p-10 rounded-[10px] border-primary my-10'>
        <div className='lg:w-[50%] w-full flex flex-col justify-start items-start gap-5'>
<div className='flex flex-col gap-3'>
<h3 className='lg:text-[40px] text-[22px] font-bold'>Contact US</h3>
 <p className='text-[18px] font-Jost text-gray-200'>{`Get in touch with keyWe for advanced IT solutions. Improve your business with our skills. Contact us today for success!`}</p>
</div>
 <div className='flex flex-col justify-start items-start gap-2'>
 <div className='flex justify-start items-center gap-3'>
  <span>  <IoCall className='text-[20px]'/></span>
    <Link href="tel:+919414584766" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-300'>{`+91 9414584766`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoMdMail className='text-[20px] '/></span>
    <Link href="mailto:Sales@keywe.in" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-300'>{`Sales@keywe.in`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoMdMail className='text-[20px] '/></span>
    <Link href="mailto:HR@keywe.in" className='font-Jost text-[15px] hover:text-primary duration-200 text-gray-300'>{`HR@keywe.in`}</Link>
  </div>
  <div className='flex justify-start items-center gap-3'>
  <span>  <IoLocationSharp className='text-[20px]'/></span>
    <p className='font-Jost text-[15px] text-gray-300'>{`G-3, Padmavati B Colony, Padmavti Colony, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019`}</p>
  </div>
 </div>
 <ul className='flex justify-center items-center gap-3'>
       <Link href={'https://www.facebook.com/profile.php?id=100078043957514'} target='_blank' className='bg-black/55 p-2 rounded-full'> <FaFacebookF className='hover:text-primary ease-in-out duration-200'/></Link>
        {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'><FaXTwitter className='hover:text-primary ease-in-out duration-200'/></Link> */}
        <Link href={'https://www.instagram.com/keyweindia'} target='_blank' className='bg-black/55 p-2  rounded-full'><FaInstagram className='hover:text-primary ease-in-out duration-200'/></Link>
      <Link href={'https://www.linkedin.com/company/keyweindia'} target='_blank' className='bg-black/55  p-2 rounded-full'>  <FaLinkedinIn className='hover:text-primary ease-in-out duration-200'/></Link>
      {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'>  <FaYoutube className='hover:text-primary ease-in-out duration-200'/></Link> */}
        </ul>
</div>
          <div className='lg:w-[50%] w-full flex flex-col justify-start items-center gap-5 '>
         <h4 className='text-white md:text-[20px] text-[16px]'>Scan the QR and fill the form</h4>
         <div className=''>
            <Image src={Scanner} alt='' className='w-[200px] h-[200px] object-cover' />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
