import React, { useState } from 'react';
import styles from './Post.module.css'
import { BsThreeDots, BsHeart, BsBookmark, BsEmojiSmile, BsFillHeartFill } from 'react-icons/bs'
import { AiOutlineMessage, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Post = ({ username, imageURL, caption, userProfileURL }) => {
  const [comment, setcomment] = useState("");
  const [commnets, setComments] = useState([]);
  const [commentLike, setCommentLike] = useState(false);
  const [postLike, setPostLike] = useState(false);

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

  const handleCommentLike = () => {
    setCommentLike(!commentLike);
  };

  const handlePostLike = () => {
    setPostLike(!postLike);
  };

  return (
    <div className={styles.post}>
      <div className={styles.user_info}>
        <img className={styles.profile_image} src={userProfileURL} alt="profile" />
        <div className={styles.postHeader}>
          <div className={styles.username}>{username}</div>
          <span>•</span>
          <button className={styles.follow_btn}>팔로우</button>
        </div>
        <BsThreeDots />
      </div>
      <img className={styles.postImg} src={imageURL} alt="Post" />
      <div className={styles.btn_wrapper}>
        <div className={styles.buttons}>
        {postLike ? <BsFillHeartFill onClick={handlePostLike} className={`${styles.heart_icon} ${styles.animateHeartbeat}`} /> : <BsHeart onClick={handlePostLike} />}
          <AiOutlineMessage />
          <HiOutlinePaperAirplane />
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
            <div className={styles.comment_btn}>
            {commentLike ? <AiFillHeart onClick={handleCommentLike} className={`${styles.heart_icon} ${styles.animateHeartbeat}`} /> : <AiOutlineHeart onClick={handleCommentLike} />}
              <button className={styles.delete_btn}>삭제</button>
            </div>
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
