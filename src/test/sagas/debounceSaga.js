import { all, debounce, put } from 'redux-saga/effects';

export function* setText(action) {
    yield put();
}

export default function* watchTextSaga() {
    yield all([
        debounce(500, SET_TEXT, setText)
    ])
}