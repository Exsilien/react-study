import React from 'react';
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const DialogReducer = (state, action) => {
        switch(action.type) {
            case SEND_NEW_MESSAGE:
                let msg = {id: 5, message: state.messageBoxTextState};
                state.chats.push(msg);
                state.messageBoxTextState = "";
                return state;

            case UPDATE_NEW_MESSAGE_TEXT:
                state.messageBoxTextState = action.text;
                return state;
            default:
                return state;
    }
};

export default DialogReducer;

export const sendMessageActionCreator = () => ({type: SEND_NEW_MESSAGE});

export const updateMessageBoxTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});