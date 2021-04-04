import qs from 'qs';
import client from './client';

export const list = ({ page, username, tag }) => {
	// ?key=value&key=value 형태로 만들어 준다.
	const queryString = qs.stringify({
		page,
		username,
		tag,
	});

	console.log(`api list > tag: ${tag}, username: ${username}, page: ${page}`);
    console.log('api list > queryString', queryString);

	return client.get(`http://localhost:3001/api/test/items?${queryString}`);
};