import React, { useState, useRef } from 'react';

const EditForm = () => {
  const [profileImage, setProfileImage] = useState('URL_OF_DEFAULT_IMAGE');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const profileImgFileInput = useRef(null);

  const handleImageChange = () => {
    profileImgFileInput.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 프로필 업데이트 로직 구현
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
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              onClick={handleImageChange}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>웹사이트</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>소개</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>
            <div className="form-group">
              <label>성별</label>
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <button className="save-button" type="submit">제출</button>
          </form>
          {/* 파일 업로드 input */}
          <input
            type="file"
            accept="image/*"
            onChange={profileChange}
            ref={profileImgFileInput}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </article>
    );
  };
  
export default EditForm;
