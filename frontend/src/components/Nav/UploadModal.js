import React, { useState, useRef} from 'react';
import styles from './UploadModal.module.css';

export const UploadModal = ({isOpen, onClose}) => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const modalRef = useRef(null);

    const handleDescription = (e) => {
        setDescription(e.target.value)
    };

    const handleModalClose = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
            setImage(null);
        }
    };

    const handleImageFile = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            console.log(imageUrl);
            setImage(imageUrl);
        }
    };

    if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={handleModalClose}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.header}>
          <h1>새 게시물 만들기</h1>
          <button className={styles.header_upload_btn}>게시</button>
        </div>
        <div className={styles.content}>
          <div className={styles.image_upload_content}>
          {image && <img src={image} alt="미리보기" className={styles.preview_img} />}
            <div className={styles.upload_btn}>
              <span>사진을 선택하세요</span> 
              <input 
                id="file" 
                type="file" 
                accept="image/*" 
                alt="업로드" 
                onChange={handleImageFile}
                className={styles.file_input} 
              />
              <label className={styles.custom_file_input} htmlFor="file">컴퓨터에서 선택</label>
            </div>
          </div>
          <div className={styles.textInput}>
            <textarea 
              rows="10" 
              placeholder="문구 입력..."
              value={description}
              onChange={handleDescription}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
  