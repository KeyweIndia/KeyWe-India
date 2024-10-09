"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";


const MobileNav = ({ onLinkClick }) => {



  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
   
  };

  

 
  return (
    <div className=" bg-[#1A237E] z-50 top-0  border-b-2 border-b-primary text-white  py-7 fixed w-full  lg:py-0 shadow">
      <div className="container mx-auto">
        <ul className="lg:hidden relative flex flex-col justify-center items-start gap-5 ">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Home
          </Link>
          
          <Link
       href={'/about'}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
      About
          </Link>
          <Link
        href={'/services'}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
       Services
          </Link>
          <Link
         href={'/blogs'}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
         blog
          </Link>
         
        


         
        </ul>
        <div className="lg:hidden flex flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[5px] absolute top-4 right-3 ">
          <span onClick={handleLinkClick}><IoClose className="text-[28px] cursor-pointer"/></span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
