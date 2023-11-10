import logo from '../assets/fonts/logo.png';
import '../App.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png';
import { InstagramEmbed } from 'react-social-media-embed';


function Events() {
    const background = true;
    return (

        <div className="App">
            <h1 className="headerMapText">
                Upcoming Events
            </h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', justifySelf: 'center', marginLeft: "10%", marginRight: "10%" }}>
                <InstagramEmbed url="https://www.instagram.com/p/CyD17dUujPX/?utm_source=ig_embed&amp;utm_campaign=loading" width={328} height={420} />
                <InstagramEmbed url="https://www.instagram.com/p/CyTWA4euAxN/?utm_source=ig_embed&amp;utm_campaign=loading" width={328} height={420} />
                <InstagramEmbed url="https://www.instagram.com/p/CvNvQDQuXEp/?utm_source=ig_embed&amp;utm_campaign=loading" width={328} height={420} />

            </div>
            <div className="embedMap" style={{ marginTop: "5%" }}>
                <iframe src={"https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23D50000&ctz=America%2FNew_York&showPrint=1&title=%20&src=bGliZXJhdGlvbmF0bGFzQGdtYWlsLmNvbQ&color=%23039BE5"} style={{ width: "1100px", height: "700px" }}></iframe>
            </div>
        </div >
    );
}

export default Events;
