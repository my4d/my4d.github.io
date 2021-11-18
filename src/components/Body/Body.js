import './Body.css';
import Home from '../Home/Home';
import News from '../News/News';
import Fundraisers from '../Fundraisers/Fundraisers';
import About from '../About/About';

const Body = () => {
	return (
		<main>
			<Home />
			<News />
			<Fundraisers />
			<About />
		</main>
	);
};

export default Body;
