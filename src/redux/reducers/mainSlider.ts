import {mainSliderActionsTypes} from '../actions/mainSliderActions';
import {AnyAction} from "redux";
import {HYDRATE} from "next-redux-wrapper";

type image = {
    url: string
}

export interface State {
    images: image[];
    error: string | null;
}

const initialState = {
    images: [],
    error: null,
};

export const mainSlider = (state: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload.mainSlider
            };
        case mainSliderActionsTypes.GET_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case mainSliderActionsTypes.GET_ERROR:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};