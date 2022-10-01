import React, {Component} from 'react';
import * as axios from "axios";
import style from "./Users.module.css";

const userPhoto = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa%26pid%3DApi&f=1";



class UsersClass extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pages}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCountOfUsers(response.data.totalCount);
            });

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pages = [];
        for (let i = 1; i <= Math.ceil(this.props.totalCountOfUsers / this.props.pages); i++) {
            pages.push(i);
        }
        return (
            <div className={style.wrapper}>
                <div className={style.stylePages}>
                    {pages.map(p => {
                        return <span onClick={() => this.onPageChanged(p)} className={p === this.props.currentPage && style.pageActive}>{p}</span>
                    })}

                </div>
                {this.props.users.map(u => {
                    return (
                        <div className={style.user} key={u.id}>
                            <div className={style.avaButton}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                     className={style.ava}/>
                                {u.followed
                                    ? <button className={style.button}
                                              onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                    : <button className={style.button}
                                              onClick={() => this.props.follow(u.id)}>follow</button>}
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
        );
    }

}

export default UsersClass;