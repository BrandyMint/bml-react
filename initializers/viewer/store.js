/* global __ENV__ */

import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

const middlewares = [
  thunk,
  APIMiddleware,
];

export default (initialState) =>
  applyMiddleware(...middlewares)(createStore)(combineReducers(reducers), initialState);
