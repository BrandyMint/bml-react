import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

const customCreateStore = (initialState) => {
  const middlewares = [
    thunk,
    APIMiddleware,
  ];

  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
  )(createStore);

  const store = createStoreWithMiddleware(reducers, initialState);

  return store;
};

module.exports = customCreateStore;
