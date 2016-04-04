/* global __VERSION__ */
/* global __CLIENT__ */

import assign from 'lodash/assign';

const METADATA = {
  BMLApp: {
    version: __VERSION__,
  },
};

const bugsnagInit = () => {
  if (window.Bugsnag) {
    window.Bugsnag.metaData = assign(
      window.Bugsnag.metaData || {},
      METADATA,
    );
  } else {
    /* eslint-disable no-console */
    console.log('No Bugsnag in window');
  }
};

if (__CLIENT__) {
  document.addEventListener('DOMContentLoaded', bugsnagInit);
}
