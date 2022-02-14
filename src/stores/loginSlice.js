import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: '',
    name: '',
    imageUrl: '',
    isLoginSuccess: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.imageUrl = action.payload.imageUrl;
            state.isLoginSuccess = true;
        },
        loginReset: (state) => {
            state.email = '';
            state.name = '';
            state.imageUrl = '';
            state.isLoginSuccess = false;
        }
    }
});

export const {loginSuccess, loginReset} = loginSlice.actions;

export default loginSlice.reducer;