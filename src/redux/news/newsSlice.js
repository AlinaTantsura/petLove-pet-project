import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsOperations";
import { Store } from "react-notifications-component";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    lastPage: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNews.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      
      if (actions.payload.results.length === 0) {
        Store.addNotification({
          title: "Warning!",
          message:
            "There are no news to your request. Try to change a search word",
          type: "info",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        return;        
      }
      state.news = actions.payload.results;
      state.lastPage = actions.payload.totalPages;
    });
    builder.addCase(getNews.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
  },
});

export default newsSlice.reducer;
