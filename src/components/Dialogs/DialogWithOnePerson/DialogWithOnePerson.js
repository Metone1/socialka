import "../../../css/App.css";
import React from 'react';

const DialogWithOnePerson = (props) => {
    let updateBodyMessage = (e) => {
        props.updateBodyMessage(e.target.value);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

    console.log(props.text.myMessages)


    let mapMyMessages = props.text.myMessages.map(user => {
        return <div className="OnePersonDialog__user" key={user.id}>
            <img className="OnePersonDialog__img" src={user.img} />
            <div className="OnePersonDialog__message">{user.message}
            </div>
        </div>;
    });

    return (
        <div className="OnePersonDialog">
            <div className="OnePersonDialog__user">
                <img className="OnePersonDialog__img" src={props.data.img} alt="img" />
                <div className="OnePersonDialog__message">
                    {props.data.message}
                </div>
            </div>
            {mapMyMessages}
            <div className="OnePersonDialog__send">
                <textarea onChange={updateBodyMessage} value={props.text.newMessageBody} placeholder='enter message' className="OnePersonDialog__textarea"></textarea>
                <button onClick={sendMessage}>click</button>
            </div>
        </div>
    )
}

export default DialogWithOnePerson;