import i18n from '@/i18n';

const messages = {
	firstName: {
		required: i18n.t('auth:signup.form.errors.first-name.required'),
		min: i18n.t('auth:signup.form.errors.first-name.min'),
		max: i18n.t('auth:signup.form.errors.first-name.max'),
		matches: i18n.t('auth:signup.form.errors.first-name.matches'),
	},
	lastName: {
		required: i18n.t('auth:signup.form.errors.last-name.required'),
		min: i18n.t('auth:signup.form.errors.last-name.min'),
		max: i18n.t('auth:signup.form.errors.last-name.max'),
		matches: i18n.t('auth:signup.form.errors.last-name.matches'),
	},
	username: {
		required: i18n.t('auth:signup.form.errors.username.required'),
		min: i18n.t('auth:signup.form.errors.username.min'),
		max: i18n.t('auth:signup.form.errors.username.max'),
		matches: i18n.t('auth:signup.form.errors.username.matches'),
	},
	email: {
		required: i18n.t('auth:signup.form.errors.email.required'),
		min: i18n.t('auth:signup.form.errors.email.min'),
		max: i18n.t('auth:signup.form.errors.email.max'),
		matches: i18n.t('auth:signup.form.errors.email.matches'),
	},
	password: {
		required: i18n.t('auth:signup.form.errors.password.required'),
		min: i18n.t('auth:signup.form.errors.password.min'),
		max: i18n.t('auth:signup.form.errors.password.max'),
	},
	passwordConfirm: {
		required: i18n.t('auth:signup.form.errors.password-confirm.required'),
		matches: i18n.t('auth:signup.form.errors.password-confirm.matches'),
	},
};

export default messages;
