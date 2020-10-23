import {userApi} from '../../api/api'
import {call, put, takeLatest} from "redux-saga/effects"
import {FETCH_SELF_DATA, selfDataActions} from "../actions/selfDataActions"


// Self data saga
const {fetchSelfDataBegin, fetchSelfDataSuccess, fetchSelfDataFailure} = selfDataActions;

function* workerFetchSelfData() {
    try {
        yield put(fetchSelfDataBegin());
        const data = yield call(userApi.getSelfData);
        yield put(fetchSelfDataSuccess({data}));
    } catch (e) {
        yield put(fetchSelfDataFailure(e.message));
    }
}

export function* watchFetchSelfData() {
    yield takeLatest(FETCH_SELF_DATA, workerFetchSelfData);
}