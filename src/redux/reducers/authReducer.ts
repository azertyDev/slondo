import {AnyAction} from "redux"
import {
    FETCH_TOKEN_BEGIN,
    FETCH_TOKEN_SUCCESS,
    FETCH_TOKEN_FAILURE,
    SET_IS_AUTH
} from '../actions/authActions'

export type AuthTypes = {
    isFetch: boolean,
    isAuth: boolean,
    error?: any
};

const initialState = {
    isFetch: false,
    isAuth: false,
    error: null
};

export const authReducer = (state: AuthTypes = initialState, action: AnyAction): AuthTypes => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case FETCH_TOKEN_BEGIN:
            return {
                ...state,
                isFetch: true,
                error: null
            }
        case FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                isFetch: false,
                ...action.payload
            }
        case FETCH_TOKEN_FAILURE:
            return {
                ...state,
                isFetch: false,
                error: action.payload
            }
        default:
            return state;
    }
};