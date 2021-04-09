import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@components/atoms/button';

const AnchorButton = ({ children, href, ...props }) => {
	const history = useHistory();

	const handleClick = () => {
		history.push(href);
	};

	return (
		<Button onClick={handleClick} {...props}>
			{children}
		</Button>
	);
};

export default AnchorButton;
