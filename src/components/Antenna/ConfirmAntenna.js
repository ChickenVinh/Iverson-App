import React, {useState, useEffect} from 'react';
import '../../CSS/ConfirmAntenna.css'
import RequestMap from './RequestMap';

export default function ConfirmAntenna() {
    const [data, setData] = useState([{}])
    const [request, setRequest] = useState([{}])

    useEffect(() => {
        console.log("fetch GPS requests")
        fetch('https://vtk-group.tech/scripts/requestLocation.php')
        .then((res) => { 
            return res.json()
        })
        .then((Json) => {
            setData(Json)
        })
    },[])

    function selectedRequest(index){
        setRequest(data[index])
        console.log(request)
    }

    return(
        <div className = "component-row">
            <table className = "request_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Antenna ID</th>
                        <th>User</th>
                        <th>Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index) => (
                            <tr key = {index} onClick = {() => selectedRequest(index)}>
                                <td>{index}</td>
                                <td>{row.antenna_id}</td>
                                <td>{row.user_id}</td>
                                <td>
                                    <button>Yes</button>
                                    <button>No</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <RequestMap data = {request}/>
        </div>
    );
}
