import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCities, getNotices, getPetSex, getPetType } from "./noticesOperations";

const noticesSlice = createSlice({
    name: "notices",
    initialState: {
        notices: [],
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
        builder.addCase(getNotices.fulfilled, (state, actions) => {
            state.notices = actions.payload.results;
        })
    }
});

export default noticesSlice.reducer;