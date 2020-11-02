import {combineReducers} from '@reduxjs/toolkit'
import {authReducer} from "./slices/authRegSlice"
import {categoriesReducer} from "./slices/categoriesSlice"
import {createAdvrtReducer} from "./slices/createAdvrtSlice"

export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    createAdvrt: createAdvrtReducer
});

export type RootState = ReturnType<typeof rootReducer>