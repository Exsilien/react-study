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

    let messagebox = React.createRef();

    let sendMessage = () => {
        props.addNewMessage();
    };

    let updateMessageBoxText = () => {
        let text  = messagebox.current.value;
        props.updateMessageBoxText(text);
    }

    let ChatElements = props.dialogsPage.chats
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.messages}>
            {ChatElements}
            <textarea ref={messagebox} onChange={updateMessageBoxText} value={props.dialogsPage.messageBoxTextState}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    );
};

export default Chat;