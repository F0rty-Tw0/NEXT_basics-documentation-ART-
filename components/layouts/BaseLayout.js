import React from 'react';
import Header from '../shared/Header';
import '../../styles/main.scss';

const BaseLayout = (props) => {
	return (
		<React.Fragment>
			{/* Displaying Header on Every Page that includes BaseLayout */}
			<Header />
			{/* Childrens of every Component */}
			{props.children}
		</React.Fragment>
	);
};

export default BaseLayout;
