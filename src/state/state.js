import { rerenderTree } from '../render/render';

let state = {
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
        newPostText: '',
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
};

// let addUser = (userName) => {
//     state.messagesPage.usersData.name = userName;
// }
let counter = 3;

export let addPost = () => {
    let newPost = {
        id: ++counter,
        img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}

export let updateNewPostChange = (message) => {
    state.profilePage.newPostText = message;
    rerenderTree(state);
}


export default state;