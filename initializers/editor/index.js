/* global __ENV__ */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'stylesheets/editor.scss';

import { store, history } from './store';

import DesktopPreviewApp from 'EditorApp/DesktopPreviewApp';
import MobilePreviewApp from 'EditorApp/MobilePreviewApp';
import LandingLoader from 'components/LandingLoader';
import NoMatch from 'EditorApp/NoMatch';

import ShowApp from 'ShowApp';
import EditorApp from 'EditorApp';

if (__ENV__ === 'development') {
  window.React = React;
  require('lib/perf');
}

// metarial-ui
// This dependency is temporary and will eventually go away.
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import 'lib/bugsnag';
import 'lib/semverInit';

import i18n from 'lib/i18n';

const muiTheme = getMuiTheme();

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
          <Route path="/editor/:variantUuid" component={LandingLoader}>
            <IndexRoute component={EditorApp} />
            <Route path="preview" component={DesktopPreviewApp} />
            <Route path="mobilePreview" component={MobilePreviewApp} />
            {/* для preview из mobilePreview */}
            <Route path="show" component={ShowApp} />
          </Route>
          <Route path="*" component={NoMatch} />
        </Router>
      </MuiThemeProvider>
    </Provider>
  </I18nextProvider>,
  document.getElementById('content')
);
