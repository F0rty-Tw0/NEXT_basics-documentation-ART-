import React from 'react';
import Header from '../components/shared/Header';

class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* Shared Header Component */}
				<Header />
				<h1 className="title"> This is an About page</h1>
			</React.Fragment>
		);
	}
}
export default About;
