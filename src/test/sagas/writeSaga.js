import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, } from '../stores/write/action';
import { START_LOADING, FINISH_LOADING, startLoading, finishLoading, } from '../stores/loading/action';
import * as api from '../api/write';

function* writePostSaga(action) {
    console.log('writePostSaga', action); // createAction 에서 넘어오는 값

    // 디스패치 - 로딩 시작 
	//yield put(startLoading(WRITE_POST)); // createAction 활용해 생성된 액션 함수 실행

    /*
    FSA(Flux Standard Action)
    https://github.com/redux-utilities/flux-standard-action  

    객체는 액션을 구분할 고유한 문자열을 가진 `type` 필드가 반드시 있으며,   
    `payload` 필드에 데이터를 담아 전달한다.   
    그 외에 `meta`, `error` 필드를 가질 수도 있다.
    {
        type: ACTION_NAME,
        payload: 'createAction 활용할 경우, 두 번째 파라미터 함수 반환 값',
        meta: '사용자값',
        error: '사용자값',
    }
    */

    try {
        // call(비동기 실행함수, 함꼐 넘길 파라미터 값)
        const response = yield call(api.write, action.payload); 
        console.log('response', response);

        // 디스패치
        yield put({  // createAction 활용해 생성된 액션함수 사용 없이 바로 호출! 
            type: WRITE_POST_SUCCESS, // 액션 타입
            payload: response.data,
            meta: response,
        });
    }catch(e) {
        // 디스패치
        yield put({ // createAction 활용해 생성된 액션함수 사용 없이 바로 호출! 
            type: WRITE_POST_FAILURE, // 액션 타입 
            payload: e,
            error: true,
        });
    }

    // 디스패치 - 로딩 끝
	//yield put(finishLoading(WRITE_POST)); // createAction 활용해 생성된 액션 함수 실행
}
function* updatePostSaga(action) {
    console.log('updatePostSaga', action); // createAction 에서 넘어오는 값

    // 디스패치 - 로딩 시작 
	//yield put(startLoading(UPDATE_POST)); // createAction 활용해 생성된 액션 함수 실행

    /*
    FSA(Flux Standard Action)
    https://github.com/redux-utilities/flux-standard-action  

    객체는 액션을 구분할 고유한 문자열을 가진 `type` 필드가 반드시 있으며,   
    `payload` 필드에 데이터를 담아 전달한다.   
    그 외에 `meta`, `error` 필드를 가질 수도 있다.
    {
        type: ACTION_NAME,
        payload: 'createAction 활용할 경우, 두 번째 파라미터 함수 반환 값',
        meta: '사용자값',
        error: '사용자값',
    }
    */

    try {
        // call(비동기 실행함수, 함꼐 넘길 파라미터 값)
        const response = yield call(api.update, action.payload); 
        console.log('response', response);

        // 디스패치
        yield put({  // createAction 활용해 생성된 액션함수 사용 없이 바로 호출! 
            type: UPDATE_POST_SUCCESS, // 액션 타입
            payload: response.data,
            meta: response,
        });
    }catch(e) {
        // 디스패치
        yield put({ // createAction 활용해 생성된 액션함수 사용 없이 바로 호출! 
            type: UPDATE_POST_FAILURE, // 액션 타입 
            payload: e,
            error: true,
        });
    }

    // 디스패치 - 로딩 끝
	//yield put(finishLoading(UPDATE_POST)); // createAction 활용해 생성된 액션 함수 실행
}

// Saga 미들웨어 
// 액션타입 등록
export function* watchWriteSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}
