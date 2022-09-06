import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.1zoom.ru/big2/994/260356-svetik.jpg" alt="#" className={s.wallpaper}/>
            </div>
            <div>
                ava + discrp
            </div>
            <div>
                my posts
            </div>
            <div>
                new post
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>post 2</div>
            </div>

        </div>
    );
}

export default Profile;