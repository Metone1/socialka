const updateNewMessageBody = 'UPDATE_NEW_MESSAGE_BODY';
const sendMessage = 'SEND_MESSAGE';
let counter = 0;

let initialState = {
    usersData: [
        {
            id: 0,
            img: 'https://ru.hellomagazine.com/uploads/620fba3937d2d.jpg',
            name: 'Adriana',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo quo quae eaque corporis, dolorum beatae iste ad unde molestias et id nihil hic recusandae earum fugit in delectus eligendi.',
        },
        {
            id: 1,
            img: 'https://www.svetzeny.cz/sites/default/files/public/styles/gallery_page_xl/public/2022-03/shutterstock377356300_0.jpg?itok=ARJT6N_S',
            name: 'Johnny',
            message: 'Hello',
        },
        {
            id: 2,
            img: 'https://www.kkkkkkkkk.net/media/27178/full',
            name: 'Martina',
            message: 'What`s u name?',
        },
    ],
    myMessages: [],
    newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.body;
            return state;
        case sendMessage:
            if (state.newMessageBody === '') return state;
            else {
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.myMessages.push({ id: counter++, img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg', message: body });
                return state;
            }
        default:
            return state;
    }
};
export const sendMessageCreator = (id) => ({ type: sendMessage });
export const updateNewMessageBodyCreator = (bodyMessage) => ({ type: updateNewMessageBody, body: bodyMessage });

export default messagesReducer;


