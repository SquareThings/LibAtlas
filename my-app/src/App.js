import logo from './assets/fonts/logo.png';
import './App.css';
import React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import redDecor from './assets/fonts/redDecor.png';
import bird from './assets/fonts/bird.png';
import NYC from "./pages/NYC";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppRouter from './AppRouting';
import About from "./pages/About";
import Events from "./pages/Events";
import Tools from "./pages/Tools";
import Maps from "./pages/Maps";
import Resources from "./pages/Resources";
import DOBLookup from "./pages/DOBLookup";
import VidReporting from "./pages/VidReporting";
import Home from "./pages/Home";

function App() {
  const background = true;

  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/events"> <Events /> </Route>
          <Route exact path="/tools"> <Tools /> </Route>
          <Route path="/tools/DOBTickets"> <DOBLookup /> </Route>
          <Route path="/tools/NonConsensualVidReport"> <VidReporting /> </Route>
          <Route exact path="/maps"> <Maps /> </Route>
          <Route path="/maps/NYCArrestMap"> <NYC /> </Route>
          <Route path="/resources"> <Resources /> </Route>
        </Switch>
      </div>
    </Router>)
}
export default App;

{/* return (
    <Router>
      <div className="App">
        <div>
          <ResponsiveAppBar />
        </div>
        <Switch>
          <Route path="/nyc" component={NYC} />
          <Route exact path="/">
            <div id="headerDiv">
              <p className="headerText">
                Liberation Atlas
              </p>
              <p className="headerTwoText">Data Justice for Migrant Massage Workers</p>
              <div id="headerLine"></div>
              <p className='headerThreeText'> Brown University Center For Slavery & Justice X Red Canary Song</p>
            </div>
            <img id='redD' src={redDecor} />
            <img id='bird' src={bird} />
            <div className='containCenter'>
              <Link to="/nyc" className='clear'>
                <div id='divMapNYC'> <p>NYC</p></div>
              </Link>
              <div id='divMapNJ'><p>NJ</p></div>
              <div id='divMapPVD'></div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  ); */
}


