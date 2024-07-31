import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsOperations";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        lastPage: null,
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getNews.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.news = actions.payload.results;
            state.lastPage = actions.payload.totalPages;
        });
        builder.addCase(getNews.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
    }
});

export default newsSlice.reducer;