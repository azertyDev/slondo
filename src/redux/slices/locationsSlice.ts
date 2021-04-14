import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from "@src/api/api";
import {Locations, LocationsDataTypes} from '@root/interfaces/Locations';


const initialState: Locations = {
    isFetch: false,
    error: null,
    data: []
};

export const fetchLocations = createAsyncThunk<LocationsDataTypes, string>(
    'locations/fetchLocations',
    async (lang, {rejectWithValue}) => {
        try {
            return await userAPI.getLocations();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLocations.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchLocations.fulfilled, (state, action) => {
            state.isFetch = false;
            state.error = null;
            state.data = action.payload;
        })
        builder.addCase(fetchLocations.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const locationsReducer = locationsSlice.reducer;