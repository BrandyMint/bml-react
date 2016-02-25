/* global __ENV__ */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Выделить только стили без редактирования
import 'styles';

import { createStore } from '../client/store';
import LandingLoader from 'components/LandingLoader';
import ShowApplication from 'components/ShowApplication';
import initialState from 'constants/initialState';

import config from 'constants/config';

import { semverInit } from 'lib/semver';
semverInit();

global.React = React;
global.ReactDOM = ReactDOM;

global.ShowDemo = () => {
  const store = createStore(initialState);

  return (
    <Provider store={store}>
      <LandingLoader params={ { landingVersionUuid: config('landingVersionUuid') } }>
        <ShowApplication />
      </LandingLoader>
    </Provider>
  );
};


global.ShowWrapper = (props) => {
  const store = createStore(props);

  return (
    <Provider store={store}>
      <ShowApplication />
    </Provider>
  );
};
