import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../store/messages_reducer';
import DialogWithOnePerson from './DialogWithOnePerson';


let mapStateToProps = (state) => {
    return {
        text: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateBodyMessage: (BodyMessage) => {
            dispatch(updateNewMessageBodyCreator(BodyMessage))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogWithOnePersonContainer = connect(mapStateToProps, mapDispatchToProps)(DialogWithOnePerson)

export default DialogWithOnePersonContainer;