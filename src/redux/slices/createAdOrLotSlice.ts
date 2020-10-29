import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IAdOrLot} from '@root/interfaces/IAdOrLot';
import {userAPI} from "@src/api/api";
import {CategoryIDsTypes} from "@root/types/CategoryTypes";


const initialState: IAdOrLot = {
    isFetch: false,
    error: null,
    isLot: false,
    category: {
        id: null,
        name: null,
        childs: [{
            id: null,
            name: "",
            image: {
                id: null,
                url: ""
            },
            icons: {
                id: null,
                url: ""
            }
        }]
    }
};

export const fetchAd = createAsyncThunk<any, CategoryIDsTypes>(
    'adOrLot/fetchAd',
    async ({ctgryID, subCtgryID}, {rejectWithValue}) => {
        try {
            return await userAPI.getAdOrLot(ctgryID, subCtgryID, false);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchLot = createAsyncThunk<any, CategoryIDsTypes>(
    'adOrLot/fetchLot',
    async ({ctgryID, subCtgryID}, {rejectWithValue}) => {
        try {
            return await userAPI.getAdOrLot(ctgryID, subCtgryID, true);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const createAdOrLotSlice = createSlice({
    name: 'adOrLot',
    initialState,
    reducers: {
        setAdOrLotCtgryAction: (state, action) => {
            state.isLot = action.payload.isLot;
            state.category = action.payload.category;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAd.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchAd.fulfilled, (state, action) => {
            state.isFetch = false;
            state.isLot = false;
        })
        builder.addCase(fetchAd.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
        builder.addCase(fetchLot.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchLot.fulfilled, (state, action) => {
            state.isFetch = false;
            state.isLot = true;
        })
        builder.addCase(fetchLot.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const {setAdOrLotCtgryAction} = createAdOrLotSlice.actions;
export const createAdOrLotReducer = createAdOrLotSlice.reducer;