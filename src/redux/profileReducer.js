import React from 'react';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {message: "Hello, that's my new post", likes_counter: 15},
        {message: "Hi, that's mine first post too", likes_counter: 20},
    ],
    postState: "",
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                message: state.postState,
                likes_counter: 0,
            };
            /*state.posts.push(post);
            state.postState = "";*/
            return {...state, posts: [...state.posts, post], postState: ""};
        case UPDATE_NEW_POST_TEXT:
            return {...state, postState: action.text};
        default:
            return state;

    }
};

export default ProfileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});