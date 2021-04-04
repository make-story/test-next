import qs from 'qs';
import client from './client';

export const write = ({ page, username, tag }) => {
	// ?key=value&key=value 형태로 만들어 준다.
	const queryString = qs.stringify({
		page,
		username,
		tag,
	});

	console.log(`api write > tag: ${tag}, username: ${username}, page: ${page}`);
    console.log('api write > queryString', queryString);

	return client.get(`http://localhost:3001/api/test/items?${queryString}`);
};

export const update = ({ page, username, tag }) => {
	// ?key=value&key=value 형태로 만들어 준다.
	const queryString = qs.stringify({
		page,
		username,
		tag,
	});

	console.log(`api update > tag: ${tag}, username: ${username}, page: ${page}`);
    console.log('api update > queryString', queryString);

	return client.get(`http://localhost:3001/api/test/items?${queryString}`);
};