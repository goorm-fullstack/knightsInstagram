import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <button>Meta</button>
        <button>소개</button>
        <button>블로그</button>
        <button>채용 정보</button>
        <button>도움말</button>
        <button>API</button>
        <button>개인정보처리방침</button>
        <button>약관</button>
        <button>인기 계정</button>
        <button>위치</button>
        <button>Instagram Lite</button>
        <button>Threads</button>
        <button>연락처 업로드 & 비사용자</button>
        <button>Meta Verified</button>
      </div>
      <div>
        <button>한국어</button>
        <button>© 2023 Instagram from Meta</button>
      </div>
    </div>
  )
}
