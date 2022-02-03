import './Body.css';
import Home from '../Body/Home/Home';
import About from '../Body/About/About';
import Events from './Events/Events';
import Blog from './Blog/Blog';
import Donate from './Donate/Donate';
import { Routes, Route } from 'react-router-dom';

const Body = () => {
	return (
		<main>
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='/donate' element={<Donate />} />
				<Route path='/events' element={<Events />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</main>
	);
};

export default Body;
