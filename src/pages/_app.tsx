/**
 * 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트 (페이지에 적용할 공통 레이아웃의 역할)
 * 모든 컴포넌트에 공통으로 적용할 속성 관리
 */
import * as React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';

// https://nextjs.org/docs/basic-features/typescript#custom-app
const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  // <Component /> 타입 에러가 발생하는 경우, package.json 등 버전이 맞지 않다는 것이다.
  // yarn.lock 파일 필요(의존성 종속관계 성공한 버전)
  // 또는 package.json 의존성 하나하나 각각 설치 시도
  return <Component {...pageProps} />;
};

//export default appWithTranslation(wrapper.withRedux(App));
//export default wrapper.withRedux(App);
export default App;
