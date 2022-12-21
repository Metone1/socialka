import '../../../css/App.css';
import OthePosts from './OthePosts/OthePosts';
import React from 'react';

const MyPosts = (props) => {
    let posts = props.posts.posts.map(post => {
        return < OthePosts key={post.id} img={post.img} message={post.message} likesCount={post.likesCount} />
    });
    let createMyNewPost = () => {
        props.createMyNewPost();
    };

    let onPostChange = (e) => {
        props.onPostChange(e.target.value);
    }

    return (
        <div className="posts__block">
            <div className="myNewPost">
                <h3>My posts</h3>
                <div className="myNewPost__creator">
                    <textarea className="textarea" value={props.posts.newPostText} onChange={onPostChange} />
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
