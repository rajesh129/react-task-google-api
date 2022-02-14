import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    task: '',
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        assignTask: (state) => {
            state.task = 'Task assigned'
        },
        deleteTask: (state) => {
            state.task = 'Task Removed'
        }
    }
})

export const {assignTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;