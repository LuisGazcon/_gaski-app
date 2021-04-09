import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Route from '@components/utils/route';
import Index from '@components/pages/auth';
import Login from '@components/pages/login';
import Signup from '@components/pages/signup';

const Auth = () => {
	return (
		<Fragment>
			<Route.Relative path='/' component={Index} exact />
			<Route.Relative 	path='/login' component={Login} />
			<Route.Relative path='/signup' component={Signup} />
			<Route.Relative path='*' children={<Redirect to='/auth' />} />
		</Fragment>
	);
};

export default Auth;
