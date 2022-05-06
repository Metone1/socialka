import styles from './MyPosts.module.css';
import OthePost from './OthePost/OthePost';
import React from 'react';

const MyPosts = (props) => {
    let create_new_post = React.createRef();

    let posts = props.store.posts.map(post => {
        return < OthePost key={post.id} img={post.img} message={post.message} likesCount={post.likesCount} />
    });
    let createMyNewPost = () => {
        props.dispatch({ type: 'ADD_POST' });
    };

    let onPostChange = () => {
        let text = create_new_post.current.value;
        props.dispatch({ type: 'UPDATE_NEW_POST_CHANGE', message: text });
        console.log(props.dispatch)
    }

    return (
        <div className={styles.area_posts}>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <div className={styles.myNewPost}>
                    <textarea className={styles.textarea} onChange={onPostChange} ref={create_new_post} value={props.store.newPostText} />
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
