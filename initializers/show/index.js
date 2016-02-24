/* global __ENV__ */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from '../client/store';
import LandingLoader from 'components/LandingLoader';
import ShowApplication from 'components/ShowApplication';
import initialState from 'constants/initialState';

import config from 'constants/config';

import { semverInit } from 'lib/semver';
semverInit();

const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <LandingLoader params={ { landingVersionUuid: config('landingVersionUuid') } }>
      <ShowApplication />
    </LandingLoader>
  </Provider>,
  document.getElementById('content')
);
