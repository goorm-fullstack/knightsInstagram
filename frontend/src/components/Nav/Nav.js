import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { BsSearch, BsHouseDoorFill, BsPlusSquare } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import styles from './Nav.module.css'
import { UploadModal } from './UploadModal';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.nav_wrapper}>
        <Link to="/" className={styles.nav_logo}>
          <img src="https://fontmeme.com/images/instagram-new-logo.png" width="100" height="auto" alt='로고'/>
        </Link>
          <div className={styles.flex_wrapper}>
            <div className={styles.menu}>
              <Link to="/" className={styles.menu_item}>
                <BsHouseDoorFill className={styles.icon}/> 
                <span>홈</span>
              </Link>
              <button className={styles.menu_item}>
                <BsSearch className={styles.icon}/> 
                <span>검색</span>
              </button>
              <a className={styles.menu_item}>
                <HiOutlinePaperAirplane className={styles.icon}/>
                <span>메세지</span>
              </a>
              <button className={styles.menu_item} onClick={() =>setUploadModal(true)}>
                <BsPlusSquare className={styles.icon}/>
                <span>만들기</span>
              </button>
              <Link to="/personal" className={styles.menu_item}>
                <FaUserCircle className={styles.icon}/>
                <span>프로필</span>
              </Link>
            </div>
          {open && <Dropdown />}
          <div className={styles.hamburger} onClick={() => setOpen(!open)}>더보기</div>
        </div>
      </div>
      <UploadModal isOpen={uploadModal} onClose={() => setUploadModal(false)} />
    </div>
  );
};


export default Nav;
