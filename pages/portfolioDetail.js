import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
//Importing router to use fetched Data from other Component
import { withRouter } from 'next/router';

class PortfolioDetail extends React.Component {
	render() {
		//Loging the props that includes Router, which includes Query
		console.log(this.props);
		return (
			<BaseLayout>
				<h1 className="title"> This is a PortfolioDetail page(Class Component)</h1>
				<h2>{this.props.router.query.title}</h2>
			</BaseLayout>
		);
	}
}

//Exporting the PortfolioDetail page with Router to get new propreties with props
export default withRouter(PortfolioDetail);
