import {createStore, AnyAction} from 'redux';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

export const COUNT_PLUS = 'COUNT_PLUS'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS = 'COUNT_MINUS'; // count 1을 감소시킬 액션 타입이다.

export const countPlusAction = (data=null) => ({ // 액션 생성 함수
    type : COUNT_PLUS,
    payload: data,
});

export const countMinusAction = (data=null) => ({
    type : COUNT_MINUS,
    payload: data,
})

export const initialState = 0; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.
const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
        case HYDRATE:
            //if (action.payload.app === "init") delete action.payload.app;
            //if (action.payload.page === "init") delete action.payload.page;
            //return { ...state, ...action.payload };
            return state;
        case COUNT_PLUS:
            return state + 1;
        case COUNT_MINUS:
            return state - 1;
        default:
            return state;
    }
};

export default reducer;