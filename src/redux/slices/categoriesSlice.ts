import {createSlice} from '@reduxjs/toolkit'
import {ICategories} from '@root/interfaces/ICategories'
import {fetchCategories} from '../thunks/categoriesThunk'


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
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isFetch = false;
            state.categories = action.payload;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const categoriesReducer = advertisementSlice.reducer;