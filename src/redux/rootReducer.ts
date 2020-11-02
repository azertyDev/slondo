import {combineReducers} from '@reduxjs/toolkit'
import {authReducer} from "./slices/authRegSlice"
import {categoriesReducer} from "./slices/categoriesSlice"
import {createAdvrtReducer} from "./slices/createAdvrtSlice"
import { cardDataReducer } from '@src/redux/slices/cardDataSlice'


export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    createAdvrt: createAdvrtReducer,
    cardData: cardDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>