import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchFollowers} from "../apiService";

const initialState = {
    isUserLoading: false,
    isError: false,
    followers: null
}

export const fetchFollowersByUser = createAsyncThunk(
    'users/followers',
    async (userId) => {
      const response = await fetchFollowers(userId)
      return response.data
    }
)

const followerSlice = createSlice({
    name: 'follower',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFollowersByUser.pending, (state) => {
            state.isUserLoading = true;
        });
        builder.addCase(fetchFollowersByUser.fulfilled, (state, action) => {
            state.isUserLoading = false;
            state.followers = action.payload;
        });
        builder.addCase(fetchFollowersByUser.rejected, (state) => {
            state.isUserLoading = false;
            state.isError = true;
        });
    }
});

export default followerSlice.reducer;