import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink className={navData => navData.isActive ? s.active : s.item} to="/profile">Profile</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? s.active : s.item} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? s.active : s.item} to="/news" >News</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? s.active : s.item} to="/music">Music</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? s.active : s.item} to="/settings" >Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;