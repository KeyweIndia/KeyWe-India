"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/logo3.png'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileNav from './MobileNav'

const MainHeader = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMobileNav();
  };

  return (
    <div className='shadow-xl fixed border-b border-white top-0 w-full z-50 bg-[#ffffff] text-primary'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-1 '>
          <Link href={'/'}>
            <Image src={Logo} alt='logo' className='w-full h-[50px] py-[2px] object-contain'/>
          </Link>
          <ul className='hidden lg:flex justify-center items-center gap-7'>
            <li>
              <Link href={'/'} passHref  className={`font-Open text-[18px] font-medium hover:text-primary duration-200 capitalize ${activeLink === '/' ? 'text-primary' : ''}`} onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about'} passHref className={`font-Open text-[18px] font-medium hover:text-primary duration-200 capitalize ${activeLink === '/about' ? 'text-primary' : ''}`} onClick={() => handleLinkClick('/about')}>
                About us
              </Link>
            </li>
            <li>
              <Link href={'/services'} passHref  className={`font-Open text-[18px] font-medium hover:text-primary duration-200 capitalize ${activeLink === '/services' ? 'text-primary' : ''}`} onClick={() => handleLinkClick('/services')}>
              Services
              </Link>
            </li>
            <li>
              <Link href={'/blogs'} passHref className={`font-Open text-[18px] font-medium hover:text-primary duration-200 capitalize ${activeLink === '/blogs' ? 'text-primary' : ''}`} onClick={() => handleLinkClick('/blogs')}>
           Blogs
              </Link>
            </li>
          </ul>
          <div className='flex justify-center items-center gap-2'>
            <Link href={'/contact'} className="btn2">Get in touch</Link>
            <div className='lg:hidden flex flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px]' onClick={toggleMobileNav}>
              <GiHamburgerMenu className='text-[28px] cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav} />}
    </div>
  )
}

export default MainHeader
