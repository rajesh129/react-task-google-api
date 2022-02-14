import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLogOutSuccess: false,
}

const logoutSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logoutSuccess: (state, action) => {
            state.isLogOutSuccess = true;
        }
    }
});

export const {logoutSuccess} = logoutSlice.actions;

export default logoutSlice.reducer;