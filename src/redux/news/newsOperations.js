import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
    "news/getNews",
    async (page, thunkAPI) => {
        try {
            const resp = await axios.get(`/news?page=${page}`);
            // console.log(resp.data)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)