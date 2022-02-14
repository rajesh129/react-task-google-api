import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isDialogOpen: false
}

const timeoutSlice = createSlice({
    name: 'timeout',
    initialState,
    reducers: {
        openDialog: (state) => {
            state.isDialogOpen = true;
        },
        closeDialog: (state) => {
            state.isDialogOpen = false;
        }
    }
})

export const {openDialog, closeDialog} = timeoutSlice.actions

export default timeoutSlice.reducer