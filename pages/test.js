import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
//Importing router to use fetched Data from other Component
import { withRouter } from 'next/router';
//Duplicating the axios use from the Index, its better to have it somewhere centralized where we can use it
import axios from 'axios';

class Test extends React.Component {
	//getInitialProps a static async function(that can be called without initiazation) to render the content on server and client side
	//Adding context object so we can get our query
	static async getInitialProps({ query }) {
		const testId = query.id;
		return { testId };
	}

	render() {
		const { testId } = this.props;
		return (
			<BaseLayout>
				<h1 className="title">I am Test Page of {testId}</h1>
			</BaseLayout>
		);
	}
}

//Exporting the PortfolioDetail page with Router to get new propreties with props
export default withRouter(Test);
