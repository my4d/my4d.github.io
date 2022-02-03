import './Header.css';
import { Link } from 'react-router-dom';
import Home from '../Body/Home/Home';
import Events from '../Body/Events/Events';
import About from '../Body/About/About';
import Blog from '../Body/Blog/Blog';
import Donate from '../Body/Donate/Donate';

const Header = () => {
	return (
		<header>
			<div id='social'>
				<ul>
					<a
						href='https://www.facebook.com/Myanmar-Youth-for-Democracy-MY4D-100679425493804'
						target='_blank'
						rel='noreferrer'>
						<li>
							<i class='fab fa-facebook'></i>
						</li>
					</a>
					<a
						href='https://www.instagram.com/myanmaryouth4democracy/'
						target='_blank'
						rel='noreferrer'>
						<li>
							<i class='fab fa-instagram'></i>
						</li>
					</a>
					<a href='https://twitter.com' target='_blank' rel='noreferrer'>
						<li>
							<i class='fab fa-twitter-square'></i>
						</li>
					</a>
				</ul>
			</div>
			<ul id='nav-links'>
				<Link to='' element={<Home />}>
					<li>HOME</li>
				</Link>
				<Link to='/donate' element={<Donate />}>
					<li>DONATE</li>
				</Link>
				<Link to='/events' element={<Events />}>
					<li>EVENTS</li>
				</Link>
				<Link to='/blog' element={<Blog />}>
					<li>BLOG</li>
				</Link>
				<Link to='/about' element={<About />}>
					<li>ABOUT</li>
				</Link>
			</ul>
		</header>
	);
};

export default Header;
