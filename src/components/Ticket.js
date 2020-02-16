import React, { useState, useEffect } from 'react';
import '../CSS/Ticket.css'

const Ticket = (props) => {
    const [data, setData] = useState({})
    const [ticket_id, setTicket_id] = useState(null)
    

    useEffect(() => {
        setTicket_id(props.ticket_id)
        fetch(`https://vtk-group.tech/scripts/getTicketDetail.php?ticket_id=${ticket_id}`)
            .then(res => {
                return res.json()
            })
            .then((Json) => {
                setData(Json)
            })
    }, [props.ticket_id, ticket_id])
    return(
        <div className = "ticket-view">
            <p>TicketID: {props.ticket_id}</p>
            <p>ModuleID: {data.module_id}</p>
            <p>Open time: {data.open_time}</p>
            <p>userID: {data.user_id}</p>
            <br />
            <p>Comment:</p>
            {
            (data.comment !== undefined) ?
            (data.comment.split("\n").map((row) => (
                <p>{row}</p>
            )))
            : <p>no comment</p>
            }
            <p>Picture:</p>
            <div className = "img-view">{
                (data.picture !== undefined) ?
                    (data.picture.map((row) => (
                        <img src = {row.path} alt = {row.module_id} />
                    )))
                :(<p>No Pictures!</p>)
            }</div>
        </div>
    )
}

export default Ticket;