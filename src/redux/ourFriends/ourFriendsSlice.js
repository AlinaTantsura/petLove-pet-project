import { createSlice } from "@reduxjs/toolkit";
import { getOurFriends } from "./ourFriendsOpertions";

const friendsSlice = createSlice({
    name: "friends",
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getOurFriends.fulfilled, (state, actions) => {
            state = actions.payload;
        })
    }
})

export default friendsSlice.reducer;