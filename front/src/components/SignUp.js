import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/insertUser", user);
            console.log("User created:", response.data);
            // 여기에 회원가입 완료 후의 로직을 추가할 수 있습니다.
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>회원가입 하지 않았다.</h1>
            <label>
                <input type="text" name="id" placeholder="id" value={user.id} onChange={handleChange} required />
            </label><br/>
            <label>
                <input type="text" name="name" placeholder="name" value={user.name} onChange={handleChange} required />
            </label><br/>
            <label>
                <input type="email" name="email" placeholder="email" value={user.email} onChange={handleChange} required />
            </label><br/>
            <label>
                <input type="password" name="password" placeholder="password" value={user.password} onChange={handleChange} required />
            </label><br/>
            <button type="submit">Sign Up</button>
            <div>
                <Link to="/signin">나는 이미했다. 회원가입</Link>
            </div>
        </form>
    );
};

export default SignUp;
