export const createSelectors = () => {
	return Object.freeze({
		/**
		 *
		 * @param {any} state
		 * @returns {any}
		 */
		selectAuth: (state) => state.auth,

		/**
		 *
		 * @param {any} state
		 * @returns {any}
		 */
		selectUser: (state) => state.auth.user,

		/**
		 *
		 * @param {any} state
		 * @returns {boolean}
		 */
		selectLoading: (state) => state.auth.loading,

		/**
		 *
		 * @param {any} state
		 * @returns {any}
		 */
		selectError: (state) => state.auth.error,

		/**
		 *
		 * @param {any} state
		 * @returns
		 */
		selectVerification: (state) => state.auth.verification,
	});
};
