import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { I18nextProvider } from 'react-i18next';

import 'stylesheets/editor.scss';

import { store, history } from './store';

import LandingLoader from 'components/LandingLoader';
import DesktopPreviewApp from 'components/DesktopPreviewApp';
import ShowApp from 'components/ShowApp';
import MobilePreviewApp from 'components/MobilePreviewApp';
import NoMatch from 'components/NoMatch';
import EditorApp from 'components/EditorApp';

import 'lib/perf';

// metarial-ui
// This dependency is temporary and will eventually go away.
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



import 'lib/bugsnag';
import 'lib/semverInit';

import i18n from 'lib/i18n';

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Provider store={store}>
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
    </Provider>
  </I18nextProvider>,
  document.getElementById('content')
);
