import express from 'express';
import morgan from 'morgan';

import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import webpackConfig from '/webpack/development';

import config from '/initializers/config';
import render from './render';

const application = express();
const compiler = webpack(webpackConfig);

application.set('views', __dirname);
application.set('view engine', 'ejs');
application.use(morgan('combined'));
application.use('/assets', express.static(config.STATIC_ASSETS_PATH));
application.use('/dist', express.static('dist'));
application.use('/dist-editor', express.static('dist-editor'));
application.use('/dist-viewer', express.static('dist-viewer'));
application.use(webpackDev(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));
application.use(webpackHot(compiler));

application.get('*', render);
application.listen(process.env.PORT || config.PORT);
