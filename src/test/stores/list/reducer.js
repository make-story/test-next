import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE, LIST_FILTER_TEST1, } from './action';

// 초기 상태 값
const initialState = {
    filter: null, // 현재 선택된 필터 값
    posts: [ // 전체 데이터
        
    ], 
    filter1: [ // 필터된 데이터

    ],
    filter2: [ // 필터된 데이터

    ],
    filter3: [ // 필터된 데이터

    ],
    error: null,
    lastPage: 1,
};

// 리듀서 함수 - combineReducers 에 등록
const list = handleActions(
    {
        // 비동기 데이터 로드 성공
        [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => {   
            console.log('handleActions > LIST_POSTS_SUCCESS');
            return {
                ...state,
                posts,
                //lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
            };
        },
        // 비동기 데이터 로드 실패
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => {
            console.log('handleActions > LIST_POSTS_FAILURE');
            return {
                ...state,
                error,
            };
        },
        // 데이터 필터
        [LIST_FILTER_TEST1]: (state, action) => {
            console.log('handleActions > LIST_FILTER_TEST1', state);
            return {
                ...state,
                filter1: state.posts.filter((post) => post.type === 1),
                filter2: state.posts.filter((post) => post.type === 2),
                filter3: state.posts.filter((post) => post.type === 3),
            };
        },
        [LIST_FILTER_TEST2]: (state, action) => {
            console.log('handleActions > LIST_FILTER_TEST2', state);
            return {
                ...state,
                filter1: state.posts.filter((post) => post.type === 1),
                filter2: state.posts.filter((post) => post.type === 2),
                filter3: state.posts.filter((post) => post.type === 3),
            };
        },
    },
    initialState,
);

export default list;