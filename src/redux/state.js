let reRenderEntirePage = () => {
};

export let updateMessageBoxText = (text) => {
    state.dialogsPage.messageBoxTextState = text;
    reRenderEntirePage(state);
};
export let addNewPost = () => {
    let post = {
        message: state.profilePage.postState,
        likes_counter: 0,
    };
    state.profilePage.posts.push(post);
    state.profilePage.postState = "";
    reRenderEntirePage(state);
};
export let updateNewPostText = (text) => {
    state.profilePage.postState = text;
    reRenderEntirePage(state);
};
export let addNewMessage = () => {
    let msg = {id: 5, message: state.dialogsPage.messageBoxTextState};
    state.dialogsPage.chats.push(msg);
    state.dialogsPage.messageBoxTextState = "";
    reRenderEntirePage(state);
};
export let subscribe = (observer) => {
    reRenderEntirePage = observer;
};


export default state;

let store = {
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
    getState() {
        return this._state;
    },
    updateMessageBoxText(text) {
        this.getState().dialogsPage.messageBoxTextState = text;
        reRenderEntirePage(this.getState());
    },


}
