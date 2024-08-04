import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import FindPage from './pages/Findroom';

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<Landing />} />
		<Route path='/find' element={<FindPage />} />
	</Routes>
);

export default AppRoutes;
