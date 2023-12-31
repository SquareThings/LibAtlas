import React, { useState } from 'react';
import ViolationsTable from './ViolationsTable';
import '../App.css';

function InputForm() {
    const [houseNum, setHouseNum] = useState('');
    const [streetName, setStreetName] = useState('');
    const [borough, setBorough] = useState('')
    const [apiResponse, setApiResponse] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [vioData, setVioData] = useState([]);
    const violationURL = "https://a810-bisweb.nyc.gov/bisweb/"

    const handleNumberChange = (event) => {
        setHouseNum(event.target.value);
        setShowTable(false)
    };

    const handleStreetChange = (event) => {
        setStreetName(event.target.value);
        setShowTable(false)
    };

    const handleBoroughChange = (event) => {
        setBorough(event.target.value);
        setShowTable(false)
    };

    const handleSubmit = () => {
        // Create a request body object with user inputs
        const requestBody = {
            house_num: houseNum,
            street: streetName,
            borough: borough
        };

        // Make an API request using fetch or any other library of your choice
        fetch('http://127.0.0.1:5000/dob/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the state with the API response
                setApiResponse(data);
            })
            .catch((error) => {
                console.error('API Request Error:', error);
            });
    };
    const handleLinkClick = (event) => {
        // Prevent the default behavior of the anchor tag to prevent navigating to a new page
        event.preventDefault();
        const requestBody = {
            link: apiResponse.body.Violations_Link
        }
        fetch('http://127.0.0.1:5000/dob/violations/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the state with the API response
                setVioData(data);
                setShowTable(true);
            })
            .catch((error) => {
                console.error('API Request Error:', error);
            });
    };


    // You can perform custom actions here when the link is clicked


    return (
        <div>
            <div className="formGrid">
                <div className="InputDiv">
                    <label className='inputText' htmlFor="houseNum">House Number:</label>
                    <input
                        className='inputBox'
                        type="number"
                        id="houseNum"
                        value={houseNum}
                        onChange={handleNumberChange}
                    />
                </div>
                <div className="InputDiv">
                    <label className='inputText' htmlFor="stringInput">Street Name:</label>
                    <input
                        className='inputBox'
                        type="text"
                        id="streetName"
                        value={streetName}
                        onChange={handleStreetChange}
                    />
                </div>
                <div className="InputDiv">
                    <label className='inputText' htmlFor="borough">Borough:</label>
                    <input
                        className='inputBox'
                        type="number"
                        id="borough"
                        value={borough}
                        onChange={handleBoroughChange}
                    />
                </div>
            </div>
            <button className='button' onClick={handleSubmit}>Submit</button>
            <div className="mapTextContainer2">
                <p className='mapText'> The two major DOB notices you should be concerned about are OATH/ECB violations and complaints. If this address has massage-related tickets, they will be under OATH/ECB Violations.
                    Sometimes the DOB received a complaint and has started investigating, but has not issued tickets. You can check whether any potential complaints might be massage-related further below. </p>
                <br></br>
                {apiResponse.body && typeof apiResponse === 'object' ? (
                    <ul>
                        <li className='violationText'> <a href={"http://127.0.0.1:5000/dob/" + apiResponse.body.Violations_Link} onClick={handleLinkClick}>Total Number of OATH/ECB Violations</a>: {apiResponse.body.Violations_Total}</li>
                        <li class='violationOpenText'> Number of Open OATH/ECB Violations: {apiResponse.body.Violations_Open}</li>
                        <br></br>
                        <li class='violationText'>Total Number of Complaints: {apiResponse.body.Complaints_Total}</li>
                        <li className='violationOpenText'>Number of Open Complaints: {apiResponse.body.Complaints_Open}</li>
                    </ul>
                ) : (
                    <p>{apiResponse.body}</p>
                )}
                <br></br>
                {vioData && vioData.length > 0 ? (
                    <p>{vioData.body}</p>
                ) : (
                    <br></br>
                )}
                {apiResponse.body && apiResponse.body.Violations_Total > 0 ?
                    <p className='violationText'>The infraction code for massage-related violations are: 103, 203, 303 (illegal occupancy), 205, 247, 248, 385 (illegal zoning use)</p>

                    : (
                        <br></br>
                    )
                }
                <br></br>
                {showTable && (
                    <ViolationsTable data={vioData.body} />
                    //<p>{ViolationsTable(vioData.body)}</p>
                )}
            </div>
        </div>
    );

}
//{JSON.stringify(vioData.body)}
export default InputForm;