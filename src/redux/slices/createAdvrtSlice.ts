import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from "@src/api/api";
import {CreateAdState} from '@root/interfaces/Advertisement';
import {CategoryIDs} from "@root/interfaces/Categories";


const initialState: CreateAdState = {
    isFetch: false,
    error: null,
    data: []
};

export const fetchAdDataForCreate = createAsyncThunk<any, CategoryIDs>(
    'createAdvrt/fetchAdDataForCreate',
    async ({ctgryID, subCtgryID, lang}, {rejectWithValue}) => {
        try {
            return await userAPI.getAdDataForCreate(ctgryID, subCtgryID, lang);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const createAdvrtSlice = createSlice({
    name: 'createAdvrt',
    initialState,
    reducers: {
        resetCreateAdvrtDataAction: (state) => {
            state.data = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdDataForCreate.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchAdDataForCreate.fulfilled, (state, action) => {
            state.isFetch = false;
            state.data = action.payload;
        })
        builder.addCase(fetchAdDataForCreate.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const {resetCreateAdvrtDataAction} = createAdvrtSlice.actions;
export const createAdvrtReducer = createAdvrtSlice.reducer;