import semver from 'lib/semver';
import assign from 'lodash/assign';

const METADATA = {
  frontApp: {
    version: semver.version,
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

if (document) {
  document.addEventListener('DOMContentLoaded', bugsnagInit);
}
