import logo from '../assets/fonts/logo.png';
import '../App.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png'
import InputForm from '../Components/InputForm';

function DOBLookup() {
    const background = true;
    return (
        <div className="App">
            <h1 className='headerMapText'>DOB Violations & Complaints Search Tool</h1>
            <div className="mapTextContainer2" style={{ marginBottom: "2%" }}>
                <p className='mapText'>
                    This is a tool to help you identify if you have any active Department of Building violations or complaints at your place of work or home.
                    Enter the house number, street name, and borough of the address you would like to check.  </p> </div>
            <br></br>

            <InputForm />
        </div>
    );
}

export default DOBLookup;
