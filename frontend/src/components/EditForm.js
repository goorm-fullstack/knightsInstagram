import React, { useState, useRef } from 'react';
import "./EditForm.css"

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
       <aside class="_ad6_">
        <label class="_ab3q" for="pepLinks">웹사이트</label>
       </aside>
       <div className="_ab3t">
        <div div style={{ maxWidth: '355px', width: '100%' }} className="xjbqb8w">
            <input
            aria-required="false"
            disabled
            id="pepLinks"
            placeholder="웹사이트"
            className="_ab3_"
            dir=""
            type="text"
            value=""
          />
        </div>
       </div>
       </div>
     </form>
    </article>
    );
  };
  
export default EditForm;
