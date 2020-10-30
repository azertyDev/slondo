import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './slices/authRegSlice'
import { categoriesReducer } from './slices/categoriesSlice'
import { createAdOrLotReducer } from './slices/createAdOrLotSlice'
import { cardDataReducer } from '@src/redux/slices/cardDataSlice'

export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    createAdOrLot: createAdOrLotReducer,
    cardData: cardDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>