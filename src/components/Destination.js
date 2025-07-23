import Mountain1 from "../assets/Mountain1.avif"
import Mountain2 from "../assets/Mountain2.avif"
import Mountain3 from "../assets/Mountain3.avif"
import Mountain4 from "../assets/Mountain4.avif"
import DestinationData from "./DestinationData.js"
import "./DestinationStyles.css"
const Destination =()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see within a time frame</p>
            <DestinationData
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="Welcome to our Travel and Tour website, your gateway to unforgettable adventures around the world. We offer expertly curated travel packages, personalized tour plans, and insider tips to help you explore stunning destinations with ease. Whether you're seeking a relaxing beach getaway, a cultural city tour, or a thrilling outdoor experience, our platform makes planning your next journey simple, exciting, and hassle-free. Let us turn your travel dreams into reality!"
            img1={Mountain1}
            img2={Mountain4}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Discover the world like never before with our Travel and Tour website, designed to inspire your next great escape. From hidden gems to iconic landmarks, we connect you with unforgettable experiences tailored to your interests and budget. Our user-friendly platform makes it easy to browse destinations, compare tour options, and book everything in one place. Start your journey with us and explore the beauty, culture, and adventure that the world has to offer.!"
            img1={Mountain2}
            img2={Mountain3}
            />
        </div>
    )
}

export default Destination 