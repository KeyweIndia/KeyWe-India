import ContactSection from "@/components/contact/ContactSection";
import ContactUs from "../../components/contact";
import Contact from "@/components/home/Contact";
import Map from "@/components/contact/Map";
import ContactForm from "@/components/contact/ContactForm";

export default function Page(){
    return(
        <>
        <ContactUs/>
        {/* <ContactSection/> */}
        <Contact/>
        <ContactForm/>
        <Map/>
        </>
    )
}