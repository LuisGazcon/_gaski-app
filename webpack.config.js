const path = require('path');
// plugins
const { HotModuleReplacementPlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const FontPreloadPlugin = require('webpack-font-preload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin: ManifestPlugin } = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const dotenv = require('dotenv');

/**
 * If you want to customize a path do it here.
 */
const root = __dirname;
const output = path.join(root, 'build');
const public = path.join(root, 'public');
const source = path.join(root, 'source');
const app = path.join(source, 'app');
const core = path.join(source, 'core');
const resources = path.join(source, 'resources');
const components = path.join(source, 'components');
const global = path.join(source, 'global');
const modules = path.join(source, 'modules');
const services = path.join(source, 'services');
const context = path.join(source, 'context');

/**
 * If you want to modify path aliases be sure to update the imports in the other files.
 */
const pathAliases = {
	'@': source,
	'@app': app,
	'@core': core,
	'@resources': resources,
	'@components': components,
	'@global': global,
	'@services': services,
	'@modules': modules,
	'@context': context,
};

dotenv.config({
	path: path.join(root, '.env'),
});

/**
 * The entry point for webpack
 */
const entry = path.join(source, 'index');

/**
 * The public base url, if the app is mounted in a sub route define it here
 */
const publicUrl = '/';

/**
 * Style loaders config, if you want to modify something
 * about css-loader here is the place, this will be aplied to all style rules.
 */
const styles = {
	regexs: {
		css: /\.css$/,
		cssModules: /\.module\.css$/,
		sass: /\.(sass|scss)$/,
		sassModules: /\.module\.(sass|scss)$/,
	},
	modules: {
		compileType: 'module',
		mode: 'local',
		auto: true,
		exportGlobals: true,
		localIdentName: '[hash:base64:8]',
		localIdentContext: path.resolve(__dirname, 'source'),
		namedExport: false,
		exportLocalsConvention: 'camelCaseOnly',
		exportOnlyLocals: false,
	},
};

const webpackConfig = (webpackEnv) => {
	/**
	 * get enviroment mode.
	 */
	const production = process.env.NODE_ENV === 'production';
	console.log('> productin mode ' + production);

	/**
	 * Should generate source map.
	 */
	const generateSourceMaps = !production;

	/**
	 * Thie function returns the loaders for each css/sass rule.
	 */
	const getStyleLoaders = (options, processor) =>
		[
			/**
			 * if is production mode use external css files else use style tags.
			 */
			production
				? {
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: publicUrl, esModule: false },
				  }
				: require.resolve('style-loader'),
			/**
			 * CSS Loader
			 */
			{
				loader: require.resolve('css-loader'),
				options: options,
			},
			/**
			 * PostCSS Loader
			 */
			{
				loader: require.resolve('postcss-loader'),
				options: {
					sourceMap: generateSourceMaps,
				},
			},
			/**
			 * If has pre-processor
			 */
			processor &&
				({
					loader: require.resolve('resolve-url-loader'),
					options: {
						sourceMap: generateSourceMaps,
						root: source,
					},
				},
				{
					loader: require.resolve(processor),
					options: {
						sourceMap: generateSourceMaps,
					},
				}),
		].filter(Boolean);

	const rules = [
		// js rules
		{
			test: /\.(js|jsx)$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						compact: production,
					},
				},
			],
			exclude: '/node_modules/',
		},
		// css rules
		{
			test: styles.regexs.css,
			exclude: styles.regexs.cssModules,
			use: getStyleLoaders({
				importLoaders: true,
				sourceMap: generateSourceMaps,
			}),
		},
		// css modules rules
		{
			test: styles.regexs.cssModules,
			use: getStyleLoaders({
				modules: styles.modules,
			}),
			sideEffects: true,
		},
		// sass rules
		{
			test: styles.regexs.sass,
			exclude: styles.regexs.sassModules,
			use: getStyleLoaders(
				{
					importLoaders: true,
					sourceMap: generateSourceMaps,
				},
				'sass-loader',
			),
		},
		// sass modules
		{
			test: styles.regexs.sassModules,
			use: getStyleLoaders(
				{
					importLoaders: true,
					sourceMap: generateSourceMaps,
					modules: styles.modules,
				},
				'sass-loader',
			),
		},
		{
			test: /^.*\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: {
								removeViewBox: false,
							},
						},
					},
				},
			],
		},
		/**
		 * Warning:
		 * if you want to add a new loader,
		 * first make sure that you put it before file loader
		 */
		{
			test: /\.(jpg|jpeg|png|gif|raw|mp3|mp4|tif|tiff|woff|woff2|ttf|otf|eot)$/,
			loader: require.resolve('file-loader'),
			options: {
				name: 'static/media/[name].[hash:8].[ext]',
			},
		},
	];
	/**
	 * If you want to add more plugings do it here.
	 */
	const plugins = [
		new EnvironmentPlugin({
			NODE_ENV: 'production',
			PUBLIC_URL: false,
			FIREBASE_API_KEY: false,
			FIREBASE_AUTH_DOMAIN: false,
			FIREBASE_PROJECT_ID: false,
			FIREBASE_STORAGE_BUCKET: false,
			FIREBASE_MESSAGING_SENDER_ID: false,
			FIREBASE_ID: false,
			FIREBASE_TOKEN: false,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: public,
					globOptions: {
						ignore: ['**/index.html'],
					},
				},
			],
		}),
		production && new WorkboxPlugin.GenerateSW(),
		new HtmlPlugin({
			template: path.join(public, 'index.html'),
			filename: 'index.html',
			minify: production,
		}),
		new InterpolateHtmlPlugin(process.env),
		new ManifestPlugin({
			publicPath: publicUrl,
			fileName: 'asset-manifest.json',
		}),
		production &&
			new MiniCssExtractPlugin({
				filename: 'static/css/[name].[contenthash:8].css',
				chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
			}),
		new HotModuleReplacementPlugin(),
		new ErrorOverlayPlugin(),
	].filter(Boolean);

	return {
		devServer: {
			port: 80,
			hotOnly: true,
			historyApiFallback: true,
			host: process.env.HOST,
		},
		entry: entry,
		mode: production ? 'production' : 'development',
		devtool: production ? false : 'cheap-module-source-map',
		plugins: plugins,
		resolve: {
			alias: pathAliases,
			aliasFields: ['browser'],
			extensions: ['.jsx', '.js', '.wasm', '.cjs', '.mjs', '.json'],
			descriptionFiles: ['./package.json'],
		},
		module: {
			rules: rules,
		},
		optimization: {
			minimize: production,
		},
		output: {
			path: output,
			pathinfo: !production,
			filename: production
				? 'static/js/[name].[contenthash:8].js'
				: 'static/js/bundle.js',
			chunkFilename: production
				? 'static/js/[name].[contenthash:8].chunk.js'
				: 'static/js/[name].chunk.js',
			publicPath: publicUrl,
			globalObject: 'this',
		},
	};
};

module.exports = webpackConfig;
