import {combineReducers} from '@reduxjs/toolkit'
import {authReducer} from "./slices/authRegSlice"
import {categoriesReducer} from "./slices/categoriesSlice"
import {createAdOrLotReducer} from "./slices/createAdOrLotSlice"

export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    createAdOrLot: createAdOrLotReducer
});

export type RootState = ReturnType<typeof rootReducer>