import styles from './MyPosts.module.css';
import OthePost from './OthePost/OthePost';
import React from 'react';
import { addPostActionCreator, updateNewPostChange } from '../../../store/profile_reducer';

const MyPosts = (props) => {
    let posts = props.store.posts.map(post => {
        return < OthePost key={post.id} img={post.img} message={post.message} likesCount={post.likesCount} />
    });
    let createMyNewPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostChange(text));
    }

    return (
        <div className={styles.area_posts}>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <div className={styles.myNewPost}>
                    <textarea className={styles.textarea} value={props.store.newPostText} onChange={onPostChange} />
                    <button onClick={createMyNewPost}>Add new post</button>
                </div>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;
