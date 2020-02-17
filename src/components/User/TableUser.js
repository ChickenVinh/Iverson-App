import React, { useState, useEffect } from 'react';

//Table: https://www.youtube.com/watch?v=akxsFgM7DPA

export default function TableUser(){

    getRowsData = function() {
        var items = this.state.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key = {index}><RenderRow key = {index} data = {row} keys = {keys} /></tr>
        });
    }

    userEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        response.json()})
        .then((json) => {
          this.setState({data : json});
        })
        }
    )


    return(
        <div className='table-component'>
            <table className='table'>
                <thead>
                    <tr>{this.getHeader()}</tr>
                </thead>
                <tbody>
                    {this.getRowsData()}
                </tbody>
            </table>
        </div>
    );
    
}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}
