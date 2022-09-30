import React from 'react';
import {followAC, setCurrentPageAC, setTotalCountOfUsersAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import UsersClass from "./UsersСlass";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCountOfUsers: state.usersPage.totalCountOfUsers,
        currentPage: state.usersPage.currentPage,
        pages: state.usersPage.pages,
    }
};

const mapDispatchToProps = (dispatch) => ({
    follow: (id) => {dispatch(followAC(id))},
    unfollow: (id) => {dispatch(unfollowAC(id))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
    setTotalCountOfUsers: (count) => {dispatch(setTotalCountOfUsersAC(count))},
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);