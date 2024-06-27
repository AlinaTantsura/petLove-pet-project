import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://petlove.b.goit.study/api"
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}` || '';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = "";
}

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (data, thunkAPI) => {
        try {
            const resp = await axios.post("/users/signup", data)
            setAuthToken(resp.data.token)
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
            setAuthToken(resp.data.token)
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
);

export const getUserInfo = createAsyncThunk(
    "user/getUserInfo",
    async () => {
        
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout",
    async (_, thunkAPI) => {
        try {
            console.log(axios.defaults.headers.common.Authorization)
            await axios.post('/users/signout')
            clearAuthToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)