import 'stylesheets/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import LPage from 'components/LPage';

if (__ENV__ === 'development') {
  ReactDOM.render(
    <LPage />,
    document.getElementById('content')
  );
} else {
  global.React = React;
  global.ReactDOM = ReactDOM;
  global.LPage = LPage;
}