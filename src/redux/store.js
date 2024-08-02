import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slice.js";
import authReducer from "./auth/authSlice.js";
import newsReducer from "./news/newsSlice.js";
import noticesReducer from "./notices/noticesSlice.js";
import friendsReducer from "./ourFriends/ourFriendsSlice";

// const rootReducer = combineReducers({
//     auth: authReducer,
//     news: newsReducer
// })

const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
