import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';

import { selectors } from '@context';

const { selectUser } = selectors.auth;

/**
 * # Private Route
 * Only authenticated users can access to its content.
 * A fallback prop can be provided to non-authenticated users.
 * @param {any} props
 * @returns {React.ReactElement} private route component
 */
Route.Private = ({ fallback, ...props }) => {
	const user = useSelector(selectUser);
	return user ? <Route {...props} /> : fallback;
};

Route.Private.defaultProps = {
	fallback: <Fragment />,
};

/**
 * # Public Route
 * It can be accessed by all users unless the anonymous prop is
 * provided as true. When anonymous is truthy only anonymous users
 * can access to the route
 * A fallback prop can be provided to non-anonymous users.
 * @param {any} props
 * @returns {React.ReactElement} public route component
 */
Route.Public = ({ fallback, anonymous, ...props }) => {
	const user = useSelector(selectUser);
	return user && anonymous ? fallback : <Route {...props} />;
};

Route.Public.defaultProps = {
	fallback: <Fragment />,
	anonymous: false,
};

/**
 * # Relative Route
 * This component is used to nest routes, it access to the Router Context.
 * @param {*} param0
 * @returns
 */
Route.Relative = ({ path, ...props }) => {
	const match = useRouteMatch();
	return <Route path={match.path + path} {...props} />;
};

Route.Relative.defaultProps = {
	path: '',
};

export default Route;
