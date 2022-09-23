import s from './Dialogs.module.css';
import DialogItemsContainer from "./DialogItems/DialogItemsContainer";
import ChatContainer from "./Chat/ChatContainer";

const Dialogs = (props) => {
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.dialogs}>
                <DialogItemsContainer/>
                <ChatContainer/>
            </div>
        </div>
    );
};

export default Dialogs;

