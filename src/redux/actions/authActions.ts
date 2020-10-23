import {AuthTypes} from "../reducers/authReducer";

export const FETCH_TOKEN = 'FETCH_TOKEN'
export const FETCH_TOKEN_BEGIN = 'FETCH_TOKEN_BEGIN'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE'
export const SET_IS_AUTH = 'SET_IS_AUTH'

export const authActions = {
    fetchTokenBegin: () => ({
        type: FETCH_TOKEN_BEGIN
    }),
    fetchTokenSuccess: ({isAuth, isFetch}: AuthTypes) => ({
        type: FETCH_TOKEN_SUCCESS,
        payload: {isAuth, isFetch}
    }),
    fetchTokenFailure: (error) => ({
        type: FETCH_TOKEN_FAILURE,
        payload: error
    })
};