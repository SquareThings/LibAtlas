import logo from './assets/fonts/logo.png';
import './App.css';
import React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import redDecor from './assets/fonts/redDecor.png';
import bird from './assets/fonts/bird.png';
import NYC from "./pages/NYC";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const background = true;
  return (
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
  );
}

export default App;
