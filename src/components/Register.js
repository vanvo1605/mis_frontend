import React, {useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";

function Register(props) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [register_status, setRegister_status] = useState("")

    function usernameHandler(e) {
        setUserName(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }


    function register() {


        // Data to pass to the request to call API
        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        // Cofiguration for the request
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url:  BaseURL + 'api/user/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        // Calling API to register an user
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setRegister_status("Register successful!")
            })
            .catch((error) => {
                console.log(error);
                setRegister_status(error.response.data)
            });
    }

    return (
        <div>
            <h1>Register page</h1>
            <p>Username <input id={"username"} type="text" onChange={usernameHandler}/></p>
            <p>Password <input id={"password"} type="password" onChange={passwordHandler}/></p>
            <p>
                <button id={"loginbtn"} onClick={register}>Submit</button>
            </p>
            <p id={'register_status'}>{register_status}</p>
        </div>
    );
}

export default Register;