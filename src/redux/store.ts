import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from "./rootReducer"
import {createWrapper} from 'next-redux-wrapper'


// create a makeStore function
const store = () => configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export const wrapper = createWrapper(store);