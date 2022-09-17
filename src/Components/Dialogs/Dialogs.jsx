import s from './Dialogs.module.css';
import Chat from "./Chat/Chat";
import DialogItems from "./DialogItems/DialogItems";

const Dialogs = (props) => {
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.dialogs}>
                <DialogItems dialogs={props.state.dialogsPage.dialogs}/>
                <Chat dialogsPage={props.state.dialogsPage} updateMessageBoxText={props.updateMessageBoxText} addNewMessage={props.addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;

