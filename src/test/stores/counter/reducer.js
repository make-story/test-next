import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { TEST_INCREASE, TEST_DECREASE, TEST_INCREASE_ASYNC, TEST_DECREASE_ASYNC, } from './action';

// 초기 상태 값
const initialState = {
    value: { 
        count: 1 
    },
};

// 리듀서 함수 - combineReducers 에 등록
/*export default function reducer(state=initialState, action) {
    switch(action.type) {
        case TEST_INCREASE:
            console.log('reducer TEST_INCREASE', action);
            // 상태 변경
            return {
                ...state,
                value: {
                    count: state?.value?.count + 1,
                }
            };
            break;
        case TEST_DECREASE:
            console.log('reducer TEST_DECREASE', action);
            // 상태 변경
            return {
                ...state,
                value: {
                    count: state?.value?.count - 1,
                }
            };
            break;
        default:
            return state;
            break;
    }
};*/
export default handleActions(
	{
        [TEST_INCREASE]: (state, action) => {
            console.log('handleActions > TEST_INCREASE', action);
            return produce(state, draft => {
                // 상태 변경
				draft.value.count = state.value.count + 1;
			});
        },
        [TEST_DECREASE]: (state, action) => {
            console.log('handleActions > TEST_DECREASE', action);
            return produce(state, draft => {
                // 상태 변경
				draft.value.count = state.value.count - 1;
			});
        },
    },
    initialState
);