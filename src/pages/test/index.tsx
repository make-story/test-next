import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// 테스트 (IOS vh 이슈대응)
if (typeof window !== 'undefined') {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // CSS 적용
  // height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  // height: calc(var(--vh, 1vh) * 100);
}

const Page = () => {
  const router = useRouter();

  return <>TEST</>;
};

/**
 * 서버사이드 데이터 호출
 */
// This gets called on every request
export async function getServerSideProps() {
  //const res = await fetch('https://.../data');
  //const data = await res.json();
  //return { props: { data } };
}

export default Page;
