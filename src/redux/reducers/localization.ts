import {localizationActionTypes} from '../actions/localizationActions';
import {AnyAction} from "redux";
import {HYDRATE} from "next-redux-wrapper";

interface State {
    lang: string,
    header: {
        topHeader: {
            location: string,
            region: string,
            help: string,
            shops: string,
            forBusiness: string
        }
    }
}

const initialState = {
    lang: 'ru',
    header: {
        topHeader: {
            location: 'Местоположение',
            region: 'Выберите регион',
            help: 'Помощь',
            shops: 'Магазины',
            forBusiness: 'Для бизнеса'
        },
        bottomHeader: {}
    },
    home: {
        main: {},
    },
    footer: {}
};

export const localization = (state: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload.mainSlider
            };
        case localizationActionTypes.SET_UZ_LOCAL:
            return {
                ...state,
                ...action.payload,
            };
        case localizationActionTypes.SET_RU_LOCAL:
            return initialState;
        default:
            return state;
    }
};