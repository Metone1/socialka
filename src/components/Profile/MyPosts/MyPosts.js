import styles from './MyPosts.module.css';
import OthePost from './OthePost/OthePost';
import React from 'react';

const MyPosts = (props) => {
    let posts = props.posts.posts.map(post => {
        return < OthePost key={post.id} img={post.img} message={post.message} likesCount={post.likesCount} />
    });
    let createMyNewPost = () => {
        props.createMyNewPost();
    };

    let onPostChange = (e) => {
        props.onPostChange(e.target.value);
    }

    return (
        <div className={styles.area_posts}>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <div className={styles.myNewPost}>
                    <textarea className={styles.textarea} value={props.posts.newPostText} onChange={onPostChange} />
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
