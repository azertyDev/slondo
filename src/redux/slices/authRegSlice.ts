import {createSlice} from '@reduxjs/toolkit'
import {fetchToken} from '../thunks/authRegThunk'
import {IAuthReg} from "@root/interfaces/IAuthReg";


const initialState: IAuthReg = {
    isFetch: false,
    isAuth: false,
    error: null
};

const authRegSlice = createSlice({
    name: 'authReg',
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

export const {setIsAuth} = authRegSlice.actions;
export const authReducer = authRegSlice.reducer;