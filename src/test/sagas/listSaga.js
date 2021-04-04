import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE, listAction, } from '../stores/list/action';
import { START_LOADING, FINISH_LOADING, startLoading, finishLoading, } from '../stores/loading/action';
import * as api from '../api/list';

function* listSaga(action) {
    console.log('listSaga', action); // createAction 에서 넘어오는 값

    // 디스패치 - 로딩 시작 
	//yield put(startLoading(LIST_POSTS)); // createAction 활용해 생성된 액션 함수 실행

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
        //const response = yield call(api.list, action.payload); 
        const response = {
            data: {
                result: [
                    {
                        type: 1,
                        name: '리스트1',
                    },
                    {
                        type: 2,
                        name: '리스트2',
                    },
                    {
                        type: 3,
                        name: '리스트3',
                    },
                ]
            }
        };
        yield delay(1000); // 비동기 통신 가정
        console.log('response', response);

        /*
        -
        데이터 가공!
        여기서 각 카테고리별로 데이터를 나누어 담는다!
        */

        // 디스패치
        yield put({  // createAction 활용해 생성된 액션함수 사용 없이 바로 호출! 
            type: LIST_POSTS_SUCCESS, // 액션 타입
            payload: response.data?.result,
            meta: response,
        });
    }catch(e) {
        console.error(e);
        // 디스패치
        yield put({ // createAction 활용해 생성된 액션함수 사용 없이 바로 호출! 
            type: LIST_POSTS_FAILURE, // 액션 타입 
            payload: e,
            error: true,
        });
    }

    // 디스패치 - 로딩 끝
	//yield put(finishLoading(LIST_POSTS)); // createAction 활용해 생성된 액션 함수 실행
}

// Saga 미들웨어 
// 액션타입 등록
export function* watchListSaga() {
    yield takeLatest(LIST_POSTS, listSaga);
}
