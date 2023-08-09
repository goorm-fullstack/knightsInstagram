import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profileImg}
        src="https://placekitten.com/100/100"
        alt="Profile"
      />

      <div className={styles.profileInfo}>
        <span>my_username</span>
        <p className={styles.profileIntro}>하이요</p>
      </div>

      <button className={styles.transition}>전환</button>
    </div>
  );
};

export default Profile;
