import styles from './DialogWithOnePerson.module.css'
import React from 'react';

const DialogWithOnePerson = (props) => {
    let updateBodyMessage = (e) => {
        props.updateBodyMessage(e.target.value);
    };

    let sendMessage = () => {
        props.sendMessage();
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
            <textarea onChange={updateBodyMessage} value={props.text.newMessageBody} placeholder='enter message' className={styles.textarea}></textarea>
        </div>
    )
}

export default DialogWithOnePerson;