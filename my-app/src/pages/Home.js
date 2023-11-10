import '../App.css';
import React from 'react';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Home() {
    const background = true;
    return (
        <div className="App">
            <div id="headerDiv">
                <p className="headerText">
                    Liberation Atlas
                </p>
                <p className="headerTwoText">Data Justice for Migrant Massage Workers</p>
                <div id="headerLine"></div>
                <p className='headerThreeText'> Brown University Center For Slavery & Justice X Red Canary Song</p>
                {/* <p className='headerFourText'> Liberation Atlas is an ongoing project by the <a href="https://slaveryandjustice.brown.edu/progress/center-study-slavery-and-justice" > Center for The Study of Slavery and Justice research cluster </a> at Brown University and <a href="https://www.redcanarysong.net/"> Red Canary Song </a> to equalize access to data for migrant massage and sex workers in New York City. We seek to support workers’ rights over their information and to fight against racist, xenophobic, and dehumanizing narratives about their labor.
                </p> */}
            </div>
            <img id='redD' src={redDecor} />
            <img id='bird' src={bird} />
            <div className='containCenter'>
                <Link to="/maps/NYCArrestMap" className='clear'>
                    <div className='divMapNYC'> <p style={{ textAlign: "left", marginLeft: "6%" }}>View Massage Policy Impacts on Police Activity</p></div>
                </Link>
                <Link to="/tools/NonConsensualVidReport" className='clear'>
                    <div className='divMapNYC'> <p style={{ textAlign: "left", margin: "6%" }}>Report Nonconsensual Videos</p></div>
                </Link>
                <Link to="/events" className='clear'>
                    <div className='divMapNYC'><p style={{ textAlign: "left", margin: "6%" }}>Find Events for Workers, <br></br> By Workers</p></div>
                </Link>

            </div>

        </div>)

}
export default Home;
