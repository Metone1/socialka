const addPost = 'ADD POST';
const updatePost = 'UPDATE_NEW_POST_CHANGE';
let counter = 3;

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            if (state.newPostText === '') return state;
            else {
                let newPost = {
                    id: ++counter,
                    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
                    message: state.newPostText,
                    likesCount: 0,
                };
                state.posts.unshift(newPost);
                state.newPostText = '';
                return state;
            };
        case updatePost:
            state.newPostText = action.message;
            return state;
        default:
            return state;
    };
};
export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostChange = (text) => {
    return { type: updatePost, message: text }
};

export default profileReducer;