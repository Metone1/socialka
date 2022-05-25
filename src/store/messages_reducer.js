const updateNewMessageBody = 'UPDATE_NEW_MESSAGE_BODY';
const sendMessage = 'SEND_MESSAGE';
let counter = 3;

const messagesReducer = (state, action) => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.body;
            return state;
        case sendMessage:
            if (state.newMessageBody === '') return state;
            else {
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.usersData.push({ id: ++counter, img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg', name: 'm', message: body });
                ;
                return state;
            }
        default:
            return state;
    }
};
export const sendMessageCreator = (id) => ({ type: sendMessage });
export const updateNewMessageBodyCreator = (bodyMessage) => ({ type: updateNewMessageBody, body: bodyMessage });

export default messagesReducer;


