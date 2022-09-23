import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navigationReducer from "./navigationReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navigationPage: navigationReducer,
});

let store = createStore(reducers);

export default store;