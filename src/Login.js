import React, {useState, useEffect} from 'react';
import Auth from './Auth';
import Cookies from 'js-cookie';
import './CSS/Login.css'
import Logo from './components/images/logo.png'

const Login = (props) => {
    //sum up 3 useStates to one object ;)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState(null)

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
        console.log("checking credentials")
        fetch(`https://vtk-group.tech/scripts/login.php?user=${email}&password=${password}`)
        .then((res) => { 
            return res.text()
        })
        .then((text) => {
            setResponse(text)
        })

        if(response !== null && email === response){
            Auth.authenticate(email);
        }
        
        const user = Cookies.get('user');
        if(user){
            props.history.push('/dashboard');
        }else{
            props.history.push('/');
        }
    }

    return(
        <div className = "login-form">
            <div className = "img-container">
                <img alt= "login image" src = {Logo}/>
            </div>
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
            <button onClick = {login}>Login</button>
        </div>
    )
}

export default Login;