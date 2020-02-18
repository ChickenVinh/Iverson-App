import React, {useState, useEffect} from 'react';
import '../CSS/Dashboard.css'

//Table: https://www.youtube.com/watch?v=akxsFgM7DPA

export default function TableUser(){
    const [data, setData] = useState([{}])

    useEffect(() => {
        console.log("pullig user data")
            fetch('https://vtk-group.tech/scripts/getUserData.php')
            .then((res) => { 
                return res.json()
            })
            .then((Json) => {
                setData(Json)
            })
    },[])

    return(
        <div className = "component-row">
            <table className = "table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>(
                            <tr key = {row.user_id}>
                                <td>{index}</td>
                                <td>{row.user_id}</td>
                                <td>{row.first_name}</td>
                                <td>{row.last_name}</td>
                                <td>{row.created_at}</td>
                                <td>{row.updated_at}</td>
                                <td>{row.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
