import {userApi} from '../../api/api'

export const mainSliderActionsTypes = {
    GET_SUCCESS: 'GET_SUCCESS',
    GET_ERROR: 'GET_ERROR'
}

export const getSuccess = images => ({
    type: mainSliderActionsTypes.GET_SUCCESS,
    payload: images
});
export const getError = errors => ({
    type: mainSliderActionsTypes.GET_ERROR,
    payload: errors
});

export const fetchMainSliderImgs = async () => {
    try {
        const images = await userApi.getMainSliderImgs();
        return getSuccess(images);
    } catch (e) {
        return getError(e);
    }
};