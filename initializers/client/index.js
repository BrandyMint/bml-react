import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'stylesheets/style.scss';

import createStore from 'store';

import LApplication from 'components/LApplication';

const initApp = (initialState) => {
  const store = createStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <LApplication />
    </Provider>,
    document.getElementById('content')
  );

  window.addEventListener('beforeunload', (e) => {
    e.returnValue = 'Хотите закрыть конструктор, не сохранив изменения?';
    return '\o/';
  });
};

if (__ENV__ === 'development') {
  initApp();
}

global.initApp = initApp;