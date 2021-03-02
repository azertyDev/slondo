import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Cookies from "universal-cookie";
import {userAPI} from "@src/api/api";
import {AuthInputs, AuthReg, RecoveryInputs} from "@root/interfaces/Auth";


const cookies = new Cookies();

const initialState: AuthReg = {
    isFetch: false,
    isAuth: typeof cookies.get('token') !== 'undefined',
    error: null,
    isAuthModalOpen: false
};

// Async thunk
export const fetchTokenLogin = createAsyncThunk<never, AuthInputs>(
    'authReg/fetchTokenByLogin',
    async ({phone, password}, {rejectWithValue}) => {
        try {
            const {token} = await userAPI.login(phone, password);
            cookies.set('token', token, {maxAge: 2 * 3600});
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchTokenRegister = createAsyncThunk<never, AuthInputs>(
    'authReg/fetchTokenByRegister',
    async ({phone}, {rejectWithValue}) => {
        try {
            await userAPI.register(phone);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchRecovery = createAsyncThunk<never, AuthInputs>(
    'authReg/fetchRecovery',
    async ({phone}, {rejectWithValue}) => {
        try {
            await userAPI.recoveryRequest(phone);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchTokenRecovery = createAsyncThunk<never, RecoveryInputs>(
    'authReg/fetchTokenByLogin',
    async ({phone, code, password, password_confirmation}, {rejectWithValue}) => {
        try {
            const {token} = await userAPI.recovery(phone, code, password, password_confirmation);
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
        })
        builder.addCase(fetchTokenLogin.rejected, (state, action) => {
            state.isFetch = false;
            state.error = action.payload;
        })
    }
});

export const {setIsAuthAction, setIsAuthModalOpen} = authRegSlice.actions;
export const authReducer = authRegSlice.reducer;
