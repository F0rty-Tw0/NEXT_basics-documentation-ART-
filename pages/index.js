import React from 'react';
import Link from 'next/link';

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
				{/* Simple Navigation with Link */}
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/portfolios">
					<a>Portfolio</a>
				</Link>
				<Link href="/blogs">
					<a>Blog</a>
				</Link>
				<Link href="/cv">
					<a>CV</a>
				</Link>
				<Link href="/foo">
					<a>Foo</a>
				</Link>
			</React.Fragment>
		);
	}
}
export default Index;
