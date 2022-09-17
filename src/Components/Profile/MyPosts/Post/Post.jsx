import s from './Post.module.css';
import Posts from './../MyPosts';

const Post = (props) => {
    return <div className={s.item}>
        <div className={s.nickname}>Nickname</div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa%26pid%3DApi&f=1" alt="avatar"/>
        <span>{props.message}</span>
        <div>{props.likes_counter} likes</div>
    </div>
};

export default Post;

