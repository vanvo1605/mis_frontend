import React, {useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";

function Register(props) {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [register_status, setRegister_status] = useState("")

    function usernameHandler(e) {
        setA(e.target.value)
    }

    function passwordHandler(e) {
        setB(e.target.value)
    }

    function checkIfUsernameValid(username) {
        if (username.length < 5) {
            return false
        }
        return true
    }

    function checkIfPasswordValid(password) {
        if (password.length < 5) {
            return false
        }
        return true
    }

    function rgt() {

        // Data to pass to the request to call API
        let data = JSON.stringify({
            "username": a,
            "password": b
        });

        // Cofiguration for the request
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url:  'https://mis-assignment1-backend.vercel.app/api/user/',
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
                <button id={"loginbtn"} onClick={rgt}>Submit</button>
            </p>
            <p id={'register_status'}>{register_status}</p>
        </div>
    );
}

export default Register;