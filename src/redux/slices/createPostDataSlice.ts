import {createSlice} from '@reduxjs/toolkit';

type CreatePostDataState = {
    photo: any,
    params: any,
    defaultParams: {
        category_id: number,
        sub_category_id: number,
        ads_type_id: number,
        title: string,
        price: string,
        description: string,
        region_id: number,
        city_id: number,
    }
};

const initialState: CreatePostDataState = {
    photo: null,
    params: {},
    defaultParams: {
        category_id: null,
        sub_category_id: null,
        ads_type_id: null,
        title: '',
        price: '',
        description: '',
        region_id: null,
        city_id: null,
    }
};

const createPostDataSlice = createSlice({
    name: 'createPostData',
    initialState,
    reducers: {
        setParamsAction: (state, {payload}) => {
            state.params = {...state.params, ...payload};
        },
        setColorAction: (state, {payload}) => {
            state.params.color = payload;
        },
        setPhotosAction: (state, {payload}) => {
            state.photo = payload;
        },
        setDefaultParamsAction: (state, {payload}) => {
            state.defaultParams = payload;
        },
    }
});

export const {
    setParamsAction,
    setDefaultParamsAction,
    setColorAction,
    setPhotosAction
} = createPostDataSlice.actions;

export const createPostDataReducer = createPostDataSlice.reducer;