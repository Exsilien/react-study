import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Send</button>s
            </div>
            <div className={s.posts}>
                <Post message="Hello, that's my new post" likes_counter="15"/>
                <Post message="Hi, that's mine first post too" likes_counter="20"/>
            </div>

        </div>
    );
}

export default MyPosts;