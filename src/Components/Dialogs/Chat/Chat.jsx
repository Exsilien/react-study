import s from "./Chat.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dima from './Content/Dima';
import Alex from './Content/Alex';
const Chat = (props) => {
    return (
            <div className={s.chat}>
                <Routes>
                    <Route path={"dialogs/Dima"} element={<Dima/>}/>
                    <Route path={"dialogs/Dima"} element={<Alex/>}/>
                </Routes>
            </div>
    );
};

export default Chat;
