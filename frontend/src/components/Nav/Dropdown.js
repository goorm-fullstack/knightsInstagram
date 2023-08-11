import React from 'react'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  return (
    <div className={styles.menu}>
        <a className={styles.item}>설정</a>
        <a className={styles.item}>내 활동</a>
        <a className={styles.item}>저장됨</a>
        <a className={styles.item}>모드전환</a>
        <a className={styles.item}>문제 신고</a>
        <a className={styles.item}>계정 전환</a>
        <a className={styles.item}>로그아웃</a>
    </div>
  )
}

export default Dropdown;

