/* global __ENV__ */

import { createStore, applyMiddleware } from 'redux';

import APIMiddleware from 'middleware/API';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from 'reducers';

let create;

if (__ENV__ === 'development') {
  const logger = createLogger();

  create = (initialState) => {
    const middlewares = [
      thunk,
      APIMiddleware,
      // logger,
    ];

    const store = applyMiddleware(...middlewares)(createStore)(reducers, initialState);

    if (module.hot) {
      module.hot.accept('reducers', () => (
        store.replaceReducer(require('reducers').default)
      ));
    }

    return store;
  };
} else {
  create = (initialState) => {
    const middlewares = [
      thunk,
      APIMiddleware,
    ];

    return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
  };
}

export default create;
