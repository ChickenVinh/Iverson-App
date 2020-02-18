import React, {useState, useEffect} from 'react';
import '../CSS/Dashboard.css'

export default function TableAntenna(){
    const [data, setData] = useState([{}])

    useEffect(() => {
        console.log("pullig antenna data")
            fetch('https://vtk-group.tech/scripts/getAntenna.php')
            .then((res) => { 
                return res.json()
            })
            .then((Json) => {
                setData(Json["Antennas"])
            })
    },[])

    return(
        <div className = "component-row">
            <table className = "table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Antenna ID</th>
                        <th>Company Site Name</th>
                        <th>Region</th>
                        <th>Province</th>
                        <th>District</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>(
                            <tr key = {row.antenna_id}>
                                <td>{index}</td>
                                <td>{row.antenna_id}</td>
                                <td>{row.company_site_name}</td>
                                <td>{row.region}</td>
                                <td>{row.province}</td>
                                <td>{row.district}</td>
                                <td>{row.site_locate_address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
