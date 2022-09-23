import s from './chat.module.css';
import React from "react";

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

const Chat = (props) => {


    let sendMessage = () => {
        props.sendMessage();
    };

    let updateMessageBoxText = (e) => {
        let text  = e.target.value;
        props.updateMessageBoxText(text);
    }

    let ChatElements = props.chats
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.messages}>
            {ChatElements}
            <textarea onChange={updateMessageBoxText} value={props.value}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    );
};

export default Chat;