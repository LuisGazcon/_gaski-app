import i18n from '@/i18n';

const T_PREFIX = 'errors:auth';

export class AuthError extends Error {
	constructor(code = null, message = i18n.t(`${T_PREFIX}.${code}`)) {
		super(message);
		this.code = code;
		this.message = message;
	}

	static fromFirebaseCode(firebaseCode) {
		const code = firebaseCode.split('/').slice(1).toString();
		return new AuthError(code);
	}
}
