import path from 'path';
import common from './webpack/common';
import concat from 'lodash/concat';
import { loaders } from './webpack/development';

module.exports = {
	title: 'BML Great Style Guide',
	components: './src/components/**/*.js',
	serverPort: 3004,
	updateWebpackConfig: (webpackConfig, env) => {
    webpackConfig.module.postcss = common.postcss;

    webpackConfig.module.loaders = loaders; // concat(loaders, webpackConfig.module.loaders);
    //.push(
			//// Babel loader will use your project’s .babelrc
			//{
				//test: /\.css$/,
				//loaders: ['style', 'css', 'postcss'],
        //include: common.root,
			//},
			//{
				//test: /\.s(a|c)ss$/,
				//loaders: ['style', 'css', 'sass'],
        //include: dir,
			//},
			//{
				//test: /\.less$/,
        //loaders: ['style', 'css', 'less'],
        //include: dir,
			//},
			//{
				//test: /\.jsx?$/,
				//include: dir,
				//loader: 'babel'
			//},
			//// Other loaders that is needed for your components
			////{
			////test: /\.css$/,
			////include: dir,
			////loader: 'style!css?modules&importLoaders=1'
			////}
		//);
		return webpackConfig;
	},
};
