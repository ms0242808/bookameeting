import React from 'react';

const RoomCard = ({ room, onSelectRoom, onSelectTime, selectedRoom, selectedTime }) => {
	const { image, title, availableTimes } = room;

	return (
		<div
			className={`p-4 border rounded-lg shadow-md cursor-pointer ${
				selectedRoom === title ? 'border-gray-700' : 'border-gray-300'
			}`}
		>
			<img src={image} alt={title} className='w-full h-32 object-cover rounded-md mb-2' />
			<h2 className='text-xl font-bold mb-2'>{title}</h2>
			<div className='flex flex-col space-y-1'>
				{availableTimes.map((time, index) => (
					<button
						key={index + room}
						onClick={(e) => {
							e.stopPropagation(); // Prevent the room card click event
							onSelectRoom(room);
							onSelectTime(time + title);
						}}
						className={`w-full py-2 text-left px-4 rounded-lg ${
							selectedTime === time + title ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
						}`}
					>
						{time}
					</button>
				))}
			</div>
		</div>
	);
};

export default RoomCard;
