import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            token: ''
        },
        error: null,
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.user.token = actions.payload.token
        });
        builder.addCase(registerUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.user.token = actions.payload.token
        });
        builder.addCase(loginUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        
    }
});

export default authSlice.reducer;