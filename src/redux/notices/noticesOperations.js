import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "notices/getCategories",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/notices/categories");
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPetSex = createAsyncThunk(
  "notices/getPetSex",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/notices/sex");
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPetType = createAsyncThunk(
  "notices/getPetType",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/notices/species");
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCities = createAsyncThunk(
  "notices/getCities",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/cities");
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getNotices = createAsyncThunk(
  "notices/getNotices",
  async (
    { page, keyword, category, species, locationId, firstNotPopular},
    thunkAPI
  ) => {
    try {
      const resp = await axios.get(
        `/notices?page=${page || 1}&keyword=${keyword || ""}&category=${
          category === "all" ? "" : category
        }&species=${species === "all" ? "" : species}&locationId=${
          locationId ? locationId : ""
        }&byPopularity=${firstNotPopular || false}`
      );
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllNotices = createAsyncThunk(
  "notices/getAllNotices",
  async ({keyword, category, species, limit, locationId, firstNotPopular }, thunkAPI) => {
    try {
      const resp = await axios.get(
        `/notices?keyword=${keyword || ""}&category=${
          category === "all" ? "" : category
        }&species=${
          species === "all" ? "" : species
        }&limit=${limit}&locationId=${locationId ? locationId : ""}&byPopularity=${firstNotPopular || false}`
      );
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addFavoriteNotice = createAsyncThunk(
  "notices/addFavoriteNotice",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.post(`/notices/favorites/add/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeFavoriteNotice = createAsyncThunk(
  "notices/removeFavoriteNotice",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`/notices/favorites/remove/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
