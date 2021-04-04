import React, { useCallback, useEffect, useReducer, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
//import Write from '../components/Write';
import { initialize, changeField, writePost, setOriginalPost, updatePost, } from '../stores/write/action';

const WriteContainer = () => {
	const dispatch = useDispatch();
	useSelector(state => {
        console.log('WriteContainer > state', state);
    });

	useEffect(() => {
		// 브라우저 url 정보 
		const { tag, username, page } = qs.parse(location.search, {	
			ignoreQueryPrefix: true,
		});
        
	}, [dispatch, location.search]);

	return (
		<>
            TEST
        </>
	);
};

export default WriteContainer;