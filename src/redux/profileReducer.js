import React from 'react';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                message: state.postState,
                likes_counter: 0,
            };
            state.posts.push(post);
            state.postState = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.postState = action.text;
            return state;
        default:
            return state;

    }
};

export default ProfileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});