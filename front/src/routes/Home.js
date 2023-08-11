import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [email, setEmail] = useState("");

    // 이메일 변경 핸들러
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // 계정 삭제 핸들러
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/deleteUser?email=${email}`);
            console.log("User deleted:", response.data);
            setEmail(""); // 삭제 후 이메일 필드 초기화
        } catch (error) {
            console.error("An error occurred while deleting:", error);
        }
    };

    return (
        <div>
            <label>
                계정 삭제를 원하시면 이메일을 입력하세요<br />
                <input type="email" placeholder={"email"} value={email} onChange={handleChange} required />
            </label>
            <button type="button" onClick={handleDelete}>Delete Account</button>
            <br />
            <Link to={`/update/${email}`}>프로필 수정하기</Link>
        </div>
    );
};

export default Home;
