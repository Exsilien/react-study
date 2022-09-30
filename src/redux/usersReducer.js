import React from 'react';

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_COUNT_OF_USERS = "setTotalCountOfUsers";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    users: [],
    totalCountOfUsers: null,
    currentPage: 1,
    pages: 5,
};

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id)
                        return {...u, followed: true};
                    return u;

                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id)
                        return {...u, followed: false};
                    return u;
                }),
            };
        case SET_TOTAL_COUNT_OF_USERS:
            return {...state, totalCountOfUsers: action.count};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        default:
            return state;

    }
};


export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setTotalCountOfUsersAC = (count) => ({type: SET_TOTAL_COUNT_OF_USERS, count});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

export default UsersReducer;