import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navigationReducer from "./navigationReducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hello, that's my new post", likes_counter: 15},
                {message: "Hi, that's mine first post too", likes_counter: 20},
            ],
            postState: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Masha"},
                {id: 4, name: "Dasha"},
            ],
            chats: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "I'm doing great"},
                {id: 4, message: "Yo"},
            ],
            messageBoxTextState: "",

        },
        navigationPage: {
            friendList: [
                {
                    id: 1,
                    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.agriuniverse.co.zw%2Fmedia%2Fcom_easysocial%2Fphotos%2F232%2F582%2Fman-avatar-icon-flat-vector-19152370_original.jpg&f=1&nofb=1",
                    name: "Dima",
                },
                {
                    id: 2,
                    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KFML5Sl5nKyqxSrRtXtedQHaHa%26pid%3DApi&f=1",
                    name: "Alex",
                },
                {
                    id: 3,
                    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Favatars-99%2F62%2Favatar-373-456325-512.png&f=1&nofb=1",
                    name: "Masha",
                },
            ]
        },


    },
    _callSubscriber() {
        this.reRenderEntirePage(this.getState());
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this.reRenderEntirePage = observer;
    },
    reRenderEntirePage() {},
    dispatch(action) {
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().dialogsPage = dialogReducer(this.getState().dialogsPage, action);
        this.getState().navigationPage = navigationReducer(this.getState().navigationPage, action);
        this._callSubscriber(this.getState());
    }
};


