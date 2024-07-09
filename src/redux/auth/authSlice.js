import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "./authOperations";
import { getOurFriends } from "../ourFriends/ourFriendsOpertions";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            token: '' || localStorage.getItem("token")
        },
        friends: [],
        favoritesList: [],
        isLoading: false,
        error: null
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
        builder.addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getCurrentUser.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.favoritesList = actions.payload;
        });
        builder.addCase(getCurrentUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        
    }
});

export default authSlice.reducer;