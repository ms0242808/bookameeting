import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar/index';

function App() {
	return (
		<div className='App bg-gray-100 h-screen'>
			<Navbar />
			<AppRoutes />
		</div>
	);
}

export default App;
