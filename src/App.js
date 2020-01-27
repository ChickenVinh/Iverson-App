import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data : [{}]
    };
  }

  componentDidMount() {
    fetch('http://gastroconsultung-catering.com/getAllAntennas.php')
  .then((response) => {
    return response.json()})
    .then((json) => {
      console.log(json);
      this.setState({data : json});
    })
	}

  render(){
    return (
      <div className="App">
        <NavigationBar />
        <Table data = {this.state.data}/>
      </div>
    );
  }
}

export default App;
