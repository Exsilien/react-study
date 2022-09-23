import React from "react";
import {sendMessageActionCreator, updateMessageBoxTextActionCreator} from "../../../redux/dialogReducer";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";

const ChatContainer = (props) => {

    let dispatch = useDispatch();

    let onSendMessage = () => {
        dispatch(sendMessageActionCreator());
    };

    let onUpdateMessageBoxText = (text) => {
        dispatch(updateMessageBoxTextActionCreator(text));
    }

    return <Chat sendMessage={onSendMessage}
                 updateMessageBoxText={onUpdateMessageBoxText}
                 chats={useSelector((state) => state.dialogsPage.chats)}
                 value={useSelector((state) => state.dialogsPage.messageBoxTextState)}/>


};

export default ChatContainer;