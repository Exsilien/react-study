import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from "react";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addNewPost();
    }
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let PostElements = props.profilePage.posts
        .map(p => <Post message={p.message} likes_counter={p.likes_counter}/>);

    return (
        <div className={s.myposts}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onChangePost} value={props.profilePage.postState}></textarea>
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