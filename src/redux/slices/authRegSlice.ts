import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from "@src/api/api";
import {cookies} from "@src/helpers";
import {AuthInputs, AuthReg, RecoveryInputs} from "@root/interfaces/Auth";


const initialState: AuthReg = {
    error: null,
    isFetch: false,
    isAuth: false,
    isAuthModalOpen: false
};

export const fetchTokenLogin = createAsyncThunk<never, AuthInputs>(
    'authReg/fetchTokenByLogin',
    async ({phone, password}, {rejectWithValue}) => {
        try {
            const {token} = await userAPI.login(phone, password);
            !!token && cookies.set('token', token, {path: '/', maxAge: 2 * 3600});
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
            !!token && cookies.set('token', token, {path: '/', maxAge: 2 * 3600});
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

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
