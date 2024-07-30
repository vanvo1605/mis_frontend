import React, {useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register_status, setRegister_status] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }

   function checkInputFields() {
        if (username === "" || password === "") {
            return false
        } else {
            return true
        }
    }

    function register() {

        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        console.log("-------------check data");
        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseURL + 'api/user/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log("-------------check response data");
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