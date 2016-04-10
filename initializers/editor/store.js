/* global __ENV__ */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import APIMiddleware from 'middleware/API';

import reducers from 'reducers';
import initialState from 'constants/initialState';


// https://github.com/erikras/react-redux-universal-hot-example/pull/560/files
// https://github.com/taion/scroll-behavior/issues/28#issuecomment-190182066
// https://blog.rudolph-miller.com/2016/01/25/scroll-to-the-top-with-redux-router/
// http://stackoverflow.com/questions/30495062/how-can-i-scroll-a-div-to-be-visible-in-reactjs
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
const finalReducers = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const middlewares = [
  thunk,
  APIMiddleware,
];

const logger = createLogger();
// middlewares.push(logger);

if (window) { window.logger = logger; }

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f // redux DevTools
)(createStore);

export const store = createStoreWithMiddleware(finalReducers, initialState);

if (window) { window.store = store; }

if (__ENV__ === 'development') {
  if (module.hot) {
    module.hot.accept('reducers', () => (
      store.replaceReducer(require('reducers').default)
    ));
  }
}

export const history = syncHistoryWithStore(browserHistory, store);
