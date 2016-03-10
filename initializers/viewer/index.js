/* global __CLIENT__ */

import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'stylesheets/viewer.scss';

import createStore from './store';
import LandingLoader from 'components/LandingLoader';
import ShowApp from 'components/ShowApp';
import initialState from 'constants/initialState';

import config from 'constants/config';

import { semverInit } from 'lib/semver';
semverInit();


// CLIENT устанавливается когда комплиируем Demo-вариантт для dist-а
// false когда компилируем вариант для prerender-а
if (__CLIENT__) {
  window.React = React;
  window.ReactDOM = ReactDOM;
}

global.ShowDemo = () => {
  const store = createStore(initialState);

  return (
    <Provider store={store}>
      <LandingLoader params={ { variantUuid: config('variantUuid') } }>
        <ShowApp />
      </LandingLoader>
    </Provider>
  );
};

class Viewer extends Component {
  render() {
    const store = createStore(this.props);

    return (
      <Provider store={store}>
        <ShowApp />
      </Provider>
    );
  }
}

global.Viewer = Viewer;
