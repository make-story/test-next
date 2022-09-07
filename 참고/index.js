import React, { useCallback } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

import wrapper from '../reducers/configureStore';
import { countPlusAction, countMinusAction } from '../reducers/count';

//import Layout from "../src/common/components/Layout";
//import Link from "next/link"; // 동적 페이지 만들기
//import fetch from "isomorphic-unfetch";
/*
// 동적 페이지 만들기
const ProfileLink1 = props => (
  <div>
    <Link href={`/profile?name=${props.name}`}>
      <a>Go to {props.name}'s profile</a>
    </Link>
  </div>
);
// 깔끔한 URL로 동적 페이지 구성하기
//href는 실제 이동할 경로 (즉, [profile].js를 의미)
// as는 우리 URL에 어떻게 보일지를 결정. 여기서는 /p/${props.profile}로 각 /p/이름 으로 URL창에 나타날것
const ProfileLink2 = props => (
    <div>
      <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
        <a>Go to {props.profile}'s profile</a>
      </Link>
    </div>
  );

const Index = props => {
    //console.log(props?.categories[0]?.code);
    return (
    <Layout>
        <h1>Friends List {props?.categories[0]?.code}</h1>
        <h1>쿼리스트링</h1>
        <ProfileLink1 name="jake" />
        <ProfileLink1 name="peter" />
        <ProfileLink1 name="yumi" />
        <h1>REST URL</h1>
        <ProfileLink2 profile="Jake" />
        <ProfileLink2 profile="Peter" />
        <ProfileLink2 profile="Yumi" />
    </Layout>
    );
}
*/

/*
-
API에서 데이터 가져오고 시작하기
SSR에서 API 데이터를 가져온채로 시작하려면 어떻게 해야할까요? 
정답은 getInitialProps 메소드에 있습니다.
*/
/*Index.getInitialProps = async function() {
    const res = await fetch("http://makestory.net/media/categories/documents");
    const data = await res.json();
    console.log(data.categories);
    return {
        ...data
    };
};

export default Index;*/

const Home = (props) => {
  console.log('Home props', props);

  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  const count = useSelector(state => state.count); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.
  
  const onClickPlus = useCallback(() => { // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch(countPlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction());
  }, []);
  
  return (
    <div>
      카운트 :  {count}
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}


// next v9 이상에서는 getInitialProps 대신 getStaticProps, getStaticPaths, getServerSideProps을 사용하도록 가이드
// JSP 렌더링시 JavaScript로 전달할 데이터를 <script>entry.run({ ...전달데이터 })</script> 형태로 넘겨주는 방식과 동일
Home.getInitialProps = async () => {
  /*let items
  await fetch('http://localhost:5000/item')
    .then(res => res.json())
    .then(data => { items = data })
    .catch(err => console.log(err))

  return { items }*/
}

// 정적 생성 (빌드시 데이터 로드)
/*export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}*/

// 정적 생성 (사전 렌더링할 동적경로 지정)
/*export async function getStaticPaths() {
  return {
    paths: [
      
    ],
    fallback: false // See the "fallback" section below
  };
}*/

// 서버 측 렌더링 (각 요청에서 데이터 로드)
//export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {};
// (wrapper로 감싸줘야 context에 store가 생기고, 이를 이용해 dispatch를 날릴 수 있습니다.)
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  //console.log(context);

  //let { page } = context.query;
  //if (page === undefined) page = 1;
  
  //console.log('req', context.req);
  //context.store.dispatch({ type : COUNT_PLUS });
  context.store.dispatch(countPlusAction('server'));

  // 데이터 호출 -> payload 로 전달
  // const data = await fetchSomeData();
  //context.store.dispatch(countPlusAction(data));

  return {
    props: {
      page: 'server'
    },
  };
});

// useSelector 를 사용하지 않을 경우
//export default connect(state => state)(Home);

// useSelector 사용할 경우
export default Home;
