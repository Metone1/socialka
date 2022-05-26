const addPost = 'ADD POST';
const updatePost = 'UPDATE_NEW_POST_CHANGE';
let counter = 3;

let initialState = {
    posts: [
        {
            id: 1,
            img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
            message: 'Why nodoby love me?',
            likesCount: 12,
        },
        {
            id: 2,
            img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
            message: 'Hello',
            likesCount: 18,
        },
        {
            id: 3,
            img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
            message: 'hi, u know me?',
            likesCount: 4,
        },
    ],
    newPostText: 'go',
};

const profileReducer = (state = initialState, action) => {
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
export const updateNewPostChangeActionCreator = (text) => {
    return { type: updatePost, message: text }
};

export default profileReducer;