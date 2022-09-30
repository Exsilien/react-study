import React from 'react';
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (id) => dispatch(followAC(id)),
    unfollow: (id) => dispatch(unfollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);