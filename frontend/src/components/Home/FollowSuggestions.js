import React from 'react';
import styles from './FollowSuggestions.module.css';

const FollowSuggestions = () => {
  // 가짜 데이터 - 실제로는 API를 통해 데이터를 가져와야 합니다.
  const suggestions = [
    'suggestion1',
    'suggestion2',
    'suggestion3',
    // 추가적인 가짜 데이터들...
  ];

  return (
    <div className="follow-suggestions">
      <div className={styles.recommendations}>
        <h3 className={styles.sectionTitle}>회원님을 위한 추천</h3>
        <button>모두 보기</button>
      </div>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default FollowSuggestions;
