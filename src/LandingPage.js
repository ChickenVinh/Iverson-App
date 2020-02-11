import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard'

import AddAntenna from './components/Antenna/AddAntenna';
import MapAntenna from './components/Antenna/MapAntenna';
import TableAntenna from './components/Antenna/TableAntenna';

import AddUser from './components/User/AddUser';
import ConfirmUser from './components/User/ConfirmUser';
import TableUser from './components/User/TableUser';

const LandingPage = () => {
    return (
      <div>
        <NavigationBar />
        <Route path = "/dashboard" exact component = { Dashboard } />
        <Route path = "/dashboard/add_antenna" exact component = { AddAntenna } />
        <Route path = "/dashboard/map_antenna" exact component = { MapAntenna } />
        <Route path = "/dashboard/table_antenna" exact component = { TableAntenna } />
        <Route path = "/dashboard/add_user" exact component = { AddUser } />
        <Route path = "/dashboard/confirm_user" exact component = { ConfirmUser } />
        <Route path = "/dashboard/table_user" exact component = { TableUser } />
      </div>
    );
}

export default LandingPage;