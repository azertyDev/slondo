import {call, put, takeLatest} from "redux-saga/effects"
import Cookies from 'universal-cookie'
import {userApi} from '../../api/api'
import {FETCH_TOKEN, authActions} from "../actions/authActions"

const cookies = new Cookies();

const {
    fetchTokenBegin,
    fetchTokenSuccess,
    fetchTokenFailure,
} = authActions;

// Login saga
function* workerAuth(actions) {
    const {payload} = actions;

    try {
        yield put(fetchTokenBegin());
        const {token} = yield call(userApi.login, payload.phone, payload.password);
        cookies.set('token', token, {maxAge: 2 * 3600});
        yield put(fetchTokenSuccess({isAuth: true, isFetch: false}));
    } catch (e) {
        yield put(fetchTokenFailure(e.message));
    }
}

export function* watchAuth() {
    yield takeLatest(FETCH_TOKEN, workerAuth);
}