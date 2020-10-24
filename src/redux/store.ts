import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from "./rootReducer"


// create a makeStore function
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

// export type AppDispatch = typeof store.dispatch