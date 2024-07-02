import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    "notices/getCategories",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get("/notices/categories");
            return resp.data
        } catch (error) {
            console.log(error);
            thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export const getPetSex = createAsyncThunk(
    "notices/getPetSex",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get("/notices/sex");
            return resp.data
        } catch (error) {
            console.log(error);
            thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export const getPetType = createAsyncThunk(
    "notices/getPetType",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get("/notices/species");
            return resp.data
        } catch (error) {
            console.log(error);
            thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

export const getCities = createAsyncThunk(
    "notices/getCities",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get("/cities");
            return resp.data
        } catch (error) {
            console.log(error);
            thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)