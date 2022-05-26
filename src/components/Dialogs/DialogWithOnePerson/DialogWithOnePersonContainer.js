import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../store/messages_reducer';
import DialogWithOnePerson from './DialogWithOnePerson';


const DialogWithOnePersonContainer = (props) => {
    let updateBodyMessage = (BodyMessage) => {
        props.store.dispatch(updateNewMessageBodyCreator(BodyMessage));
    };

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    return (
        <DialogWithOnePerson sendMessage={sendMessage} updateBodyMessage={updateBodyMessage} data={props.data} text={props.store.getState().messagesPage} />
    );
}

export default DialogWithOnePersonContainer;