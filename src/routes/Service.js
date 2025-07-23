import Hero from "../components/Hero.js"
import Navbar from "../components/Navbar.js";
import ServiceImg from "../assets/Service.jpg";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";
function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg= {ServiceImg}
        title= "Service"
        btnClass= "hide"
        />
        <Trip/>
        <Footer/>
        </>
    )

}

export default Service;