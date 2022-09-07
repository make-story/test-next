import React from "react";
import withReduxSaga from 'next-redux-saga';
import wrapper from '../reducers/configureStore';

const Test = ({ Component, pageProps }) => {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
};

//export default wrapper.withRedux(Test);
export default wrapper.withRedux(withReduxSaga(Test)); // saga