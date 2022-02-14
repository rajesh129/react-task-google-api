import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUsers from "../apiService";

const initialState = {
    login: '',
    imageUrl: '',
    userType: '',
    isUserLoading: false,
    isError: false,
}


export const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (userId) => {
      const response = await fetchUsers(userId);
      return response.data
    }
)

const userDataSlice = createSlice({
    name: 'fetchUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state) => {
            state.isUserLoading = true;
        });
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.isUserLoading = false;
            state.login = action.payload.login;
            state.imageUrl = action.payload.avatar_url;
            state.userType = action.payload.type;
        });
        builder.addCase(fetchUserById.rejected, (state) => {
            state.isUserLoading = false;
            state.isError = true;
        });
    }
});

export default userDataSlice.reducer;