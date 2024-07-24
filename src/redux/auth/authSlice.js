import { createSlice } from "@reduxjs/toolkit";
import { addPet, editUserInfo, getAllUserInfo, getCurrentUser, loginUser, logoutUser, registerUser, removePet } from "./authOperations";
import { getOurFriends } from "../ourFriends/ourFriendsOpertions";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            token: '' || localStorage.getItem("token"),
            avatar: "",
            name: "",
            email: "",
            phone: ""
        },
        friends: [],
        favoritesList: [],
        petsList: [],
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
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            state.user.token = "";
            localStorage.setItem("token", "");
        });
        builder.addCase(logoutUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
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
        builder.addCase(getAllUserInfo.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getAllUserInfo.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            console.log(actions.payload)
            state.user.avatar = actions.payload.avatar;
            state.user.name = actions.payload.name;
            state.user.email = actions.payload.email;
            state.user.phone = actions.payload.phone;
            state.petsList = actions.payload.pets;
        });
        builder.addCase(getAllUserInfo.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(editUserInfo.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(editUserInfo.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.user.avatar = actions.payload.avatar;
            state.user.name = actions.payload.name;
            state.user.email = actions.payload.email;
            state.user.phone = actions.payload.phone;
            state.petsList = actions.payload.pets;
        });
        builder.addCase(editUserInfo.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(addPet.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addPet.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            console.log(actions.payload)
            // state.petsList = actions.payload.pets;
        });
        builder.addCase(addPet.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(removePet.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(removePet.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.petsList = actions.payload.pets;
        });
        builder.addCase(removePet.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        
    }
});

export default authSlice.reducer;