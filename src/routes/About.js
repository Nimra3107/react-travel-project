import Hero from "../components/Hero.js"
import Navbar from "../components/Navbar.js";
import AboutImg from "../assets/Picture.avif";
import Footer from "../components/Footer.js";
import AboutUs from "../components/AboutUs.js";

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg= {AboutImg}
        title= "About"
        btnClass= "hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )

}

export default About;