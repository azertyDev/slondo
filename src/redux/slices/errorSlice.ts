import {createSlice} from '@reduxjs/toolkit'


const initialState: { isError: boolean, errorMsg: string } = {
    isError: false,
    errorMsg: '',
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrorMsgAction: (state, action) => {
            state.isError = true;
            state.errorMsg = action.payload;
        },
        resetErrorAction: (state) => {
            state.isError = false;
            state.errorMsg = '';
        }
    },
});

export const {setErrorMsgAction, resetErrorAction} = errorSlice.actions;
export const errorReducer = errorSlice.reducer;