import s from './chat.module.css';
import React from "react";
import {sendMessageActionCreator, updateMessageBoxTextActionCreator} from "../../../redux/state";

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

const Chat = (props) => {


    let sendMessage = () => {

        props.dispatch(sendMessageActionCreator());
    };

    let updateMessageBoxText = (e) => {
        let text  = e.target.value;
        props.dispatch(updateMessageBoxTextActionCreator(text));
    }

    let ChatElements = props.dialogsPage.chats
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.messages}>
            {ChatElements}
            <textarea onChange={updateMessageBoxText} value={props.dialogsPage.messageBoxTextState}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    );
};

export default Chat;