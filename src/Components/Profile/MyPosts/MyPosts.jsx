import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <Post/>
            <Post/>
            <Post/>

        </div>
    );
}

export default MyPosts;