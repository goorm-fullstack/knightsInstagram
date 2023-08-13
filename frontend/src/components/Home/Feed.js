import React from 'react';
import Post from './Post';
import Profile from './Profile';
import FollowSuggestions from './FollowSuggestions';
import styles from './Feed.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

const Feed = () => {
  // const posts = [
  //   {
  //     username: 'user1',
  //     userProfileURL: 'https://placekitten.com/50/50',
  //     imageURL: 'https://placekitten.com/500/500',
  //     caption: 'This is a cute kitten!',
  //   },
  //   {
  //     username: 'user2',
  //     userProfileURL: 'https://placekitten.com/60/60',
  //     imageURL: 'https://placekitten.com/600/600',
  //     caption: 'Another cute kitten!',
  //   },
  //   // 가짜 데이터들...
  // ];

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/post", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((response) => response.json())
            .then(response => {setPosts(response)})
            .catch(error => console.error(error));
    }, []);

    // axios({
    //     method:"GET",
    //     url:"/post"
    // }).then(function(res){
    //     console.log(res.data);
    // }).catch(error => {
    //     console.log(error);
    // });

  return (
    <div className={styles.feed}>
      <section className={styles.post}>
        {posts.map((post) => (
          <Post
            key={post.postindex}
            username={post.id}
            userProfileURL='https://placekitten.com/50/50'
            imageURL='https://placekitten.com/500/500'
            caption={post.postdetail}
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
