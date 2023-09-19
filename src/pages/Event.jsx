import React from 'react'
import "../styles/Event.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import e1 from "../assets/img/e1.jpg";
import e2 from "../assets/img/e2.jpg";
import e3 from "../assets/img/e3.png";

function Event() {
	return (
		<div>
			<Navbar />
			<section id="about-home">
				<h2>Social Events/</h2>
			</section>
			<div id='eventsPage'>

				<div className='headline'>
					<h1>What We Are Doing</h1>
					<p>We Arrange Many Social Events For Charity Donations</p>
				</div>

				<div class="events-container">
					<div class="event-card">
						<img src={e1} alt="Event Image" />
						<div class="event-details">
							<h3><a href="#">Creating a brighter tomorrow</a></h3>
							<p><strong>Date:</strong> 25 June, 2023</p>
							<p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
							<p><strong>Location:</strong> Green University of Bangladesh</p>
						</div>
					</div>

					<div class="event-card">
						<img src={e2} alt="Event Image" />
						<div class="event-details">
							<h3><a href="#">Need your Charity</a></h3>
							<p><strong>Date:</strong> 27 June, 2023</p>
							<p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
							<p><strong>Location:</strong> Shewapara Somobay Somiti</p>
						</div>
					</div>

					<div class="event-card">
						<img src={e3} alt="Event Image" />
						<div class="event-details">
							<h3><a href="#">Donation is Hope</a></h3>
							<p><strong>Date:</strong> 30 June, 2023</p>
							<p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
							<p><strong>Location:</strong> Mirpur Stadium, Mirpur 2</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />

		</div>
	)
}

export default Event