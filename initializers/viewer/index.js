/* global __CLIENT__ */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'stylesheets/viewer.scss';

import createStore from './store';
import LandingLoader from 'components/LandingLoader';
import ShowApp from 'ShowApp';
import initialState from 'constants/initialState';

import backgroundResolver from 'helpers/backgroundResolver';

import config from 'constants/config';

import 'lib/bugsnag';
import 'lib/semverInit';
// import 'lib/i18n';

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

const Viewer = (variant) => {
  const newState = {
    application: {
      variantUuid: variant.uuid,
    },
    site: { ...variant },
    blocks: backgroundResolver(variant.sections),
  };

  delete newState.site.sections;

  const store = createStore(newState);

  return (
    <Provider store={store}>
      <ShowApp />
    </Provider>
  );
};

global.Viewer = Viewer;
