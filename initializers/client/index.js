/* global __ENV__ */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import 'stylesheets/index.scss';
import 'react-widgets/lib/less/react-widgets.less';

import { createStore, browserHistory } from './store';

import EditorApplication from 'components/EditorApplication';
import LApplicationPreview from 'components/LApplicationPreview';
import MobilePreviewApp from 'components/MobilePreviewApp';
import NoMatch from 'components/NoMatch';

import initialState from 'constants/initialState';

const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/editor/:landing_version_uuid" component={EditorApplication}>
        <Route path="/preview" component={LApplicationPreview}/>
        <Route path="/mobilePreview" component={MobilePreviewApp}/>
        <Route path="/show" component={LApplicationPreview}/>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
