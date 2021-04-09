import { auth, firestore } from '@/firebase';
import { DatabaseError, AuthError } from '@/global/errors';
import { filterProps } from '@global/utils/object';
import * as string from '@global/utils/string';

const USER_PROPS = ['emailVerified', 'uid', 'displayName', 'email'];

const AuthService = () => {
	const logIn = async (email, password) => {
		try {
			const { user } = await auth.signInWithEmailAndPassword(email, password);
			return filterProps(user, USER_PROPS);
		} catch (error) {
			console.log(error);
			throw AuthError.fromFirebaseCode(error.code);
		}
	};

	const logOut = async () => {
		try {
			await auth.signOut();
		} catch (error) {
			throw AuthError.fromFirebaseCode(error.code);
		}
	};

	const signUp = async (email, password, data) => {
		try {
			var { user } = await auth.createUserWithEmailAndPassword(email, password);
		} catch (error) {
			throw AuthError.fromFirebaseCode(error.code);
		}
		try {
			await storeUserData(user.uid, { ...data, email });
		} catch (error) {
			throw DatabaseError.fromFirebaseCode(error.code);
		}
		return filterProps(user, USER_PROPS);
	};

	const sendEmailVerification = async () => {
		try {
			await auth.currentUser.sendEmailVerification();
		} catch (error) {
			throw AuthError.fromFirebaseCode(error.code);
		}
	};

	const verifyEmail = async () => {
		try {
			await auth.currentUser.reload();
		} catch (error) {
			throw new AuthError.fromFirebaseCode(error.code);
		}

		if (auth.currentUser.emailVerified) {
			return filterProps(auth.currentUser, USER_PROPS);
		} else {
			throw AuthError.fromFirebaseCode('email-not-verified');
		}
	};

	const storeUserData = async (uid, { firstName, lastName, email, username }) => {
		console.log(firstName, lastName, email, username);
		firestore
			.collection('users')
			.doc(uid)
			.set({
				private: {
					firstName: string.capitalizeWords(firstName),
					lastName: string.capitalizeWords(lastName),
					keywords: getKeywords(firstName, lastName, username),
					createdAt: Date.now(),
					updatedAt: 0,
				},
				username: username.trim().toLowerCase(),
				email: email.trim().toLowerCase(),
			});
	};

	const getKeywords = (firstName, lastName, username) => [
		...string.getText(string.normalize(firstName)),
		...string.getText(string.normalize(lastName)),
		username.trim().toLowerCase(),
	];

	const checkEmail = async (email, onSuccess) => {
		const query = firestore.collection('users').where('email', '==', email.toLowerCase());
		try {
			var querySnapshot = await query.get();
		} catch (error) {
			throw DatabaseError.fromFirebaseCode(error.code);
		}
		if (querySnapshot.docs.length) {
			throw new AuthError('email-already-in-use');
		} else {
			onSuccess();
		}
	};

	const checkUsername = async (username, onSuccess) => {
		const query = firestore
			.collection('users')
			.where('username', '==', username.toLowerCase());
		try {
			var querySnapshot = await query.get();
		} catch (error) {
			throw DatabaseError.fromFirebaseCode(error.code);
		}
		if (querySnapshot.docs.length) {
			throw new AuthError('username-already-in-use');
		} else {
			onSuccess();
		}
	};

	return Object.freeze({
		logIn,
		logOut,
		signUp,
		checkEmail,
		checkUsername,
		sendEmailVerification,
		verifyEmail,
	});
};

export default AuthService;
