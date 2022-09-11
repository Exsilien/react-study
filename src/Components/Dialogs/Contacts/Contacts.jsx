import s from "./Contacts.module.css"
import {NavLink} from "react-router-dom";

const Contacts = (props) => {
    return <div>
        <ul className={s.contacts}>
            <li className={s.contact}><NavLink to={"/dialogs/Dima"}>Dima</NavLink></li>
            <li className={s.contact}><NavLink to={"/dialogs/Alex"}>Alex</NavLink></li>
            <li className={s.contact}>Masha</li>
            <li className={s.contact}>Dasha</li>
        </ul>
    </div>;
};

export default Contacts;
