import React, { useState } from 'react';
import styles from './Post.module.css'
import { BsThreeDots,BsHeart, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Post = ({ username, imageURL, caption, userProfileURL }) => {
  const [comment, setcomment] = useState("");
  const [commnets, setComments] = useState([]);

  const handleComment = (e) => {
    setcomment(e.target.value)
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...commnets, comment]);
      setcomment("");
    }
  };

  return (
    <div className={styles.post}>
      <div className={styles.userInfo}>
        <img className={styles.profileImg} src={userProfileURL} alt="profile" />
        <div className={styles.postHeader}>
          <div className={styles.username}>{username}</div>
          <span>•</span>
          <button className={styles.followBtn}>팔로우</button>
        </div>
        <BsThreeDots />
      </div>
      <img className={styles.postImg} src={imageURL} alt="Post" />
      <div className={styles.btnWrapper}>
        <div className={styles.buttons}>
          <BsHeart />
          <AiOutlineMessage />
        < HiOutlinePaperAirplane />
        </div>
        <div>
          <BsBookmark className={styles.buttons} />
        </div>
      </div>

      <div className={styles.postInfo}>
        <span className={styles.postUser}>{username}</span>
        {caption}
      </div>

      <div>
        {commnets.map((comment, index) => (
          <div className={styles.comment_container}>
            <div>
              {comment}
            </div>
            <button>삭제</button>
          </div>
        ))}
      </div>

      <form className={styles.comment} onSubmit={handleCommentSubmit}>
        <input 
          className={styles.commentInput}
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={handleComment}
        />
        <button className={styles.commentBtn}>게시</button>
        <BsEmojiSmile />
      </form>
    </div>
  );
};

export default Post;
