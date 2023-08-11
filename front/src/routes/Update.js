import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
    const { email } = useParams();
    const [user, setUser] = useState({
        email: email,
        password: "",
        name: "",
        // 추가 필드 등
    });

    // 입력 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // 프로필 업데이트 핸들러
    const handleUpdate = async () => {
        try {
            const response = await axios.put("http://localhost:8080/updateUser", user);
            console.log("User updated:", response.data);
        } catch (error) {
            console.error("An error occurred while updating:", error);
        }
    };

    return (
        <div>
            <label>
                이메일:
                <input type="email" name="email" value={user.email} readOnly />
            </label>
            <label>
                비밀번호:
                <input type="password" name="password" placeholder="password" onChange={handleChange} required />
            </label>
            <label>
                이름:
                <input type="text" name="name" placeholder="name" onChange={handleChange} required />
            </label>
            {/* 추가 필드 입력 */}
            <button type="button" onClick={handleUpdate}>Update Profile</button>
        </div>

    );
};

export default Update;
