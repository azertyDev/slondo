import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from "./slices/userSlice";
import {locationsReducer} from "./slices/locationsSlice";
import {errorReducer} from "./slices/errorSlice";


export const rootReducer = combineReducers({
    user: userReducer,
    locations: locationsReducer,
    error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>