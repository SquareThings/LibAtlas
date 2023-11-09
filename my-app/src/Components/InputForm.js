import React, { useState } from 'react';

function InputForm() {
    const [houseNum, setHouseNum] = useState('');
    const [streetName, setStreetName] = useState('');
    const [borough, setBorough] = useState('')
    const [apiResponse, setApiResponse] = useState('');
  
    const handleNumberChange = (event) => {
      setHouseNum(event.target.value);
    };
  
    const handleStreetChange = (event) => {
      setStreetName(event.target.value);
    };

    const handleBoroughChange = (event) => {
        setBorough(event.target.value);
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
    
    
    return (
        <div>
            <div>
            <label htmlFor="houseNum">House Number:</label>
            <input
                type="number"
                id="houseNum"
                value={houseNum}
                onChange={handleNumberChange}
            />
            </div>
            <div>
            <label htmlFor="stringInput">Street Name:</label>
            <input
                type="text"
                id="streetName"
                value={streetName}
                onChange={handleStreetChange}
            />
            </div>
            <div>
            <label htmlFor="borough">Borough:</label>
            <input
                type="number"
                id="borough"
                value={borough}
                onChange={handleBoroughChange}
            />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div>
            <p> The two major DOB notices you should be concerned about are OATH/ECB violations and complaints. If this address has massage-related tickets, they will be under OATH/ECB Violations.
                <br></br> 
            Sometimes the DOB received a complaint and has started investigating, but has not issued tickets. You can check whether any potential complaints might be massage-related further below. </p>
            <br></br>
            {apiResponse.body && typeof apiResponse === 'object' ? (
                <ul>
                    <li><b>Total Number of OATH/ECB Violations</b>: {apiResponse.body.Violations_Total}</li>
                    <li><b>Number of Open OATH/ECB Violations</b>: {apiResponse.body.Violations_Open}</li>
                    <br></br>
                    <li><b>Total Number of Complaints</b>: {apiResponse.body.Complaints_Total}</li>
                    <li><b>Number of Open Complaints</b>: {apiResponse.body.Complaints_Open}</li>
                </ul>
                ) : (
                <p></p>
                )}
            </div>
        </div>
        );

}
export default InputForm;