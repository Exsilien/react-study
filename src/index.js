import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import App from "./App";
import state, {addNewMessage, addNewPost, subscribe, updateMessageBoxText, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

const reRenderEntirePage = (state) => {
    return root.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost} updateNewPostText={ updateNewPostText } addNewMessage={addNewMessage} updateMessageBoxText={updateMessageBoxText}/>
        </React.StrictMode>
    );
};
reRenderEntirePage(state);

subscribe(reRenderEntirePage);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
