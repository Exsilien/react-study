import s from './Dialogs.module.css';
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.layout}>
                <Contacts/>
                <Chat/>
            </div>
        </div>
    );
};

export default Dialogs;