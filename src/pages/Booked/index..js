import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../redux/navbarSlice';

const Booked = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	console.log(queryParams.get('room'));
	const date = queryParams.get('date');
	const room = queryParams.get('room');
	const time = queryParams.get('time');

	useEffect(() => {
		dispatch(updateTitle('Booked'));
	});

	return (
		<div className='p-4'>
			<h1 className='text-xl font-bold'>Booked!</h1>
			<div className='m-4 p-4 bg-blue-100 border border-blue-300 rounded-lg'>
				<p className='mt-2'>Date: {date ? new Date(date).toDateString() : 'No date selected'}</p>
				<p className='mt-2'>Time: {time && time}</p>
				<p className='mt-2'>Room: {room && room}</p>
			</div>
		</div>
	);
};

export default Booked;
