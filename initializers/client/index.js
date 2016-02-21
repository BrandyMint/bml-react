/* global __ENV__ */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import 'stylesheets/index.scss';
import 'react-widgets/lib/less/react-widgets.less';

import { createStore, browserHistory } from './store';

import EditorApplication from 'components/EditorApplication';
import LApplicationPreview from 'components/LApplicationPreview';
import ShowApplication from 'components/ShowApplication';
import MobilePreviewApp from 'components/MobilePreviewApp';
import NoMatch from 'components/NoMatch';
import LApplicationEditor from 'components/LApplicationEditor';

import initialState from 'constants/initialState';

import semver from 'lib/semver';

/* eslint-disable no-console */
console.log(`Start application ${semver}`);
/* eslint-enable */

const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/editor/:landingVersionUuid" component={EditorApplication}>
        <IndexRoute component={LApplicationEditor}/>
        <Route path="preview" component={LApplicationPreview}/>
        <Route path="mobilePreview" component={MobilePreviewApp}/>
        {/* для preview из mobilePreview */}
        <Route path="show" component={ShowApplication}/>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
