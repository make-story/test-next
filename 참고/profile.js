import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Image from 'next/image';

export default function Profile() {
  const router = useRouter();

  // ?name=이름 형태의 쿼리스트링 정보 확인
  return (
    <Layout>
        ...
      <p>Hello, my name is {router.query.name}. I use next.js</p>
      {/*<Image src="/me.png" alt="me" width="64" height="64" />*/}
    </Layout>
  );
}