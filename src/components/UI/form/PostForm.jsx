import React, { useState } from 'react';
import MyInput from '../input/MyInput';  // Исправлено
import MyButton from '../button/MyButton';  // Исправлено
import styles from './PostForm.module.css';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                <MyInput
                    className={styles.input}
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    className={styles.input}
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Описание поста"
                />
            </div>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
