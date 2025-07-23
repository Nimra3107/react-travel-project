import Hero from "../components/Hero.js"
import Navbar from "../components/Navbar.js";
import ContactImg from "../assets/contact.jpg";
import Footer from "../components/Footer.js";
import ContactForm from "../components/ContactForm.js";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg= {ContactImg}
        title= "Contact"
        btnClass= "hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )

}

export default Contact;