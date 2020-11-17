import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from "@src/api/api";
import {CreateAdState} from '@root/interfaces/Advertisement';
import {CategoryIDs} from "@root/interfaces/Categories";


const initialState: CreateAdState = {
    isFetch: false,
    error: null,
    adType: {
        id: null,
        name: 'Выберите тип объявления'
    },
    category: {
        id: null,
        name: 'Выберите категорию'
    },
    data: {
        id: null,
        name: '',
        address: []
    },
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
        createAdvrtDataAction: (state, action) => {
            state.adType = action.payload.adType;
            state.category = action.payload.category;
        },
        resetCreateAdvrtDataAction: (state) => {
            state.data = initialState.data;
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

export const {resetCreateAdvrtDataAction, createAdvrtDataAction} = createAdvrtSlice.actions;
export const createAdvrtReducer = createAdvrtSlice.reducer;