// containers/CounterContainer.js
import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'; 
import Counter from '../components/Counter';
import { testIncrease, testDecrease, testIncreaseAsync, testDecreaseAsync, } from '../stores/counter/action';

// 컨테이너 컴포넌트 - 동기 실행 관련 처리
/*const CounterContainer = () => {
	const number = useSelector(state => state.counter);
	const dispatch = useDispatch();

	// useCallback 를 통해 성능 최적화 가능
	// 숫자가 바뀌어서 컴포넌트가 리렌더링될 때마다 onIncrease 함수와 onDecrease 함수가 새롭게 만들어지고 있으므로 최적화 필요
	const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
	return (
		<Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
	);
};*/
// 컨테이너 컴포넌트 - 비동기 실행 관련 처리
const CounterContainer = () => {
	const number = useSelector(state => state.counter.value.count); // state.스토어명.상태값접근
	const dispatch = useDispatch();

	// useCallback 를 통해 성능 최적화 가능
	// 숫자가 바뀌어서 컴포넌트가 리렌더링될 때마다 onIncrease 함수와 onDecrease 함수가 새롭게 만들어지고 있으므로 최적화 필요
	const onIncreaseAsync = useCallback(() => dispatch(testIncreaseAsync('dispatch(testIncreaseAsync(실행시 파리마터 값))')), [dispatch]); // 디스패치 - saga 미들웨어 테스트
	const onDecreaseAsync = useCallback(() => dispatch(testDecreaseAsync('dispatch(testDecreaseAsync(실행시 파리마터 값))')), [dispatch]); // 디스패치 - saga 미들웨어 테스트
	const onIncrease = useCallback(() => dispatch(testIncrease(10)), [dispatch]); // 디스패치 
	const onDecrease = useCallback(() => dispatch(testDecrease(10)), [dispatch]); // 디스패치 
	return (
		<Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseAsync={onIncreaseAsync} onDecreaseAsync={onDecreaseAsync}>TEST</Counter>
	);
};

export default CounterContainer;