import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Table from './components/Table';
import { Route } from 'react-router-dom';
import RouterTest from './components/RouterTest'

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
        {/*<Route path = "/antennaTable" component = {Table data = this.state.data} />*/}
        {/*<Table data = {this.state.data}/>*/}
        <h1>Home</h1>
        <Route path = "/router_test" component = {RouterTest} />
      </div>
    );
  }
}

export default App;
