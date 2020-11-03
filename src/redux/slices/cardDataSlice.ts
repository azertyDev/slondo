import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '@src/api/api';
import { CardData, FetchCardData } from '@root/interfaces/CardData';

const initialState: CardData = {
    isFetch: false,
    error: null,
    adData: {
        data: [],
        total: null,
    },
    lotData: {
        data: [],
        total: null,
    },
};

// Async thunk
export const fetchCardData = createAsyncThunk<any, FetchCardData>(
    'cardData/fetchCardData',
    async ({ itemsPerPage, page, type }, { rejectWithValue }) => {
        try {
            return await userAPI.getCardData(itemsPerPage, page, type);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);

// // Slice
// const cardDataSlice = createSlice({
//     name: 'cardData',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchAdCardData.pending, (state) => {
//             state.isFetch = true;
//             state.error = null;
//         });
//         builder.addCase(fetchAdCardData.fulfilled, (state, action) => {
//             state.isFetch = false;
//             state.adData.total = action.payload.total;
//             state.adData.data = [...state.adData.data, ...action.payload.data];
//         });
//         builder.addCase(fetchAdCardData.rejected, (state, action) => {
//             state.isFetch = false;
//             state.error = action.payload;
//         });

//         builder.addCase(fetchLotCardData.pending, (state) => {
//             state.isFetch = true;
//             state.error = null;
//         });
//         builder.addCase(fetchLotCardData.fulfilled, (state, action) => {
//             state.isFetch = false;
//             state.lotData.total = action.payload.total;
//             state.lotData.data = [...state.lotData.data, ...action.payload.data];
//         });
//         builder.addCase(fetchLotCardData.rejected, (state, action) => {
//             state.isFetch = false;
//             state.error = action.payload;
//         });
//     },
// });


