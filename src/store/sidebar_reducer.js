
let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;