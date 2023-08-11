import React from 'react';
import styles from './FollowSuggestions.module.css';

const FollowSuggestions = () => {
  const suggestions = [
    { name: '유저1', profileIcon: <img src="https://place-puppy.com/32x32" alt="프로필 사진" /> },
    { name: '유저2', profileIcon: <img src="https://place-puppy.com/32x32" alt="프로필 사진" /> },
    { name: '유저3', profileIcon: <img src="https://place-puppy.com/32x32" alt="프로필 사진" /> },
    // 추가적인 가짜 데이터들...
  ];

  return (
    <div>
      <div className={styles.recommendations}>
        <h3 className={styles.sectionTitle}>회원님을 위한 추천</h3>
        <button>모두 보기</button>
      </div>
      <ul className={styles.suggestionsContainer}>
      {suggestions.map((user, index) => (
          <li key={index} className={styles.userSuggestion}>
            <div className={styles.profileIcon}>{user.profileIcon}</div>
            <span className={styles.userName}>{user.name}</span>
            <button className={styles.followBtn}>팔로우</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowSuggestions;
