import logo from '../assets/fonts/logo.png';
import '../App.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png'

function Events() {
    const background = true;
    return (

        <div className="App">
            <h1 className="headerMapText">
                Events for Workers
            </h1>
            <div className="embedMap">
                <iframe src={"https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23D50000&ctz=America%2FNew_York&showPrint=1&title=%20&src=bGliZXJhdGlvbmF0bGFzQGdtYWlsLmNvbQ&color=%23039BE5"} style={{ width: "1100px", height: "700px" }}></iframe>
            </div>
        </div>


    );
}

export default Events;
