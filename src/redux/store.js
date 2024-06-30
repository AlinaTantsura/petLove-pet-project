import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
// import friendsReducer from "./ourFriends/ourFriendsSlice";

const rootReducer = combineReducers({
//   friends: friendsReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer
})