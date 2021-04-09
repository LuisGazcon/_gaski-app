import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { actions, selectors } from '@context';

import { initialValues, validationSchema } from './schema';
import LoginForm from './login-form.component';

const { logIn } = actions.auth;
const { selectLoading, selectError } = selectors.auth;

const LoginFormContainer = () => {
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();

	const formikProps = {
		initialValues,
		validationSchema,
	};

	const handleSubmit = async (values) => {
		dispatch(logIn(values.email, values.password));
	};

	const render = (formikProps) => {
		const { handleChange } = formikProps;

		const handleChangeAndTouch = (event) => {
			formikProps.setFieldTouched(event.target.name);
			handleChange(event);
		};

		formikProps.handleChange = handleChangeAndTouch;

		const props = {
			...formikProps,
			error,
			loading,
		};

		return <LoginForm {...props} />;
	};

	return (
		<Formik {...formikProps} onSubmit={handleSubmit}>
			{render}
		</Formik>
	);
};

export default LoginFormContainer;
