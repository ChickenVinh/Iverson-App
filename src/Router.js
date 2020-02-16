import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Auth from './Auth';

const Router = () => (
    <Switch>
        <Route exact path = '/' component = {Login} />
        <PrivateRoute path = '/dashboard' component = {LandingPage} />
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