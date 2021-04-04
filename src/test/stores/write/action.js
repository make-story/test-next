import { createAction, handleActions } from 'redux-actions'; 

/*
-
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
export const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
export const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
export const WRITE_POST = 'write/WRITE_POST';
export const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
export const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE';
export const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';
export const UPDATE_POST = 'write/UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'write/UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'write/UPDATE_POST_FAILURE';

// 액션 생성 함수 - dispatch 로 해당 액션 실행을 위한 구조를 가지고 있음
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
	// payload 값 수정(가공)이 필요한 경우
	key,
	value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
	// payload 값 수정(가공)이 필요한 경우
	title,
	body,
	tags,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);
export const updatePost = createAction(UPDATE_POST, ({ id, title, body, tags }) => ({
	id,
	title,
	body,
	tags,
}));