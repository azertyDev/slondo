import {createSlice} from '@reduxjs/toolkit'
import {fetchCategories} from '../thunks/categoriesThunk'
import {ICategories} from '@root/interfaces/ICategories'


const initialState: ICategories = {
    isFetch: false,
    error: null,
    categories: {},
};

const advertisementSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchCategories.fulfilled, (state, payload) => {
            state.isFetch = false;
            state.categories = payload;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const categoriesReducer = advertisementSlice.reducer;