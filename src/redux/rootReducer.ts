import {combineReducers} from '@reduxjs/toolkit'
import {authReducer} from "./slices/authRegSlice"
import {categoriesReducer} from "./slices/categoriesSlice"
import {createAdvrtReducer} from "./slices/createAdvrtSlice"
import {locationsReducer} from "./slices/locationsSlice";


export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    createAdvrt: createAdvrtReducer,
    locations: locationsReducer
})

export type RootState = ReturnType<typeof rootReducer>