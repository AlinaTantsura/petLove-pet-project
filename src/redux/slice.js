import { createSlice } from "@reduxjs/toolkit";
import { getCities, getPetSex, getPetType } from "./notices/noticesOperations";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        
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