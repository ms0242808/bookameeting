import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../Icon';

const DatePicker = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const datePickerRef = useRef(null);
	const navigate = useNavigate();

	const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

	const handleDateClick = (day) => {
		setSelectedDate(new Date(currentYear, currentMonth, day));
		setIsCalendarOpen(false);
	};

	const handlePrevMonth = () => {
		setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
		if (currentMonth === 0) {
			setCurrentYear((prevYear) => prevYear - 1);
		}
	};

	const handleNextMonth = () => {
		setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
		if (currentMonth === 11) {
			setCurrentYear((prevYear) => prevYear + 1);
		}
	};

	const renderCalendar = () => {
		const days = [];
		const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);

		for (let day = 1; day <= daysInCurrentMonth; day++) {
			days.push(
				<button
					key={day}
					onClick={() => handleDateClick(day)}
					className='w-8 h-8 mx-1 rounded-lg hover:bg-blue-500 hover:text-white'
				>
					{day}
				</button>
			);
		}

		return (
			<div className='bg-white border rounded-lg shadow-lg p-4'>
				<div className='flex justify-between mb-2'>
					<button onClick={handlePrevMonth} className='text-blue-500'>
						Prev
					</button>
					<span>
						{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
					</span>
					<button onClick={handleNextMonth} className='text-blue-500'>
						Next
					</button>
				</div>
				<div className='grid grid-cols-7 gap-1'>{days}</div>
			</div>
		);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
				setIsCalendarOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleFindItClick = () => {
		if (selectedDate) {
			// Format the date for the URL, e.g., YYYY-MM-DD
			const formattedDate = selectedDate.toISOString().split('T')[0];
			navigate(`/find?date=${formattedDate}`);
		} else {
			alert('Please select a date.');
		}
	};

	return (
		<div className='relative inline-block' ref={datePickerRef}>
			<div className='flex items-center border rounded-lg bg-white shadow-sm'>
				<CalendarIcon />
				<input
					type='text'
					readOnly
					value={selectedDate ? selectedDate.toDateString() : 'Pick a date'}
					onClick={() => setIsCalendarOpen(!isCalendarOpen)}
					className='border-0 p-2 w-full cursor-pointer focus:ring-0 rounded-lg text-center focus:outline-none'
				/>
				<button
					className='ml-9 px-7 md:px-6 md:py-2 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500'
					onClick={handleFindItClick}
				>
					Find
				</button>
			</div>
			{isCalendarOpen && <div className='absolute z-10 mt-2'>{renderCalendar()}</div>}
		</div>
	);
};

export default DatePicker;
