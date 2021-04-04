import { createAction, handleActions } from 'redux-actions'; 

/*
-
FSA(Flux Standard Action)
https://github.com/redux-utilities/flux-standard-action  

객체는 액션을 구분할 고유한 문자열을 가진 `type` 필드가 반드시 있으며,   
`payload` 필드에 데이터를 담아 전달한다.   
그 외에 `meta`, `error` 필드를 가질 수도 있다.
{
    type: ACTION_NAME, // dispatch({ type: ACTION_NAME }) 
    payload: 'createAction 활용할 경우, 두 번째 파라미터 함수 반환 값',
    meta: '사용자값',
    error: '사용자값',
}

-
redux-actions
createAction 활용해 위 규격을 갖춰 구조를 만듦
handleActions 활용해 리듀서(상태값 변경) 간단한 구조로 액션 타입에 따른 분기 설정

-
1. 액션생성
{ type: ACTION_NAME } 
2. 미들웨어 등록
redux-saga
3. 리듀서 함수 
상태값 변경

실행 단계
액션생성(createAction) -> 액션실행(dispatch) -> 미들웨어(redux-saga) -> 리듀서(handleActions)
*/

// 액션 타입 - reducer 함수 내 구분값 또는 미들웨어 등록시 사용
export const TEST_INCREASE = 'TEST_INCREASE';
export const TEST_DECREASE = 'TEST_DECREASE';
export const TEST_INCREASE_ASYNC = 'TEST_INCREASE_ASYNC'; // 비동기가 포함된 액션 - saga test
export const TEST_DECREASE_ASYNC = 'TEST_DECREASE_ASYNC'; // 비동기가 포함된 액션 - saga test

// 액션 생성 함수 - dispatch 로 해당 액션 실행을 위한 구조를 가지고 있음
export const testIncrease = (data) => ({ // createAction 사용하지 않은 전통적 방식
    // 액션 객체는 type 필드는 반드시 가지고 있어야 합니다.
    type: TEST_INCREASE,
    // 사용자 값 (상태 업데이트를 할 떄 받을 값)
    payload: { 
        'test': 'testIncrease', 
        data, 
    },
    meta: null,
    error: null,
});
export const testDecrease = (data) => ({ // createAction 사용하지 않은 전통적 방식
    // 액션 객체는 type 필드는 반드시 가지고 있어야 합니다.
    type: TEST_DECREASE,
    // 사용자 값 (상태 업데이트를 할 떄 받을 값)
    payload: { 
        'test': 'testDecrease', 
        data, 
    },
    meta: null,
    error: null,
});
export const testIncreaseAsync = createAction( // testIncreaseAsync(payload 값 주입)
    TEST_INCREASE_ASYNC, 
    // payload 값 변경/설정 (선택적)
    value => { 
        console.log('createAction > testIncreaseAsync', value);
        return value;
    },
);
export const testDecreaseAsync = createAction( // testDecreaseAsync(payload 값 주입)
    TEST_DECREASE_ASYNC, 
    // payload 값 변경/설정 (선택적)
    value => {
        console.log('createAction > testDecreaseAsync', value);
        return value;
    },
);
