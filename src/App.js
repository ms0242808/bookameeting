import React, { useState, useEffect } from 'react';
import { fetchUser, listActivities, createUser } from './scripts';
import logo from './logo.svg';
import './App.css';

function App() {
	const [user, setUser] = useState([]);
	const [activities, setActivities] = useState([]);

	const getUser = async (search) => {
		const data = await fetchUser(search);
		setUser(data);
	};

	const handleListActivityClick = async () => {
		const data = await listActivities();
		setActivities(data);
	};

	const handleCreateUserClick = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const params = {
			Username: formData.get('Username'),
			Email: formData.get('Email'),
			Password: formData.get('Password')
		};
		await createUser(params);
	};

	useEffect(() => {
		getUser('jane_smith');
	}, []);

	const onSearch = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		getUser(formData.get('search'));
	};

	return (
		<div className='App'>
			<img src={logo} className='App-logo' alt='logo' />
			<form onSubmit={onSearch} key='SearchForm'>
				<input placeholder='search user...' name='search' id='search' key='search' />
				<button type='submit' key='searchBtn'>
					Search
				</button>
			</form>

			{user.map((item, index) => (
				<div key={item.Email + index}>
					<p>ID: {item.User_id}</p>
					<p>Email: {item.Email}</p>
					<p>Name: {item.Username}</p>
				</div>
			))}
			<button onClick={handleListActivityClick} key='listActBtn'>
				Show all activities
			</button>
			<ul>
				{activities.map((item, index) => (
					<li key={index}>
						{item.Destination} - {item.Country}
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateUserClick} key='CreateUserForm'>
				<input placeholder='Username...' name='Username' id='Username' key='username' />
				<input placeholder='Email...' name='Email' id='Email' key='email' />
				<input placeholder='Password...' name='Password' id='Password' type='password' key='password' />
				<button type='submit' key='createBtn'>
					Create
				</button>
			</form>
		</div>
	);
}

export default App;
