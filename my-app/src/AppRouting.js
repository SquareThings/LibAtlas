import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import About from "./pages/About";
import Events from "./pages/Events";
import Tools from "./pages/Tools";
import Maps from "./pages/Maps";
import Resources from "./pages/About";
import DOBLookup from "./pages/DOBLookup";
import VidReporting from "./pages/VidReporting";
import NYC from "./pages/NYC";


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/tools" component={Tools} />
                <Route path="/maps" component={Maps} />
                <Route path="/resources" component={Resources} />
                <Route path="/maps/NYCArrestMap" component={NYC} />
                <Route path="/tools/DOBTickets" component={DOBLookup} />
                <Route path="/tools/NonConsensualVidReport" element={VidReporting} />
            </Switch>

        </Router>
    )
}

export default AppRouter