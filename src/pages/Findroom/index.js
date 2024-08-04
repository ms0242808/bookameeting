// src/FindPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../redux/navbarSlice';
import RoomCard from '../../components/Card';

const meetingRooms = [
	{
		id: 1,
		image: 'https://via.placeholder.com/400x200',
		title: 'Room A',
		availableTimes: ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM']
	},
	{
		id: 2,
		image: 'https://via.placeholder.com/400x200',
		title: 'Room B',
		availableTimes: ['11:00 AM - 12:00 PM', '1:00 PM - 2:00 PM', '3:00 PM - 4:00 PM']
	},
	{
		id: 3,
		image: 'https://via.placeholder.com/400x200',
		title: 'Room C',
		availableTimes: ['12:00 PM - 1:00 PM', '2:00 PM - 3:00 PM', '4:00 PM - 5:00 PM']
	}
];

const FindPage = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const date = queryParams.get('date');
	const [selectedRoom, setSelectedRoom] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(updateTitle('Find a room'));
	});

	const handleRoomSelect = (room) => {
		setSelectedRoom(room);
		setSelectedTime(null); // Reset selected time when room changes
	};

	const handleTimeSelect = (time) => setSelectedTime(time);

	const handleBookItClick = () => navigate(`/booked`);

	return (
		<div className='p-4'>
			<h1 className='text-xl font-bold'>Find a room</h1>
			<div className='m-4 p-4 bg-blue-100 border border-blue-300 rounded-lg'>
				<p className='mt-2'>Date: {date ? new Date(date).toDateString() : 'No date selected'}</p>
				<p className='mt-2'>Time: {(selectedRoom && selectedTime) || 'No time selected'}</p>
				<p className='mt-2'>Room: {(selectedRoom && selectedRoom.title) || 'No room selected'}</p>
			</div>
			<div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{meetingRooms.map((room) => (
					<RoomCard
						key={room.id}
						room={room}
						onSelectRoom={handleRoomSelect}
						onSelectTime={handleTimeSelect}
						selectedRoom={selectedRoom && selectedRoom.title}
						selectedTime={selectedTime}
					/>
				))}
			</div>
			<button
				className='ml-9 px-7 md:px-6 md:py-2 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500'
				onClick={handleBookItClick}
			>
				Book it
			</button>
		</div>
	);
};

export default FindPage;
