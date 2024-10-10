import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Image from "next/image";
import Contact from "../components/home/Contact";
import WhyChoose from "@/components/home/WhyChoose";
import About from "@/components/home/About";
import Testonomials from "@/components/home/Testonomials";
import Blogs from "@/components/home/Blogs";

export default function Home() {
  return (
    <>
   <HeroSection/>
 
  <WhyChoose/>

   <About/>
   <Services/>
   <Testonomials/>
   <Blogs/>
   <Contact/>
    </>
  );
}
