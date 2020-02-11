import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import Cookies from 'js-cookie';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
    }

    login(){
        Auth.authenticate();
    }

    componentDidMount(){
        //deletes cookie when login page is opened
        Cookies.remove('user');
    }
    
    render(){
        return(
            <div>
                <Link to='/'>Home</Link><br/>
                <Link to='/'>Login</Link><br/>
                <Link to='/dashboard'>Dashboard</Link><br/>
                <button onClick={this.login}>Login</button><br/>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Login;