import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Dashboard.css'

import Ticket from './Ticket';

//Table: https://www.youtube.com/watch?v=akxsFgM7DPA

export default function Dashboard(){
    const data = 
    [
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20LSN1002_20200209_008",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 16:31:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "SC_20LSN1002_20200208_000",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-08 13:38:42",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20LSN1002_20200209_008",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 16:31:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "SC_20LSN1002_20200208_000",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-08 13:38:42",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20LSN1002_20200209_008",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 16:31:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "SC_20LSN1002_20200208_000",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-08 13:38:42",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1046_20200210_003",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:27:02",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1046_20200210_004",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:27:03",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1046_20200210_005",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1064_20200210_010",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:42:45",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20LSN1002_20200209_008",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 16:31:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "SC_20LSN1002_20200208_000",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-08 13:38:42",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20LSN1002_20200209_008",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 16:31:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "SC_20LSN1002_20200208_000",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-08 13:38:42",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20HNI1046_20200210_006",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "BD_20LSN1002_20200209_008",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 16:31:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "SC_20LSN1002_20200208_000",
            "module_id": "Máy phát điện",
            "open_time": "2020-02-08 13:38:42",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1046_20200210_003",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:27:02",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1046_20200210_004",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:27:03",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1046_20200210_005",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:29:26",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1064_20200210_010",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:42:45",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1064_20200210_011",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:42:45",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1081_20200209_006",
            "module_id": "Cột",
            "open_time": "2020-02-09 13:43:58",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1081_20200209_007",
            "module_id": "Cột",
            "open_time": "2020-02-09 13:43:59",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1112_20200209_002",
            "module_id": "Cột",
            "open_time": "2020-02-09 13:41:56",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_20HNI1112_20200209_003",
            "module_id": "Cột",
            "open_time": "2020-02-09 13:42:17",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_22HNI1001_20200209_001",
            "module_id": "Cột",
            "open_time": "2020-02-09 13:41:48",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_31HNI1016_20200209_004",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 13:43:07",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_31HNI1016_20200209_005",
            "module_id": "Đường điện nước",
            "open_time": "2020-02-09 13:43:08",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_31HNI1018_20200210_007",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:32:08",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_31HNI1019_20200209_000",
            "module_id": "Điện trong phòng",
            "open_time": "2020-02-09 13:41:17",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_31HNI1019_20200210_008",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:36:49",
            "closing_time": null,
            "user_id": "admin"
        },
        {
            "ticket_id": "UC_31HNI1019_20200210_009",
            "module_id": "Cột",
            "open_time": "2020-02-10 15:36:50",
            "closing_time": null,
            "user_id": "admin"
        }
    ]

    const [ticket, setTicket] = useState([]);
    /*const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(setData)
            
    }, [])*/
 
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
                            <tr key = {Math.random()} onClick = {() => setTicket(row.ticket_id)}>
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
