import React from 'react'
import styles from './PersonalPage.module.css'
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { PiSquaresFour, PiBookmarkSimpleLight, PiCameraThin} from "react-icons/pi";
import { MdOutlinePersonPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Footer } from '../Personal/Footer';

export const PersonalPage = () => {
  const images = [
    // "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    // "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    // "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    // "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  ];

  return (
    <div className={styles.personal_container}>
        <section className={styles.personal_wrapper}>
            <header className={styles.header}>
              <div className={styles.user_profile}><FaUserCircle /></div>
                <section className={styles.personal_info}>
                  <div className={styles.header_btn}>
                    <span>USER</span>
                    <Link to="/" className={styles.edit_btn}>프로필 편집</Link>
                    <button className={styles.setting_btn}><AiOutlineSetting /></button>
                  </div>

                  <ul className={styles.user_info}>
                    <li>
                      {`게시물  `}
                      <span>4</span>
                    </li>
                    <li>
                      {`팔로워  `}
                      <span>4</span>
                    </li>
                    <li>
                      {`팔로우  `}
                      <span>4</span>
                    </li>
                  </ul> 

                  <div className={styles.personal_comment}>
                    <span>안녕하세요</span>
                  </div>              
                </section>
            </header>

            <div className={styles.user_actions}>
              <a className={styles.user_actions_btn}>
                <PiSquaresFour />
                <span>게시물</span>
              </a>
              <a className={styles.user_actions_btn}>
                <PiBookmarkSimpleLight />
                <span>저장됨</span>
              </a>
              <a className={styles.user_actions_btn}>
                <MdOutlinePersonPin />
                <span>태그됨</span>
              </a>
            </div>

            {images.length > 0 ? (
              <div className={styles.feed_container}>
              {images.map((imageUrl, index) => (
                <div className={styles.feed_image} key={index}>
                  < img src={imageUrl} alt="personal image" />
                </div>
              ))}
              </div>
            ) : (
            <div className={styles.no_images}>
              <PiCameraThin className={styles.no_images_icon}/>
              <h1>사진 공유</h1>
              <span>사진을 공유하면 회원님의 프로필이 표시됩니다.</span>
              <button className={styles.add_image_btn}>첫 사진을 공유합니다.</button>
            </div>
            )}
        </section>
        <Footer />
    </div>
  )
}
