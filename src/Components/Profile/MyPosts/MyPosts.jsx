import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onChangePost = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let PostElements = props.profilePage.posts
        .map(p => <Post message={p.message} likes_counter={p.likes_counter}/>);

    return (
        <div className={s.myposts}>
            <h3>MyPosts</h3>
            <div>
                <textarea onChange={onChangePost} value={props.profilePage.postState}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {PostElements}
            </div>

        </div>
    );
}

export default MyPosts;