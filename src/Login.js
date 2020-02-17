import React, {useState, useEffect} from 'react';
import Auth from './Auth';
import Cookies from 'js-cookie';

const Login = (props) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        useEffect(() => {
            Cookies.remove('user');
        }, [])

        const handleChangeEmail = e =>{
            setEmail(e.target.value)
        }

        const handleChangePassword = e =>{
            setPassword(e.target.value)
        }

        const login = () => {
            Auth.authenticate(email, password);
            
            const user = Cookies.get('user');
            if(user){
                props.history.push('/dashboard');
            }else{
                props.history.push('/');
            }
        }

    return(
        <form onSubmit = {login}>
            <input
                type = "text"
                placeholder = "email"
                onChange = {handleChangeEmail}
                value = {email}
                required
            />
            <input 
                type = "password"
                placeholder = "password"
                onChange = {handleChangePassword}
                value = {password}
                required
            />
            <input type = "submit" value = "login"/>
        </form>
    )
}

export default Login;