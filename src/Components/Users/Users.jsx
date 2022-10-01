import React from 'react';
import style from "./Users.module.css";
const userPhoto = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa%26pid%3DApi&f=1";

const Users = (props) => {
    let pages = [];
        for (let i = 1; i <= Math.ceil(props.totalCountOfUsers / props.pages); i++) {
            pages.push(i);
        }
    return (
            <div className={style.wrapper}>
                <div className={style.stylePages}>
                    {pages.map(p => {
                        return <span onClick={() => props.onPageChanged(p)} className={p === props.currentPage && style.pageActive}>{p}</span>
                    })}
                </div>
                {props.users.map(u => {
                    return (
                        <div className={style.user} key={u.id}>
                            <div className={style.avaButton}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                     className={style.ava}/>
                                {u.followed
                                    ? <button className={style.button}
                                              onClick={() => props.unfollow(u.id)}>unfollow</button>
                                    : <button className={style.button}
                                              onClick={() => props.follow(u.id)}>follow</button>}
                            </div>
                            <div className={style.userInfo}>
                                <div className={style.description}>
                                    <div className={style.name}>{u.name}</div>
                                    <div className={style.status}>{u.status}</div>
                                </div>
                                <div className={style.location}>
                                    Izluchinsk,<br/>Russia
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
};

export default Users;