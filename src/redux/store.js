import {configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import newsReducer from "./news/newsSlice.js";
import noticesReducer from "./notices/noticesSlice.js"
// import friendsReducer from "./ourFriends/ourFriendsSlice";

// const rootReducer = combineReducers({
//     auth: authReducer,
//     news: newsReducer
// })

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
        notices: noticesReducer
    }
});

export default store