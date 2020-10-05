import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {MakeStore, createWrapper, Context} from 'next-redux-wrapper'

import {localization} from "./reducers/localization";

const rootReducer = combineReducers({
    localization,
});
const enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware),
);

// create a makeStore function
const makeStore: MakeStore = (context: Context) => createStore(rootReducer, enhancer);

export type AppState = ReturnType<typeof rootReducer>;

// export an assembled wrapper
export const wrapper = createWrapper<AppState>(makeStore);