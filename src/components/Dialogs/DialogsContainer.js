import { connect } from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
   return {
      messages: state.messagesPage
   }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;