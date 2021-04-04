import React from 'react';
import { combineReducers } from 'redux';
import counter from './counter/reducer';
import loading from './loading/reducer';
import list from './list/reducer';

// 루트 리듀서
const rootReducer = combineReducers({
    counter, // store.counter
    loading,
    list,
});

export default rootReducer;