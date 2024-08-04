import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import navbarlogo from '../../assets/images/navbar-logo.png';

export default function Navbar() {
	const { title } = useSelector((state) => state.navbar);
	const navigate = useNavigate();

	const handleLogoClick = () => navigate('/');

	return (
		<nav class='flex items-center justify-between mb-10'>
			<img
				src={navbarlogo}
				className='px-7 py-3 md:px-9 md:py-4 w-30 h-20 hover:cursor-pointer'
				alt='logo'
				onClick={handleLogoClick}
			/>
			<button class='mx-9 px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500'>
				{title}
			</button>
		</nav>
	);
}
