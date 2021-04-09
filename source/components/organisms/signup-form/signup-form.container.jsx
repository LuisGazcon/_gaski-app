import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { useAlert, useError } from '@global/hooks';
import { actions, selectors } from '@context';

import SignupForm from './signup-form.component';
import { initialValues, validationSchema } from './schema';

const { signUp, sendEmailVerification, verifyEmail } = actions.auth;
const { selectUser, selectLoading, selectError, selectVerification } = selectors.auth;

const SignupFormContainer = () => {
	const error = useSelector(selectError);
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const verification = useSelector(selectVerification);

	const formikProps = {
		initialValues,
		validationSchema,
	};

	const handleSendEmailVerification = () => {
		console.log('sending email verificaion');
		dispatch(sendEmailVerification());
	};

	const handleEmailVerification = () => {
		dispatch(verifyEmail());
	};

	const handleSignUp = (values) => {
		console.log('signing up');
		dispatch(
			signUp(values['email'], values['password'], {
				firstName: values['first-name'],
				lastName: values['last-name'],
				username: values['username'],
			}),
		);
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
			handleSignUp,
			handleSendEmailVerification,
			handleEmailVerification,
			loading,
			error,
			verification,
		};

		return <SignupForm {...props} />;
	};

	return <Formik {...formikProps}>{render}</Formik>;
};

export default SignupFormContainer;
