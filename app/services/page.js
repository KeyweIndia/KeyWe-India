import Services from "@/components/home/Services";
import ServicesSection from "@/components/services";

export default function Page(){
    return(
        <>
        <ServicesSection/>
       <div className="py-20">
       <Services/>
       </div>
        
        </>
    )
}