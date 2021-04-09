import i18n from '@/i18n';

const messages = {
	email: {
		required: i18n.t('auth:login.form.errors.email.required'),
	},
	password: {
		required: i18n.t('auth:login.form.errors.password.required'),
	},
};

export default messages;
