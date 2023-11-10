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
                In the past several months, street based workers have become the targets of unconsensual filming by journalists, vloggers, and curious passers by. The posted videos are circulated globally, often with inflammatory racist, xenophobic, and whorephobic captions, that put workers in great danger. We invite workers and allies to report such videos here </p></div>

            <div className="embedMap" style={{ marginTop: "5%" }} >
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyOAmT5LwSE6xgLqAhNWZHg3DtywJ4gFjSAM5KS9iIeAWR-w/viewform?embedded=true" style={{ width: "640", height: "1492", borderBlock: "none", border: "none", backgroundColor: "#eae7d1" }}>Loading…</iframe>

            </div>
        </div >


    )
}

export default VidReporting;
