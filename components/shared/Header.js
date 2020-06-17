import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
	render() {
		//Using props(data) from Parent Component in our example its title
		const title = this.props.title;
		return (
			<React.Fragment>
				{/* Title defined in props */}
				<p>{title}</p>
				{/* Children defined in props, in our case its an <h1>*/}
				{this.props.children}
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
export default Header;
