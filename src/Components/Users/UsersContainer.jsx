import React, {Component} from 'react';
import {
    follow,
    setCurrentPage, setFetching,
    setTotalCountOfUsers,
    setUsers,
    unfollow,

} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import Loader from "../../common/Loader/Loader";


class UsersClass extends Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pages}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCountOfUsers(response.data.totalCount);
            });

    }

    onPageChanged = (page) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pages}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (<>
                {this.props.isFetching ? <Loader/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    totalCountOfUsers={this.props.totalCountOfUsers}
                    pages={this.props.pages}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCountOfUsers: state.usersPage.totalCountOfUsers,
        currentPage: state.usersPage.currentPage,
        pages: state.usersPage.pages,
        isFetching: state.usersPage.isFetching,
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCountOfUsers,
    setFetching,
})(UsersClass);