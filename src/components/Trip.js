import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../assets/Trip1.avif"
import Trip2 from "../assets/Trip2.avif"
import Trip3 from "../assets/Trip3.avif"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Discover the world like never before with our Travel and Tour website, designed to inspire your next great escape. From hidden gems to iconic landmarks, we connect you with unforgettable experiences tailored to your interests and budget. Our user-friendly platform makes it easy to browse destinations.!"
                />

                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Discover the world like never before with our Travel and Tour website, designed to inspire your next great escape. From hidden gems to iconic landmarks, we connect you with unforgettable experiences tailored to your interests and budget. Our user-friendly platform makes it easy to browse destinations.!"
                />

                <TripData
                image={Trip3}
                heading="Trip in France"
                text="Discover the world like never before with our Travel and Tour website, designed to inspire your next great escape. From hidden gems to iconic landmarks, we connect you with unforgettable experiences tailored to your interests and budget. Our user-friendly platform makes it easy to browse destinations.!"
                />
            </div>
        </div>
    )
}

export default Trip;