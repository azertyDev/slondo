import {createSlice} from '@reduxjs/toolkit';

type CreatePostDataState = {
    photos: any[],
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
    photos: [],
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
        setPhotosAndColorAction: (state, {payload: {photos, color}}) => {
            state.photos = photos;
            state.params.color = color;
        },
        setDefaultParamsAction: (state, {payload}) => {
            state.defaultParams = payload;
        },
    }
});

export const {
    setParamsAction,
    setDefaultParamsAction,
    setPhotosAndColorAction,
} = createPostDataSlice.actions;

export const createPostDataReducer = createPostDataSlice.reducer;