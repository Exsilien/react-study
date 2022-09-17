import s from "./DialogItems.module.css"
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    let path = "/dialogs/";
    return (
        <div>
        <NavLink to={path + props.id}
                 className={navData => navData.isActive ? s.dialogItemActive : s.dialogItem}>{props.name}</NavLink>
        </div>
    );
};

const DialogItems = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    return <div>
        <div className={s.dialogItems}>
            { dialogsElements }
        </div>
    </div>;
};

export default DialogItems;
