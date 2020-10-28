import {createAsyncThunk} from "@reduxjs/toolkit"
import {AuthInputVals} from "@root/interfaces/IAuthInputVals"
import {userAPI} from "@src/api/api"
import Cookies from "universal-cookie"


const cookies = new Cookies();

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