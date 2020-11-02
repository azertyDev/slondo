import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from '@src/api/api';
import {CardData, FetchCardData} from '@root/interfaces/CardData';

const initialState: CardData = {
    isFetch: false,
    error: null,
    itemsPerPage: null,
    data: {
        data: [
            {
                id: null,
                title: '',
                location: '',
                safe_deal: false,
                created_at: '',
                total: null,
                currency: {
                    id: null,
                    name: '',
                },
                images: [
                    {
                        id: null,
                        url: '',
                    },
                ],
            },
        ],
    },
};

// Async thunk
export const fetchCardData = createAsyncThunk<any, FetchCardData>(
    'cardData/fetchCardData',
    async ({itemsPerPage, page, type}, {rejectWithValue}) => {
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
