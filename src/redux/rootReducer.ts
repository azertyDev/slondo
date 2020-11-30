import {combineReducers} from '@reduxjs/toolkit'
import {authReducer} from "./slices/authRegSlice"
import {createAdvrtReducer} from "./slices/createAdvrtSlice"


export const rootReducer = combineReducers({
    auth: authReducer,
    createAdvrt: createAdvrtReducer
})

export type RootState = ReturnType<typeof rootReducer>