import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from "@src/api/api";
import Cookies from "universal-cookie";
import {AuthInputs, AuthReg} from "@root/interfaces/Auth";


const cookies = new Cookies();

const initialState: AuthReg = {
    isFetch: false,
    isAuth: typeof cookies.get('token') === 'object' && cookies.get('token') !== null ? true : false,
    error: null,
    isAuthModalOpen: false
};

// Async thunk
export const fetchTokenLogin = createAsyncThunk<never, AuthInputs>(
    'authReg/fetchTokenByLogin',
    async ({phone, password}, {rejectWithValue}) => {
        try {
            const token = await userAPI.login(phone, password);
            cookies.set('token', token, {maxAge: 2 * 3600});
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchTokenRegister = createAsyncThunk<never, AuthInputs>(
    'authReg/fetchTokenByLogin',
    async ({phone}, {rejectWithValue}) => {
        try {

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
            state.isAuth = action.payload;
        },
        setIsAuthModalOpen: (state, action) => {
            state.isAuthModalOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTokenLogin.pending, (state) => {
            state.isFetch = true;
            state.error = null;
        })
        builder.addCase(fetchTokenLogin.fulfilled, (state) => {
            state.isFetch = false;
            state.error = null;
            state.isAuth = true;
        })
        builder.addCase(fetchTokenLogin.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const {setIsAuthAction, setIsAuthModalOpen} = authRegSlice.actions;
export const authReducer = authRegSlice.reducer;
