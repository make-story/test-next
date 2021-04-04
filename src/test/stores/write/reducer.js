import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { INITIALIZE, CHANGE_FIELD, WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE, SET_ORIGINAL_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, } from './action';

// 초기 상태 값
const initialState = {
    title: '',
	body: '',
	tags: [],
	post: null,
	postError: null,
	originalPostId: null,
};

// 리듀서 함수 - combineReducers 에 등록
const write = handleActions(
	{
		[INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
		[CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
			...state,
			[key]: value, // 특정 key 값을 업데이트
		}),
		[WRITE_POST]: state => ({
			...state,
			// post와 postError를 초기화
			post: null,
			postError: null,
		}),
		// 포스트 작성 성공
		[WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
			...state,
			post,
		}),
		// 포스트 작성 실패
		[WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
			...state,
			postError,
		}),

		[SET_ORIGINAL_POST]: (state, { payload: post }) => ({
			...state,
			title: post.title,
			body: post.body,
			tags: post.tags,
			originalPostId: post._id,
		}),
		[UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
			...state,
			post,
		}),
		[UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
			...state,
			postError,
		}),
	},
	initialState,
);

export default write;