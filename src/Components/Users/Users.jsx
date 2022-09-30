import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
const userPhoto = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa%26pid%3DApi&f=1";
const Users = (props) => {

        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => props.setUsers(response.data.items));
        }

    let usersList = props.users.map(u => {
        return (
            <div className={style.user} key={u.id}>
                <div className={style.avaButton}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"/>
                    {u.followed
                        ? <button className={style.button} onClick={props.unfollow}>unfollow</button>
                        : <button className={style.button} onClick={props.follow}>follow</button>}
                </div>
                <div className={style.userInfo}>
                    <div>
                        <div className={style.name}>u.name</div>
                        <div className={style.status}>u.status</div>
                    </div>
                    <div>
                        Izluchinsk,<br/>Russia
                    </div>
                </div>
            </div>
    )});
    return (
        <div className={style.wrapper}>
            {usersList}
        </div>
    );



};

export default Users;