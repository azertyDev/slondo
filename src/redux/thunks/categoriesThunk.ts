import {createAsyncThunk} from "@reduxjs/toolkit"
import {userAPI} from "@src/api/api"
import {ICategories} from "@root/interfaces/ICategories";


export const fetchCategories = createAsyncThunk<ICategories, string>(
    'categories/fetchCategories',
    async (lang, {rejectWithValue}) => {
        try {
            return await userAPI.getCategories(lang);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);