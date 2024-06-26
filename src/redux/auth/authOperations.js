import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://petlove.b.goit.study/api"

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (data, thunkAPI) => {
        try {
            const resp = await axios.post("/users/signup", data)
            console.log(resp)
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data, thunkAPI) => {
        try {
            const resp = await axios.post("/users/signin", data)
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
);