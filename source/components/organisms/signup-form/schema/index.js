import * as Yup from 'yup';

import messages from './messages';

const { firstName, lastName, username, email, password, passwordConfirm } = messages;

const FIRST_NAME_REGEX = /^(\s*[a-zA-Zá-úÁ-óä-üÄ-ü-ÜñÑ]+\s*){1,2}$/;
const LAST_NAME_REGEX = /^(\s*[a-zA-Zá-úÁ-óä-üÄ-ü-ÜñÑ]+\s*){1,3}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?/;
const USERNAME_REGEX = /^([a-zA-Z]|\.|[0-9]){6,24}$/;

export const initialValues = {
	'first-name': '',
	'last-name': '',
	'email': '',
	'username': '',
	'password': '',
	'password-confirm': '',
};

export const validationSchema = Yup.object().shape({
	'first-name': Yup.string()
		.max(128, firstName.max)
		.matches(FIRST_NAME_REGEX, firstName.matches)
		.required(firstName.required),
	'last-name': Yup.string()
		.max(128, lastName.max)
		.matches(LAST_NAME_REGEX, lastName.matches)
		.required(lastName.required),
	'email': Yup.string()
		.min(4, email.min)
		.max(32, email.max)
		.matches(EMAIL_REGEX, email.matches)
		.required(email.required),
	'username': Yup.string()
		.min(6, username.min)
		.max(16, username.max)
		.matches(USERNAME_REGEX, username.matches)
		.required(username.required),
	'password': Yup.string()
		.min(6, password.min)
		.max(128, password.max)
		.required(password.required),
	'password-confirm': Yup.string()
		.oneOf([Yup.ref('password')], passwordConfirm.matches)
		.required(passwordConfirm.required),
});
