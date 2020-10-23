import {all} from "redux-saga/effects"
import {watchFetchSelfData} from "./selfDataSaga";
import {watchAuth} from "./authSaga";


// Root saga export
export default function* rootSaga() {
    yield all([
        watchAuth(),
        watchFetchSelfData()
    ])
}