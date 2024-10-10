import AboutUs from "@/components/about";
import AboutSection from "@/components/about/AboutSection";

import Team from "@/components/about/Team";
import Together from "@/components/about/Together";
import Why from "@/components/about/Why";


export default function Page(){
    return(
        <>
        <AboutUs/>
        <AboutSection/>
     <Why/>
        <Team/>
        <Together/>
      
        </>
    )
}