import { createStore, applyMiddleware } from 'redux';

import APIMiddleware from 'middleware/API';
import thunk from 'redux-thunk';

import reducers from 'reducers';

let create;

if (__ENV__ === 'development') {
  create = (initialState) => {
    const middlewares = [
      thunk,
      APIMiddleware,
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
