import React from 'react';

export default class TableAntenna extends React.Component {
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
        fetch('http://gastroconsultung-catering.com/getAntenna.php')
      .then((response) => {
        return response.json()})
        .then((json) => {
          console.log(json);
          this.setState({data : json});
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
const RenderRow = (state) =>{
    return state.keys.map((key, index)=>{
        return <td key={state.data[key]}>{state.data[key]}</td>
    })
}
