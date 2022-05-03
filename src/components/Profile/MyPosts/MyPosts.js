import styles from './MyPosts.module.css';
import OthePost from './OthePost/OthePost';
import React from 'react';

const MyPosts = (props) => {

    console.log(props)

    let create_new_post = React.createRef();

    let posts = props.posts.posts.map(post => {
        return < OthePost key={post.id} img={post.img} message={post.message} likesCount={post.likesCount} />
    });

    let createMyNewPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = create_new_post.current.value;
        props.updateNewPostChange(text);
    }

    return (
        <div>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <div className={styles.myNewPost}>
                    <textarea onChange={onPostChange} ref={create_new_post} value={props.posts.newPostText} />
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
