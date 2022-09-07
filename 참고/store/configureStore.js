import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

// saga
import createSagaMiddleware from 'redux-saga';

// root store
import rootReducer from "./root-reducer";
import rootSaga from './root-saga';

/*
-
Next에 Redux 설치하기 + next-redux-wrapper
https://darrengwon.tistory.com/557
*/



/*
> next-redux-wrapper 5.0.0 버전기준
5버전 + getInitialProps
*/
/*const MyApp = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Component />
        </Provider>
    );
};
export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(applyMiddleware(...middlewares), typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    const store = createStore(Rootreducer, initialState, enhancer);
    return store;
})(MyApp);*/



/*
> 6버전 부터는 방식이 달라졌습니다. Next9.3 이후부터는 6버전을 사용하기를 권장하고 있습니다. 아무래도 6버전을 써야겠죠.
6버전 + next 9 이상의 getStaticProps, getServerSideProps 
주의할 점은 Provider로 감싸지 않는다는 점, next-redux-wrapper가 알아서 store를 실은 후 자동으로 감싸준다는 점입니다.

configureStore.js 와 _app.js 각 영역별 코드 분리!
*/
const configureStore = () => { // makeStore
    // middlewares
    const middlewares = []; 
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();
    // process.env.NODE_ENV === 'production'
    middlewares.push(logger);
    middlewares.push(sagaMiddleware);

    // store
    const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));
    const store = createStore(rootReducer, enhancer);
    
    // saga
    store.sagaTask = sagaMiddleware.run(rootSaga);
    
    return store;
};
/*const configureStore = (initialState, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
};*/

//const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development,' });
const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;