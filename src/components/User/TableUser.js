import React from 'react';

export default class TableUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [{}]
         };
        this.getKeys = this.getKeys.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
    }
    
    getKeys = function() {
        return Object.keys(this.state.data[0]);
    }

    getHeader = function() {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key ={key}>{key.toUpperCase()}</th>
        });
    }

    getRowsData = function() {
        var items = this.state.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key = {index}><RenderRow key = {index} data = {row} keys = {keys} /></tr>
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        return response.json()})
        .then((json) => {
          this.setState({data : json});
          console.log();
        })
    }

    render() {
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
}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}
