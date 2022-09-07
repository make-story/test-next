import { all } from 'redux-saga/effects';

// 루트 사가
// 추후 다른 리듀서에서도 사가를 만들어 등록할 것
function* rootSaga() {
	// all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
	yield all([
		
	]);
}

export default rootSaga;