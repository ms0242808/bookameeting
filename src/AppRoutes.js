import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import FindPage from './pages/Findroom';
import Booked from './pages/Booked/index.';

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<Landing />} />
		<Route path='/find' element={<FindPage />} />
		<Route path='/booked' element={<Booked />} />
	</Routes>
);

export default AppRoutes;
