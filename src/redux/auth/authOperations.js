import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://petlove.b.goit.study/api"

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (data, thunkAPI) => {
        try {
            const resp = await axios("/users/signup", data)
            console.log(resp);
        }
        catch (error) {
            console.log(error)
            thunkAPI.rejectWithValue(error)
        }
    }
)