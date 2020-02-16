import React, { useState, useEffect } from 'react';
import '../CSS/Dashboard.css'

import Ticket from './Ticket';

//Table: https://www.youtube.com/watch?v=akxsFgM7DPA

export default function Dashboard(){
    const [ticket, setTicket] = useState(['abc']);
    const [data, setData] = useState([{}])

    function fetchData() {
            console.log("pullig data")
            fetch('https://vtk-group.tech/scripts/getOpenTicketData.php')
            .then((res) => { 
                return res.json()
            })
            .then((Json) => {
                setData(Json)
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
          }, 10000);
          return () => clearInterval(interval);
    }, [])

    return(
        <div className = "component-row">
            <table className = "ticket_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ticket id</th>
                        <th>module id</th>
                        <th>open time</th>
                        <th>user id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>(
                            <tr key = {row.ticket_id} onClick = {() => setTicket(row.ticket_id)}>
                                <td>{index}</td>
                                <td>{row.ticket_id}</td>
                                <td>{row.module_id}</td>
                                <td>{row.open_time}</td>
                                <td>{row.user_id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Ticket ticket_id = { ticket }/>
        </div>
    )
}
