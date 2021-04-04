import React, { useCallback, useEffect, useReducer, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
//import List from '../components/List';
import { listAction, } from '../stores/list/action';

/*
-
전역 상태 관리가 아닌, Hook 리듀서를 사용하는 것도 고려해 보자!

*/
function reducer(state, action) {
	console.log('reducer 실행');
	// action.type 에 따라 다른 작업 수행
	switch(action.type) {
		case 'INCREMENT':
			return { value: state.value + 1 };
		case 'DECREMENT':
			return { value: state.value - 1 };
		default:
			// 아무것도 해당되지 않을 때 기존 상태 반환
			return state;
	}
}

const ListContainer = () => {
	const [stateHook, dispatchHook] = useReducer(reducer, { value: 0 });
	const dispatch = useDispatch();
	useSelector(state => {
        console.log('ListContainer > state', state);
    });
    const { posts, filter1, filter2, filter3, error, loading } = useSelector(({ list, loading, /*각 스토어 list, loading 등*/}) => ({
		posts: list.posts,
		filter1: list.filter1,
		filter2: list.filter2,
		filter3: list.filter3,
		error: list.error,
		loading: loading['list/LIST_POSTS'],
	}));

	/*useEffect(() => {
		// 브라우저 url 정보 
		const { tag, username, page } = qs.parse(location.search, {	
			ignoreQueryPrefix: true,
		});
        console.log('ListContainer > location.search', location.search);
        console.log(`ListContainer > tag: ${tag}, username: ${username}, page: ${page}`);
		dispatch(listAction({ tag, username, page }));
	}, [dispatch, location.search]);*/

	const setDataLoad = useCallback(event => {
		dispatch(listAction({ tag, username, page }));
	});
	const setFilterTest1 = useCallback((event) => {
		dispatch({type: 'list/LIST_FILTER_TEST1'});
	});
	const setFilterTest2 = useCallback((event) => {
		dispatch({type: 'list/LIST_FILTER_TEST2'});
	});

	return (
		<>
            <div>LIST TEST</div>
			<p>전체</p>
			{posts && posts.map(post => (
				<div key={post.type}>
					<div>{post.type}</div>
				</div>
			))}
			<p>필터1</p>
			{filter1 && filter1.map(post => (
				<div key={post.type}>
					<div>{post.type}</div>
				</div>
			))}
			<div>
				<button onClick={setDataLoad}>데이터 Load</button>
				<button onClick={setFilterTest1}>필터1</button>
				<button onClick={setFilterTest2}>필터2</button>
			</div>
        </>
	);
};

export default ListContainer;