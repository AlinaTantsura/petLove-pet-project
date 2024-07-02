import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCities, getPetSex, getPetType } from "./noticesOperations";

const noticesSlice = createSlice({
    name: "notices",
    initialState: {
        categories: null,
        petSex: null,
        types: null,
        cities: null
    },
    extraReducers: builder => {
        builder.addCase(getCategories.fulfilled, (state, actions) => {
            state.categories = actions.payload
        });
        builder.addCase(getPetSex.fulfilled, (state, actions) => {
            state.petSex = actions.payload
        });
        builder.addCase(getPetType.fulfilled, (state, actions) => {
            state.types = actions.payload
        });
        builder.addCase(getCities.fulfilled, (state, actions) => {
            state.cities = actions.payload
        });
    }
});

export default noticesSlice.reducer;