import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {userAPI} from '@src/api/api'
import {AuthInputVals} from "@src/components/elements/auth_reg_form/AuthRegForm";
import Cookies from "universal-cookie";


const cookies = new Cookies();

export type AuthTypes = {
    isFetch: boolean,
    isAuth: boolean,
    error?: any
};

const initialState: AuthTypes = {
    isFetch: false,
    isAuth: false,
    error: null
};

export const fetchToken = createAsyncThunk<any, AuthInputVals>(
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
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

export const {setIsAuth} = authSlice.actions;
export default authSlice.reducer;