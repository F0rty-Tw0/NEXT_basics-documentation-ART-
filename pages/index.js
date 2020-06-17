import React from 'react';
import Link from 'next/link';
import Header from '../components/shared/Header';

//==================================================
//Functional Component
//==================================================
//Dumb Components
//Get Data
//Return Data
//==================================================
// const Index = function() {
// 	return <h1> This is an Index page</h1>;
// };
//--------------------------------------------------
// const Index = () => {
// 	return <h1> This is an Index page</h1>;
// };
//--------------------------------------------------

//==================================================
//Class Component
//==================================================
//More Functionality
//More Stuff
//User Lifecycle Functions
//==================================================
//Pure React
//==================================================
// class Index extends React.Component {
// 	render() {
//
// 		React.createElement(
// 			'h1',
// 			{
// 				className: 'title'
// 			},
// 			' This is an Index page'
// 		);
// 	}
// }
//--------------------------------------------------

class Index extends React.Component {
	render() {
		return (
			//React.Fragment is used instead of <div></div> to hide it from source
			<React.Fragment>
				{/* Shared Header Component */}
				<Header />
				<h1 className="title"> This is an Index page(Class Component)</h1>
			</React.Fragment>
		);
	}
}
export default Index;
