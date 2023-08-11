import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", credentials);
            if (response.data) {
                console.log("User logged in:", response.data);
                navigate('/home');
            } else {
                console.error("Login failed!");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>로그인</h1>
            <label>
                <input type="email" name="email" placeholder="email" value={credentials.email} onChange={handleChange} required />
            </label><br/>
            <label>
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} required />
            </label><br/>
            <button type="submit">Log In</button>
        </form>
    );
};

export default SignIn;
