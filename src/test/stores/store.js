import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

// 미들웨어
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

// 스토어
const store = createStore(
	// 루트 리듀서 등록
	rootReducer,
	// 미들웨어 등록
	applyMiddleware(logger, sagaMiddleware)
);

// 루트 사가 등록
sagaMiddleware.run(rootSaga);

export { store };
