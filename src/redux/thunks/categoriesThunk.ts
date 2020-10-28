import {createAsyncThunk} from "@reduxjs/toolkit"
import {userAPI} from "@src/api/api"


export const fetchCategories = createAsyncThunk<any>(
    'categories/fetchCategories',
    async (_, {rejectWithValue}) => {
        try {
            return await userAPI.getCategories();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);