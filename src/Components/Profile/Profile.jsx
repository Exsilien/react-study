import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.1zoom.ru/big2/994/260356-svetik.jpg" alt="#" className={s.wallpaper}/>
            </div>
            <div>
                ava + discrp
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;