import React from 'react';
import Post from './Post';
import Profile from './Profile';
import FollowSuggestions from './FollowSuggestions';
import styles from './Feed.module.css';

const Feed = () => {
  const posts = [
    {
      username: 'user1',
      userProfileURL: 'https://placekitten.com/50/50',
      imageURL: 'https://placekitten.com/500/500',
      caption: 'This is a cute kitten!',
    },
    {
      username: 'user2',
      userProfileURL: 'https://placekitten.com/60/60',
      imageURL: 'https://placekitten.com/600/600',
      caption: 'Another cute kitten!',
    },
    // 가짜 데이터들...
  ];

  return (
    <div className={styles.feed}>
      <section className={styles.post}>
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            userProfileURL={post.userProfileURL}
            imageURL={post.imageURL}
            caption={post.caption}
          />
        ))}
      </section>
      <section className={styles.sideBar}>
        <Profile />
        <FollowSuggestions />
      </section>
    </div>
  );
};

export default Feed;
