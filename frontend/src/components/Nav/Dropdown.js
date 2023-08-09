import React from 'react'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  return (
    <div className={styles.menu}>
        <a className={styles.item}>설정</a>
        <a className={styles.item}>로그아웃</a>
    </div>
  )
}

export default Dropdown;

