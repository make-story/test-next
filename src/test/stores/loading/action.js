import { createAction, handleActions } from "redux-actions";

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
export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

// 액션 생성 함수 - dispatch 로 해당 액션 실행을 위한 구조를 가지고 있음
export const startLoading = createAction(START_LOADING, requestType => {
	// payload 값 변경/설정 (선택적)
	console.log('createAction > startLoading', requestType);
	/*
	요청을 위한 액션 타입을 payload로 설정합니다.
	(예: sample/GET_POST)
	*/
	return requestType; // 액션 타입(액션 이름)을 상태 키 값으로 사용
});
export const finishLoading = createAction(FINISH_LOADING, requestType => {
	// payload 값 변경/설정 (선택적)
	console.log('createAction > finishLoading', requestType);
	/*
	요청을 위한 액션 타입을 payload로 설정합니다.
	(예: sample/GET_POST)
	*/
	return requestType; // 액션 타입(액션 이름)을 상태 키 값으로 사용
});