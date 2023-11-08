import logo from '../assets/fonts/logo.png';
import '../App.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png'

function VidReporting() {
    const background = true;
    return (



        <div className="App">
            <h1 className="headerMapText">
                Nonconsensual Video Reporting
            </h1>
            <div className="mapTextContainer2"><p className="mapText">
                In March 2021 the Manhattan DA’s office announced that it would no longer prosecute people charged on counts of prostitution, and closed over 1,000 open prostitution related cases.  {'\n'} While this follows a nationwide trend towards the decriminalization of sex work, migrant massage workers have become ensnared in a particular type of racialized policing of sex and low wage work.</p></div>

            <div className="embedMap">
                <iframe src={"https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23D50000&ctz=America%2FNew_York&showPrint=1&title=%20&src=bGliZXJhdGlvbmF0bGFzQGdtYWlsLmNvbQ&color=%23039BE5"} style={{ width: "1100px", height: "700px" }}></iframe>
            </div>
        </div>


    )
}

export default VidReporting;
