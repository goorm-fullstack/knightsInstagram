import React, { useState } from 'react';
import './ProfileImageUploader.css'; 

const ProfileImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  return (
    <div className="_aadm">
      <button className="_aadn" title="프로필 사진 바꾸기">
        <div className="circular-image-wrapper"> 
          <img
            alt="프로필 사진 바꾸기"
            className="_aadp circular-image" 
            src=""
          />
        </div>
      </button>
      <div>
        <form encType="multipart/form-data" method="POST" role="presentation">
          <input
            accept="image/jpeg,image/png"
            className="_ac69"
            type="file"
            onChange={handleImageChange}
          />
        </form>
      </div>
    </div>
  );
};

export default ProfileImageUploader;