import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsOperations";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, actions) => {
            state.news = actions.payload.results;
        });    
    }
});

export default newsSlice.reducer;