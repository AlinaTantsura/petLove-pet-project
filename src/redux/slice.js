import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCities, getNotices, getPetSex, getPetType } from "./notices/noticesOperations";
import { getNews } from "./news/newsOperations";
import { loginUser, logoutUser, registerUser } from "./auth/authOperations";
import { getOurFriends } from "./ourFriends/ourFriendsOpertions";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        searchWord: "",
        lastPage: null,
        error: null,
        isLoading: false,
    },
    reducers: {
        changeSearchWord(state, actions) {
            state.searchWord = actions.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(registerUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(logoutUser.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(getOurFriends.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getOurFriends.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getOurFriends.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        });
        builder.addCase(getNews.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getNews.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.lastPage = actions.payload.totalPages;
        });
        builder.addCase(getNews.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getNotices.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getNotices.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.lastPage = actions.payload.totalPages;
        });
        builder.addCase(getNotices.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getCategories.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getCategories.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getPetSex.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPetSex.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getPetSex.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getPetType.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getPetType.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getPetType.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
        builder.addCase(getCities.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getCities.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getCities.rejected, (state, actions) => {
            state.isLoading = false;
            state.error = actions.payload;
        }); 
    }
});

export const { changeSearchWord } = commonSlice.actions;
export default commonSlice.reducer;