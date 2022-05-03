import styles from './MyPosts.module.css';
import OthePost from './OthePost/OthePost';
import React, { createRef } from 'react';

const MyPosts = (props) => {

    let create_new_post = React.createRef();

    let posts = props.posts.map(post => {
        return < OthePost key={post.key} img={post.img} message={post.message} likesCount={post.likesCount} />
    });

    let createMyNewPost = () => {
        let text = create_new_post.current.value;
        props.addPost(text);
        create_new_post.current.value = '';
    };

    return (
        <div>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <div className={styles.myNewPost}>
                    <textarea ref={create_new_post}></textarea>
                    <button onClick={createMyNewPost}></button>
                </div>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;
