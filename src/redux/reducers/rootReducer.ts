import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {selfDataReducer} from "./selfDataReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    selfData: selfDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>