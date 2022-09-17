import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.1zoom.ru/big2/994/260356-svetik.jpg" alt="#" className={s.wallpaper}/>
            </div>
            <div className={s.description}>
                ava + discrp
            </div>
        </div>
    );
};

export default ProfileInfo;