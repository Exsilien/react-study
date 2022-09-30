import React from 'react';
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Dasha"},
    ],
    chats: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I'm doing great"},
        {id: 4, message: "Yo"},
    ],
    messageBoxTextState: "",
}
const DialogReducer = (state = initialState , action) => {
        switch(action.type) {
            case SEND_NEW_MESSAGE:
                let msg = {id: 5, message: state.messageBoxTextState};
                return {...state, chats: [...state.chats, msg], messageBoxTextState: ""};

            case UPDATE_NEW_MESSAGE_TEXT:
                return {...state, messageBoxTextState: action.text};
            default:
                return state;
    }
};

export default DialogReducer;

export const sendMessageActionCreator = () => ({type: SEND_NEW_MESSAGE});

export const updateMessageBoxTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});