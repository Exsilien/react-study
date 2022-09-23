import DialogItems from "./DialogItems";
import {useSelector} from "react-redux";

const DialogItemsContainer = (props) => {

    return <DialogItems dialogs={useSelector((state) => state.dialogsPage.dialogs)}/>

};

export default DialogItemsContainer;
