import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
    "news/getNews",
    async ({page, keyword}, thunkAPI) => {
        try {
            const resp = await axios.get(`/news?page=${page || 1}&keyword=${keyword || ""}`);
            // console.log(resp.data)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)