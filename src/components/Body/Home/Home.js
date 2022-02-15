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
			<div id='latest'>
				<section className='grid'>
					<div id='event-pic'></div>
					<section id='latest-info'>
						<h2>Latest Events</h2>
						<section id='events'>
							<div className='event'>Event 1</div>
							<div className='event'>Event 2</div>
							<div className='event'>Event 3</div>
							<div className='event'>Event 4</div>
						</section>
					</section>
				</section>
			</div>
			<div id='about-us'>
				<h2>Who We Are</h2>
				<section className='grid'>
					<div></div>
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
