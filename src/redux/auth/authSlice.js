import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./authOperations";
import { getOurFriends } from "../ourFriends/ourFriendsOpertions";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            token: '' || localStorage.getItem("token")
        },
        friends: [],
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, actions) => {
            state.user.token = actions.payload.token;
            localStorage.setItem("token", actions.payload.token);
        });
        builder.addCase(loginUser.fulfilled, (state, actions) => {
            state.user.token = actions.payload.token;
            localStorage.setItem("token", actions.payload.token);
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.user.token = "";
            localStorage.setItem("token", "");
        });
        builder.addCase(getOurFriends.fulfilled, (state, actions) => {
            state.friends = actions.payload;
        });
    }
});

export default authSlice.reducer;