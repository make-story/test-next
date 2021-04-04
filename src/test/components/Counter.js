// components/Counter.js
import React from 'react';

// 프레젠테이셔널 컴포넌트
const Counter = ({ children, number, onIncrease, onDecrease, onIncreaseAsync, onDecreaseAsync }) => {
	return (
		<div>
			<h1>{number}</h1>
			<div>
				<button onClick={onIncrease}>+1</button>
				<button onClick={onDecrease}>-1</button>
			</div>
			<div>
				<button onClick={onIncreaseAsync}>+1 Async</button>
				<button onClick={onDecreaseAsync}>-1 Async</button>
			</div>
			<div>
				<p>children</p>
				{children}
			</div>
		</div>
	);
};

export default Counter;