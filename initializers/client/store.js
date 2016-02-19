/* global __ENV__ */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import createLogger from 'redux-logger';
import { routeReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
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

  if (__ENV__ === 'development' && false) {
    middlewares.push(createLogger());
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

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