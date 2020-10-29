import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {userAPI} from "@src/api/api";
import Cookies from "universal-cookie";
import {AuthInputTypes} from "@root/types/AuthInputTypes";
import {AuthRegTypes} from "@root/types/AuthRegTypes";


const cookies = new Cookies();

const initialState: AuthRegTypes = {
    isFetch: false,
    isAuth: false,
    error: null
};

// Async thunk
export const fetchToken = createAsyncThunk<never, AuthInputTypes>(
    'auth/fetchTokenByLogin',
    async ({phone, password}, {rejectWithValue}) => {
        try {
            const token = await userAPI.login(phone, password);
            cookies.set('token', token, {maxAge: 2 * 3600});
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

// Slice
const authRegSlice = createSlice({
    name: 'authReg',
    initialState,
    reducers: {
        setIsAuthAction: (state, action) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchToken.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchToken.fulfilled, (state) => {
            state.isFetch = false;
            state.isAuth = true;
        })
        builder.addCase(fetchToken.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const {setIsAuthAction} = authRegSlice.actions;
export const authReducer = authRegSlice.reducer;