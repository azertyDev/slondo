export const FETCH_SELF_DATA = 'FETCH_SELF_DATA'
export const FETCH_SELF_DATA_BEGIN = 'FETCH_SELF_DATA_BEGIN'
export const FETCH_SELF_DATA_SUCCESS = 'FETCH_SELF_DATA_SUCCESS'
export const FETCH_SELF_DATA_FAILURE = 'FETCH_SELF_DATA_FAILURE'

export const selfDataActions = {
    fetchSelfDataBegin: () => ({
        type: FETCH_SELF_DATA_BEGIN
    }),
    fetchSelfDataSuccess: (userData) => ({
        type: FETCH_SELF_DATA_SUCCESS,
        payload: userData
    }),
    fetchSelfDataFailure: (error) => ({
        type: FETCH_SELF_DATA_FAILURE,
        payload: error
    })
};