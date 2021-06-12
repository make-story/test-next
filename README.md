# 프로젝트
## 클라이언트  
```
$ npm install react react-dom
$ npm install @babel/core @babel/preset-env @babel/preset-react
$ npm install webpack webpack-cli babel-loader clean-webpack-plugin html-webpak-plugin
``` 
## 서버(next.js 사용하지 않고 직접 구현) 
```
$ npm install express @babel/cli @babel/plugin-transform-modules-commonjs
$ npm install lru-cache  
```

- @babel/cli : 서버에서 사용될 자바스크립트 파일을 컴파일할 때 사용  
- @babel/plugin-transform-modules-commonjs : ESM으로 작성된 모듈 시스템을 commonJS 로 변경하기 위함 (서버에서는 노드 환경에서 자바스크립트를 실행하기 때문에 commonJS 모듈 시스템이 필요)  
- lru-cache : 정해진 최대 캐시 개수를 초과하면 LRU(least recently used)알고리즘에 따라 가장 오랫동안 사용되지 않은 캐시를 제거  

## next.js  
`넥스트는 프로젝트 루트의 .next 폴더 밑에 번들 파일을 생성`    
`넥스트의 모든 페이지 컴포넌트는 pages 폴더 밑에 생성`    
```
$ npm install next react react-dom
```
### 개발 모드로 실행
```
$ npx next  
```
### 프로덕션 모드로 실행  
```
$ npx next build && npx next start
```

### Link / Router
`넥스트는 페이지 이동을 위해 Link 컴포넌트와 Router 객체를 제공`  
`페이지 이동을 위해 Router 객체를 이용하는 것과 Link 컴포넌트를 이용하는 것 사이에 기능적인 차이는 없다. 다만 Router 객체가 좀 더 동적인 코드에 적합하다.`   
```javascript
import Link from 'next/link';

function Page1() {
  return (
    <div>
      <Link href="/page2">
        <a>page2로 이동</a>
      </Link>
    </div>
  );
}
```
```javascript
import Router from 'next/router';

export default function Page2({ text, data }) {
  return (
    <div>
      <button onClick={() => Router.push('/page1')}>page1로 이동</button>
    </div>
  );
}
```

### 넥스트에 내장된 웹 서버를 사용하지 않고 웹 서버를 직접 띄울 경우  
```
$ npm install express  
```
```
$ npm next build
$ NODE_ENV=production node server.js
```

### 페이지 미리 렌더링 하기
`페이지를 미리 렌더링하면 서버의 CPU 리소스를 절약할 수 있다.`  
`넥스트에서 빌드 시 getInitialProps 함수가 없는 페이지는 자동으로 미리 렌더링 된다.`  
`넥스트에서는 next export 명령어를 통해 전체 페이지를 미리 렌더링 할 수 있다.`
```
$ npx next build && npx next export 
```
명령어를 실행하면 프로젝트 루트에 out 폴더가 생성된다.  


-----


> 소스코드 참고
클론 코딩으로 시작하는 Next.js  
https://github.com/bjpublic/next.js/tree/main/%EC%86%8C%EC%8A%A4%EC%BD%94%EB%93%9C  


> 참고 페이지
http://tlog.tammolo.com/blog/NEXT-JS-ff8f85e8-918a-4770-9b6b-7e37c5229178/  
https://www.freecodecamp.org/news/the-next-js-handbook/  

https://github.com/vercel/next.js/tree/canary/examples  