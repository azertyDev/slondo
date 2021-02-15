import {combineReducers} from '@reduxjs/toolkit';

import {authReducer} from "./slices/authRegSlice";
import {locationsReducer} from "./slices/locationsSlice";
import {errorReducer} from "./slices/errorSlice";


export const rootReducer = combineReducers({
    auth: authReducer,
    locations: locationsReducer,
    error: errorReducer
})

export type RootState = ReturnType<typeof rootReducer>