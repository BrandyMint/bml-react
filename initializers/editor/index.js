import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import 'stylesheets/editor.scss';

import { store, history } from './store';

import LandingLoader from 'components/LandingLoader';
import DesktopPreviewApp from 'components/DesktopPreviewApp';
import ShowApp from 'components/ShowApp';
import MobilePreviewApp from 'components/MobilePreviewApp';
import NoMatch from 'components/NoMatch';
import EditorApp from 'components/EditorApp';

import DnDTest from 'components/DndTest';

import 'lib/bugsnag';
import 'lib/semverInit';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/editor/:variantUuid" component={LandingLoader}>
        <IndexRoute component={EditorApp} />
        <Route path="preview" component={DesktopPreviewApp} />
        <Route path="mobilePreview" component={MobilePreviewApp} />
        {/* для preview из mobilePreview */}
        <Route path="show" component={ShowApp} />
      </Route>
      <Route path="dnd" component={DnDTest} />
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
