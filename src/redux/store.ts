import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from "./rootReducer";
import {createWrapper} from 'next-redux-wrapper';

const nonSerializableValueMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

// create a makeStore function
const store = () => configureStore({
    reducer: rootReducer,
    middleware: nonSerializableValueMiddleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export const wrapper = createWrapper(store);