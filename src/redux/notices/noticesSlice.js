import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteNotice,
  getAllNotices,
  getCategories,
  getCities,
  getNoticeById,
  getNotices,
  getPetSex,
  getPetType,
  removeFavoriteNotice,
} from "./noticesOperations";
import { getCurrentUser } from "../auth/authOperations";
import { Store } from "react-notifications-component";

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    notices: [],
    favIds: [],
    lastPage: null,
    categories: null,
    petSex: null,
    types: null,
    cities: null,
    isLoading: false,
    error: null,
    sexValue: "all",
    sortWord: null,
    currentNotice: null,
  },
  reducers: {
    changeSexValue(state, actions) {
      state.sexValue = actions.payload;
    },
    changeSortWord(state, actions) {
      state.sortWord = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.categories = actions.payload;
    });
    builder.addCase(getCategories.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getPetSex.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPetSex.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.petSex = actions.payload;
    });
    builder.addCase(getPetSex.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getPetType.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPetType.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.types = actions.payload;
    });
    builder.addCase(getPetType.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getCities.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCities.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.cities = actions.payload;
    });
    builder.addCase(getCities.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getNotices.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNotices.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.notices = actions.payload.results;
      state.lastPage = actions.payload.totalPages;
      if (state.notices.length === 0) {
        Store.addNotification({
          title: "Warning!",
          message:
            "There are no notices to your request. Try to change the requests parameters",
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
      }
    });
    builder.addCase(getNotices.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getAllNotices.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllNotices.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.notices = actions.payload.results;

      if (state.sexValue !== "all") {
        state.notices = state.notices.filter(
          (item) => item.sex === state.sexValue
        );
      }
      if (state.sortWord === "cheap") {
        const noPrice = state.notices.filter(
          (item) => item.price === undefined
        );
        const sortPrices = state.notices
          .filter((item) => item.price)
          .sort((itemPrev, itemNext) => itemPrev.price - itemNext.price);
        state.notices = [...noPrice, ...sortPrices];
      }
      if (state.sortWord === "expensive") {
        const noPrice = state.notices.filter(
          (item) => item.price === undefined
        );
        const sortPrices = state.notices
          .filter((item) => item.price)
          .sort((itemPrev, itemNext) => itemNext.price - itemPrev.price);
        state.notices = [...sortPrices, ...noPrice];
      }
      if(state.notices.length === 0) console.log("Empty")
    });
    builder.addCase(getAllNotices.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(addFavoriteNotice.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addFavoriteNotice.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.favIds = actions.payload;
      Store.addNotification({
          title: "Success!",
          message:
            "The notice is successfully added to your favorite list",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
    });
    builder.addCase(addFavoriteNotice.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(removeFavoriteNotice.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removeFavoriteNotice.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.favIds = actions.payload;
      Store.addNotification({
          title: "Success!",
          message:
            "The notice is successfully removed from your favorite list",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
    });
    builder.addCase(removeFavoriteNotice.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.favIds = actions.payload.map((item) => item._id);
    });
    builder.addCase(getCurrentUser.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getNoticeById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNoticeById.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      state.currentNotice = actions.payload;
    });
    builder.addCase(getNoticeById.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
  },
});

export const { changeSexValue, changeSortWord } = noticesSlice.actions;
export default noticesSlice.reducer;
