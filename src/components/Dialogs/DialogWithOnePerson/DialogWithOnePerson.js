import styles from './DialogWithOnePerson.module.css'
import React from 'react';

const DialogWithOnePerson = (props) => {

    let text = React.createRef();

    let pushMessage = () => {
        console.log(text.current.value)
    };

    return (
        <div className={styles.dialog_one_person}>
            <div className={styles.user_dialog}>
                <img src={props.data.img} alt="img" />
            </div>
            <div className={styles.message}>
                {props.data.message}
            </div>
            <button onClick={pushMessage} className={styles.button}>click</button>
            <textarea className={styles.textarea} ref={text}></textarea>
        </div>
    )
}


export default DialogWithOnePerson;