import React from 'react'

 function ViolationsTable({data}){
    if (!data) {
        return <div>Loading...</div>; // or handle the loading state as needed
    }
    const DisplayData=data.map(
        (info)=>{
            return(
                <tr key={info['OATH/ECB Number']}>
                    <td>{info['OATH/ECB Number']}</td>
                    <td>{info['Certification Status']}</td>
                    <td>{info.Respondent}</td>
                    <td>{info['OATH/ECB Hearing Status']}</td>
                    <td>{info['Violation Date']}</td>
                    <td>{info['Infraction Codes']}</td>
                    <td>{info['OATH/ECB Penalty Due']}</td>
                    <td>{info['Severity']}</td>
                    <td>{info['Inspect Unit']}</td>
                    <td>{info['Violation Type']}</td>



                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>OATH/ECB Number</th>
                    <th>Certification Status</th>
                    <th>Respondent</th>
                    <th>Hearing Status</th>
                    <th>Violation Date</th>
                    <th>Infraction Codes</th>
                    <th>Penalty Due</th>
                    <th>Severity</th>
                    <th>Inspection Unit</th>
                    <th>Violation Type</th>



                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default ViolationsTable;