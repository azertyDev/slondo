import {combineReducers} from '@reduxjs/toolkit';

import {authReducer} from "./slices/authRegSlice";
import {locationsReducer} from "./slices/locationsSlice";
import {errorReducer} from "./slices/errorSlice";
import {createPostDataReducer} from "./slices/createPostDataSlice";


export const rootReducer = combineReducers({
    auth: authReducer,
    locations: locationsReducer,
    error: errorReducer,
    createPostData: createPostDataReducer
});

export type RootState = ReturnType<typeof rootReducer>