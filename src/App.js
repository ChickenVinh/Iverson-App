import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Tickets from './components/Tickets'

import AddAntenna from './components/Antenna/AddAntenna';
import MapAntenna from './components/Antenna/MapAntenna';
import TableAntenna from './components/Antenna/TableAntenna';

import AddUser from './components/User/AddUser';
import ConfirmUser from './components/User/ConfirmUser';
import TableUser from './components/User/TableUser';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {  };
  }

  render(){
    return (
      <div className = "App">
        <NavigationBar />
        <Route path = "/" exact component = { Tickets } />
        <Route path = "/add_antenna" exact component = { AddAntenna } />
        <Route path = "/map_antenna" exact component = { MapAntenna } />
        <Route path = "/table_antenna" exact component = { TableAntenna } />
        <Route path = "/add_user" exact component = { AddUser } />
        <Route path = "/confirm_user" exact component = { ConfirmUser } />
        <Route path = "/table_user" exact component = { TableUser } />
      </div>
    );
  }
}

export default App;
