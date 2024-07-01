import {configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import newsReducer from "./news/newsSlice.js";
// import friendsReducer from "./ourFriends/ourFriendsSlice";

// const rootReducer = combineReducers({
//     auth: authReducer,
//     news: newsReducer
// })

const store = configureStore({
    reducer: {
        news: newsReducer,
        auth: authReducer,
    }
});

export default store