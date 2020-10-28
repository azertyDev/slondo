import {combineReducers} from '@reduxjs/toolkit'
import {authReducer} from "./slices/authRegSlice"
import {categoriesReducer} from "./slices/categoriesSlice"

export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>