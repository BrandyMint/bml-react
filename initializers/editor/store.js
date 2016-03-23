/* global __ENV__ */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import APIMiddleware from 'middleware/API';

import reducers from 'reducers';
import initialState from 'constants/initialState';

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

if (__ENV__ === 'development') {
  if (module.hot) {
    module.hot.accept('reducers', () => (
      store.replaceReducer(require('reducers').default)
    ));
  }
}

export const history = syncHistoryWithStore(browserHistory, store);
