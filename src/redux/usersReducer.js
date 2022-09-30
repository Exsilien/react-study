import React from 'react';

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [],
};

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, action.users]};
        case FOLLOW:
            return state.map(u => {
                if(u.id === action.id)
                    u.followed = true;
                return u;
            });
        case UNFOLLOW:
            return state.map(u => {
                if(u.id === action.id)
                    u.followed = false;
                return u;
            });
        default:
            return state;

    }
};


export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});

export default UsersReducer;