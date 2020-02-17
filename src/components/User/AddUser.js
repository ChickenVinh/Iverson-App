import React, {useState} from 'react';

const AddUser = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [cluster, setCluster] = useState();

    const handleUsername = e => {
        setUsername(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleMobile = e => {
        setMobile(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }


    const handleFirstname = e => {
        setFirstname(e.target.value)
    }

    const handleLastname = e => {
        setLastname(e.target.value)
    }

    const handleCluster = e => {
        setCluster(e.target.value)
    }

    const handleSubmit = () => {
        const data = {
            "username": username,
            "email": email,
            "mobile": mobile,
            "password": password,
            "firstname": firstname,
            "lastname": lastname,
            "cluster": cluster
        }

        fetch("http://gastroconsultung-catering.com/getRequest.php",{
            method: "post",
            body: JSON.stringify(data)
        }).then(response => {
            alert(response)
        })
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input
                placeholder = "username"
                onChange = {handleUsername}
            />
            <input 
                placeholder = "email"
                onChange = {handleEmail}
            />
            <input
                placeholder = "mobile"
                onChange = {handleMobile}
            />
            <input 
                placeholder = "password"
                onChange = {handlePassword}
            />
            <input
                placeholder = "firstname"
                onChange = {handleFirstname}
            />
            <input
                placeholder = "lastname"
                onChange = {handleLastname}
            />
            <input
                placeholder = "cluster"
                onChange = {handleCluster}
            />
            <input
                type = "submit"
                value = "Create User"
            />
        </form>
    )
}

export default AddUser
