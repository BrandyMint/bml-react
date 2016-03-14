/* global __ENV__ */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import createLogger from 'redux-logger';

import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

const reduxRouterMiddleware = syncHistory(browserHistory);

const customCreateStore = (initialState) => {
  const middlewares = [
    reduxRouterMiddleware,
    thunk,
    APIMiddleware,
  ];

  const logger = createLogger();
  if (window) {
    window.logger = logger;
  }
  middlewares.push(logger);

  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f // redux DevTools
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  if (__ENV__ === 'development') {
    if (module.hot) {
      module.hot.accept('reducers', () => (
        store.replaceReducer(require('reducers').default)
      ));
    }
  }

  return store;
};

module.exports = { browserHistory, createStore: customCreateStore };
