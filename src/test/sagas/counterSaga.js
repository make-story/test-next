import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TEST_INCREASE_ASYNC, TEST_DECREASE_ASYNC, testIncrease, testDecrease, } from '../stores/counter/action';

function* increaseSaga(action/* {type: "TEST_INCREASE_ASYNC"} */) {
    console.log('increaseSaga', action); // createAction 에서 넘어오는 값

    yield delay(1000); // 비동기 통신 가정
    // 특정 액션을 디스패치
    yield put(testIncrease('increaseSaga 에서 보내는 데이터 (payload 값)')); 
}
function* decreaseSaga(action/* {type: "TEST_INCREASE_ASYNC"} */) {
    console.log('decreaseSaga', action); // createAction 에서 넘어오는 값

    yield delay(1000); // 비동기 통신 가정
    // 특정 액션을 디스패치
    yield put(testDecrease('decreaseSaga 에서 보내는 데이터 (payload 값)')); 
}

// Saga 미들웨어 
// 액션타입 등록
export function* watchCounterSaga() {
    // takeEvery 는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
	yield takeEvery(TEST_INCREASE_ASYNC, increaseSaga);

    // takeLatest 는 기존에 진행 중이던 작업이 있다면 취소 처리하고
    yield takeLatest(TEST_DECREASE_ASYNC, decreaseSaga);
}