import s from './Post.module.css';

const Post = () => {
    return <div className={s.item}>
        <div>Nickname</div>
        <img className={s.img} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa%26pid%3DApi&f=1" alt="avatar"/>
        <span>text</span>
        
        
    </div>
};

export default Post;

