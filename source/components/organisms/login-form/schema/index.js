import * as Yup from 'yup';

import messages from './messages';

const { email, password } = messages;

export const initialValues = {
	email: '',
	password: '',
};

export const validationSchema = Yup.object().shape({
	email: Yup.string().required(email.required),
	password: Yup.string().required(password.required),
});
