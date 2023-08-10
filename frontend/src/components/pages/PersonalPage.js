import React from 'react'
import styles from './PersonalPage.module.css'
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const PersonalPage = () => {
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

                  <div>
                    <span>안녕하세요</span>
                  </div>              
                </section>
            </header>

            <div className={styles.user_actions}>
              <a>게시물</a>
              <a>저장됨</a>
              <a>태그됨</a>
            </div>

            <div className={styles.feed_container}>
              <div className={styles.feed_image}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="고양이" /></div>
              <div className={styles.feed_image}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="강아지" /></div>
              <div className={styles.feed_image}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="사자" /></div>
              <div className={styles.feed_image}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="사자" /></div>
            </div>
        </section>
    </div>
  )
}
