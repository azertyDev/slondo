import {createSlice} from '@reduxjs/toolkit';

const initialState = '';

const searchTxtSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setSearchTxtAction: (state, {payload}) => {
            return payload;
        }
    }
});

export const {setSearchTxtAction} = searchTxtSlice.actions;
export const searchTxtReducer = searchTxtSlice.reducer;