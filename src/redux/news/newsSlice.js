import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsOperations";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        lastPage: null
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, actions) => {
            state.news = actions.payload.results;
            state.lastPage = actions.payload.totalPages;
        });    
    }
});

export default newsSlice.reducer;