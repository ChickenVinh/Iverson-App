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
    },[request])

    function selectedRequest(index){
        setRequest(data[index])
    }

    function handleConfirm(request_id){
        fetch(`https://vtk-group.tech/scripts/requestLocation.php?request_id=${request_id}&action=confirm`)
        .then((res) => {
            console.log(res)
        })
    }

    function handleDelete(request_id){
        fetch(`https://vtk-group.tech/scripts/requestLocation.php?request_id=${request_id}&action=delete`)
        console.log(request_id + " deleted!")
        setRequest({})
    }

    return(
        <div className = "component-row">
            <table className = "request_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Request ID</th>
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
                                <td>{row.request_id}</td>
                                <td>{row.antenna_id}</td>
                                <td>{row.user_id}</td>
                                <td>
                                    <button onClick = { () => handleConfirm(row.request_id)}>Yes</button>
                                    <button onClick = { () => handleDelete(row.request_id)}>No</button>
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
