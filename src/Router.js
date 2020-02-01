import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Auth from './Auth';

const Router = (props) => (
    <Switch>
        <Route exact path = '/' component = {Login} />
        <PrivateRoute path = '/dashboard' component = {Dashboard} />
    </Switch>
)

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {props =>
            Auth.getAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to = {{
                        pathname: '/'
                    }}
                />
            )
        }
    />
);

export default Router;