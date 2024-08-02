import { createSlice } from "@reduxjs/toolkit";
import { getOurFriends } from "./ourFriendsOpertions";

const ourFriendsSlice = createSlice({
    name: "friends",
    initialState: {
        friends: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder.addCase(getOurFriends.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getOurFriends.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.friends = actions.payload;
        });
        builder.addCase(getOurFriends.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
    }
});

export default ourFriendsSlice.reducer;