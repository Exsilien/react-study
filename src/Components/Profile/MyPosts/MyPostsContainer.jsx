import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";

const MyPostsContainer = (props) => {

    let dispatch = useDispatch();

    let onAddPost = () => {
        dispatch(addPostActionCreator());
    }

    let onChangePost = (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts addPost={onAddPost} onChangePost={onChangePost}
                 posts={useSelector((state) => state.profilePage.posts)}
                 value={useSelector((state) => state.profilePage.postState)}/>
    )

};

/*let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.postState,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onChangePost: (text) => dispatch(updateNewPostTextActionCreator(text)),
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);*/

export default MyPostsContainer;