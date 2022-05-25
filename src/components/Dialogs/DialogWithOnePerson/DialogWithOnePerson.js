import styles from './DialogWithOnePerson.module.css'
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../store/store';


const DialogWithOnePerson = (props) => {

    let updateBodyMessage = (event) => {
        let BodyMessage = event.target.value;
        props.dispatch(updateNewMessageBodyCreator(BodyMessage));
    };

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    };

    return (
        <div className={styles.dialog_one_person}>
            <div className={styles.user_dialog}>
                <img src={props.data.img} alt="img" />
            </div>
            <div className={styles.message}>
                {props.data.message}
            </div>
            <button onClick={sendMessage} className={styles.button}>click</button>
            <textarea onChange={updateBodyMessage} value={props.newMessage} placeholder='enter message' className={styles.textarea}></textarea>
        </div>
    )
}


export default DialogWithOnePerson;