import React, { useState, useRef } from 'react';
import "./EditForm.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "../Nav/Dropdown.module.css";

const EditForm = () => {
  const [profileImage, setProfileImage] = useState('URL_OF_DEFAULT_IMAGE');
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [bio, setBio] = useState('');
  // const profileImgFileInput = useRef(null);

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

  const profileChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <article className="profile-edit-container">
      <div className="main-content">
        <div className="x9f619">
          <div className="profile-image-container">
           <h2 className="_ac10">프로필 편집</h2>
           </div>
        </div>
      </div>
      <div className="_ab4f">
      <div className="_ab4g">
       <div className="_aadm">
       <button className="_aadn" title="프로필 사진 바꾸기" tabIndex="0">
       <img 
         alt="프로필 사진 바꾸기"
         className="_aadp"
         src="img\profile_basic.png"
       />
       </button>
       </div>
        <div>
         <form encType="multipart/form-data" method="POST" role="presentation">
         <input accept="img\profile_basic.png" className="_ac69" type="file" />
         </form>
        </div>
      </div>
     <div className="_ab4h">
      <div className="x1gslohp">
       <span className="x1lliihq">
        닉네임
       </span>
       </div>
       <div className="x1i10hfl" role="button">
         프로필 사진 바꾸기
       </div>
       <div>
         <form encType="multipart/form-data" method="POST" role="presentation">
         <input accept="img\profile_basic.png" className="_ac69" type="file"/>
         </form>
        </div>
      </div>
     </div>
     <form className="_ab43" method="POST">
      <div className="_ab3p">
          <table className='edit_form'>
              <tr>
                  <th>이메일</th>
                  <td><label><input type="email" name="email" value={user.email} readOnly /></label></td>
              </tr>
              <tr>
                  <th>비밀번호</th>
                  <td><label><input type="password" name="password" placeholder="password" onChange={handleChange} required /></label></td>
              </tr>
              <tr>
                  <th>이름</th>
                  <td><label><input type="text" name="name" placeholder="name" onChange={handleChange} required /></label></td>
              </tr>
              <tr>
                  <th>회원탈퇴</th>
                  <td><a href='/delete'>탈퇴하기</a></td>
              </tr>
              {/* 추가 필드 입력 */}
          </table>
       </div>
       <button type="button" onClick={handleUpdate}>Update Profile</button>
     </form>
    </article>
    );
  };
  
export default EditForm;
