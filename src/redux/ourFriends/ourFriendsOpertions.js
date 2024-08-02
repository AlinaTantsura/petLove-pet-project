import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOurFriends = createAsyncThunk(
    "friends/getOurFriends",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get("/friends/");
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)