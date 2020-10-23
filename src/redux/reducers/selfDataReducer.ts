import {AnyAction} from "redux"
import {HYDRATE} from "next-redux-wrapper"
import {FETCH_SELF_DATA_BEGIN, FETCH_SELF_DATA_FAILURE, FETCH_SELF_DATA_SUCCESS} from '../actions/selfDataActions'

type SelfDataTypes = {
    isFetch: boolean,
    data: {
        id: number,
        name: string,
        email: string,
        phone: string,
        email_verified_at: string,
        created_at: string,
        updated_at: string
    },
    error: any
};

const initialState = {
    isFetch: false,
    data: {
        id: null,
        name: '',
        email: '',
        phone: '',
        email_verified_at: '',
        created_at: '',
        updated_at: ''
    },
    error: null
};

export const selfDataReducer = (state: SelfDataTypes = initialState, action: AnyAction): SelfDataTypes => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload.selfData
            }
        case FETCH_SELF_DATA_BEGIN:
            return {
                ...state,
                isFetch: true,
                error: null
            }
        case FETCH_SELF_DATA_SUCCESS:
            return {
                ...state,
                isFetch: false,
                ...action.payload
            }
        case FETCH_SELF_DATA_FAILURE:
            return {
                ...state,
                isFetch: false,
                error: action.payload
            }
        default:
            return state;
    }
};