import axios from 'axios';

const url = 'https://d1-triplan.ms0242808.workers.dev/api';

export const fetchUser = async (username) => {
	let data = [];
  await axios.get(`${url}/users?username=${username}`)
	.then(function (response) {
		// handle success
		data = response.data;
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.finally(function () {
		// always executed
		console.log('done');
	});
	return data;
};