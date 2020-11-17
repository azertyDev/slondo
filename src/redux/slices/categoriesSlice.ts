import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Categories} from '@root/interfaces/Categories'
import {userAPI} from "@src/api/api";


const initialState: Categories = {
    isFetch: false,
    error: null,
    list: [{
        id: null,
        name: '',
        images: {id: null, url: ''},
        icons: {id: null, url: ''},
        childs: []
    }],
};

// Async thunk
export const fetchCategories = createAsyncThunk<any, string>(
    'categories/fetchCategories',
    async (lang, {rejectWithValue}) => {
        try {
            return await userAPI.getCategories(lang);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

// Slice
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
            state.list = action.payload;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const categoriesReducer = advertisementSlice.reducer;