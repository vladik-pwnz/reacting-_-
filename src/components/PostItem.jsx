import React from 'react';
import styles from './PostItem.module.css';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)} className={styles.postButton}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)} className={styles.postButton}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
