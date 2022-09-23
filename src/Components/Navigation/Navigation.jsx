import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const NavItem = (props) => {
    return (
        <div>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to={"/" + props.name}>{props.name}</NavLink>
        </div>
    );
};

const Navigation = (props) => {
    let friendList = useSelector((state) => state.navigationPage.friendList);
    let Friends = friendList.map(f => {
        return <div className={s.friend}>
            <img src={f.avatar} alt="ava"/>
            <div className={s.friendName}>{f.name}</div>
        </div>
    });
    return (
                        <div className={s.Navigation}>
                            <nav>
                                <NavItem name="profile"/>
                                <NavItem name="dialogs"/>
                                <NavItem name="news"/>
                                <NavItem name="music"/>
                                <NavItem name="settings"/>
                            </nav>
                            <div className={s.friendList}>
                                { Friends }
                            </div>
                        </div>


    );
};

export default Navigation;
