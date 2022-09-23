let initialState = {
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
        ],
};

const navigationReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default navigationReducer;