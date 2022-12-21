import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../store/profile_reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createMyNewPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostChangeActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
