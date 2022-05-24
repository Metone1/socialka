let counter = 3;
const addPost = 'ADD POST';
const updatePost = 'UPDATE_NEW_POST_CHANGE';

const store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            usersData: [
                {
                    img: 'https://ru.hellomagazine.com/uploads/620fba3937d2d.jpg',
                    message: 'hi Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'Adriana'
                },
                {
                    img: 'https://www.svetzeny.cz/sites/default/files/public/styles/gallery_page_xl/public/2022-03/shutterstock377356300_0.jpg?itok=ARJT6N_S',
                    message: 'Hello',
                    name: 'Johnny'
                },
                {
                    img: 'https://www.kkkkkkkkk.net/media/27178/full',
                    message: 'What`s u name?',
                    name: 'Martina'
                },
            ],
        },
        sidebar: {
            friends: [
                {
                    image: 'https://ru.hellomagazine.com/uploads/620fba3937d2d.jpg',
                    name: 'Adriana',
                },
                {
                    image: 'https://www.svetzeny.cz/sites/default/files/public/styles/gallery_page_xl/public/2022-03/shutterstock377356300_0.jpg?itok=ARJT6N_S',
                    name: 'Johnny',
                },
                {
                    image: 'https://www.kkkkkkkkk.net/media/27178/full',
                    name: 'Martina',
                }
            ],
            navItems: [
                {
                    src: 'https://cdn-icons-gif.flaticon.com/6172/6172532.gif',
                    alt: 'profile'
                },
                {
                    src: 'https://cdn-icons-gif.flaticon.com/6416/6416396.gif',
                    alt: 'messages'
                },
                {
                    src: 'https://cdn-icons-gif.flaticon.com/6454/6454239.gif',
                    alt: 'music'
                },
                {
                    src: 'https://cdn-icons-gif.flaticon.com/6172/6172517.gif',
                    alt: 'news'
                },
                {
                    src: 'https://cdn-icons-gif.flaticon.com/6569/6569144.gif',
                    alt: 'settings'
                },
            ],
        },
    },
    _subscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        if (action.type === addPost) {
            if (this._state.profilePage.newPostText === '') return;
            else {
                let newPost = {
                    id: ++counter,
                    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                };
                this._state.profilePage.posts.unshift(newPost);
                this._state.profilePage.newPostText = '';
                this._subscriber();
            }
        }
        else if (action.type === updatePost) {
            this._state.profilePage.newPostText = action.message;
            this._subscriber();
        }
    }
};

export default store;

export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostChange = (text) => {
    return { type: updatePost, message: text }
};

