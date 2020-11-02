import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from '@src/api/api';
import { CardDataTypes } from '@root/types/CardDataTypes';

const initialState = {
    isFetch: false,
    error: null,
    data: {
        data: [],
    },
};

// Async thunk
export const fetchCardData = createAsyncThunk<never, CardDataTypes>(
    'cardData/fetchCardData',
    async ({ itemsPerPage, page, type }, { rejectWithValue }) => {
        try {
            return await userAPI.getCardData(itemsPerPage, page, type);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);

// Slice
const cardDataSlice = createSlice({
    name: 'cardData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCardData.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        });
        builder.addCase(fetchCardData.fulfilled, (state, action) => {
            state.isFetch = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCardData.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        });
    },
});

export const cardDataReducer = cardDataSlice.reducer;
