import logo from '../assets/fonts/logo.png';
import '../App.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png'

function About() {
    const background = true;
    return (

        <div className="App">
            <h1 className="headerMapText">
                <img src={logo} style={{ height: 120, width: 120, marginLeft: "-4%", marginBlockEnd: "-2%" }} />
                About Liberation Atlas

            </h1>
            <div className="mapTextContainer2">
                <p className="mapText">This project is inspired by the praxis of critical cartography and deploys mapping skills to counter the harmful ways in which maps themselves have been used by carceral anti trafficking organizations to endorse the policing and surveillance of massage workers. Maps are frequently used to identify supposedly “illicit” massage businesses, demanding the criminalization of racialized and gendered low wage work. Our maps direct your attention to the various forms of policing that have been afflicted on Asian massage workers. Despite a global shift towards considerations of decriminalization of sex work, the aggressive policing of Asian massage workers—ranging from civilian harassment via filming to the auxiliary policing of building code violations—are all visualized here in different ways. We invite you to engage these maps and share them as a way of amplifying the struggle and power of migrant massage worker organizing </p></div>
        </div>


    );
}

export default About;
