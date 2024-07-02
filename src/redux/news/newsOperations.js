import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
    "news/getNews",
    async ({page, searchWord}, thunkAPI) => {
        try {
            const resp = await axios.get(`/news?page=${page}&keyword=${searchWord}`);
            // console.log(resp.data)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)