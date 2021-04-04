import { createAction, handleActions } from "redux-actions";
import { START_LOADING, FINISH_LOADING } from './action'

// 초기 상태 값
const initialState = {};

// 리듀서 함수 - combineReducers 에 등록
const loading = handleActions(
	{
		[START_LOADING]: (state, action) => {
			console.log('handleActions > START_LOADING', action);
			return {
				...state,
				[action.payload]: true, // action.payload 값을 키로 제어
			};
		},
		[FINISH_LOADING]: (state, action) => {
			console.log('handleActions > FINISH_LOADING', action);
			return {
				...state,
				[action.payload]: false, // action.payload 값을 키로 제어
			};
		}
	},
	initialState,
);

export default loading;