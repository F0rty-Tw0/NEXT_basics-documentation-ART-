import React from 'react';

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
				<h1 className="title"> This is an Index page(Class Component)</h1>;
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/portfolios">Portfolio</a>
				<a href="/blogs">Blog</a>
				<a href="/cv">CV</a>
				<a href="/foo">Foo</a>
			</React.Fragment>
		);
	}
}
export default Index;
