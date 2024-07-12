import { createSlice } from "@reduxjs/toolkit";
import { getCities, getPetSex, getPetType } from "./notices/noticesOperations";
import { loginUser, logoutUser, registerUser } from "./auth/authOperations";
import { getOurFriends } from "./ourFriends/ourFriendsOpertions";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(registerUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(logoutUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(getOurFriends.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getOurFriends.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getOurFriends.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        
        builder.addCase(getPetSex.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPetSex.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getPetSex.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getPetType.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPetType.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getPetType.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getCities.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getCities.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getCities.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
    }
});

export const { changeSearchWord } = commonSlice.actions;
export default commonSlice.reducer;