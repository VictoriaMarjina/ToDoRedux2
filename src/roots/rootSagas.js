import { all, call } from 'redux-saga/effects';

const sagaList = [];

export default function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
