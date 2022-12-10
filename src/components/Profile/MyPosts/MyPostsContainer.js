import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../store/profile_reducer';

const MyPostsContainer = (props) => {
    let createMyNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostChangeActionCreator(text));
    };

    return (
        <MyPosts
            onPostChange={onPostChange}
            createMyNewPost={createMyNewPost}
            posts={props.store.getState().profilePage}
        />
    );
}

export default MyPostsContainer;
