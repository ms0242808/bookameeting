import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../redux/navbarSlice';
import DatePicker from '../../components/Datepicker';
import { Dot } from '../../components/Icon';

export default function Landing() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateTitle('Pick a date'));
	});

	return (
		<div className='text-center'>
			<h6 className='font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8'>Book instantly</h6>
			<h1 className='font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8'>Book a meeting room</h1>
			<p className='font-normal text-gray-600 text-md md:text-xl mb-16'>
				Pick a date
				<Dot /> Find a room
				<Dot /> Book it.
			</p>
			<DatePicker />
		</div>
	);
}
