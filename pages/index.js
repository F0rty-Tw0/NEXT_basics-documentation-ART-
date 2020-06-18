import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';
// import Header from '../components/shared/Header';

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

// class Index extends React.Component {
//Calls everything what is included in SuperComponent
class Index extends SuperComponent {
	//getInitialProps a static async function(that can be called without initiazation) to render the content on server and client side
	static async getInitialProps() {
		//Defining the userData as initial value with let so it can be modified later
		let userData = {};
		//Getting data from an URL using axios then displaying it in a console, and catching an error if there is one and displaying it in console too.
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			userData = response.data;
			console.log('Showing awaited Data from axios');
			console.log(userData);
		} catch (error) {
			console.log(error);
		}

		console.log('getInitialProps');
		//Should always return an object
		//In ES6 if your Key is the same as your value f.e. userData: userData then we use shorter expression - userData
		return { initailData: [ 1, 2, 3, 4, 5 ], userData };
	}

	//Lifecycle function Constructor
	//Passing props to every constructor
	constructor(props) {
		//In Constructor you have to call always Super()
		super(props);

		//Asigning a state of a title
		this.state = {
			title: 'I am Index Page'
		};

		//Binding this context to this.updateTitle
		this.updateTitle = this.updateTitle.bind(this);

		console.log('constructor');
	}

	//Lifecycle function ComponentDidMount
	componentDidMount() {
		console.log('componentDidMount');
	}

	//Lifecycle function ComponentDidUpdate
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	//Lifecycle function ComponentWillUnmount
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	//Update Title function to Update the state
	// updateTitle() {
	// 	this.setState({ title: 'I am Updated Index Page' });
	// }
	//Update Title arrow function to Update the state
	updateTitle = () => {
		this.setState({ title: 'I am Updated Index Page' });
	};

	//Lifecycle function Render
	render() {
		console.log('render');
		//Destructurizing a title from this state object which equals to - const title = this.state.title;
		const { title } = this.state;
		//Getting data from getInitialProps original way
		// const initailData = this.props.initailData;
		//Getting data from getInitialProps destructorizing both of the Keys
		const { userData, initialData } = this.props;
		return (
			//React.Fragment is used instead of <div /> to hide it from source
			<React.Fragment>
				<BaseLayout>
					{/* //Shared Header Component with defined props(title)*/}
					{/*<Header title={'I am a Header Component'}>*/}
					{/* //Child props deffinition here */}
					{/*<h1 className="title">I am Header Subtitle</h1>*/}
					{/*</Header>*/}
					<h1 className="title">This is an Index page(Class Component)</h1>
					{/* Showing the title from the defined state */}
					<h2 className="title">{title}</h2>
					{/* Showing the userData title from getInitialProps */}
					<h3>{userData.title}</h3>
					{/* Calling updateTitle Function to change the state defined in it, this function will rerender the page with new values */}
					{/* <button onClick={() => this.updateTitle()}>Change Title</button> */}
					<button onClick={this.updateTitle}>Change Title</button>
				</BaseLayout>
			</React.Fragment>
		);
	}
}
export default Index;
