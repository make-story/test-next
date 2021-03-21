import Layout from "../components/Layout";
import Link from "next/link"; // 동적 페이지 만들기
import fetch from "isomorphic-unfetch";

// 동적 페이지 만들기
const ProfileLink1 = props => (
  <div>
    <Link href={`/profile?name=${props.name}`}>
      <a>Go to {props.name}'s profile</a>
    </Link>
  </div>
);
// 깔끔한 URL로 동적 페이지 구성하기
const ProfileLink2 = props => (
    <div>
        {/* 
            href는 실제 이동할 경로 (즉, [profile].js를 의미)
            as는 우리 URL에 어떻게 보일지를 결정. 여기서는 /p/${props.profile}로 각 /p/이름 으로 URL창에 나타날것
        */}
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

/*
-
API에서 데이터 가져오고 시작하기
SSR에서 API 데이터를 가져온채로 시작하려면 어떻게 해야할까요? 
정답은 getInitialProps 메소드에 있습니다.
*/
Index.getInitialProps = async function() {
    const res = await fetch("http://makestory.net/media/categories/documents");
    const data = await res.json();
    //console.log(data.categories[0]);
    return {
        ...data
    };
};

export default Index;