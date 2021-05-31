import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from './slices/userSlice';
import {locationsReducer} from './slices/locationsSlice';
import {errorReducer} from './slices/errorSlice';
import {searchTxtReducer} from '@src/redux/slices/searchSlice';


export const rootReducer = combineReducers({
    user: userReducer,
    locations: locationsReducer,
    error: errorReducer,
    searchTxt: searchTxtReducer
});

export type RootState = ReturnType<typeof rootReducer>