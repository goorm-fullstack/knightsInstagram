import React from 'react'
import styles from './Dropdown.module.css'
import {useNavigate, BrowserRouter, Route, Routes} from "react-router-dom";
import {authService} from "../../firebase";

const Dropdown = ({isLoggedIn}) => {
    const history = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        useNavigate.push("/");
    };
  return (
    <div className={styles.menu}>
        <a className={styles.item} href='/profile/:email'>설정</a>
        <a className={styles.item}>내 활동</a>
        <a className={styles.item}>저장됨</a>
        <a className={styles.item}>모드전환</a>
        <a className={styles.item}>문제 신고</a>
        <a className={styles.item}>계정 전환</a>
        {isLoggedIn ? (
            <>
                <button className={styles.item} onClick={onLogOutClick}>로그아웃</button>
            </>
        ) : (
            <a className={styles.item} href='/signin'>로그인</a>
        )}
    </div>
  )
}

export default Dropdown;

