import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, actions) => {
            state.data = actions.payload
        })
    }
});

export default authSlice.reducer;