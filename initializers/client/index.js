/* global __ENV__ */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import 'stylesheets/index.scss';
import 'react-widgets/lib/less/react-widgets.less';
import Blocks from 'constants/defaultBlocks';

import { createStore, browserHistory } from './store';

import LApplicationEditor from 'components/LApplicationEditor';
import LApplicationPreview from 'components/LApplicationPreview';
import MobilePreviewApp from 'components/MobilePreviewApp';
import NoMatch from 'components/NoMatch';

const initApp = (initialState) => {
  const store = createStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LApplicationEditor}/>
        <Route path="/preview" component={LApplicationPreview}/>
        <Route path="/mobilePreview" component={MobilePreviewApp}/>
        <Route path="/show" component={LApplicationPreview}/>
        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>,
    document.getElementById('content')
  );
};

if (__ENV__ === 'development') {
  initApp({
    addBlockForm: {
      selectedIndex: null,
      position: null,
    },
    application: {
      exitUrl: '/_a/landings/1/analytics',
      isSaving: false,
      landing_version_uuid: '10ba27fa-0628-44fd-af24-8430eea47ca7',
      api_key: '5d8aa2f240c5d05e992e0e84f58ce965',
      hasUnsavedChanges: false,
      controlActivityTimeoutId: null,
    },
    blocks: Blocks,
    modal: {
      current: null,
    },
  });
}

global.initApp = initApp;
