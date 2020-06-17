import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* Base Layout - Shared component which has Header */}
				<BaseLayout>					
					<h1 className="title"> This is an About page</h1>
				</BaseLayout>
			</React.Fragment>
		);
	}
}
export default About;
