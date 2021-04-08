module.exports = async () => {
	return {
		verbose: true,
		testEnvironment: 'node',
		moduleNameMapper: {
			'^@(/.*)': '<rootDir>/source/$1',
			'^@app(/.*)': '<rootDir>/source/app/$1',
			'^@components(/.*)': '<rootDir>/source/components/$1',
			'^@modules(/.*)': '<rootDir>/source/modules/$1',
			'^@services(/.*)': '<rootDir>/source/services/$1',
			'^@global(/.*)': '<rootDir>/source/global/$1',
			'^@core(/.*)': '<rootDir>/source/core/$1',
			'^@context(/.*)': '<rootDir>/source/context/$1',
			'^@resources(/.*)': '<rootDir>/source/resources/$1',
			'^.*.module.(sass|scss|css)': 'identity-obj-proxy',
		},
		rootDir: __dirname,
		coveragePathIgnorePatterns: [
			'<rootDir>/node_modules',
			'<rootDir>/build',
			'<rootDir>/public',
		],
	};
};
