import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from './slices/userSlice';
import {locationsReducer} from './slices/locationsSlice';
import {errorReducer} from './slices/errorSlice';
import {searchTxtReducer} from '@src/redux/slices/searchSlice';
import {userCardReducer} from '@src/redux/slices/userCardSlice';


export const rootReducer = combineReducers({
    user: userReducer,
    userCard: userCardReducer,
    locations: locationsReducer,
    error: errorReducer,
    searchTxt: searchTxtReducer
});

export type RootState = ReturnType<typeof rootReducer>