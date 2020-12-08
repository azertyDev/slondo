import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Categories, CategoriesDataTypes} from '@root/interfaces/Categories'
import {userAPI} from "@src/api/api";


const initialState: Categories = {
    isFetch: false,
    error: null,
    list: [{
        id: null,
        name: '',
        images: {
            id: null,
            url: {
                original: ''
            }
        },
        icons: {
            id: null,
            url: {
                original: ''
            }
        },
        childs: [],
        has_auction: null
    }],
};

// Async thunk
export const fetchCategories = createAsyncThunk<CategoriesDataTypes, string>(
    'categories/fetchCategories',
    async (lang, {rejectWithValue}) => {
        try {
            return await userAPI.getCategories(lang);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

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
            state.error = null;
            state.list = action.payload;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const categoriesReducer = advertisementSlice.reducer;