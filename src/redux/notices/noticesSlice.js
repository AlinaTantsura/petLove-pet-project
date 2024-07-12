import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteNotice,
  getAllNotices,
  getCategories,
  getCities,
  getNotices,
  getPetSex,
  getPetType,
  removeFavoriteNotice,
} from "./noticesOperations";
import { getCurrentUser } from "../auth/authOperations";

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
  },
  reducers: {
    changeSexValue(state, actions) {
      state.sexValue = actions.payload
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
    builder.addCase(getPetSex.fulfilled, (state, actions) => {
      state.petSex = actions.payload;
    });
    builder.addCase(getPetType.fulfilled, (state, actions) => {
      state.types = actions.payload;
    });
    builder.addCase(getCities.fulfilled, (state, actions) => {
      state.cities = actions.payload;
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
      state.notices = actions.payload.results.filter(item => item.sex === state.sexValue);
      // state.lastPage = actions.payload.totalPages;
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
    });
    builder.addCase(removeFavoriteNotice.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, actions) => {
      state.favIds = actions.payload.map((item) => item._id);
    });
  },
});

export const { changeSexValue} = noticesSlice.actions;
export default noticesSlice.reducer;
