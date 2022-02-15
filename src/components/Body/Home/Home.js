import './Home.css';

const Home = () => {
	return (
		<div id='home'>
			<div id='hero'>
				<div className='grid'>
					<section id='logo-section'></section>
					<section id='info-section'>
						<h1>Myanmar Youth For Democracy</h1>
						<h4>Fight for the brighter future!</h4>
						<a
							href='https://linktr.ee/myanmaryouth4democracy'
							target='_blank'
							rel='noreferrer'>
							Take Action!
						</a>
					</section>
				</div>
			</div>
			<div id='latest' className='grid'>
				<div id='event-pic'></div>
				<section className='info'>
					<h2>Latest Events</h2>
					<h4>Latest events in LA devoted to the cause!</h4>
					<ul id='events'>
						<li className='event'>Event 1</li>
						<li className='event'>Event 2</li>
						<li className='event'>Event 3</li>
						<li className='event'>Event 4</li>
					</ul>
				</section>
			</div>
			<div id='about-us' className='grid'>
				<div></div>
				<section className='info'>
					<h2>Who We Are</h2>
					<h4>
						Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit, sed quia non numquam eius modi tempora
						incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
						enim ad minima veniam, quis nostrum exercitationem ullam corporis
						suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
						autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
						nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
						voluptas nulla pariatur?
					</h4>
				</section>
			</div>
		</div>
	);
};

export default Home;
