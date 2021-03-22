import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from '@src/api/api';
import {cookies} from '@src/helpers';
import {AuthReg, RecoveryInputs} from '@root/interfaces/Auth';
import {COOKIE_LIFE_TIME} from '@src/constants';


const initialState: AuthReg = {
    error: null,
    isFetch: false,
    isAuth: false,
    isAuthModalOpen: false,
    user: {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: ''
    }
};

// export const fetchTokenLogin = createAsyncThunk<UserInfo, { phone: string, password: string }>(
//     'authReg/fetchTokenByLogin',
//     async ({ phone, password }, { rejectWithValue }) => {
//         try {
//             const { token, user } = await userAPI.login(phone, password);
//             !!token && cookies.set('token', token, { path: '/', maxAge: 2 * 3600 });
//             return user;
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );
//
// export const fetchTokenRegister = createAsyncThunk<never, never>(
//     'authReg/fetchTokenByRegister',
//     async ({ phone }, { rejectWithValue }) => {
//         try {
//             await userAPI.register(phone);
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );

export const fetchRecovery = createAsyncThunk<never, never>(
    'authReg/fetchRecovery',
    async ({ phone }, { rejectWithValue }) => {
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
            !!token && cookies.set('token', token, {path: '/', maxAge: COOKIE_LIFE_TIME});
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const authRegSlice = createSlice({
    name: 'authReg',
    initialState,
    reducers: {
        signInAction: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
        },
        signOutAction: () => {
            return { ...initialState };
        },
        setIsAuthModalOpen: (state, action) => {
            state.isAuthModalOpen = action.payload;
        }
    }
});

export const { signInAction, signOutAction, setIsAuthModalOpen } = authRegSlice.actions;
export const authReducer = authRegSlice.reducer;
